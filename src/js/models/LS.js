export default class LS {
    constructor(name) {
        this.name = name;
    }

    isBeersLocalStorage() {
        return localStorage.getItem(this.name) ? true : false;
    };

    getArrFromLocalStorage() {
        if (localStorage.getItem(this.name) !== null) {
            return JSON.parse(localStorage.getItem(this.name));
        }
        return false;
    };

    addToLocalStorage(id) {
        if (!this.isBeersLocalStorage()){
            localStorage.setItem(this.name, JSON.stringify([id]));

        } else {
            let beers = this.getArrFromLocalStorage();
            if ( ! beers.includes(id)) {
                beers.push(id);
                localStorage.setItem(this.name, JSON.stringify(beers));
            }
        }
    };

    delFromLocalStorage(id) {
        let beers = this.getArrFromLocalStorage();
        const i = beers.findIndex((el) => el === id);
        if (i !== -1) {
            beers.splice(i, 1);
        }
        localStorage.setItem(this.name, JSON.stringify(beers));
    };

    delAllFromLocalStorage() {
        localStorage.removeItem(this.name);
    };

    isIdInLocalStorage(id) {
        if (this.isBeersLocalStorage()) {
            const beers = this.getArrFromLocalStorage();
            return beers.includes(id);
        }
        return false
    };
}





