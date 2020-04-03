import { cssPadding } from './cssPadding'

describe('`cssPadding`', () => {
  describe('if `orientation` is set to `vertical`', () => {
    it('should return the right CSS measurements', () => {
      const orientation = 'vertical';
      const actual = cssPadding(orientation);

      expect(actual).toEqual('3em 1em');
    });
  });

  describe('if `orientation` is set to `horizontal`', () => {
    it('should return the right CSS measurements', () => {
      const orientation = 'horizontal';
      const actual = cssPadding(orientation);

      expect(actual).toEqual('0.5em 3em');
    });
  });
});
