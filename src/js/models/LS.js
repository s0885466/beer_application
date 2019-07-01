export default class LS {
    constructor(name) {
        this.name = name;
    }

    _getArrFromLocalStorage() {
        if (localStorage.getItem(this.name) !== null) {
            return JSON.parse(localStorage.getItem(this.name));
        }
        return false;
    };

    _addToLocalStorage(id) {
        if (!this.isBeersLocalStorage()){
            localStorage.setItem(this.name, JSON.stringify([id]));

        } else {
            let beers = this._getArrFromLocalStorage();
            if ( ! beers.includes(id)) {
                beers.push(id);
                localStorage.setItem(this.name, JSON.stringify(beers));
            }
        }
    };

    _delFromLocalStorage(id) {
        let beers = this._getArrFromLocalStorage();
        const i = beers.findIndex((el) => el === id);
        if (i !== -1) {
            beers.splice(i, 1);
        }
        localStorage.setItem(this.name, JSON.stringify(beers));
    };

    isBeersLocalStorage() {
        return localStorage.getItem(this.name) ? true : false;
    };

    delAllFromLocalStorage() {
        localStorage.removeItem(this.name);
    };

    isIdInLocalStorage(id) {
        if (this.isBeersLocalStorage()) {
            const beers = this._getArrFromLocalStorage();
            return beers.includes(id);
        }
        return false
    };

    toggle(id) {
        this.isIdInLocalStorage(id)
            ? this._delFromLocalStorage(id)
            : this._addToLocalStorage(id)
    }

}