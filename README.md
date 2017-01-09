# Ember-reload-gif
When a gif has an animation, the image will be cached by the browser, when you render the image again (example after redirection of a page),
the animation will be considered as already played.  
Therefore, the animation will not be played again.  
#### Example:
![Gif with 2x loop](https://cloud.githubusercontent.com/assets/7160913/21771378/0990163a-d67f-11e6-8511-47f0d4eaf2c3.gif)

This plugin provides a helper that reloads gifs whenever you render them.  

For an example, follow the [installation steps](#installation-1) and run the project locally.

## Installation
ember-reload-gif is an ember-cli addon. You can install it via:
* `ember install ember-reload-gif`

## Documentation
Here is a simple example how to use the helper:
```hbs
{{reload-gif src='/images/thumb_negative.gif' srcset="/images/thumb_negative.gif 1x, /images/thumb_negative_@2x.gif 2x" alt="thumb-positive" width="700" class="my-gif"}}
```

## Addon Maintenance
### Installation
* `git clone` this repository
* `npm install`
* `bower install`

### Running
* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests
* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building
* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
