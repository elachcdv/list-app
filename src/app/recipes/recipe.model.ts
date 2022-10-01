export class RecipeClass {
  public name: string;
  public description: string;
  public imgUrl: string;

  constructor(name: string, desc: string, imgUrl: string) {
    this.name = name;
    this.description = desc;
    this.imgUrl = imgUrl;
  }
  // getName(): string {
  //   return this.name;
  // }
}
