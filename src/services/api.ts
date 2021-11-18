import { createApi } from "unsplash-js";

export const Api = createApi({
  accessKey: process.env.REACT_APP_UNSPLASH_KEY ?? "",
});
