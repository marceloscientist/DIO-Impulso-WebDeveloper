
const superComparison = (a, b) => {
    let text = ""; 
    text += (a === b)? `Os números ${a} e ${b} são iguais. `: `Os números ${a} e ${b} não são iguais. `;  
    text += (a+b > 10)? `Sua soma é ${a+b}, que é maior que 10 `
            :(a+b < 10)? `Sua soma é ${a+b}, que é menor que 10 `
            :``;  
    text += (a+b > 20)? `Sua soma é ${a+b}, que é maior que 10 `
            :(a+b < 20)? `Sua soma é ${a+b}, que é menor que 10 `
            :``; 
} 

console.log(superComparison(1, 2));
