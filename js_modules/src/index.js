import sum from './sum';  // There is an export available, thus assigning it to a variable to use
import './image_viewer';  // doesn't export any code so this syntax just call the js and it runs

const total = sum(1,2);
console.log(total);