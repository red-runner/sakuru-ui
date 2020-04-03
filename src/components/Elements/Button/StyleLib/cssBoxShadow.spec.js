import { cssBoxShadow } from './cssBoxShadow';

describe('`cssBoxShadow`', () => {
  describe('if `hasShadow` and `hasBorder` are true', () => {
    it('should display a single box-shadow CSS attribute containing both options', () => {
      const hasShadow = true;
      const hasBorder = true;

      const actual = cssBoxShadow(hasShadow, hasBorder);

      expect(actual).toEqual('4px 4px 0px 0px #333, 0 0 0 0.5px #333');
    });
  });

  describe('if `hasShadow` is true and `hasBorder` is false', () => {
    it('should display a CSS box-shadow attribute representing a blurred shadow', () => {
      const hasShadow = true;
      const hasBorder = false;

      const actual = cssBoxShadow(hasShadow, hasBorder);

      expect(actual).toEqual('4px 4px 0px 0px #333');
    });
  });

  describe('if `hasShadow` is false and `hasBorder` is true', () => {
    it('should display a CSS box-shadow attribute representing a thin border', () => {
      const hasShadow = false;
      const hasBorder = true;

      const actual = cssBoxShadow(hasShadow, hasBorder);

      expect(actual).toEqual('0 0 0 0.5px #333');
    });
  });

  describe('if both `hasShadow` and `hasBorder` are false', () => {
    it('should display a CSS box-shadow attribute representing a transparent shadow', () => {
      const hasShadow = false;
      const hasBorder = false;

      const actual = cssBoxShadow(hasShadow, hasBorder);

      expect(actual).toEqual('0 0 0 0 transparent');
    });
  });
});
