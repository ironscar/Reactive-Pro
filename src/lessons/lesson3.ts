import { of, Subscription } from "rxjs";
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { LessonInterface } from "./lesson.interface";

export class ThirdLesson implements LessonInterface {

    countIndex: number
    active: boolean;

    subscription: Subscription;

    constructor(count: number = 3) {
        this.countIndex = count;
        this.active = false;
    }

    init() {
        this.lesson();
    }

    lesson() {
        console.clear();
        console.log('starting lesson 3');
    
        const dataSource = of(1,2,2,3,3,4,5,5,5,7);
    
        this.subscription = dataSource
            .pipe(
                map((data: number) => {
                    return data + 1; // 2,3,3,4,4,5,6,6,6,8
                }),
                filter((data: number) => {
                    return data % 2 === 0; //2,4,4,6,6,6,8
                }),
                distinctUntilChanged(), //2,4,x,6,x,x,8
            ).subscribe((data: number) => {
                console.log(data);
            });
    }

    end() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        console.clear();
    }

}

/**
 * RXJS OPERATOR BASICS
 * of emits values in order thereby creating an observable
 * pipe can be used to use operators on the data emitted from an observable before subscribing
 * operators can be specified by commas in pipe and they will be applied in order on the data
 * map does something to each value being emitted and returns that value to next operator
 * filter filters the values based on a condition and passes them on to next operator
 * distinct until changed only lets new values pass through when they come
 * operators can be used for creation, combination, error handling, filtering, multicasting 
    & transformation
 * 
 */
