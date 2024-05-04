import "./slider";
import modals from "./modules/modals";
import tabs from "./modules/tabs";


window.addEventListener('DOMContentLoaded', () => {
    modals();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click',  '.decoration_content > div > div', 'after_click');
});

function largestOfFour(arr) {
    // let newArr = [];
    // for (let i = 0; i < arr.length; i++) {
    //     let num = 0;
    //     for (let j = 0; j < arr[i].length; j++) {
    //         if (arr[i][j] > num || arr[i][j] < 0) {
    //             num = arr[i][j];
    //         }
    //     }
    //     newArr.push(num);
    // }
     return arr.map(Function.apply.bind(Math.max, null));
  }
  console.log(largestOfFour(
    [[4, 5, 1, 3], 
    [13, 27, 18, 26], 
    [32, 35, 37, 39], 
    [1000, 1001, 857, 1]]));

