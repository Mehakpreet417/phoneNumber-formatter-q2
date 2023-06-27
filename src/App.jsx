import React, { useState, useRef, useEffect } from 'react';

function PhoneInput() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      const { selectionStart, selectionEnd } = inputRef.current;
      const newCaretPosition = calculateCaretPosition(selectionStart, selectionEnd);
      inputRef.current.setSelectionRange(newCaretPosition, newCaretPosition);
    }
  }, [phoneNumber]);

  const calculateCaretPosition = (start, end) => {
    const caretToEnd = start === phoneNumber.length;
    return caretToEnd ? phoneNumber.length : start;
  };

  const formatPhoneNumber = (input) => {
    const digits = input.replace(/\D/g, '').slice(0, 10);
    const formattedNumber = format(digits);
    setPhoneNumber(formattedNumber);
  };

  const format = (digits) => {
    const digitCount = digits.length;
    let formattedNumber = '';

    for (let i = 0; i < digitCount; i++) {
      if (i === 0) {
        formattedNumber += '(';
      } else if (i === 3) {
        formattedNumber += ') ';
      } else if (i === 6) {
        formattedNumber += '-';
      }
      formattedNumber += digits[i];
    }

    return formattedNumber;
  };

  return (
    <div className="container text-center">
      <div>
        <label htmlFor="phone">(123) 456-7890</label>
      </div>
      <input
        type="tel"
        id="phone"
        maxLength="14"
        placeholder="Mobile number"
        autoComplete="off"
        value={phoneNumber}
        onChange={(e) => formatPhoneNumber(e.target.value)}
        ref={inputRef}
      />
    </div>
  );
}

export default PhoneInput;
