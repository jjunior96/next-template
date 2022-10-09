import { Story, Meta } from '@storybook/react/types-6-0';

import Main from './Main';

export default {
  title: 'Main',
  component: Main
} as Meta;

export const Basic: Story = (args) => (
  <Main {...args}>
    <h1>Next Example</h1>
  </Main>
);
