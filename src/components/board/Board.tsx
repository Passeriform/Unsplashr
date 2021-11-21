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
  useMultiStyleConfig,
} from "@chakra-ui/react";
import { useState, useEffect, useContext } from "react";
import { Basic } from "unsplash-js/dist/methods/photos/types";

import { SEARCH_DEBOUNCE_TIME } from "@config/global";
import { Loader } from "@components/loader/Loader";
import { Describe } from "@components/describe/Describe";
import { ImageCard } from "@components/image-card/ImageCard";
import { ImageDetails } from "@components/image-details/ImageDetails";
import { SearchContext } from "@components/search/SearchContextProvider";
import { fetchFeed, fetchSearchFeed } from "@services/feedService";

const BOARD_ITEM_GAP = 4;

export const Board = () => {
  const { searchTerm } = useContext(SearchContext);
  const [isLoading, setIsLoading] = useState(false);
  const [feed, setFeed] = useState([] as Basic[]);
  const [active, setActive] = useState({} as Basic);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const styles = useMultiStyleConfig("Board", {});

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
      }, SEARCH_DEBOUNCE_TIME);

      return () => clearTimeout(typingDebounce);
    }

    hydrateFeed();
  }, [searchTerm]);

  const openDescribeModal = (feedItem: Basic) => {
    setActive(feedItem);
    onOpen();
  };

  return isLoading ? (
    <Loader text={"Loading some awesome images..."} size={"md"} />
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
          <ModalCloseButton />
          <ModalBody>
            <Describe model={active} />
          </ModalBody>
        </ModalContent>
      </Modal>
      {feed.length ? (
        <Box
          sx={{
            ...styles.container,
            ...{ columnCount: [1, 2, 3], columnGap: BOARD_ITEM_GAP.toString() },
          }}
        >
          {feed.map((feedItem: Basic) => (
            <ImageCard
              key={feedItem.id}
              cardProps={{
                mb: BOARD_ITEM_GAP,
              }}
              imageSource={feedItem.urls.small}
              imageAlt={feedItem.description}
              onClick={() => openDescribeModal(feedItem)}
            >
              <ImageDetails
                size="md"
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
          <Text variant="loaderInfo">
            No results were found for the search...
          </Text>
        </Flex>
      )}
    </>
  );
};
