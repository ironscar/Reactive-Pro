export interface LessonInterface {
    countIndex: number;
    active: boolean;
    init(): void;
    lesson(): void;
    end(): void;
}
