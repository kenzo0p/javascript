const passwordValidation = (password) => {
  let hasLowerCase = false;
  let hasUpperCase = false;
  let hasDigit = false;
  if (password.length < 8) {
    return false;
  }
  for (let char of password) {
    if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 97) {
      hasLowerCase = true;
    } else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
      hasUpperCase = true;
    } else if(!isNaN(Number(char))){
      hasDigit = true;
    }
  }
  if (!hasLowerCase || !hasUpperCase || !hasDigit) {
    return false;
  }
  return true;
};



console.log(passwordValidation("asdksajaAs"));
