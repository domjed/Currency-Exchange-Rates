const path = require(`path`);

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
            '@api': path.resolve(__dirname, 'src/api'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@node_modules': path.resolve(__dirname, 'node_modules'),
            '@shared': path.resolve(__dirname, 'src/shared'),
        }
    },
};