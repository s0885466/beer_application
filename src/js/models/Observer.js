export default class Observer {
    constructor(){
        this.subscribers = [];
    }

    subscribe(...fn) {
        fn.forEach(fn => this.subscribers.push(fn));
    }

    run(data) {
        this.subscribers.forEach(fn => fn(data));
    }
}