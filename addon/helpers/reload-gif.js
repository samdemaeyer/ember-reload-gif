import Ember from 'ember';

const { run, String: { htmlSafe } } = Ember;

let reload = (id) => {
  let img = document.querySelector(`#gif-${id}`);
  let origSrc = img.src;
  img.src = '';
  img.src = origSrc;
};

let setDiv = (attrs, random) => {
  let styles = `background-image: url(${attrs.src}?${random});`;
  if (attrs.srcset) {
    let srcSet = attrs.srcset.split(',');
    srcSet = srcSet.map(element => element.trim());
    srcSet = srcSet.map(set => {
      let array = set.split(' ');
      return `url(${array[0]}?${random}) ${array[1]}`;
    }).join(', ');
    styles = `${styles} background-image: -webkit-image-set(${srcSet});`;
  }
  return `<div id="gif-${random}" style="${styles}" class="${attrs.class}"></div>`;
};

let setImg = (attrs, random) => {
  let options = [];
  for (let attr in attrs) {
    let option = `${attr}="${attrs[attr]}"`;
    options.push(option);
  }
  let attributes = options.join(' ');
  return `<img id="gif-${random}" ${attributes} />`;
};

export function reloadGif(_, attrs) {
  if (!attrs.src && !attrs.srcSet) {
    console.warn('No "src" or "srcSet" has passed to the `{{reload-gif}}` component');
  }
  let htmlString = '';
  const random = Math.floor(Math.random() * 100);
  run.next(null, reload, random);

  if (attrs.backgroundImg) {
    htmlString = setDiv(attrs, random);
  } else {
    htmlString = setImg(attrs, random);
  }

  return htmlSafe(htmlString);
}

export default Ember.Helper.helper(reloadGif);
