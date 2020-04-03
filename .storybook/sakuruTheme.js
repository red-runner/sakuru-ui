import { create } from '@storybook/theming/create';

export const sakuruTheme = create({
  base: 'light',

  // colorPrimary: 'hotpink',
  // colorSecondary: 'deepskyblue',

  // // UI
  // appBg: 'white',
  // appContentBg: 'silver',
  // appBorderColor: 'grey',
  // appBorderRadius: 4,

  // // Typography
  // fontBase: '"Open Sans", sans-serif',
  // fontCode: 'monospace',

  // Text colors
  textColor: '#333333',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#ffffff',
  barSelectedColor: 'black',
  barBg: '#d2aa74',

  // // Form colors
  // inputBg: 'white',
  // inputBorder: 'silver',
  // inputTextColor: 'black',
  // inputBorderRadius: 4,

  // brandTitle: 'My custom storybook',
  brandUrl: '/',
  brandImage: 'https://firebasestorage.googleapis.com/v0/b/sakuru-ui.appspot.com/o/Sakuru.svg?alt=media&token=a5134dea-58fb-4bed-98d2-987eb8cc57eb',
});
