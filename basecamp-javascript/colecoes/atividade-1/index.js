/* 
Atividade 1: Maps
Crie uma função que retorna o nome dos membros de um Map 
que tem o papel 'ADMIN' no sistema.
*/

const users = new Map()
users.set('Oliver','regular');
users.set('Margit','admin');
users.set('regular', 'Clever', 'regular');
users.set('Monty','admin');
users.set('Seath','regular');
users.set('Beaver','regular');

const allAdmins = (map) => {
    let admins = []
    for (const [key, value] of users.entries()) 
        if(value == 'admin') admins.push(key); 
    return admins 
}

const admins = allAdmins(users).map(ad => console.log(ad))

