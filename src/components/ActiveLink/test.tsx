/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from 'next/router';

import { screen, fireEvent, waitFor } from '@testing-library/react';

import { mocked } from 'ts-jest/utils';
import { renderWithTheme } from 'utils/tests/helpers';

import ActiveLink from '.';

jest.mock('next/router');

describe('<ActiveLink />', () => {
  it('should render the component', () => {
    const useRouterMocked = mocked(useRouter);

    useRouterMocked.mockReturnValueOnce({
      route: '/',
      pathname: '',
      asPath: ''
    } as any);

    renderWithTheme(<ActiveLink href="/">Login</ActiveLink>);

    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });

  it('should render the component with background darker when the page link has been showed', async () => {
    const useRouterMocked = mocked(useRouter);

    useRouterMocked.mockReturnValueOnce({
      route: '/home',
      pathname: '/home',
      asPath: '/home'
    } as any);

    renderWithTheme(<ActiveLink href="/home">Login</ActiveLink>);

    const ActiveLinkElement = screen.getByText(/login/i);

    expect(ActiveLinkElement).toHaveStyle({
      'background-color': '#1c8455'
    });
  });

  it('should render the component with background darker user when mouse over', async () => {
    const useRouterMocked = mocked(useRouter);

    useRouterMocked.mockReturnValueOnce({
      route: '/home',
      pathname: '/home',
      asPath: '/home'
    } as any);

    renderWithTheme(<ActiveLink href="/home">Login</ActiveLink>);

    const ActiveLinkElement = screen.getByText(/login/i);

    fireEvent.mouseOver(ActiveLinkElement);

    await waitFor(() => ActiveLinkElement);

    expect(screen.getByText(/login/i)).toHaveStyle({
      'background-color': '#1c8455'
    });
  });
});
