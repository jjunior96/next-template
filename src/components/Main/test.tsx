import { screen } from '@testing-library/react';

import { renderWithTheme } from '../../utils/tests/helpers';

import Main from '.';

describe('<Main />', () => {
  it('should render the component', () => {
    const { container } = renderWithTheme(
      <Main>
        <h1>Next Example</h1>
      </Main>
    );

    expect(
      screen.getByRole('heading', { name: /Next Example/i })
    ).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
