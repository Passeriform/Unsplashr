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
} from "@chakra-ui/react";
import { useState, useEffect, useContext } from "react";
import { Basic } from "unsplash-js/dist/methods/photos/types";
import Lottie, { Options } from "react-lottie";

import { Describe } from "@components/describe/Describe";
import { ImageCard } from "@components/image-card/ImageCard";
import { ImageDetails } from "@components/image-details/ImageDetails";
import { SearchContext } from "@components/search/SearchContextProvider";
import { fetchFeed, fetchSearchFeed } from "@services/feedService";
import animationData from "@assets/lotties/loading.json";

const loaderOptions: Options = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export const Board = () => {
  const { searchTerm } = useContext(SearchContext);
  const [isLoading, setIsLoading] = useState(false);
  const [feed, setFeed] = useState([] as Basic[]);
  const [active, setActive] = useState({} as Basic);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const hydrateFeed = async () => {
    const { results } = await fetchFeed();
    setFeed(results);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    hydrateFeed();
  }, []);

  useEffect(() => {
    const handleSearch = async () => {
      const { results } = await fetchSearchFeed(searchTerm);
      setFeed(results);
      setIsLoading(false);
    };

    if (searchTerm) {
      const typingDebounce = setTimeout(() => {
        setIsLoading(true);
        handleSearch();
      }, 20);

      return () => clearTimeout(typingDebounce);
    }

    hydrateFeed();
  }, [searchTerm]);

  const processExplore = (feedItem: Basic) => {
    setActive(feedItem);
    onOpen();
  };

  return isLoading ? (
    <Flex align="center" justify="space-around" direction="column">
      <Lottie options={loaderOptions} height={400} width={400} />
      <Text color="#A7A7A7" fontSize={24} fontWeight={700}>
        Loading some awesome images...
      </Text>
    </Flex>
  ) : (
    <>
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
          <ModalCloseButton w={10} h={10} borderRadius={20} />
          <ModalBody p={0}>
            <Describe model={active} />
          </ModalBody>
        </ModalContent>
      </Modal>
      {feed.length ? (
        <Box
          padding={8}
          w="100%"
          maxW="100vw"
          mx="auto"
          sx={{ columnCount: [1, 2, 3], columnGap: "4" }}
        >
          {feed.map((feedItem: Basic) => (
            <ImageCard
              key={feedItem.id}
              cardProps={{
                mb: "4",
              }}
              imageSource={feedItem.urls.small}
              imageAlt={feedItem.description}
              onClick={() => processExplore(feedItem)}
            >
              <ImageDetails
                name={feedItem.user.name}
                handle={feedItem.user.username}
                avatarSource={feedItem.user.profile_image.medium}
                likes={feedItem.likes}
              ></ImageDetails>
            </ImageCard>
          ))}
        </Box>
      ) : (
        <Flex align="center" justify="center" direction="column">
          <Text color="#A7A7A7" fontSize={24} fontWeight={700} m={12}>
            No results were found for the search...
          </Text>
        </Flex>
      )}
    </>
  );
};
