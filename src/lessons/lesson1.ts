import { LessonInterface } from "./lesson.interface";

export class FirstLesson implements LessonInterface {

    countIndex: number;
    active: boolean;

    constructor(count: number = 1) {
        this.countIndex = count;
        this.active = false;
    }

    init() {
        this.lesson();
    }

    lesson() {
        console.log('this is lesson 1');
        const arr = [1,2,3,4,5];
        console.log('original array: ', arr);
        
        // multiply each member of array by 3
        const prods = arr.map((item: number) => {
            return item * 3;
        });
        console.log('map on array: ', prods);
    
        console.log('------------------');
        
        // get product of all elements added with their index starting from constant 4
        const prod = arr.reduce((prev: number, curr: number, index: number) => {
            console.log('current status: ', prev, curr, index);
            return prev * (curr + index);
        }, 4);
        console.log('reduced array: ', prod);
    
        console.log('------------------');
        
        // filter through arr to find elements that are even
        const results = arr.filter((item: number, index: number) => {
            return item % 2 === 0;
        });
        console.log('filtered array: ', results);
    
        console.log('------------------');
    }
    
    end() {
        console.clear();
    }

}

/**
 * FUNCTIONAL JS PROGRAMMING BASICS
 * an observable is like an array that gets built over time
 * you can read the values of this observable over time by subscribing to it
 * 
 */
