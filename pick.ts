type User1 = {
  name: string;
  idade: number;
  email: string;
};

// Pick<type, keys>

type Keys = "name" | "idade";

const obrigatorio: Pick<User1, Keys> = {
    name: "eduardo",
    idade: 20
}

// Omit<type, keys>

type Keys1 = "idade";

const opcional: Omit<User1, Keys1> = {
    name: "Eduardo",
    email: "eduardo@gmail.com"
}