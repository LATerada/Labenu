export class Course {
  constructor(
    private id: string,
    private name: string,
    private lessons: number
  ) {}

  getId(): string {
    return this.id;
  }
  getName(): string {
    return this.name;
  }
  getLessons(): number {
    return this.lessons;
  }

  setId(value: string): void {
    this.id = value;
  }
  setName(value: string): void {
    this.name = value;
  }
  setLessons(value: number): void {
    this.lessons = value;
  }
}
