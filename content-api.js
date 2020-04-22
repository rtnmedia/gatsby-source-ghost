const GhostContentAPI = require('@tryghost/content-api');

module.exports.configure = ({apiUrl, contentApiKey, version = `v3`}) => {
    return new GhostContentAPI({
        url: https://danielescobar.ghost.io,
        key: 97b3d8c50d91f091f883e9cd9d,
        version: v3
    });
};
