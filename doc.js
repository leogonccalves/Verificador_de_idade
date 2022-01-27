function verificar() {
    var data = new Date ()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano ){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
            if (fsex[0].checked){
                genero = 'Homem'
                if(idade >=0 && idade < 10 ){
                        //criança
                        img.setAttribute('src', 'foto_criançaMenino.png')
                } else if(idade <= 21) {
                        //Jovem
                        img.setAttribute('src', 'foto_jovemMenino.png')
                }else if (idade < 50) {
                        //Adulto
                        img.setAttribute('src', 'foto_homem.png')
                }else {
                        //Idoso
                        img.setAttribute('src', 'foto_idosoHomem.png')
                }
            } else if (fsex[1].checked) {
                genero = 'Mulher'
                if(idade >=0 && idade < 10 ){
                    //criança
                    img.setAttribute('src', 'foto_meninaCriança.png')

                } else if(idade <= 21) {
                    //Jovem
                    img.setAttribute('src', 'foto_jovemMenina.png')

                }else if (idade < 60) {
                    //Adulto
                    img.setAttribute('src', 'foto_mulher.png')

                }else {
                    //Idoso
                    img.setAttribute('src', 'foto_idosaMulher.png')
                }
            }
            res.style.textAling = 'center'
            res.innerHTML = `<strong>Detectamos ${genero} com ${idade} anos.</strong>`
            res.appendChild(img)
    }
}