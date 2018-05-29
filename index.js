// describe('shout(string)',() => {})

function shout (string) {
  // do something
  return string.toUpperCase()
}

shout("hello!");

//describe('whisper(string)'

function whisper(string) {
  return string.toLowerCase()
}

whisper("hello");

//describe('logShout(string)'

function logShout(string) {
  var spy = string.toUpperCase();
  console.log(spy);
}

logShout("hello");

//describe('logWhisper(string)'

function logWhisper(string) {
  const spy = string.toLowerCase();
  console.log(spy);
}

logWhisper("hello");

//describe('sayHiToGrandma(string)'

function sayHiToGrandma(string) {
  var uppercase = "HELLO!";
  uppercase.toUpperCase() === uppercase;
  var lowercase = "hello!";
  lowercase.toLowerCase() === lowercase;
  
  if (string === "hello") {
    
    
  }
}

sayHiToGrandma('hello');