function Click() {
    this.observers = [];
}

Click.prototype = {
    subscribe: function (fn) {
        this.observers.push(fn);
    },

    unsubscribe: function (fn) {
        this.observers = this.observers.filter(item => item !== fn);
    },

    fire: function (o, thisObj) {
        let scope = thisObj;
        this.observers.forEach(function (item) {
            item.call(scope, o);
        });
    }
};

const clickHandler = (item) => {
    console.log('fired: ', item)
};

const click = new Click();
click.subscribe(clickHandler);
click.fire('event #1');
click.unsubscribe(clickHandler);
click.fire('event #2');
click.subscribe(clickHandler);
click.fire('event #3');
