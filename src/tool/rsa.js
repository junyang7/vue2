export const Rsa = new class {

    Encode(data, pub) {
        let encrypt = new JSEncrypt();
        encrypt.setPublicKey(pub);
        return encrypt.encrypt(data);
    }

    Decode(data, pri) {
        let decrypt = new JSEncrypt();
        decrypt.setPrivateKey(pri);
        return decrypt.decrypt(data);
    }

}
