import { Options } from "react-lottie";

import animationData from "@assets/lotties/loading.json";

export const LOADER_OPTIONS: Options = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
