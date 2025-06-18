const accountId = 144553
let accountEmail = "mio@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"  //not recommended although it works
let accountState; //returns undefined

//accountId = 2 -> not allowed

accountEmail ="hc@hc.com"
accountPassword = 54321
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
//{<-scope->} js didnt have any knowledge of scopes when using var
//prefer not to use 'var' because of block and functional scope