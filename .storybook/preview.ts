import type { Preview } from '@storybook/react';
import '../src/app/globals.css';
import '../src/app/fonts/fonts.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
