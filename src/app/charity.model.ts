export class Charity {
  public goalReached: boolean = false;
  public currentFunds: number = 0;
  constructor(public name:string, public creator:string, public description: string, public goal: number, public deadline:string){}
}
