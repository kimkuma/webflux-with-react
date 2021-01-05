module.exports = {
    webpack: function(config, env) {
        config.output.publicPath = env === 'development' ? '/' : '/static/';
        return config;
    }
};