export class Idea {
  public suggestions: string[] = [];
  public pledge: number[] =[];
  public totalPledges: number = 0;
  constructor (public name: string, public creator: string, public description: string){};
}
