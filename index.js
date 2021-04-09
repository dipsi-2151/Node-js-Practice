const _ =require('underscore');

// It first assume underscore is a core module if not then file or folder ,
// then finally it looks into node_modules folder

const result= _.contains([1,2, 3], 2);
console.log(result);
