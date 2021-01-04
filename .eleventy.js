// passthrough https://michaelsoolee.com/add-css-11ty/
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('js');
  eleventyConfig.addPassthroughCopy('assets');
  return {
    passthroughFileCopy: true
  };
}
