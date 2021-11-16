import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react"
import {
  useState,
  useEffect,
  useContext,
} from "react";
import { Basic } from 'unsplash-js/dist/methods/photos/types';
import Lottie from 'react-lottie';
import animationData from '../../assets/lotties/loading.json';

import { Explore } from "../../components/explore/Explore"
import { ImageCard } from "../../components/image-card/ImageCard"
import { ImageDetails } from "../../components/image-details/ImageDetails"
import { SearchContext } from "../../components/search/SearchContextProvider";
import { fetchFeed, fetchSearchFeed } from "../../services/feedService";

const loaderOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
}

export const Board = () => {
  const { searchTerm } = useContext(SearchContext)
  const [ feed, setFeed ] = useState([] as Basic[]);
  const [ active, setActive ] = useState({} as Basic);
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    const hydrateFeed = async () => {
      const { results } = await fetchFeed();
      setFeed(results)
    }
    hydrateFeed();
  }, [])

  useEffect(() => {
    const handleSearch = async () => {
      const { results } = await fetchSearchFeed(searchTerm);
      setFeed(results)
    }

    if(searchTerm) {
      const typingDebounce = setTimeout(() => {
        handleSearch()
      }, 20)

      return () => clearTimeout(typingDebounce)
    }

    setFeed(feed)
  }, [searchTerm, feed])

  const processExplore = (feedItem: Basic) => {
    setActive(feedItem)
    onOpen()
  }

  return feed.length ? <>
    <Modal
      closeOnOverlayClick={true}
      closeOnEsc={true}
      size="full"
      motionPreset="slideInBottom"
      scrollBehavior="inside"
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton
          w={10}
          h={10}
          borderRadius={20}
        />
        <ModalBody p={0}>
          <Explore model={active} />
        </ModalBody>
      </ModalContent>
    </Modal>
    <Box
      padding={8}
      w="100%"
      maxW="100vw"
      mx="auto"
      sx={{ columnCount: [1, 2, 3], columnGap: "4" }}
    >
      {
        feed.length ?
          feed.map((feedItem: Basic) => (
            <ImageCard
              cardProps={{
                mb: "4"
              }}
              imageSource={feedItem.urls.small}
              imageAlt={feedItem.description}
              onClick={() => processExplore(feedItem)}
              content={
                <ImageDetails
                  name={feedItem.user.name}
                  handle={feedItem.user.username}
                  avatarSource={feedItem.user.profile_image.medium}
                  likes={feedItem.likes}
                >
                </ImageDetails>
              }
            >
            </ImageCard>
          )) : <Text>No Results!</Text>
      }
    </Box>
  </> : <Flex
    align="center"
    justify="space-around"
    direction="column"
  >
    <Lottie
	    options={loaderOptions}
      height={400}
      width={400}
    />
    <Text
      color="#A7A7A7"
      fontSize={24}
      fontWeight={700}
    >Loading some awesome images...</Text>
  </Flex>
}
