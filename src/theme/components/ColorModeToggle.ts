export const ColorModeToggle = {
  parts: ["container", "text"],
  baseStyle: {
    container: {
      padding: 4,
      width: 40,
      // HACK: Bypass onClick event-handler for controlled Switch by wrapping.
      "& > *": {
        pointerEvents: "none",
      },
    },
    text: {
      fontWeight: 700,
      fontSize: 12,
    },
  },
};
