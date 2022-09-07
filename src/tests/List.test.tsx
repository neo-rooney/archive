import React from 'react';
import { render, screen } from '@testing-library/react';
import List from '../components/List';

describe('App', () => {
  it(`renders tasks`, () => {
    const tasks = [
      { id: 1, title: '집가고 싶다.' },
      { id: 2, title: '8시 알람' },
    ];
    const { container } = render(<List tasks={tasks} />);
    expect(container).toHaveTextContent('집가고 싶다.');
  });
});
