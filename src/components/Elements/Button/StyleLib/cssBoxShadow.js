import { SAKURU_COLORS } from '../../../StyledGlobals/constants'

/**
 * @param {bool} hasShadow
 * @param {bool} hasBorder
 * @return {string}
 */
export const cssBoxShadow = (hasShadow, hasBorder) => {
  if (!!hasBorder && !hasShadow) {
    return `0 0 0 0.5px ${SAKURU_COLORS.DARK}`;
  }

  if (hasBorder && hasShadow) {
    return `4px 4px 0px 0px ${SAKURU_COLORS.DARK}, 0 0 0 0.5px ${SAKURU_COLORS.DARK}`;
  }

  if (!hasBorder && hasShadow) {
    return `4px 4px 0px 0px ${SAKURU_COLORS.DARK}`;
  }

  return '0 0 0 0 transparent';
}
