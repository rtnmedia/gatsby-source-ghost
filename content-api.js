const GhostContentAPI = require('@tryghost/content-api');

module.exports.configure = ({apiUrl, contentApiKey, version = `v3`}) => {
    return new GhostContentAPI({
        url: "https://danielescobar.ghost.io",
        key: "5e92b860cd06c500386ab397:687e56e80ef1f25c4251ac13a9d9930eb7b58e6aa40da80e516c74f1b1758b39",
        version: v3
    });
};
