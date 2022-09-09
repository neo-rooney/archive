import React from 'react';
import { render, screen } from '@testing-library/react';
import CommonButton from '../components/CommonButton/index';

describe('CommonButton', () => {
  it(`renders tasks`, () => {
    const { container } = render(<CommonButton />);
    // expect(button).toHaveStyle({ background: 'palevioletred' });
    expect(container).toHaveTextContent('hello');
  });
});
