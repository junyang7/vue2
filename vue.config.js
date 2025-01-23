const {defineConfig} = require("@vue/cli-service")
module.exports = defineConfig({
    transpileDependencies: true,
    productionSourceMap: false,
    lintOnSave: false,
    configureWebpack: {
        externals: {
            "vue": "Vue",
            "vue-router": "VueRouter",
            "view-design": "*",
            "axios": "axios",
            "moment": "moment",
            "lodash": "_",
            "jsencrypt": "JSEncrypt",
            "crypto-js": "CryptoJS",
            "echarts": "*",
            "clipboard": "ClipboardJS",
            "ace": "ace",
        }
    }
})
