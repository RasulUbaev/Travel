var plan= (500) 
var planSwm=(5550305)
var hotel=(250)
var hotelSwm=(2775152.5)
var museum=(120)
var museumSwm=(1469734.8)
var result=(planSwm+hotelSwm+museumSwm)
var total=result
var fName=prompt("Ismingizni kiriting!")
var salary = Number(prompt (`${fName} Assalomu alaykum! Sayohat qilish uchun qancha pulingiz bor?`))

console.log (total);
let p=document.querySelector(".positive")
let p2=document.querySelector(".negative");

if (total <= salary) {
    p.innerHTML=`${fName} sizda sayohat qilishga yetarli mablag' bor. Sizga oq yol!`;
    p2.innerHTML="";
} 
  else {
    p2.innerHTML=`${fName} sayohat qilish uchun pulingiz etarli emas.`;
    p.innerHTML="";
}











