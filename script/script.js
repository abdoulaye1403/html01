// let Toure = 'Toure'
// let Doumbia = 'Doumbia'

// // dclarer la fontion

// function direBonjour(nom){
//                console.log("Bonjour M."+nom)
// }

// // appeler la fonction
// // direBonjour(Toure)
// // direBonjour(Doumbia)

// let sm = function somme(a,b){
//                return a + b
// }

// console.log(sm(4,5))

// class bankAccount{
//                constructor(owner,balance){
//                               this.owner = owner;
//                               this.balance = balance;
//                }

//                showBalance(){
//                   return  "votre solde est de :" + this.balance
//                }

//                depot(montant){
//                               this.balance = this.balance + montant;
//                               return "votre nouveau solde est de :" + this.balance;
//                }
// }

// let account = new bankAccount('Toure',20000);
// console.log(account.showBalance())
// console.log(account.depot(2000))

// fonction flechee
const somme = (a,b) =>  {
               return a + b
}

console.log(somme(4,7))

const factorielle = (entier) =>{
               if(entier <= 1) return 1
               else return entier * (factorielle(entier - 1))
}

console.log(factorielle(4))