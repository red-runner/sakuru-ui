import { cssWritingMode } from './cssWritingMode'

describe('`cssWritingMode`', () => {
  describe('if `orientation` is set to `vertical`', () => {
    it('should return the right CSS `writing-mode` property', () => {
      const orientation = 'vertical';
      const actual = cssWritingMode(orientation);

      expect(actual).toEqual('vertical-rl');
    });
  });

  describe('if `orientation` is set to `horizontal`', () => {
    it('should return the right CSS `writing-mode` property', () => {
      const orientation = 'horizontal';
      const actual = cssWritingMode(orientation);

      expect(actual).toEqual('horizontal-tb');
    });
  });
});
