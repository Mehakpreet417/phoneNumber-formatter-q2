import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PhoneInput from './App';

test('formats phone number correctly', () => {
  const { getByLabelText, getByPlaceholderText } = render(<PhoneInput />);
  const inputElement = getByPlaceholderText('Mobile number');

  // Test 1: Empty input
  expect(inputElement.value).toBe('');

  // Test 2: Input with only digits
  fireEvent.change(inputElement, { target: { value: '1234567890' } });
  expect(inputElement.value).toBe('(123) 456-7890');

  // Test 3: Input with additional characters
  fireEvent.change(inputElement, { target: { value: '1a2b3c4d5e6f7g8h9i0' } });
  expect(inputElement.value).toBe('(123) 456-7890');

  // Test 4: Input with fewer digits
  fireEvent.change(inputElement, { target: { value: '123' } });
  expect(inputElement.value).toBe('(123)');

  // Test 5: Input with caret position in the middle
  fireEvent.change(inputElement, { target: { value: '(12) 345-678' } });
  expect(inputElement.value).toBe('(12) 345-678');
});
