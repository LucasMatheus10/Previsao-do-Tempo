const key = "8939a66bd58a4f48dcb9f74ddfa56f4d";

function printaDados(dados){ //coloca as informações buscadas na tela
    document.querySelector('.cidade').innerHTML = "Tempo em " + dados.name;
    document.querySelector('.temperatura').innerHTML = Math.floor(dados.main.temp) + "°C"; //math.floor arredonda
    document.querySelector('.legenda').innerHTML = dados.weather[0].description;
    document.querySelector('.umidade').innerHTML = "Umidade: " + dados.main.humidity + "%";
    document.querySelector('.img-clima').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

async function buscaInput(input){ //espera os dados serem buscados pela api no servidor, pega esses dados e joga num json
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}&lang=pt_br&units=metric`).then(out => out.json());
    printaDados(dados);
    console.log(dados);
}

function clique(){ //ao clicar no botão
    const input = document.querySelector('.entrada').value;
    buscaInput(input);
}
