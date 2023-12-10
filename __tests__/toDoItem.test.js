import React from 'react';
import { render } from '@testing-library/react-native';
import TodoItem from '../todoItem';

describe('Testing the custom row component', () => {
  it('Task with isComplete == false should show PENDING and switch OFF', () => {
    const item = {
      id: 1,
      name: 'Assignment',
      isComplete: false,
    };
    const { getByText, getByTestId } = render(<TodoItem item={item} />);
    const pending = getByText('PENDING');
    expect(pending).toBeTruthy();
    const toggleButton = getByTestId('toggleButton');
    expect(toggleButton.props.value).toBe(false);
  });

  it('Task with isComplete == true should show PENDING and switch ON', () => {
    const item = {
      id: 2,
      name: 'Assignment',
      isComplete: true,
    };
    const { getByText, getByTestId } = render(<TodoItem item={item} />);
    const done = getByText('DONE');
    expect(done).toBeTruthy();
    const toggleButton = getByTestId('toggleButton');
    expect(toggleButton.props.value).toBe(true);
  });
});
