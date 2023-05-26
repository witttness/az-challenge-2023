module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/assets/**/*",);
    eleventyConfig.addPassthroughCopy("./src/css/**/*",);
    eleventyConfig.addPassthroughCopy("./src/js/**/*",);
    eleventyConfig.addPassthroughCopy("./src/images/**/*",);

    eleventyConfig.addFilter("currency", async function (value) {
        // do some Async work
        return "$" + value.toFixed(2);
    });
    eleventyConfig.addFilter("footo", async function (value) {
        // do some Async work
        if (value && value.url)
            return value.url;
        return "https://dummyimage.com/450x300/dee2e6/6c757d.jpg";
    });
    eleventyConfig.addFilter("alta", async function (value) {
        // do some Async work
        if (value && value.alt)
            return value.alt;
        return "no description available";
    });

    eleventyConfig.addGlobalData('lastBuilt', () => {
        let now = new Date();
        return new Intl.DateTimeFormat(
            'en-US', { dateStyle: 'full', timeStyle: 'long' }
        ).format(now);
    });

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    }

};