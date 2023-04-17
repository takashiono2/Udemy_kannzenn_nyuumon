// function print(fn){
//   const reslut = fn(2);
//   console.log(reslut);
// }

// function fn(number = 3) {
//   return number * 2;
// }
// debugger;
// print(fn);

const h1Element = document.querySelector('h1');
console.dir(h1Element);
console.log(h1Element.textContent);
h1Element.textContent = "変更後のタイトル";

const btnE1 = document.querySelector('button');
const fn = (e)=>{
  // console.log(e.target);
  console.dir(e.target.textContent);
  console.log('hello');
}
btnE1.addEventListener('click',fn)
