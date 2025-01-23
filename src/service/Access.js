import {Axios} from "@/tool/axios";
import {Base64Format} from "@/tool/base64format";

export const Access = new class {

    #base = `${process.env.VUE_APP_API}/api/access`;

    #api = {
        add: `${this.#base}/add`,
        del: `${this.#base}/del`,
        set: `${this.#base}/set`,
        getList: `${this.#base}/getList`,
        get: `${this.#base}/get`,

    }

    async Add(request = {}) {
        return await Axios.Post(this.#api.add, {
            name: request.name,
            uri: request.uri,
            category: request.category,
            pid: request.pid,
            rank: request.rank,
        });
    }

}
