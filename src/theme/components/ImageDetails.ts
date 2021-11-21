import { mode } from "@chakra-ui/theme-tools";

export const ImageDetails = {
  parts: [
    "container",
    "heading",
    "avatar",
    "details",
    "handle",
    "mediaIcon",
    "mediaHandle",
    "likeCount",
    "likeIcon",
  ],
  baseStyle: (props: any) => ({
    container: {
      width: "100%",
      padding: 4,
    },
    details: {
      pl: 4,
      flexGrow: 1,
    },
    heading: {
      size: "md",
    },
    handle: {
      mt: 0,
    },
    mediaIcon: {
      width: 4,
      height: 4,
      color: mode("brand.650", "brand.650")(props),
    },
    mediaHandle: {
      mx: "0 !important",
      fontSize: 12,
    },
    likeCount: {
      fontWeight: 600,
    },
  }),
  sizes: {
    md: {
      avatar: {
        width: 10,
        height: 10,
      },
      heading: {
        fontSize: 12,
      },
      handle: {
        fontSize: 10,
      },
      likeIcon: {
        width: 6,
        height: 6,
      },
      likeCount: {
        fontSize: 12,
      },
    },
    full: {
      avatar: {
        width: 16,
        height: 16,
      },
      heading: {
        fontSize: 14,
      },
      handle: {
        fontSize: 12,
      },
      likeIcon: {
        width: 6,
        height: 6,
        color: "brand.500",
      },
      likeCount: {
        fontSize: 15,
        color: "brand.500",
      },
    },
  },
};
