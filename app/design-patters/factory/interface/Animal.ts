export interface Animal {
  color(): string;
}

export interface FlyingAnimal extends Animal {
  flySpeed(): number;
}

export interface LandAnimal extends Animal {
  runSpeed(): number;
}
