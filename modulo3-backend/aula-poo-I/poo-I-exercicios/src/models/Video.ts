export default class Video {
  constructor(
    private id: string,
    private title: string,
    private duration: number,
    private uploadAt: string
  ) {}

  public getId = (): string => {
    return this.id;
  };

  public getTitle = (): string => {
    return this.title;
  };
  public setTitle = (newTitle: string): void => {
    this.title = newTitle;
  };

  public getDuration = (): number => {
    return this.duration;
  };
  public setDuration = (newDuration: string): void => {
    this.title = newDuration;
  };

  public getUploadAt = (): string => {
    return this.uploadAt;
  };
}
