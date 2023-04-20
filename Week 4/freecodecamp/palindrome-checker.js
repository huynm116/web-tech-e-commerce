function palindrome(str) {
    let string = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reverse = string.split('').reverse().join('');
    return string === reverse;
    }

palindrome("eye");


