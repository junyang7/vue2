export const Base64Format = new class {

    Encode(data) {
        return data.replace(/\+/g, "-").replace(/\//g, "_").replace(/(=*$)/g, "");
    }

    Decode(data) {
        return data.replace(/-/g, "+").replace(/_/g, "/") + ("=".repeat(3 - (3 + data.length) % 4));
    }

}
