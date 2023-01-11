/**
 * The `retrieveExcerptFirstSentence` retrieves the first sentence found for the blog post and 
 * returns it.
 *
 * @param {string} excerpt The post's excerpt contents if it contains
 * @returns {{firstSentence: string}} The string containing the first sentence found in the excerpt
 */

export default function retrieveExcerptFirstSentence(excerpt) {
  if (typeof(excerpt[0].props.children) == 'string') {  // Retrieve the actual string from the excerpt object
    let excerptContent = excerpt[0].props.children
    let sentences = excerptContent.match(/^(.*?)[!?.\n]/g) // Match excerpt if ends with ?, !, ., or newline char followed with whitespace or </p> tag
    // console.log(sentences);
    if (typeof(sentences) == 'object' && sentences != null) {  // if matched sentences are of type object, proceeds to retrieve first one
      let firstSentence = (sentences.shift()).slice(1)  // Returns 1st array element from split excerpt and remove initial “ character
      return firstSentence
    } else {
      return excerpt
    }
  }
  return;
}