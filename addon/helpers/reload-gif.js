import Ember from 'ember';

export function reloadGif(_, attrs) {
  const random = Math.floor(Math.random() * 100);
  let options = [];

  for (let attr in attrs) {
    if (attr === 'src' || attr === 'srcset') {
      attrs[attr] = attrs[attr].replace(/.gif/g, `.gif?${random}`);
    }
    let option = `${attr}=${attrs[attr]}`;
    options.push(option);
  }

  let attributes = options.join(' ');

  return Ember.String.htmlSafe(`<img ${attributes} />`);
}

export default Ember.Helper.helper(reloadGif);
