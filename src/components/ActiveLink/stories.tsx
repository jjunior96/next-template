import { Story, Meta } from '@storybook/react/types-6-0';

import ActiveLink, { ActiveLinkProps } from '.';

export default {
  title: 'ActiveLink',
  component: ActiveLink,
  decorators: [
    (Story) => (
      <div
        style={{
          width: '40rem',
          margin: 'auto',
          marginTop: '1rem'
        }}
      >
        <Story />
      </div>
    )
  ],
  parameters: {
    nextRouter: {
      path: '/',
      asPath: '/'
    }
  }
} as Meta;

export const Default: Story<ActiveLinkProps> = (args) => (
  <>
    <ActiveLink {...args} href="/" />
    <ActiveLink {...args}>Products</ActiveLink>
  </>
);

Default.args = {
  as: '/home',
  children: 'Users',
  href: '/home'
};

export const inPage: Story<ActiveLinkProps> = (args) => (
  <ActiveLink {...args} />
);

inPage.args = {
  as: '/',
  children: 'Enter',
  href: '/'
};
