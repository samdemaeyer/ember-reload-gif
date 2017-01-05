
import { reloadGif } from 'dummy/helpers/reload-gif';
import { module, test } from 'qunit';

module('Unit | Helper | Reload Gif');

test('Adds all attributes and queryParams', function(assert) {
  let options = {};
  options.src = 'my-img.gif';
  options.srcset = 'my-img.gif 1x, my-img_@2x.gif 2x';
  options.class= 'my-gif';

  let result = reloadGif([], options);

  let randNr = result.string.match(/\d+/)[0];
  assert.equal(result.string,
    `<img src=my-img.gif?${randNr} srcset=my-img.gif?${randNr} 1x, my-img_@2x.gif?${randNr} 2x class=my-gif />`,
    'All attributes added, and randon nr queryparam added to the src and srcset attributes');
});
