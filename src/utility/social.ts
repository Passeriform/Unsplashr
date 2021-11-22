import {
  TiRss,
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialTwitter,
} from "react-icons/ti";

export type SocialMediaType = "facebook" | "instagram" | "twitter";

export const getMediaPlugMeta = (
  mediaType: SocialMediaType,
  username: string
) => {
  switch (mediaType) {
    case "facebook":
      return {
        icon: TiSocialFacebook,
        href: `https://www.facebook.com/${username}`,
      };
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
    default:
      return { icon: TiRss, href: "#" } as never;
  }
};

export const formatHandle = (nameOrHandle: string) => {
  const stripAtPattern = /^[@]*(.*)/;
  /* eslint-disable-next-line prefer-template */
  return "@" + nameOrHandle.replace(stripAtPattern, "$1");
};
