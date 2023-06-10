/**
 * Click to element scroll
 * @param {string} $target the ID target element without hashtag (#)
 * @since 1.1.0
 * @author Dasa Kreativa Studio <dasakreativa@gmail.com>
 * @see https://stackoverflow.com/a/57308429
 */
export const jumpToElement = ($target) => {
  let navbar = document.querySelector('.navbar')?.offsetHeight;
  let target = document.getElementById($target)?.offsetTop;

  let calcHeight = target - navbar;

  window.scrollTo({ top: calcHeight, behavior: 'smooth'});
}
