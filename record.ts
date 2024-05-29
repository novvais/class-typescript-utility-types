// Record<keys, type>

type Car = {
    ano: number,
    cor: string
}

type Properties = "gol" | "cerato" | "versa"

const cars: Record<Properties, Car> = {
    gol: 
    {
        ano: 2010,
        cor: "Prato"
    },

    cerato: 
    {
        ano: 2022,
        cor: "Branco"
    },

    versa: 
    {
        ano: 2018,
        cor: "Marrom Acizentado"
    }
}
