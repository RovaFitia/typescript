/* -------------------------
  Alias: préciser le type d'un variable
---------------------------*/
/*
type User = { firstname: string; lastname: string };
type DateString = string;
type Id = string;
type Identity<ArgType> = (a: ArgType) => ArgType; // Alias & Generic

const users = {
  firstname: "Jane",
  lastname: "Doe",
  age: 32,
};

type Users = typeof users;
*/

/* -------------------------
  Generics: préciser le type d'un retour d'une fonction
---------------------------*/
/*
function identity<ArgType>(a: ArgType): ArgType {
  return a;
}

function first<Type>(arg: Type[]): Type {
  return arg[0];
}

const aa = identity<number>(3);
const bb = identity<string>("Hello");
const cc = first(["hi", "hello"]);

const arr: Array<string | number> = ["Koto", "Jean", 3];
*/

// Ici <Type extends { length: number }> est une contrainte : force le type du generic
/*
function consoleSize<Type extends { length: number }>(arg: Type): Type {
  console.log(arg.length);
  return arg;
}
*/
/* -------------------------
  Syntaxe de base
---------------------------*/
/*
const a: string = "Hello world";
const b: number = 3;
const c: boolean = true;
const d: string[] = ["Jao", "koto", "Joe"];
const e: number[] = [12, 15.5, 14];
const f: any[] = ["Table", 12]; // any type : n'importe quoi
const g: any = "zezez";
const dateTime: DateString = new Date().toString();
//Objet : le ?: veut dire optionnelle
const user: User = {
  firstname: "koto",
  lastname: "Kely",
};
*/
/*
const users: { firstName: string; [key: string]: string } = {
  firstName: "Rakoto",
  lastName: "Jean",
};
*/
/*
const date: Date = new Date();
const cb: Function = (e: MouseEvent): void => {};

function prindId(id: number): void {}
*/

//const compteur = document.querySelector('#compter') as HTMLButtonElement
// const compteur = <HTMLButtonElement>document.querySelector('#compter')

/* -------------------------
  Narrowing: Eviter le type Null par défaut
---------------------------*/

//const compteur = document.querySelector("#compter")!; // !: forcer le narrowing (eliminé le null)
/*
const compteur = document.querySelector("#compter") as HTMLElement; // préciser le narrowing
let i = 0;

const increment = (e: Event) => {
  e.preventDefault();
  i++;
  const span = compteur?.querySelector("span");
  if (span) {
    span.innerText = i.toString();
  }
};
*/

// Solution 1 :
/*
if(compteur) {
    compteur.addEventListener('click', increment)
}
*/

// solution 2
//compteur?.addEventListener("click", increment);

/* ----------------
  Readonly : permet de ne pas modifier les contenues
  ----------------- */

function reverse<T>(arr: readonly T[]): T[] {
  return [...arr].reverse(); // Le spride opérator permet de créer un nouveau tableau
}

/* ----------------
  Class
  ----------------- */

class A {
  private a = 3;
  protected b = "hello";

  log() {
    console.log(this.a);
  }
}

class B extends A {
  log() {
    console.log(this.b);
  }
}

const aInstance = new A();
aInstance.log();

class Collection<T> {
  constructor(private items: T[]) {}

  add(item: T): this {
    this.items.push(item);
    return this;
  }

  first(): T | null {
    return this.items[0] || null;
  }

  isEqual(a: this) {
    return a.items === this.items;
  }
}

class CollectB<T> extends Collection<T> {}
/*--------------------------
  Change le this d'une class
----------------------------*/
class onSubscriber {
  on(this: HTMLElement, name: string, cb: Function) {}
}

const collect = new Collection([1, 2]);
collect.first();
collect.add(15);

const collectB = new CollectB(["hi", 2]);
collectB.isEqual(collect);

/*--------------------
  DocTyping
----------------------*/
/*
class Point {
  x = 0;
  y = 0;
}

class Geometry {
  x = 0;
  y = 0;
  surface = 0;
}

function getX(p: Point) {
  return p.x;
}

getX(new Geometry());
*/

/*---------------------
  Class abstrait: c'est une modèle de class
-----------------------*/

abstract class Geometry {
  x = 0;
  y = 0;
  abstract surface(): number;
}

class Triangle extends Geometry {
  x = 2;
  y = 2;

  surface(): number {
    return 3;
  }
}

/* ----------------------
  Class static
-------------------------*/
/*
class Trigo {
  static origin = { x: 0, y: 0 };
}

Trigo.origin;
*/

class Trigo {
  static #origin: { x: number; y: number };

  static {
    Trigo.#origin = { x: 0, y: 0 };
  }
}

/* --------------------
  Interface
-----------------------*/
/*
interface Point {
    x: number;
    y: number;
}

class TwoDimensionPoint implements Point {
    x = 0;
    y = 0;
}

function draw(p: Point) {}

draw(new TwoDimensionPoint());
*/

/* ----------------------------------
  unknow : au lieu d'utilisé any on utilise unknow
-------------------------------------*/
/*
function a(arg: unknown) {
  // On met un Narrowing
  if (arg instanceof HTMLInputElement) {
    arg.value = "Hello world";
  }
}
*/

/* ----------------------
  Litéralle
-------------------------*/

//const a = { isPrivate: true as true, isPublic: false }; // Forcé isPrivate à true
//const a = { isPrivate: true as const, isPublic: false }; //isPrivate à constant
//const a = { isPrivate: true, isPublic: false } as const; //a devient un readonly
//const a = [1, 2, 3] as const;

/* -----------------------
  Tuple: c'est tableau de taille Fixe
--------------------------*/

// Type :
/*
type ListItem = [string, number];

const a: ListItem = ["Tomate", 2]; // Tuple: limité la taille d'un tableau
const b: ListItem = ["Pomme", 4]; // Tuple: limité la taille d'un tableau

// Fusion ou merge
function merge<T extends unknown[], U extends unknown[]>(
  a: T,
  b: U,
): [...T, ...U] {
  return [...a, ...b];
}

const c = merge(a, b);
*/

type ListItem = [string, number];
const a: ListItem = ["Tomate", 2]; // Tuple: limité la taille d'un tableau
const b: ListItem = ["Pomme", 4]; // Tuple: limité la taille d'un tableau

const c = [] as string[];

console.log(c[0]?.toUpperCase());

/* ---------------------
  Enum : pour enumérer quelque chose
------------------------*/

/*
enum STEPS {
  Intro,
  Selection,
  Panier,
  Paiement,
}
*/

// Enum constant
const enum STEPS {
  Intro,
  Selection,
  Panier,
  Paiement,
}

const step: STEPS = STEPS.Selection;

//console.log(step);
// Reverse mapping
//console.log(STEPS[step]);

/*-----------------------------
  Déclaration
-------------------------------*/
export class Point {
  x: number;
  y: number;
  constructor() {
    this.x = 0;
    this.y = 0;
  }

  move(x: number, y: number) {
    this.x += x;
    this.y += y;
    return this;
  }
}

/* -----------------------------
    Type utilitaire
--------------------------------*/
// Type utilitaire
/*
type AnimalOption = { nager: any } | { sauter: any };
type AnimalFormOptions<T> = T extends { nager: any } ? Poisson : Chat;

class Poisson {}
class Chat {}

function generator<T extends AnimalOption>(options: T): AnimalFormOptions<T> {
    if ("nager" in options) {
        return new Poisson();
    } else {
        return new Chat();
    }
}

const test = generator({ nager: "zaza" });
*/
/*
class Poisson {
    cri() {
        return false;
    }
}
class Chat {
    cri() {
        return "miaow";
    }
}

type AnimalCri<T> = T extends { cri: () => infer U } ? U : never;
type AA = AnimalCri<Chat>;
type BB = AnimalCri<Poisson>;
*/

// Utilise les Mapping

class FeatureFlags {
  env = "Hello";
  darkMode() {
    return true;
  }
  privateMode() {
    return true;
  }
  nsfwMode() {
    return true;
  }
}

type OptionsFlag<T> = {
  +readonly [key in keyof T as `get${Capitalize<string & key>}`]: T[key] extends () => boolean
    ? boolean
    : never;

  // Retirer env
  /*
    +readonly [key in keyof T as Exclude<
        key,
        "env"
    >]: T[key] extends () => boolean ? boolean : never;
    */
};

type AA = OptionsFlag<FeatureFlags>;

/* ---------------------------
  Opérateur Satisfies
------------------------------ */

type Colors = Record<string, [number, number, number] | string>;

function demo(c: Colors) {
  // Cette fonction fait des trucs
}

const colors = {
  blue: [0, 0, 255],
  red: "#FF000",
  green: [0, 255, 0],
} satisfies Colors;

colors.green.map((v) => v / 2);

demo(colors);
