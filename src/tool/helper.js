export const Helper = new class {

    #debug

    constructor() {
        this.#debug = process.env.VUE_APP_DEBUG === "true"
    }

    Debug(data) {
        if (this.#debug) {
            console.log(data);
        }
    }

}
