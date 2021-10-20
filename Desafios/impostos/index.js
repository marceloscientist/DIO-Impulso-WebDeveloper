let wages = parseFloat(gets())
let mil = 1000 * 0.08 
let milQuinhentos = 1500.00 * 0.18 

    if(wages <= 2000.00) {
        resultado = 'Isento'
    } 
    if(wages > 4500.00) {
        resultado = mil + milQuinhentos + (wages - 4500) * 0.28
    } else if(wages > 3000.00) {
        resulta mil + (wages - 3000) * 0.18  
    } else {
        return (wages - 2000) * 0.08
    }

 = calculateTax(wages)

if(resultado) {
    console.log(`R$ ${resulado.toFixed(2)}`);
} else {
    console.log()
}