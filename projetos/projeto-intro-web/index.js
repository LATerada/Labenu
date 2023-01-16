// // SEMANA 1
// // item: Filmes

// // const titulo
// // const anoLancamento
// // const nomeadoOscar

// const titulo1 = "O REGRESSO"
// const anoLancamento1 = 2015
// const nomeadoOscar1 = true

// const titulo2 = "MATRIX RESURRECTIONS"
// const anoLancamento2 = 2021
// const nomeadoOscar2 = false

// const titulo3 = "LA LA LAND: CANTANDO ESTACOES"
// const anoLancamento3 = 2016
// const nomeadoOscar3 = true

// // CALCULO DA MEDIA DE ANOS
// const mediaAnos = (anoLancamento1 + anoLancamento2 + anoLancamento3)/3
//     console.log(`CALCULO DA MEDIA DE ANOS: ${mediaAnos.toFixed(0)}`)

// // BOOLEANO SE TODOS OS FILMES FORAM NOMEADOS
// const nomeadosOscar = nomeadoOscar1 && nomeadoOscar2 && nomeadoOscar3
//     console.log(`BOOLEANO SE TODOS OS FILMES FORAM NOMEADOS: ${nomeadosOscar}`)

// //const atoresPrincipais
// const atoresPrincipais1 = ["Leonardo DiCaprio", "Tom Hardy", "Domhnall Gleeson"]
// const atoresPrincipais2 = ["Keanu Reeves", "Carrie-Anne Moss", "Hugo Weaving"]
// const atoresPrincipais3 = ["Emma Stone", "Ryan Gosling", "John Legend"]

// RELATORIO DOS FILMES
// console.log(`${titulo1}

// Ano de Lancamento: ${anoLancamento1}
// Nomeado ao Oscar? ${nomeadoOscar1}
// Atores principais: ${atoresPrincipais1}`)

// console.log(`${titulo2}

// Ano de Lancamento: ${anoLancamento2}
// Nomeado ao Oscar? ${nomeadoOscar2}
// Atores principais: ${atoresPrincipais2}`)

// console.log(`${titulo3}

// Ano de Lancamento: ${anoLancamento3}
// Nomeado ao Oscar? ${nomeadoOscar3}
// Atores principais: ${atoresPrincipais3}`)


// // SEMANA 2
let filme1 = {
    titulo: "O REGRESSO",
    anoLancamento: 2015,
    nomeadoOscar: true,
    atoresPrincipais: ["Leonardo DiCaprio", "Tom Hardy", "Domhnall Gleeson"],
    ganhadorOscar: true
}
let filme2 = {
    titulo: "MATRIX RESURRECTIONS",
    anoLancamento: 2021,
    nomeadoOscar: false,
    atoresPrincipais: ["Keanu Reeves", "Carrie-Anne Moss", "Hugo Weaving"],
    ganhadorOscar: false
}
let filme3 = {
    titulo: "LA LA LAND: CANTANDO ESTAÇÕES",
    anoLancamento: 2016,
    nomeadoOscar: true,
    atoresPrincipais: ["Emma Stone", "Ryan Gosling", "John Legend"],
    ganhadorOscar: true
}

const filmesNomeados = []
let filme

// function verificarFilmeNomeado (filme){
//     if(filme.nomeadoOscar){
//         filmesNomeados.push(filme)
//         console.log(`O filme ${filme.titulo} foi adicionado à lista de Filmes Nomeados ao Oscar`)
//     }else{
//         alert(`O filme ${filme.titulo} não foi adicionado`)
//     }
// }
// verificarFilmeNomeado(filme1)
// verificarFilmeNomeado(filme2)
// verificarFilmeNomeado(filme3)

// console.log(filmesNomeados)


// // SEMANA 3
// let string1Atores = ``
//     for(ator of filme1.atoresPrincipais){
//         if(filme1.atoresPrincipais.indexOf(ator) === filme1.atoresPrincipais.length -1){
//             string1Atores += `${ator}.`
//         }else{
//             string1Atores += `${ator}, `
//         }
//     }
// let string2Atores = ``
//     for(ator of filme2.atoresPrincipais){
//         if(filme2.atoresPrincipais.indexOf(ator) === filme2.atoresPrincipais.length -1){
//             string2Atores += `${ator}.`
//         }else{
//             string2Atores += `${ator}, `
//         }
//     }
// let string3Atores = ``
//     for(ator of filme3.atoresPrincipais){
//         if(filme3.atoresPrincipais.indexOf(ator) === filme3.atoresPrincipais.length -1){
//             string3Atores += `${ator}.`
//         }else{
//             string3Atores += `${ator}, `
//         }
//     }
// filme1.atoresPrincipais = string1Atores
// filme2.atoresPrincipais = string2Atores
// filme3.atoresPrincipais = string3Atores

let filmes = []
filmes.push(filme1,filme2,filme3)

// // teste do FOR
// filmes.push(serie = {
//     titulo: `GOT`,
//     ano: 2021,
//     temContinuacao: true,
//     atores: [`a`, `b`, `c`]
// })

// // FOR PARA EXIBIR O RELATORIO DO ARRAY DE FILMES
// for(filme of filmes){
//     for(propriedades in filme){
//         console.log(`${propriedades}: ${filme[propriedades]}`)
//     }
// }


// function retornarObjetoQueTemONomeNaString (arrayDeObj,string) {
//     for(objeto of arrayDeObj){
//         for(n in objeto){
//             if(objeto[n] === string){
//                 return objeto
//             }
//         }
//     }
//     if(objeto[n] !== string){
//         alert(`Nenhum item encontrado`)
//     }
// }
// console.log(retornarObjetoQueTemONomeNaString(filmes,"LA LA LAND: CANTANDO ESTAÇÕES"))


// // SEMANA 6
//Criar elemenento com o DOM:

filme1.link = "https://www.google.com/search?q=o+regresso&rlz=1C5CHFA_enUS896US897&ei=TeqcY5-UI6Td1sQP2K-bkAE&ved=0ahUKEwjf7rixkf_7AhWkrpUCHdjXBhIQ4dUDCA8&uact=5&oq=o+regresso&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIKCAAQRxDWBBCwAzIKCAAQRxDWBBCwAzIKCAAQRxDWBBCwAzIKCAAQRxDWBBCwAzIKCAAQRxDWBBCwAzIKCAAQRxDWBBCwAzIKCAAQRxDWBBCwAzIKCAAQRxDWBBCwAzIHCAAQsAMQQzIHCAAQsAMQQzINCAAQ5AIQ1gQQsAMYATINCAAQ5AIQ1gQQsAMYATINCAAQ5AIQ1gQQsAMYATIMCC4QyAMQsAMQQxgCMgwILhDIAxCwAxBDGAIyDAguEMgDELADEEMYAjIPCC4Q1AIQyAMQsAMQQxgCSgQIQRgASgQIRhgBUABYAGCeAmgBcAF4AIABAIgBAJIBAJgBAMgBEcABAdoBBggBEAEYCdoBBggCEAEYCA&sclient=gws-wiz-serp"
filme1.img1 = "./media/regresso-img1.webp"
filme1.img1Alt = "imagem de O Regresso com Leonardo DiCaprio"
filme1.img2 = "./media/regresso-img2.webp"
filme1.img2Alt = "imagem de O Regresso nas montanhas"

filme2.link = "https://www.google.com/search?q=matrix+resurrections&rlz=1C5CHFA_enUS896US897&ei=WuucY6POLO3c5OUPu66SmAs&ved=0ahUKEwij4-Sxkv_7AhVtLrkGHTuXBLMQ4dUDCA8&uact=5&oq=matrix+resurrections&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCC4QsQMQQzIHCAAQgAQQDTIHCAAQgAQQDTIHCAAQgAQQDTIHCAAQgAQQDTIHCAAQgAQQDTIHCAAQgAQQDTIHCAAQgAQQDTIHCAAQgAQQDTIECAAQQzoKCAAQRxDWBBCwAzoNCAAQ5AIQ1gQQsAMYAToPCC4Q1AIQyAMQsAMQQxgCOgwILhDIAxCwAxBDGAI6CgguELEDEIAEEA1KBAhBGABKBQhAEgExSgQIRhgBUIMJWIYjYOhMaAFwAXgAgAF1iAGpA5IBAzEuM5gBAKABAcgBD8ABAdoBBggBEAEYCdoBBggCEAEYCA&sclient=gws-wiz-serp",
filme2.img1 = "./media/matrixresurrections-img1.jpeg",
filme2.img1Alt = "imagem de Matrix Resurrection com Keanu e Carrie-Anne",
filme2.img2 = "./media/matrixresurrections-img2.jpeg",
filme2.img2Alt = "imagem de MAtrix Resurrections com Keanu",

filme3.link = "https://www.google.com/search?q=la+la+land&rlz=1C5CHFA_enUS896US897&ei=TeqcY5-UI6Td1sQP2K-bkAE&ved=0ahUKEwjf7rixkf_7AhWkrpUCHdjXBhIQ4dUDCA8&uact=5&oq=la+la+land&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzILCC4QgwEQsQMQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQguEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BAguEEM6BAgAEEM6CwgAEIAEELEDEIMBOhEILhCABBCxAxCDARDHARDRAzoICC4QgAQQsQM6DgguEIAEELEDEMcBENEDOggIABCABBCxAzoHCC4Q1AIQQzoLCC4QgAQQsQMQ1AI6CwguEIAEELEDEIMBOgoILhCABBDUAhAKOgsILhCABBDHARCvAToNCC4Q1AIQsQMQgAQQCjoNCC4QgAQQsQMQgwEQCjoKCAAQgAQQsQMQCjoTCC4QgAQQsQMQgwEQxwEQ0QMQCjoNCAAQgAQQsQMQgwEQCjoNCC4QgAQQxwEQrwEQCjoLCC4Q1AIQsQMQgARKBAhBGABKBAhGGABQAFj8FmDFGGgCcAF4AIAB1gGIAZMLkgEGMC4xMS4xmAEAoAEBwAEB&sclient=gws-wiz-serp",
filme3.img1 = "./media/lalaland-img2.webp";
filme3.img1Alt = "imagem de La La Land na cena do cinema";
filme3.img2 = "./media/lalaland-img1.png";
filme3.img2Alt = "imagem de La La Land na cena de dança";

let filme4 = {
    ...filme1,
    titulo: "FORREST GUMP - O CONTADOR DE HISTÓRIAS",
    anoLancamento: 1994,
    nomeadoOscar: true,
    atoresPrincipais: ["Tom Hanks" , "Robin Wright" , "Gary Sinise"],
    ganhadorOscar: true,
    link: "https://www.google.com/search?q=Forrest+Gump+-+O+Contador+de+Hist%C3%B3rias&rlz=1C5CHFA_enUS896US897&ei=6Le9Y7rVN7205OUP266UOA&ved=0ahUKEwi66fb72b38AhU9GrkGHVsXBQcQ4dUDCA8&uact=5&oq=Forrest+Gump+-+O+Contador+de+Hist%C3%B3rias&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCC4QgAQyBQgAEIAEMgYIABAWEB4yBggAEBYQHjIICAAQFhAeEA9KBAhBGABKBAhGGABQAFgAYN8CaABwAXgAgAFxiAFxkgEDMC4xmAEAoAECoAEBwAEB&sclient=gws-wiz-serp#wptab=si:AEcPFx5Jd080EqmN88ELRir0_sK8M-K3U1F-q-s25Ft0XfAOogXKGxCy-C-DPoKZ_5Dm36pceHpllg_pVoCXfm_o9WJUUVBqJdfkvaQ5fUYv4lEJOespCH8%3D",
    img1: "./media/forrestgump-img1.webp",
    img1Alt: "imagem de Forrest Gump no banco",
    img2: "./media/forrestgump-img2.jpeg",
    img2Alt: "imagem de Forrest Gump correndo na estrada",
}

let filme5 = {
    ...filme1,
    titulo: "CISNE NEGRO",
    anoLancamento: 2010,
    nomeadoOscar: true,
    atoresPrincipais: ["Natalie Portman" , "Mila Kunis" , "Vincent Cassel"],
    ganhadorOscar: true,
    link: "https://www.google.com/search?q=Cisne+Negro+filme&rlz=1C5CHFA_enUS896US897&biw=1440&bih=763&ei=vcC9Y8HwILW35OUPvO-h8A8&ved=0ahUKEwiBw_Cx4r38AhW1G7kGHbx3CP4Q4dUDCA8&uact=5&oq=Cisne+Negro+filme&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzoKCAAQRxDWBBCwA0oECEEYAEoECEYYAFCJBljMKGDJK2gBcAF4AIABZ4gBswSSAQM1LjGYAQCgAQHIAQTAAQE&sclient=gws-wiz-serp#wptab=si:AEcPFx5rOo4l6GpHkaYTbTagJIySDKM_T73FUR8btmDh7OQ_OPe9k4KwJls6rMUhNKotqvHGHp8nE7XbvqDOM-54r6JZmG4iM8JB5DR6WjT2I-bLToo7CIU1a6KKcCzvTb9Gn8RxI1rqwIRF0GuY7uhgrr7R11NQAA%3D%3D" ,
    img1: "./media/cisnenegro-img1.png",
    img1Alt: "imagem de Cisne Negro",
    img2: "./media/cisnenegro-img2.webp",
    img2Alt: "imagem de Cisne Negro",
}

let filme6 = {
    ...filme1,
    titulo: "O FABULOSO DESTINO DE AMÉLIE",
    anoLancamento: 2001,
    nomeadoOscar: true,
    atoresPrincipais: ["Audrey Tautou" , "Mathieu Kassovitz" , "Rufus"],
    ganhadorOscar: false,
    link: "https://www.google.com/search?q=am%C3%A9lie+filme&bih=763&biw=1440&rlz=1C5CHFA_enUS896US897&hl=en-US&ei=U8O9Y7RCpYbk5Q_kmbDQAQ&ved=0ahUKEwj0t6Xt5L38AhUlA7kGHeQMDBoQ4dUDCA8&uact=5&oq=am%C3%A9lie+filme&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeOgoIABBHENYEELADOgcILhCwAxBDOgcIABCwAxBDOgUIABCABDoJCAAQFhAeEPEEOgUILhCABDoECAAQQzoLCC4Q1AIQgAQQ6gQ6CAguEIAEENQCOhYILhDUAhCABBDqBBDcBBDeBBDgBBgBOgUIABCRAjoICC4Q1AIQgAQ6CwguEIAEENQCEOoEOggIABAWEB4QCjoWCC4QgAQQ1AIQ6gQQ3AQQ3gQQ4AQYAUoECEEYAEoECEYYAVDxBVjwUmDZW2gDcAF4AIABiQGIAboMkgEEMC4xNJgBAKABAcgBCsABAdoBBggBEAEYFA&sclient=gws-wiz-serp#wptab=si:AEcPFx5Jd080EqmN88ELRir0_sK8N8mBMbXJ1kmCP2I4UWB8Dle-ZRLX8VAOVSlb1nGKilSDMpQ939vJwW0_DRFI7589zfo5zafWoozfcWwuq9P7ZQ2Ipe3b2uTZy0g-AIGcdTGytU-4",
    img1: "./media/ameliepoulain-img1.jpeg",
    img1Alt: "imagem de O Fabuloso Destino de Amélie com guarda-chuva",
    img2: "./media/ameliepoulain-img2.jpeg" ,
    img2Alt: "imagem de O Fabuloso Destino de Amélie",
}

let filme7 = {
    ...filme1,
    titulo: "PEQUENA MISS SUNSHINE",
    anoLancamento: 2006,
    nomeadoOscar: true,
    atoresPrincipais: ["Abigail Breslin" , "Greg Kinnear" , "Toni Collette"],
    ganhadorOscar: true,
    link: "https://www.google.com/search?gs_ssp=eJzj4tTP1TfIMKwwTTNg9BItSC0sTc1LVMjNLC5WKC7NK87IzEsFALpBC6M&q=pequena+miss+sunshine&rlz=1C5CHFA_enUS896US897&oq=pequena+&aqs=chrome.1.69i57j46i67i433j46i131i433i512l2j0i512j46i512l2j0i512l2.3509j0j15&sourceid=chrome&ie=UTF-8" ,
    img1: "./media/pequenamiss-img1.webp",
    img1Alt: "imagem de Pquena Miss Sunshine",
    img2: "./media/pequenamiss-img2.jpeg",
    img2Alt: "imagem de Pquena Miss Sunshine",
}

let filme8 = {
    ...filme1,
    titulo: "QUESTÃO DE TEMPO",
    anoLancamento: 2013,
    nomeadoOscar: false,
    atoresPrincipais: ["Domhnall Gleeson" , "Rachel McAdams" , "Bill Nighy"],
    ganhadorOscar: false,
    link:"https://www.google.com/search?q=about+time&rlz=1C5CHFA_enUS896US897&oq=about+time&aqs=chrome.0.0i271j46i131i433i512j69i59j0i512l6j46i512.6344j1j4&sourceid=chrome&ie=UTF-8",
    img1: "./media/questao de tempo-img2.jpg",
    img1Alt: "imagem de Questao de Tempo cena pai e filho",
    img2: "./media/questaodetempo-img1.jpeg",
    img2Alt: "imagem de Questao de Tempo cena do primeiro encontro",
}

filmes.push(filme4,filme5,filme6,filme7,filme8)
// //MEDIA DOS ANOS DE LANCAMENTO:
    let somaAnos = 0
    let fator = 0
    let mediaAnos = 0

    for(filme of filmes){
        somaAnos += filme.anoLancamento
        fator ++
        mediaAnos = somaAnos / fator
    }
    console.log(`A MÉDIA DOS ANOS DE LANCAMENTOS É: ${mediaAnos.toFixed()}`)


// //FUNCAO QUE RETORNA RELATORIO DE OBJETO
    const retornarRelatorio = (objeto) => {
        console.log(`
        Imprimindo relatório de filmes:`)
        for(chave in objeto){
            console.log(`${chave}: ${objeto[chave]}`)
        }
        console.log(`
        `)
    }

    for(filme in filmes){
        retornarRelatorio(filmes[filme])
    }

// //CRIANDO CARDS COM OS OBJETOS CONTIDOS NO ARRAY COM O DOM.
    const mainFilms = document.getElementById("main-filmes")

    for(filme of filmes){
        const section = document.createElement("section");
        section.setAttribute("class","filme");
        
        const imgGoldOscar = document.createElement("img");
        if(filme.ganhadorOscar === true){
            const imgGoldOscar = document.createElement("img");
            imgGoldOscar.setAttribute("id","oscar-gold-icon");
            imgGoldOscar.setAttribute("src","./media/oscar-gold.png");
            imgGoldOscar.setAttribute("alt", "Ocar icon");
            section.insertAdjacentElement("beforeend", imgGoldOscar);
        }else{
            const imgGoldOscar = document.createElement("img");
            imgGoldOscar.setAttribute("id","oscar-gold-icon");
            imgGoldOscar.setAttribute("src","./media/oscar-gold.png");
            imgGoldOscar.setAttribute("alt", "Ocar icon");
            section.insertAdjacentElement("beforeend", imgGoldOscar);
            imgGoldOscar.style.display = "none"
        }
        
        const h2FIlmTitle = document.createElement("h2");
        h2FIlmTitle.setAttribute("class", "film-card-title");
        const aTitleLink = document.createElement("a");
        aTitleLink.setAttribute("class", "film-title");
        aTitleLink.setAttribute("href", filme.link);
        aTitleLink.setAttribute("target", "_blank");
        aTitleLink.innerHTML = filme.titulo
        h2FIlmTitle.insertAdjacentElement("beforeend", aTitleLink);
        section.insertAdjacentElement("beforeend", h2FIlmTitle);

        const ulFilmInfo = document.createElement("ul");
        ulFilmInfo.setAttribute("class","film-info");
        const liAnoLancamento = document.createElement("li");
        const tagIAno = document.createElement("i");
        tagIAno.innerHTML = filme.anoLancamento;
        liAnoLancamento.innerHTML = " Ano de lançamento: "
        liAnoLancamento.appendChild(tagIAno)
        ulFilmInfo.insertAdjacentElement("beforeend", liAnoLancamento)
        section.insertAdjacentElement("beforeend", ulFilmInfo)

        const liNomeadoOscar = document.createElement("li");
            if(filme.nomeadoOscar === true){
                liNomeadoOscar.setAttribute("class","filme-nomeado")
                const tagIAnoOscar = document.createElement("i");
                    tagIAnoOscar.innerHTML = filme.anoLancamento + 1;
                liNomeadoOscar.innerHTML = "Nomeado ao Oscar de "
                liNomeadoOscar.appendChild(tagIAnoOscar)
            }else{
                liNomeadoOscar.setAttribute("class","filme-nao-nomeado")
                section.style.display = "none"
            }
        ulFilmInfo.insertAdjacentElement("beforeend", liNomeadoOscar)

        const liAtoresPrincipais = document.createElement("li");
        liAtoresPrincipais.innerHTML = "Atores principais:"
        const ulAtores = document.createElement("ul")
        ulAtores.setAttribute("class","actors-info")
            for (ator in filme.atoresPrincipais){
                const liAtor = document.createElement("li")
                const tagIAtor = document.createElement("i")
                tagIAtor.innerHTML = filme.atoresPrincipais[ator]
                liAtor.appendChild(tagIAtor)
                ulAtores.appendChild(liAtor)
            }
        liAtoresPrincipais.insertAdjacentElement("beforeend", ulAtores)
        ulFilmInfo.insertAdjacentElement("beforeend",liAtoresPrincipais)

        const img1 = document.createElement("img");
        img1.setAttribute("class", "img-1");
        img1.setAttribute("src", filme.img1);
        img1.setAttribute("alt" , filme.img1Alt);
        section.insertAdjacentElement("beforeend", img1);

        const img2 = document.createElement("img");
        img2.setAttribute("class", "img-2");
        img2.setAttribute("src", filme.img2);
        img2.setAttribute("alt" , filme.img2Alt);
        section.insertAdjacentElement("beforeend", img2);
        
        mainFilms.insertAdjacentElement("beforeend", section);
    }

    let filmeInput = document.getElementById("film-input");
    const sectionFilm = document.getElementsByClassName("filme");
    const mensagemEscondida = document.getElementById("hidden-message");
    const footer = document.getElementById("footer");
    const arrayDisplay = []
    const arrayDisplayNone = []
    // console.log(sectionFilm)

    const searchFilm = () => {
        mensagemEscondida.style.display = "none"

        if(filmeInput.value == ""){
            alert("Por favor, digite algum caracter para gerar pesquisa.")
        }

        //primeiro filtrar os filmes q n podem ser pesquisados,pois nao sao nomeados
        // segundo é fazer aparecer somente os filmes com as letras e palavras que estao inclusas nos titulos
        for(title of sectionFilm){
            // para conseguir chamar no if, todos os itens precisavam ter as mesmas condicoes de ter o mesmo length e class, pq se nao dá erro de o if nao encontrar o esperado na posicao determinada. 
            //todas as sections tem o mesmo numero de itens/tags, porem o nome da classe é o diferencial.
            if(title.children[2].children[1].className == "filme-nomeado" ){
                // console.log(title.children[1].innerText, "pode aparecer na TextTrackList, pois possui a classe: 'filme-nomeado'")
                    if(title.children[1].innerText.includes(filmeInput.value.toLocaleUpperCase())){
                        // console.log(title.children[1].innerText,'(DISPLAY "")')
                        title.style.display = ""

                        arrayDisplay.push(title.children[1].innerText)
                    }else if(title.children[1].innerText.includes(filmeInput.value.toLocaleUpperCase()) === false){
                        title.style.display = "none"
                        // console.log(title.children[1].innerText, "-- DISPLAY NONE--")

                        arrayDisplayNone.push(title.children[1].innerText)
                        if(arrayDisplayNone.length === 6){
                            mensagemEscondida.style.display = "inherit"
                            console.log("----- NENHUM FILME FOI ENCONTRADO -----")
                        }
                    }
            }else{
                title.style.display = "none"
                // console.log(title.children[1].innerText, "entrou no if, pois nao possui a classe: 'filme-nomeado',por isso nao aparece na tela")
            }
        }

        console.log("O input procurado foi:",filmeInput.value.toUpperCase())
        console.log("Lista de filmes que nao condizem com o input:",arrayDisplayNone)
        arrayDisplayNone.splice(0,6)
        filmeInput.value = ""
    }

// // Funcao para buscar palavra e aparecer item quando apertar tecla com onkeyup:
    // const searchFilmButton = (event) => {
    //     event.preventDefault();
    //     mensagemEscondida.style.display = "none"

    //     for(title of sectionFilm){
    //         if(title.children[2].children[1].className == "filme-nomeado" ){
    //                 if(title.children[1].innerText.includes(filmeInput.value.toLocaleUpperCase())){
    //                     title.style.display = ""
    //                 }else if(title.children[1].innerText.includes(filmeInput.value.toLocaleUpperCase()) === false){
    //                     title.style.display = "none"

    //                     arrayDisplayNone.push(title.children[1].innerText)
    //                     if(arrayDisplayNone.length === 6){
    //                         mensagemEscondida.style.display = "inherit"
    //                         console.log("----- NENHUM FILME FOI ENCONTRADO -----")
    //                     }
    //                 }
    //         }else{
    //             title.style.display = "none"
    //         }
    //     }
    //     console.log("O input procurado foi:",filmeInput.value.toUpperCase())
    //     console.log("Lista de filmes que nao condizem com o input:",arrayDisplayNone)
    //     arrayDisplayNone.splice(0,6)
    //     filmeInput.innerHTML = ""
    // }

// //Funcao para limpar o campo de pesquisa:
    // const clearInput = (event) => {
    //     event.preventDefault();
    //     filmeInput.value = ""
    //     mensagemEscondida.style.display = "none"
    //     footer.style.display = "flex"

    //     for(title of sectionFilm){
    //         if(title.children[2].children[1].className == "filme-nomeado" ){
    //                 if(title.children[1].innerText.includes(filmeInput.value.toLocaleUpperCase())){
    //                     // console.log(title.children[1].innerText,'(DISPLAY "")')
    //                     title.style.display = ""
    //                 }
    //         }else{
    //             title.style.display = "none"
    //         }
    //     }
    // }