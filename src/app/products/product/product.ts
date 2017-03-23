
export class Product {
  brand: string;
  model: string;
  img: string;
  OS: string;
  OS_version: string;
  display: string;
  RAM: number;
  internal_memory: number;
  dual_sim: boolean;
  inStoke: boolean;
  edit_mode: boolean;

  constructor(data) {
    this.brand = data.brand;
    this.model = data.model;
    this.img = data.img;
    this.OS = data.OS;
    this.OS_version = data.OS_version;
    this.display = data.display;
    this.RAM = data.RAM;
    this.internal_memory = data.internal_memory;
    this.dual_sim = data.dual_sim;
    this.inStoke = data.inStoke;
    this.edit_mode = data.edit_mode;
  }
}

