const http = new XMLHttpRequest();
const url = 'https://api.thecatapi.com/v1/images/search?limit=10&api_key=live_dFGe3Ly76n5FRtPCivNhBeQHEyKyNVm79lTtO1YWLHw90r9L1jsS7OAk701Eumf2';
http.open("GET", url);
http.send();


http.onreadystatechange = function() {
    if(this.readyState == 4) {
        let response = JSON.parse(http.responseText);
        for(const cat of response) {
            document.querySelector('.cats').innerHTML += `
            <img src="${cat.url}" />
            `;
        }
    }
}