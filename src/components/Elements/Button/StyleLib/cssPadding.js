import { VERTICAL, HORIZONTAL } from '../constants'

/**
 * @param {string} orientation
 * @return {string}
 */
export const cssPadding = (orientation) => {
  if (orientation === VERTICAL) {
    return `3em 1em`;
  }

  if (orientation === HORIZONTAL || typeof orientation === 'string') {
    return `0.5em 3em`;
  }
}
