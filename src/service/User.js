import {Axios} from "@/tool/axios";
import {Base64Format} from "@/tool/base64format";

export const User = new class {

    #base = `${process.env.VUE_APP_API}/api/user`;

    #api = {
        register: `${this.#base}/register`,
        login: `${this.#base}/login`,
        search: `${this.#base}/search`,

    }

    async Register(request = {}) {
        return await Axios.Post(this.#api.register, {
            name: request.name,
            email: request.email,
            password: request.password,
        });
    }

    async Login(request = {}) {
        return await Axios.Post(this.#api.login, {
            email: request.email,
            password: request.password,
        });
    }

    async Search(request = {}) {
        return await Axios.Get(this.#api.search, request);
    }

}
