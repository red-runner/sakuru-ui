import React from 'react';
import {Component as Button} from './Button';
import { render } from '@testing-library/react';

const defaultProps = {
  hasBorder: true,
  hasShadow: true,
  onClick: jest.fn(),
  isRounded: true,
  children: <div/>
}

describe('`Button`', () => {
  it('should render a `Button component with the right structure`', async () => {
    let component
    const { getByTestId } = await render(<Button {...defaultProps} />)
    component = getByTestId('skr-button');

    expect(component).toBeTruthy();
  });
});
