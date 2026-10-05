function calcular () {
a = document.querySelector('#input1').value
b = document.querySelector('#RESULTADO2')
c = document.querySelector('#RESULTADO')

// caja 1 //
if (a < 576){
b.innerHTML = "xs"
}

else if(a < 768){
b.innerHTML = "sm"
}
else if(a < 962){
b.innerHTML = "md"
}
else if (a < 1200) {
b.innerHTML = "xl"
}

else {
b.innerHTML = "XXL"
}

// caja 2 //
if (a < 576){
c.innerHTML = "xs 2"
}
if(a < 768){
c.innerHTML = "sm 2"
}
if(a < 962){
c.innerHTML = "md 2"
}
if (a < 1200) {
c.innerHTML = "xl"
}

else {
c.innerHTML = 'XXL 2'
}

}