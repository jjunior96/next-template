import { Story, Meta } from '@storybook/react/types-6-0';
import Main from '.';

export default {
  title: 'Main',
  component: Main
  // argTypes: {
  //   backgroundColor: { control: 'color' }
  // }
} as Meta;

export const Basic: Story = (args) => <Main {...args} />;
