export const Aes = new class {

    Encode(data, k32, i16) {
        return Crypto.AES.encrypt(data, CryptoJS.enc.Utf8.parse(k32), {
            iv: CryptoJS.enc.Utf8.parse(i16), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7,
        }).toString();
    }

    Decode(data, k32, i16) {
        return CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(k32), {
            iv: CryptoJS.enc.Utf8.parse(i16), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7,
        }).toString(CryptoJS.enc.Utf8);
    }

}
