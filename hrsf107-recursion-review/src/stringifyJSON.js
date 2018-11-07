// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  
  // check if it is an individual element
  // if yes, change to string
  if (typeof obj === 'number') {
    return obj.toString();
  }
  if (obj === null) {
    return 'null';
  }
  if (typeof obj === 'boolean') {
    if (obj) {
      return 'true';
    } else {
      return 'false';
    }
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if (Array.isArray(obj)) {
    var string = '';
    if (obj.length > 0) {
      obj.forEach(function(element, index) {
        // array.push(stringifyJSON(element));
        if (index !== obj.length - 1 ) {
          string = string + stringifyJSON(element) + ',';
        } else {
          string = string + stringifyJSON(element);      
        }
      });
    }
    return '[' + string + ']';
  } 
  if (typeof obj === 'object') {
    var string = '';
    Object.keys(obj).forEach(function(element, index) {
      if (typeof obj[element] === 'function' || obj[element] === undefined) {
        string = string + '';
      }else if (index !== Object.keys(obj).length - 1) {
        string = string + stringifyJSON(element) + ':' + stringifyJSON(obj[element]) + ',';
      } else {
        string = string + stringifyJSON(element) + ':' + stringifyJSON(obj[element]);
      }

    });
    return '{' + string + '}'; 
  }
};
  // check if array
  // if yes, loop through array
  
  // check if object
  // if yes, loop thru object

  // return string output

  

