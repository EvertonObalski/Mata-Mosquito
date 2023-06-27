
var altura = 0
var largura = 0
var vida = 1
var tempo = 15

var criaMoscaTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'dificil') {
    //1500
    criaMoscaTempo = 1500
} else if(nivel === 'dificil') {
    //1000
    criaMoscaTempo = 1000
} else if(nivel === 'chucknorris') {
    //750
    criaMoscaTempo = 750
}

function ajusteTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth

console.log(altura, largura)

}
ajusteTamanhoPalcoJogo()

var cronometro = setInterval(function() {
    
    tempo -= 1

    if(tempo <0) {
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

function posicaoRandomica() {

    // remover o mosquito anterior (caso exista)
    if(document.getElementById('mosquito')) {
    document.getElementById('mosquito').remove()

        //console.log('elemento selecionado foi: 'v' + vida)
        if(vida > 3) {
            window.location.href = 'fim_de_jogo.html'
        } else {
        document.getElementById('v' + vida).src= "imagens/coracao_vazio.png"

        vida++
    }
}

var posicaoX = Math.floor(Math.random() * largura) - 90
var posicaoY = Math.floor(Math.random() * altura) - 90

posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY  <  0 ? 0 : posicaoY

console.log(posicaoX, posicaoY)

// criar elemento HTML

var mosquito = document.createElement('img')
mosquito.src = 'imagens/mosca.png'
mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'
mosquito.id = 'mosquito'
mosquito.onclick = function() {
    this.remove()
}

document.body.appendChild(mosquito)

}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch(classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
        case 3:
            return 'mosquito4'
        case 4:
            return 'mosquito5'
      
       
    }

}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch(classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}