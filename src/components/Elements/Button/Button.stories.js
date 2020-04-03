import React from 'react';
import { Component as Button } from './Button';
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';
import markdown from './Button.md';

export default {
  title: 'Button',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown },
  },
};


export const Default = () => (
  <Button
    hasBorder={boolean("hasBorder", false)}
    hasShadow={boolean("hasShadow", false)}
    orientation={text('orientation', 'horizontal')}
    isRounded={boolean('isRounded', false)}
    onClick={action('click')}>
    {text("children", "See images")}
  </Button>
);

export const Border = () => (
  <Button
    hasBorder={boolean("hasBorder", true)}
    hasShadow={boolean("hasShadow", false)}
    orientation={text('orientation', 'horizontal')}
    isRounded={boolean('isRounded', false)}
    onClick={action('click')}>
    {text("children", "See images")}
  </Button>
);

export const Shadow = () => (
  <Button
    hasBorder={boolean("hasBorder", false)}
    hasShadow={boolean("hasShadow", true)}
    orientation={text('orientation', 'horizontal')}
    isRounded={boolean('isRounded', false)}
    onClick={action('click')}>
    {text("children", "See images")}
  </Button>
);

export const Rounded = () => (
  <Button
    hasBorder={boolean("hasBorder", false)}
    hasShadow={boolean("hasShadow", false)}
    orientation={text('orientation', 'horizontal')}
    isRounded={boolean('isRounded', true)}
    onClick={action('click')}>
    {text("children", "See images")}
  </Button>
);

export const Vertical = () => (
  <Button
    hasBorder={boolean("hasBorder", false)}
    hasShadow={boolean("hasShadow", false)}
    orientation={text('orientation', 'vertical')}
    isRounded={boolean('isRounded', false)}
    onClick={action('click')}>
    {text("children", "クッキーが欲しい")}
  </Button>
);
