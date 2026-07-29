module.exports = function (eleventyConfig) {
  const pathPrefix = process.env.ELEVENTY_PATH_PREFIX || "/";

  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/public": "." });

  eleventyConfig.addCollection("research", (collectionApi) =>
    collectionApi.getFilteredByGlob("src/research/*.md").sort((a, b) =>
      b.date - a.date
    )
  );

  eleventyConfig.addFilter("readableDate", (date) =>
    new Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      timeZone: "UTC"
    }).format(new Date(date))
  );
  eleventyConfig.addFilter("htmlDate", (date) =>
    new Date(date).toISOString().slice(0, 10)
  );

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    pathPrefix,
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
