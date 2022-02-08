export class ProductsModel {
    id: number
    name: string
    description: string
    price: number
    hour: number
    minutes: number
    cast: string

    constructor(){
        this.id = 0
        this.name = ""
        this.description = ""
        this.price = 0
        this.hour = 0
        this.minutes = 0
        this.cast = ""
    }
}

export class CartModel{
    id: number
    name: string
    price: number
    quantity: number

    constructor(){
        this.id = 0
        this.name = ""
        this.price = 0
        this.quantity = 0
    }
}
