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
                genero = 'masculino'
                if(idade >=0 && idade < 10 ){
                        //criança
                        img.setAttribute('src', 'Foto_CriançaMenino.png')
                } else if(idade <= 21) {
                        //Jovem
                        img.setAttribute('src', 'Foto_JovemMenino.png')
                }else if (idade < 50) {
                        //Adulto
                        img.setAttribute('src', 'Foto_Homem.png')
                }else {
                        //Idoso
                        img.setAttribute('src', 'Foto_IdosoHomem.png')
                }
            } else if (fsex[1].checked) {
                genero = 'feminino'
                if(idade >=0 && idade < 10 ){
                    //criança
                    img.setAttribute('src', 'Foto_MeninaCriança.png')

                } else if(idade <= 21) {
                    //Jovem
                    img.setAttribute('src', 'Foto_JovemMenina.png')

                }else if (idade < 60) {
                    //Adulto
                    img.setAttribute('src', 'Foto_Mulher.png')

                }else {
                    //Idoso
                    img.setAttribute('src', 'Foto_IdosaMulher.png')
                }
            }
            
            res.innerHTML = `<strong>Detectamos pessoa do gênero ${genero} com ${idade} anos.</strong>`
            res.appendChild(img)
    }
}