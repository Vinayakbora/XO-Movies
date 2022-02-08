import { Component } from '@angular/core';
import { CartModel, ProductsModel } from './DataModel/products-model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'ecom';
  public search: any = '';
  query:string="";

  productStock: ProductsModel[] = [

  {id: 1, name: "Django Unchained", description: "Western/Action ", cast: "Jamie Foxx, Leonardo DiCaprio, Samuel L. Jackson" ,hour: 2, minutes: 45, price: 50},
  {id: 2, name: "Forest Gump", description: "Drama/Romance",cast: "Tom Hanks, Robin Wright, Gary Sinise" ,hour: 2, minutes: 22, price: 30},
  {id: 3, name: "The Shawshank Redemption", description: "Drama/Crime",cast: "Morgan Freeman, Tim Robbins" ,hour: 2, minutes: 22, price: 30},
  {id: 4, name: "Avengers: Endgame", description: "Action/Sci-fi",cast: "Robert Downey Jr. , Chris Evans, Chris Hemsworth" ,hour: 3, minutes: 2, price: 100},
  {id: 5, name: "Spider-Man: No Way Home", description: "Action/Adventure",cast: "Tom Holland, Zendaya, Tobey Maguire, Andrew Garfield" , hour: 2, minutes: 28, price: 100},
  {id: 6, name: "Superbad", description: "Comedy/Teen", cast: "Jonah Hill, Michael Cera, Seth Rogen" ,hour: 1, minutes: 53, price: 30},
  {id: 7, name: "Fight Club", description: "Thriller/Drama", cast: "Brad Pitt, Edward Norton, Jared Leto" , hour: 2, minutes: 19, price: 50},
  {id: 8, name: "The Godfather", description: "Crime/Drama ", cast: "Marlon Brando, Al Pacino, James Caan" ,hour: 2, minutes: 55, price: 50},
  {id: 9, name: "The Dark Knight", description: "Action/Crime",cast: "Chritian Bale, Heath Ledger, Aaron Eckhart" ,hour: 2, minutes: 32, price: 100},
  {id: 10, name: "Pulp Fiction", description: "Drama/Crime",cast: "John Travolta, Uma Thurman, Samuel L. Jackson" ,hour: 2, minutes: 34, price: 30},
  {id: 11, name: "Inception", description: "Action/Sci-fi",cast: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page" ,hour: 2, minutes: 28, price: 50},
  {id: 12, name: "The Matrix", description: "Action/Sci-fi",cast: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss" , hour: 2, minutes: 16, price: 50},
  {id: 13, name: "Se7en", description: "Crime/Mystery", cast: "Morgan Freeman, Brad Pitt, Kevin Spacey" ,hour: 2, minutes: 7, price: 30},
  {id: 14, name: "Interstellar", description: "Adventure/Sci-fi", cast: "Matthew McConaughey, Anne Hathaway, Jessica Chastain" , hour: 2, minutes: 49, price: 50},
  {id: 15, name: "Parasite", description: "Drama/Thriller ", cast: "Kang-ho Song, Sun-kyun Lee, Yeo-jeong Cho" ,hour: 2, minutes: 12, price: 50},
  {id: 16, name: "The Prestige", description: "Mystery/Thriller",cast: "Christian Bale, Hugh Jackman, Scarlett Johansson" ,hour: 2, minutes: 10, price: 50},
  {id: 17, name: "3 Idiots", description: "Comedy/Romance",cast: "Aamir Khan, R. Madhavan, Sharman Joshi" ,hour: 2, minutes: 51, price: 30},
  {id: 18, name: "Main Hoon Na", description: "Action/Romance",cast: "Shah Rukh Khan, Jayed Khan, Suniel Shetty " ,hour: 2, minutes: 59, price: 30},
  {id: 19, name: "Swades", description: "Musical/Drama",cast: "Shah Rukh Khan, Gayatri Joshi" , hour: 3, minutes: 9, price: 30},
  {id: 20, name: "Jurassic Park", description: "Sci-fi/Action ", cast: "Sam Neill, Jeff Goldblum, Laura Dern" ,hour: 2, minutes: 7, price: 100},

]

  cartArr: CartModel[] = []
  cartNotVisible = true
  alertVisible = false


  total = 0
  discount = 0
  grandTotal = 0


  addTOCart(btn: HTMLButtonElement){
    var id = btn.id
    var idNo = +id

    if(this.cartArr.some(el => el.id === idNo)){
      var index = this.cartArr.findIndex(e => e.id === idNo)
      this.cartArr[index].quantity = this.cartArr[index].quantity + 1
    }
    else{
      var newCartProduct: CartModel = {id: idNo, name: this.productStock[idNo - 1].name, price: this.productStock[idNo - 1].price, quantity: 1}
      this.cartArr.push(newCartProduct)
    }

    this.totalPrice()
    this.cartNotVisible = false
  }

  totalPrice(){
    this.total = 0
    this.discount = 0
    this.grandTotal = 0
    for(let prod of this.cartArr){
      var price = prod.quantity * prod.price
      this.total = this.total + price

      if( this.total>100 && this.total<=200)
      {
        this.discount=  (this.total*0.1) 
      }
      else if(this.total>200 && this.total<=500)
      {
        this.discount = (this.total*0.2) 
      }
      else if(this.total>500 && this.total<1000)
      {
        this.discount =  (this.total*0.3) 
      }
      else if (this.total>=1000)
      {
        this.discount =  (this.total*0.5) 
      }

      this.grandTotal = this.total - this.discount
    }
  }

  deleteFormCart(btn: HTMLButtonElement){
    var idP = +btn.id
    var index = this.cartArr.findIndex(e => e.id === idP)
    if(index !== -1){
        this.cartArr.splice(index,1)
    }

    this.totalPrice()
    if(this.cartArr.length === 0){
      this.cartNotVisible = true
    }
  }

  increaseProd(btn: HTMLButtonElement){
    var idP = +btn.id
    var index = this.cartArr.findIndex(e => e.id === idP)
    this.cartArr[index].quantity = this.cartArr[index].quantity + 1

    this.totalPrice()
  }

  decreaseProd(btn: HTMLButtonElement){
    var idP = +btn.id
    var index = this.cartArr.findIndex(e => e.id === idP)
    var chk = this.cartArr[index].quantity - 1
    if(chk === 0){
      this.deleteFormCart(btn)
    }else{
      this.cartArr[index].quantity = this.cartArr[index].quantity - 1
    }

    this.totalPrice()
    if(this.cartArr.length === 0){
      this.cartNotVisible = true
    }
  }

  alertFunc(){
    this.alertVisible = true
    this.cartArr.length === 0
    this.cartNotVisible = true
  }
}
