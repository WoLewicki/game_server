function goToUrl(url = ''){
    console.log('http://127.0.0.1:5000' + url);
    document.location.href = 'http://127.0.0.1:5000' + url;
}

function goToEskulapUrl(url = ''){
    console.log('http://127.0.0.1:5000/eskulap' + url);
    document.location.href = 'http://127.0.0.1:5000/eskulap' + url;
}

function goToGamesUrl(url = ''){
    console.log('http://127.0.0.1:5000/games' + url);
    document.location.href = 'http://127.0.0.1:5000/games' + url;
}