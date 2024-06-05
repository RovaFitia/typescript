const a: string = "Hello world"
const b: number = 3
const c: boolean = true
const d: string[] = ['Jao', 'koto', 'Joe']
const e: number[] = [12, 15.5, 14]
const f: any[] = ["Table", 12]  // any type : n'importe quoi 
const g: any = "zezez"
//Objet : le ?: veut dire optionnelle
const users: {firstName: string, [key: string]: string} = {firstName: "Rakoto", lastName: "Jean"}
const date: Date = new Date()
const cb: Function = (e: MouseEvent):void => {

}

function prindId(id: number): void {

}
/* const compteur = document.querySelector('#compter')
let i = 0 

const increment = (e) => {
    i ++ 
    compteur.querySelector('span').innerText = i.toString()
}

compteur.addEventListener('click', increment)
*/