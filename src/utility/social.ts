import {
  TiSocialInstagram,
  TiSocialTwitter,
  TiSocialFacebook,
  TiRss,
} from "react-icons/ti";

export type SocialMediaType = "instagram" | "twitter" | "facebook";

export const getMediaPlugMeta = (
  mediaType: SocialMediaType,
  username: string
) => {
  switch (mediaType) {
    case "instagram":
      return {
        icon: TiSocialInstagram,
        href: `https://www.instagram.com/${username}`,
      };
    case "twitter":
      return {
        icon: TiSocialTwitter,
        href: `https://twitter.com/${username}`,
      };
    case "facebook":
      return {
        icon: TiSocialFacebook,
        href: `https://www.facebook.com/${username}`,
      };
    default:
      return { icon: TiRss, href: "#" } as never;
  }
};

export const formatHandle = (nameOrHandle: string) => {
  const stripAtPattern = /^[@]*(.*)/;
  return "@" + nameOrHandle.replace(stripAtPattern, "$1");
};
