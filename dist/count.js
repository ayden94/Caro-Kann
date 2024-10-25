export default class Counter {
    static number = 0;
    get number() {
        return Counter.number;
    }
    set number(value) {
        Counter.number = value;
    }
}
