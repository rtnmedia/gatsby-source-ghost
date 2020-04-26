const GhostContentAPI = require('@tryghost/content-api');

module.exports.configure = ({apiUrl, contentApiKey, version = `v3`}) => {
    return new GhostContentAPI({
        url: "https://danielescobar.ghost.io",
        key: "ea69f32f02c921b60bd4fd9683",
        version: v3
    });
};
