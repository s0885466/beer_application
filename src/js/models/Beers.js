export default class Beers {
    constructor(url){
        this.url = url;
    }

    getData(){
        //Обязательно вернуть промис, если этого не сделать ничего не работает
        return fetch(this.url)
            .then(response => {
                console.log('request status: ', response.status);
                if (response.ok) {
                    return response.json();
                }
                throw Error (`Неизвестный статус: ${response.status} ${response.statusText}`);
            })
            .then((result) => {
                this.data = result;
            })
    }
}