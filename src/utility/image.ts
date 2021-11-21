export type Dimensions = {
  width: number,
  height: number,
}

export const imageFillsContainer = (imageElement: Dimensions, imageContainer: Dimensions) => {
  const { width: containerWidth, height: containerHeight } = imageContainer;
  const { width: imageWidth, height: imageHeight } = imageElement;

  const scaledToFitHeight = (imageHeight * containerWidth) / imageWidth;
  const expectedHeightForFit = containerHeight;

  return scaledToFitHeight <= expectedHeightForFit
}
