import { useWindowDimensions, PixelRatio } from 'react-native';
import { GUIDE_LINE_HEIGHT, GUIDE_LINE_WIDTH } from '../constants/Geometry';

export default function useScale() {
  const windowHeight = useWindowDimensions().height;
  const windowWidth = useWindowDimensions().width;

  /**
   * [use it for scaling height]
   * @param  {[Number]} size [description]
   * @return {[Number]}      [description]
   */
  const verticalScale = (size: number) => {
    if (windowHeight < 600) {
      return (650 / GUIDE_LINE_HEIGHT) * size;
    } else if (windowHeight < 700) {
      return (799 / GUIDE_LINE_HEIGHT) * size;
    } else if (windowHeight < 750) {
      return size;
    } else {
      return (windowHeight / GUIDE_LINE_HEIGHT) * size;
    }
  };

  /**
   * [use it for scaling width]
   * @param  {[Number]} size [description]
   * @return {[Number]}      [description]
   */
  const horizentalScale = (size: number) =>
    (windowWidth / GUIDE_LINE_WIDTH) * size;

  /**
   * [use it for scaling font]
   * @param  {[Number]} size [description]
   */
  const scaleFont = (size: number) => size * PixelRatio.getFontScale();

  /**
   * [returns view port height]
   * @param  {[Number]} size [description]
   */
  const vh = (size: number) => (windowHeight * size) / 100;

  /**
   * [returns view port width]
   * @param  {[Number]} size [description]
   */
  // const vw = (size: number) => (windowWidth * size) / 100;

  return {
    verticalScale,
    horizentalScale,
    scaleFont,
    vh,
  };
}
