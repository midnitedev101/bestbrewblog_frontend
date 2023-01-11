/**
 * The `getReadingTime` retrieves the post contents and calculates 
 * how much it would take for readers to read and returns it.
 *
 * @param {string} postContents The post's contents
 * @returns {{firstSentence: string}} The string containing the calculation integer
 */

export default function getReadingTime(postContents) {
    // Solution to resolve issue regarding "Converting Circular Structure" from https://codedamn.com/news/javascript/how-to-fix-typeerror-converting-circular-structure-to-json-in-js
    let cache = [];
    let str = JSON.stringify(postContents[1].props.children, function(key, value) {
        if (typeof value === "object" && value !== null) {
            if (cache.indexOf(value) !== -1) {
            // Circular reference found, discard key
            return;
            }
            // Store value in our collection
            cache.push(value);
        }
        return value;
    });
    cache = null; // reset the cache
    let readTime = Math.round(str.length / 625000); // 625000 is based on the formula: average # of characters in a word (5); average # of words on an article (500); average words read per minute: (250)
    // console.log(readTime);
    if (readTime < 1) {
        return "Less than a min";
    } else if (readTime > 30) {
        return "30+ min(s)";
    } else {
        return readTime + " min(s)";
    }
    return;
  }