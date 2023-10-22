function reverseString() {
    let originalString = document.getElementById('original-string').value;
    let reversedString = originalString.split('').reverse().join('');
    document.getElementById('reversed-string').innerText = reversedString;
  }
  
  function checkPalindrome() {
    let numbers = document.getElementById('numbers').value;
    let originalNumbers = numbers.split('').join('');
    let reversedNumbers = numbers.split('').reverse().join('');
  
    if (originalNumbers === reversedNumbers) {
      document.getElementById('palindrome-output').innerText = 'Yes, it is a Palindrome.';
    } else {
      document.getElementById('palindrome-output').innerText = 'No, it is not a Palindrome.';
    }
  }
  
  function calculateTip() {
    let subtotal = parseFloat(document.getElementById('subtotal').value);
    let tipPercentage = parseFloat(document.getElementById('tip-percentage').value);
  
    if (!isNaN(subtotal) && !isNaN(tipPercentage)) {
      let tipAmount = subtotal * (tipPercentage / 100);
      let totalAmount = subtotal + tipAmount;
      document.getElementById('total-amount').innerText = totalAmount.toFixed(2);
    } else {
      alert("Please enter valid numbers for both fields.");
    }
  }
  