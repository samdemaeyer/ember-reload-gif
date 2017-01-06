import Ember from 'ember';

const { run, String: { htmlSafe } } = Ember;

function reload(id) {
  let img = document.querySelector(`#gif-${id}`);
  let origSrc = img.src;
  img.src = '';
  img.src = origSrc;
}

export function reloadGif(_, attrs) {
  const random = Math.floor(Math.random() * 100);
  let options = [];

  for (let attr in attrs) {
    let option = `${attr}=${attrs[attr]}`;
    options.push(option);
  }

  let attributes = options.join(' ');
  run.next(null, reload, random);
  return htmlSafe(`<img id="gif-${random}" ${attributes} />`);
}

export default Ember.Helper.helper(reloadGif);
