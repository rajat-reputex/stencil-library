import { applyPolyfills, defineCustomElements, } from "reputex-stencil-library/loader";
export const ComponentLibrary = {
    async install() {
        applyPolyfills().then(() => {
            defineCustomElements();
        });
    },
};
//# sourceMappingURL=plugin.js.map