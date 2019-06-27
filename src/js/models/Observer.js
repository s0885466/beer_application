export default class Observer {
    constructor(){
        this.subscribers = [];
    }

    subscribe(fn) {
        this.subscribers.push(fn);
    }

    unSubscribe(fn) {
        this.subscribers.filter(el => el !== fn);
    }

    run(data) {
        this.subscribers.forEach(fn => fn(data));
    }
}