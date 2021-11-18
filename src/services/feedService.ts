import { OrderBy } from "unsplash-js";
import { Basic } from "unsplash-js/dist/methods/photos/types";

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
    page: 1,
    perPage: 20,
    orderBy: OrderBy.POPULAR,
  });

  return handleErrorsAndForward(apiResponse);
};

export const fetchSearchFeed = async (searchTerm: string) => {
  const apiResponse = await Api.search.getPhotos({
    query: searchTerm,
    page: 1,
    perPage: 20,
  });

  return handleErrorsAndForward(apiResponse);
};
