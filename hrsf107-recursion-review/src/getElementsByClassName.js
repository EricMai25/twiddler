// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
   
  var result = [];

  var test = function(element) {
    if(element.classList && element.classList.contains(className)) {
      result.push(element);
    }

    if(element.childNodes) {
      element.childNodes.forEach(function(child) {
        test(child);
      })      
    }

  }
  
  test(document.body);

  return result; 



  // input: className 


};

