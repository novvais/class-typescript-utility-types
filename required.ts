type User = {
    id?: number, // Exemplo de quando usar o Partial
    nome: string,
    idade?:  number,
    email: string
}

const registerUser = ( user: Required<User> ) => {
    return user
}

const registerUser2 = ( user: Partial<User> ) => {
    return user
}

const edu: Readonly<User> = {
    nome: "Eduardo",
    email: "eduardo@gmail.com"
}

registerUser({
    id: 1,
    nome: "Edu",
    idade: 20,
    email: "eduardo@gmail.com"
})

registerUser2({
    nome: "Edu",
    email: "eduardo@gmail.com"
})
