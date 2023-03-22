/* PRÁTICA GUIADA - Parte 1
Crie um sistema de cadastro de usuários que contenha:

1. Type Alias para uma pessoa (TPerson) com as propriedades id, name, email, password e role;
2. Type Aliases para 2 contas (TAdminAccount, TNormalAccount) com as propriedades account e permission;
3. Crie exemplos de usuários Admin e Normal;
*/

enum ROLE {
    ADMIN = "Admin",
    NORMAL = "Normal"
}

// 1
type TPerson = {
    id: string | number,
    name: string,
    email: string,
    password: string | number,
    role: ROLE
}
const Person = {
    id: '001',
    name: "Astrodev",
    email: "astrodev@labenu.com",
    password: "123456",
    role: ROLE.ADMIN
}

// 2
type TAdminAccount = {
    nickName: string,
    permission: boolean
}
type TNormalAccount = {
    nickName: string,
    permission: boolean
}

// 3
const userAdmin = {
    nickName: "ADMIN",
    permission: true
}
const userNormal = {
    nickName: "User007",
    permission: false
}

/* PRÁTICA GUIADA - Parte 2
Vamos continuar nosso sistema de cadastro de usuários criando:

1. Enum com valores ADMIN e NORMAL e atribua ã propriedade role do Tperson;
2. Tipo Intersection unindo: pessoa(TPerson) + permissão (ROLE);
3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;

*/ 

// 1
// enum ROLE {
//     ADMIN = "Admin",
//     NORMAL = "Normal"
// }

// 2
// TPerson
// TAdminAccouunt
// TNormalAccount

type TPersonAdmin = TPerson & TAdminAccount

const usuarioAdmin : TPersonAdmin = {
    id: 100,
    name: "Vitor",
    email: "vitor@gmail.com",
    password: "123456",
    role: ROLE.ADMIN,
    nickName: "Vitão",
    permission: true
}

type TPersonNormal = TPerson & TNormalAccount

const usuarioNormal : TPersonAdmin = {
    id: 110,
    name: "Nathalia",
    email: "nath@gmail.com",
    password: "123abc",
    role: ROLE.NORMAL,
    nickName: "Nath",
    permission: false
}

// 3
const arrayPersonRole: Array<TPersonAdmin | TPersonNormal> = [ usuarioAdmin, usuarioNormal]
// const arrayPersonRole: (TPersonAdmin | TPersonNormal)[] = [ usuarioAdmin, usuarioNormal]
console.log(arrayPersonRole)