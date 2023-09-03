// initialize a tsc config file
// tsc --init

// to watch  tsc files
// tsc --watch (the name of the file)

// my first tsc code
// type
let num: number;
let str: string;
let bool: boolean;
let x: any;


// these variables wont allow any type thats not the type assigned to them above to be used for them.
// eg:
num = 8 //is cool.
// num = 'hello'  //will throw an error
str = 'string'  //is cool
//str = 9 //will throw err.
