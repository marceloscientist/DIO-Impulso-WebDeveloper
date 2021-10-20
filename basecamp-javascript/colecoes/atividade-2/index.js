/* 

Atividade 2: Sets
Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], 
retorne outro array apenas com valores únicos.

*/

const arr = [30, 30, 40, 5, 223, 2049, 3034, 5];
const arrUnico = (arr) => {
    const unico = new Set(arr)
    return [... unico]
}
console.log(arrUnico(arr))

