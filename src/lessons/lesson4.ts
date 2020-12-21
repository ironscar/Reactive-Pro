import { interval, Subscription } from "rxjs";
import { take } from "rxjs/operators";
import { LessonInterface } from "./lesson.interface";

export class FourthLesson implements LessonInterface {

    countIndex: number;
    active: boolean;

    subscription: Subscription;

    constructor(count: number = 4) {
        this.countIndex = count;
        this.active = false;
    }

    init() {
        this.lesson();
    }

    lesson() {
        console.log('this is lesson 4');

        this.subscription = interval(1000)
            .pipe(
                take(2)
            )
            .subscribe(val => {
                console.log(val);
            });
    }
    
    end() {
        console.clear();
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

}

/**
 * RXJS COMMON OPERATORS ADVANCED: COMBINATION
 * combination operators join data from multiple observables
 * interval is a creation operator that starts emitting values from 0 & increments every second
 * take is a filtering operator which will take only the first n emissions
 */
