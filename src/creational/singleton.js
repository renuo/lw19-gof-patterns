let Singleton = function () {
    let instance;

    function createInstance() {
        return new Object('I am the instance');
    }

    return {
        getInstance() {
            if (!instance) instance = createInstance();
            return instance;
        }
    };
};

const instance1 = Singleton.getInstance;
const instance2 = Singleton.getInstance;
console.log('Same instance?', instance1 === instance2);
