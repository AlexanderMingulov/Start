function Calc() {
    this._result = null;
    this.getLustResult = () => this._result;
    

    this.sum =(a, b) => {
        this._result = a + b;
        console.log(`Sum of ${a} and ${b} equals ${this._result}`);
        return this._result;
    };
};
    this._result = null;
    this.getLustResult = () => this._result;
    this.dif =(a, b) => {
        this._result = a - b;
        console.log(`Dif of ${a} and ${b} equals ${this._result}`);
        return this._result;
};
    this._result = null;
    this.getLustResult = () => this._result;
    this.del =(a, b) => {
        this._result = a / b;
        console.log(`Del of ${a} and ${b} equals ${this._result}`);
        return this._result;
};

module.exports = Calc