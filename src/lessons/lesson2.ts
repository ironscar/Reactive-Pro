import { fromEvent, Subscription } from "rxjs";
import { LessonInterface } from "./lesson.interface";

export class SecondLesson implements LessonInterface {

    countIndex: number;
    active: boolean;

    button: HTMLElement;
    subscription: Subscription;
    secondSubscription: Subscription;

    constructor(count: number = 2) {
        this.countIndex = count;
        this.active = false;

        this.button = document.getElementById('clicklist');
        this.button.hidden = true;
    }

    init() {
        this.button.hidden = false;
        this.lesson();
    }

    lesson() {
        console.clear();
        console.log('starting lesson 2');
    
        console.log('please click the button');
    
        const observable = fromEvent(this.button, 'click');
    
        this.subscription = observable.subscribe({
            next: () => {
                console.log('clicklist');
            },
            error: (err) => {
                console.error(err);
            },
            complete: () => {
                console.log('complete');
            }
        });
    
        this.secondSubscription = observable.subscribe(() => {
            console.log('clicklist again');
        });
    }
    
    end() {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.secondSubscription.unsubscribe();
        }
        this.button.hidden = true;
        console.clear();
    }

}

/**
 * OBSERVABLES & SUBSCRIPTIONS BASICS
 * an observable is like an array that gets built over time
 * you can read the values of this observable over time by subscribing to it
 * observables can be created from events using rxjs creation functions
 * observable by itself doesn't do anything until subscribed to
 * observables have three callbacks: next, error and complete
 * an observable cannot do anything once its completed or failed
 * subscribing again creates a new subscriber and so they need to be explicitly closed
 * this is often called unicasting which means that flow is unidirectional
 * can have multiple observers for one observable
 * observables don't care about subscribers, they just emit and all subscribers get it
 */
