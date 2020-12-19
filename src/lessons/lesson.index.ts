import { LessonInterface } from "./lesson.interface";
import { FirstLesson } from "./lesson1";
import { SecondLesson } from "./lesson2";
import { ThirdLesson } from "./lesson3";

export const lessons: LessonInterface[] = [
    new FirstLesson(),
    new SecondLesson(),
    new ThirdLesson()
];
