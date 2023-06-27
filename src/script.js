function formatPhoneNumber(input) {
    const digits = input.replace(/\D/g, '').slice(0, 10);
    const formattedNumber = format(digits);
    
    const inputElement = document.getElementById('phone');
    const caretStart = inputElement.selectionStart;
    
    inputElement.value = formattedNumber;
    
    const newCaretPosition = caretStart - (input.length - formattedNumber.length);
    inputElement.setSelectionRange(newCaretPosition, newCaretPosition);
  }
  
  function format(digits) {
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
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', function() {
      formatPhoneNumber(this.value);
    });
  });
  