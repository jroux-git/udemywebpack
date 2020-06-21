/*
  This is used before the performance section
*/
// import sum from './sum';  // There is an export available, thus assigning it to a variable to use
// import './image_viewer';  // doesn't export any code so this syntax just call the js and it runs

// const total = sum(1,2);
// console.log(total);

/*
  This is used for the performance section
*/
const button =document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
  System.import('./image_viewer').then(module => {
    module.default();
  });
};

document.body.appendChild(button);