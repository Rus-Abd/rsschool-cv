# Ruslan Abdalla #

## Contact information
- City: Minsk
- email: vostavhy@gmail.com
- linkedin: https://www.linkedin.com/in/ruslan-abdalla-7947b31bb/
- Phone: +375298435369

## About me
I am a hardworking and highly motivated person with a practical approach to problem-solving. 

I've been doing some random website projects and code-alongs, at the brief time I mostly solve codewars challenges and train on Three.js.

## Skills
- HTML
- CSS / SASS / BootStrap
- Javascript / React / Three.js
- Git
## Code Example
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
```Javascript
var moveZeros = function (arr) {
  // TODO: Program me
  let removedItems=[];
  for(let i=0;i<arr.length;i++){
     if(arr[i]===0){removedItems+=arr.splice(i,1);i=0;}
  }
   const newArr = removedItems.split('').map((i) => Number(i));
  return arr.concat(newArr);
}
```

## Work Experience
Unfortunately still none, but hoping to get some :)

## Education
- FreeCodeCamp Certificate
- CodeWars Challenges
- Udemy courses: The Web Developer Bootcamp 2021 / Advanced CSS and Sass: Flexbox, Grid, Animations and More!

## English level
C1-C2 (I studied at an english school)
