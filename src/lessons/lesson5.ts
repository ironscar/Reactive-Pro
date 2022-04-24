import { from, fromEvent, generate, interval, of, range, Subscription, timer } from "rxjs";
import { ajax } from 'rxjs/ajax';
import { map, take } from "rxjs/operators";
import { LessonInterface } from "./lesson.interface";

export class FifthLesson implements LessonInterface {

    countIndex: number;
    active: boolean;

    parentSubscription: Subscription;

    constructor(count: number = 5) {
        this.countIndex = count;
        this.active = false;
        this.parentSubscription = new Subscription();
    }

    init(): void {
        this.lesson();
    }

    lesson() {
        console.log('this is lesson 5');

        // of operator
        const subscription1 = of([1,2,3,4,5]).subscribe(val => {
            console.log('of created: ', val);
        });
        this.parentSubscription.add(subscription1);

        // from operator
        const subscription2 = from([1,2,3,4,5]).subscribe(val => {
            console.log('from created: ', val);
        });
        this.parentSubscription.add(subscription2);

        // fromEvent operator
        const subscription3 = fromEvent(document, 'click').subscribe(val => {
            console.log('fromEvent created: ', val);
        });
        this.parentSubscription.add(subscription3);

        // ajax.getJSON operator
        const subscription4 = ajax.getJSON('https://api.github.com/users?per_page=5')
            .subscribe({
                next: (userResponse) => {
                    console.log('ajax created: ', userResponse);
                },
                error: (error) => {
                    console.error('Something went wrong: ', error);
                }
            });
        this.parentSubscription.add(subscription4);

        // interval operator (with map to specify start offset)
        const startOffset = 5;
        const subscription5 = interval(1000).pipe(
            map(val => val + startOffset),
            take(2)
        ).subscribe(val => {
            console.log('interval created: ', val);
        });
        this.parentSubscription.add(subscription5);

        // generate operator
        const subscription6 = generate(5, x => x < 10, x => x + 2).subscribe(val => {
            console.log('generate created: ', val);
        });
        this.parentSubscription.add(subscription6);

        // range operator
        const subscription7 = range(1,4).subscribe(val => {
            console.log('range created: ', val);
        });
        this.parentSubscription.add(subscription7);

    }

    end() {
        console.clear();
        if (this.parentSubscription) {
            this.parentSubscription.unsubscribe();
        }
    }

}

/**
 * RXJS CREATION OPERATORS
 * some common creation operators are ajax, of, from, fromEvent, interval, generate, range
 * of emits values from an array passed as param, the entire array at the same time
 * from emits values from an array passed as param but one element of the array at a time
 * fromEvent emits values from an event taking the event target and the event name as params
 * ajax creates an observable out of an AJAX request with the response as the value
 * interval emits values based on the duration specified starting at 0 but can use map to
 *      start at different number
 * generate emits values with starting value, callback with condition, callback with update
 *      condition as its params
 * range emits values within a range one item at a time
 * parentSubscription keeps adding all its childSubscriptions here so that when its unsubscribed,
 *      all its childSubscriptions will also be unsubscribed
 */
