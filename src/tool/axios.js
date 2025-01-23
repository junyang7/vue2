export const Axios = new class {

    async #request(request) {
        return await new Promise((resolve, reject) => {
            axios.defaults.withCredentials = "true";
            axios(request).then(res => {
                if (!res.hasOwnProperty("data")) {
                    Vue.prototype.$Message.error("响应数据必须字段缺失：data");
                    reject(res)
                    return;
                }
                if (!res.data.hasOwnProperty("code")) {
                    Vue.prototype.$Message.error("响应数据必须字段缺失：code");
                    reject(res)
                    return;
                }
                switch (parseInt(res.data.code)) {
                    case 0:
                        resolve(res.data.data);
                        break;
                    case 2:
                        window.location.replace(`/user/login?redirect=${encodeURIComponent(window.location.href)}`);
                        break;
                    default:
                        Vue.prototype.$Message.error(res.data.message + JSON.stringify(res.data.data));
                        Vue.prototype.$Spin.hide();
                        reject(res)
                        break;
                }
            }).catch(err => {
                Vue.prototype.$Message.error("网络异常");
                Vue.prototype.$Spin.hide();
                reject(err)
            });
        });
    }


    async Get(url, params) {
        return await this.#request(
            {
                method: "GET",
                headers: {"Content-Type": "application/x-www-form-urlencoded",},
                url: url,
                params: params,
            }
        );
    }

    async Post(url, data) {
        let fd = new FormData();
        for (let name in data) {
            fd.append(name, data[name]);
        }
        return await this.#request(
            {
                method: "POST",
                headers: {"Content-Type": "multipart/form-data",},
                url: url,
                data: fd,
            }
        );
    }

}
