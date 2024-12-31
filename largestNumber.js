// To find  the largest number we can use the following code

// create a function to find largest
function findLargest() {
  let max;
  let a = prompt("Enter the first number:");
  let b = prompt("Enter the second number:");
  let c = prompt("Enter the third number :");
  max = a;
  if (b > a && b > c) {
    max = b;
    console.log("The number" +  max + "is greater than "+ a + "and " + c);
    document.write("The number"+ max + "is greater than " + a + "and "+ c);
  } else if (c > b && c > a) {
    max = c;
    console.log("The number"+ max + "is greater than "+ a + "and " + b);
    document.write("The number"+ max + "is greater than "+ a + "and "+ b);
  } else {
    console.log("The greater number is:"+ max + "than" + b + "and"+ c);
  }
}

// Now call the functin to display the largest number
findLargest();