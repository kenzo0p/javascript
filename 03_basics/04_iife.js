// Immedialtely Invoked Function Expression (IIFE)
//function that execute immediately
//globally scope ke polution se problem hoti hain kayi baar for removing that pollution we use iffe a
//

(function() { 
    console.log(`DB CONNECTED`)
})();//sometimes it will not execute another ifee for that use semicolon

(function chai() { //its named iife
    console.log(`DB CONNECTED`)
})();//sometimes it will not execute another ifee for that use semicolon



  
 ( (name) => {
    console.log(`DB CONNECTED 2 ${name}`)
 })("om") ;


