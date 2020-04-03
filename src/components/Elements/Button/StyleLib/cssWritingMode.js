import { VERTICAL, HORIZONTAL } from '../constants'

/**
 * @param {string} orientation
 * @return {string}
 */
export const cssWritingMode = (orientation) => {
  if (orientation === VERTICAL) {
    return 'vertical-rl';
  }

  if (orientation === HORIZONTAL) {
    return 'horizontal-tb';
  }
}
