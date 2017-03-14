'use strict';
var GulpConfig = (function () {
    function gulpConfig() {


        this.sourceApp = 'src/';

        this.appTypeScript = [
            "src/**/*.extension.ts",
            "src/**/*.response.ts",
            "src/**/*.module.ts",
            "src/**/*.model.ts",
            "src/**/*.interface.ts",
            "src/**/*.service.ts"
        ];

        this.release = "./dist/";
    }

    return gulpConfig;
})();
module.exports = GulpConfig;
