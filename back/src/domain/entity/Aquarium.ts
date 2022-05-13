import Dimensions from "./Dimensions";
import Fish from "./Fish";

export default class Aquarium {
  name: string;
  dimensions?: Dimensions;
  fishs: Fish[] = [];

  constructor(name: string, dimensions?: Dimensions) {
    this.name = name;
    this.dimensions = dimensions;
  }

  getLiters(): number {
    if (!this.dimensions) {
      throw new Error("Aquarium dont have dimensions");
    }
    return this.dimensions.getLiters();
  }

  addFish(newFish: Fish): void {
    if (this.getLitersRemaining() < newFish.litersRequired) {
      throw new Error("Aquarium crowded");
    }
    this.fishs.push(newFish);
  }

  getFishs(): Fish[] {
    return this.fishs;
  }

  getLitersRemaining(): number {
    const usedLiters = this.fishs.reduce((total, fish) => {
      return total + fish.litersRequired;
    }, 0);
    return this.getLiters() - usedLiters;
  }

  removeFish(name: string): void {
    const fishToRemove = this.fishs.find(fish => fish.name === name);
    if (!fishToRemove) {
      throw new Error("Fish not found");
    }
    this.fishs = this.fishs.filter(fish => fish.name !== name);
  }

}