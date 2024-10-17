const accountId = 1444553;
let accountEmail  = "ombhor617@gmail.com";
var accountPassword = "1234";
accountCity  ="jaipur";

// accountId = 2; //not allowed

accountEmail = "om@gamail.com";
accountPassword = "212121212";
accountCity  ="Bengaluru";
console.log(accountId);
let accountState;

/*
Prefer not to use var baecause of issue in block scope  and functional scope
*/
console.table([accountEmail , accountPassword  , accountCity , accountId, accountState]);