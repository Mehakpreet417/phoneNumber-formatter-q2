const formatPhoneNumber = require('./vanilla');

test('formats phone number correctly', () => {
  // Test 1: Empty input
  expect(formatPhoneNumber('', 0)).toBe('');
  
  // Test 2: Input with only digits
  expect(formatPhoneNumber('1234567890', 10)).toBe('(123) 456-7890');
  
  // Test 3: Input with additional characters
  expect(formatPhoneNumber('1a2b3c4d5e6f7g8h9i0', 20)).toBe('(123) 456-7890');
  
  // Test 4: Input with fewer digits
  expect(formatPhoneNumber('123', 6)).toBe('(123)');
  
  // Test 5: Input with caret position in the middle
  expect(formatPhoneNumber('(12) 345-678', 6)).toBe('(12) 345-678');
});
