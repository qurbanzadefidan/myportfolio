class Elma{
  name: string ;
  price: number ;

  constructor(name: string, price: number){
this.name = name;
this.price = price;

  }
  getValue(): number{
    return this.price;
  }
}
let qiymet = new Elma('nar', 3);
console.log(qiymet.name)
