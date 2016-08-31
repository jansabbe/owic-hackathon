class Sjoko {
    constructor(public name:string) {

    }

    hello() {
        alert(`Sjoko ${this.name}`)
    }
}

const bla = new Sjoko("Banaan")
bla.hello();