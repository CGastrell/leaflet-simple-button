# leaflet-simple-button
==============

Leaflet Control to add a simple yet pretty iconized action button on a [Leaflet](http://leafletjs.com) map
with a custom click handler.

## Background
Started using [leaflet-button](https://github.com/jerroydmoore/leaflet-button) for some simple tasks on a map.
But (as usual) `<button>` tags tend to have a lot of browser-specific styling and, as the map app grew, so did
the aesthetic issues among browsers and the app's styling.

Then I tried [Leaflet.EasyButton](https://github.com/CliffCloud/Leaflet.EasyButton) and it worked like a charm,
until issues arose again. EasyButton adds an EasyBar which kinda gives you the *easy* but removes the *easiness*
when a lot of CSS is in play.

Both great plugins, but I needed something simpler and reusable. So, inspired on those two excellent plugins,
I decided to make my own *leaflet-simple-button* which is, well, quite simple.

If you're looking for fanciness and a good set of options for your UI, test first any of the mentioned plugins.
If, like me, just want an action button in your map, then I hope *leaflet-simple-button* can make your life easier.

## DOM
*leaflet-simple-button* will only add a `<div>` (as a container) with an `<a>` tag inside. The `<a>` tag
will append an `<i>` tag which receives a Font Awesome Icon class and that's it. The only missing part
is the *click* handler, which you should provide among the options.

The *button* code ends up looking like this:
```html
<div class="leaflet-control-simplebutton leaflet-control">
  <a class="simplebutton-action" href="#">
    <i class="fa fa-check-circle"></i>
  </a>
</div>
```
The link receives the `simplebutton-action` class, but no CSS is assigned to it.

## Options
The button can be configured with these options (along with any other Leaflet.Control valid option):
 - **position** - *{String}*: the position of the button. Valid positions are the normal positions for leaflet controls: `topright`, `topleft`, `bottomright`, and `bottomleft`. Defaults to `topright`
 - **faIcon** - *{String}*: Font Awesome Icon class. Defaults to `fa-check-circle`.
 - **text** - *{String}*: Shall you provide any `text` here, it will be used as `innerHTML` for the `<a>` tag. Defaults to "" (empty string). This is just an emergency option, **if you use this option, css styling of the button will break**. Only use it if you're gonna play with the styling until you get it working.
 - **click** - *{Function}*: handler function for the `click` event. The function receives *MouseEvent* and is executed with the `<a>` element as context (`this` inside the handler points to the *HTML Element*)
 - **id** - *{String}*: An `id` for the `<a>` tag, in case you need it. Defaults to *no id*
 
## A Simple Example
```javascript
var button = new L.Control.SimpleButton({
  click: function(evt) {
    alert("Howdy!");
  }
});
button.addTo(map);
```
