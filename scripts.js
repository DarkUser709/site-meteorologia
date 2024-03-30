const API = ("0838cca3f1f273fa46c0e95f4ecbe01f")

function colocarDadosNaTela(dados){
    document.querySelector(".municipio").innerHTML = "Tempo em " + dados;
    document.querySelector(".clima").innerHTML =Math.floor (cidadeInput.main.temp) + "ºC"
   
    
}

//quando clica no botão
async function cliqueiNoBotao(){
    const cidadeInput = document.querySelector(".cidade").value
    let cidadeOBJ = await buscarCidade(cidadeInput);//pega o dado do input e chama a api, passando o dado
    console.log(cidadeOBJ.name);
    colocarDadosNaTela(cidadeOBJ.name); 
}


async function buscarCidade(cidade){
    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API}&lang=pt_br&units=metric`)
        .then(resposta => resposta.json());
    return dados;
}
