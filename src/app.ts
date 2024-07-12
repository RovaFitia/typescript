/* -------------------------
  Alias: préciser le type d'un variable
---------------------------*/

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

/* -------------------------
  Generics: préciser le type d'un retour d'une fonction
---------------------------*/

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

// Ici <Type extends { length: number }> est une contrainte : force le type du generic
function consoleSize<Type extends { length: number }>(arg: Type): Type {
  console.log(arg.length);
  return arg;
}
/* -------------------------
  Syntaxe de base
---------------------------*/
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
/*
const users: { firstName: string; [key: string]: string } = {
  firstName: "Rakoto",
  lastName: "Jean",
};
*/
const date: Date = new Date();
const cb: Function = (e: MouseEvent): void => {};

function prindId(id: number): void {}

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
