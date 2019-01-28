
class Person {
    constructor(props) {
        super();

        const { name } = props;

        this.name = name;
    }

    hello() {
        console.log(this.name);
    }
}

const p = new Person({ name: 'Harry' });

export default p;