// first problem
function sum(x,y){

  return x + y;

}
console.log(sum(3,4));

// second problem

function isEqual(x,y){
  if(x === y){
    return "true";
  }
  else {
    return "false"
  }
}
isEqual(2,3);
// third problem

function discountPercentage(x,y) {

  var result= x * y /100;
  console.log(x);
  console.log(result+ " dollars off!");

  if(y >100 || y <= 0){
  console.log("Incorrect discount");
  }
}
discountPercentage(10,200);

// fourth problem
function stringCapitalize(string){
return string.charAt(0).toUpperCase() + string.slice(1);

}
stringCapitalize("johnny");

//fifth problem

function evenNumber(min,max){

    var result = Math.floor(Math.random() * max);
    for (var i = result;i>=0; i-=2){

    if (i % 2!== 0){
        i = i -1;
        i-=2;

    }
         console.log(i);
    }

}
evenNumber(0,100);

// sixth problem

function isDivisible(x,y){
  if (y % x === 0) {
  console.log("true");

      } else {

        console.log("false")


    }
}
isDivisible(3,5);

// 
