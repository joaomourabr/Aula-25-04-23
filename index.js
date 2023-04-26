function notaB1(){
    var prova = parseFloat(prompt('Digite sua nota da prova'))
    var trabalho = parseFloat(prompt('Digite sua nota da prova'))

        
          
          if(isNaN(prova)){
        alert('Nota Inválida')
        return
}
          if(isNaN(trabalho)){
        alert('Nota Inválida')
        return
}
    var media = (prova+trabalho)/2
    console.log('sua média é: '+media)
    if (media >= 7){
        console.log('Aprovado')
    }
    if (media <= 7){
        console.log('Reprovado')
    }
    var passar = (14 - media)
              console.log('falta para passar ' + media)
}
    