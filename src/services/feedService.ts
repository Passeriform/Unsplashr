import { Basic } from "unsplash-js/dist/methods/photos/types";

import {
  FEED_DEFAULT_PAGE,
  FEED_PER_PAGE_ITEMS,
  FEED_SORT_BY,
  SEARCH_DEFAULT_PAGE,
  SEARCH_PER_PAGE_ITEMS,
} from "@config/api";
import { logger } from "@utility/logging";

import { Api } from "./api";

export type PaginatedFeed = { total: number; results: Basic[] };

const DEFAULT_PAGINATED_RESPONSE: PaginatedFeed = {
  total: 0,
  results: [],
};

const handleErrorsAndForward = (apiResponse: any) => {
  const { errors, response } = apiResponse;

  if (errors) {
    logger.error(errors);
    return DEFAULT_PAGINATED_RESPONSE;
  }

  if (!response) {
    return DEFAULT_PAGINATED_RESPONSE;
  }

  return response;
};

export const fetchFeed = async () => {
  const apiResponse = await Api.photos.list({
    page: FEED_DEFAULT_PAGE,
    perPage: FEED_PER_PAGE_ITEMS,
    orderBy: FEED_SORT_BY,
  });

  return handleErrorsAndForward(apiResponse);
};

export const fetchSearchFeed = async (searchTerm: string) => {
  const apiResponse = await Api.search.getPhotos({
    query: searchTerm,
    page: SEARCH_DEFAULT_PAGE,
    perPage: SEARCH_PER_PAGE_ITEMS,
  });

  return handleErrorsAndForward(apiResponse);
};
