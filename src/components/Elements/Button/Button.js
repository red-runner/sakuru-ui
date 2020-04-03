import React, { Fragment } from 'react';
import { node, oneOf, bool } from 'prop-types';
import styled from 'styled-components';
import { GlobalStyles } from '../../StyledGlobals';
import { VERTICAL, HORIZONTAL } from './constants';

import { cssBoxShadow, cssPadding, cssWritingMode } from './StyleLib'

const Button = styled.button`
  padding: ${ ({ orientation }) => cssPadding(orientation)};
  margin: 0.5em;
  min-height: 50px;
  max-width: 300px;
  max-height: 300px;
  height: auto;
  width: auto;
  box-shadow: ${({ hasShadow, hasBorder }) =>
    cssBoxShadow(hasShadow, hasBorder)};
  border-radius: ${ ({ isRounded }) => (isRounded ? '25px' : '0px')};
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TextButtonContainer = styled.span`
  writing-mode: ${
  ({ orientation }) => cssWritingMode(orientation)
  };
  text-orientation: ${
  ({ orientation }) =>
    orientation === VERTICAL ? 'upright' : 'mixed'
  };
  white-space: nowrap;
`;

export const Component = ({
  isRounded,
  hasBorder,
  hasShadow,
  orientation,
  children,
  onClick
}) => {
  return (
    <Fragment>
      <Button
        orientation={orientation}
        hasBorder={hasBorder}
        data-testid="skr-button"
        className="skr-button"
        isRounded={isRounded}
        hasShadow={hasShadow}
        onClick={onClick}>
        <TextButtonContainer orientation={orientation}>{children}</TextButtonContainer>
      </Button>
      <GlobalStyles />
    </Fragment>
  );
};

Component.displayName = 'Button';

Component.defaultProps = {
  isRounded: false,
  hasBorder: false,
  orientation: HORIZONTAL,
  hasShadow: false,
};

Component.propTypes = {
  /** Is the button displayed with border-radius. */
  isRounded: bool,
  /** Is the button displayed with a border. */
  hasBorder: bool,
  /** Is the button displayed with a shadow. */
  hasShadow: bool,
  /** The orientation of the text rendered inside the button. */
  orientation: oneOf(['horizontal', 'vertical']),
  /** The string to be rendered inside the button. */
  children: node.isRequired,
};
