L.Control.SimpleButton = L.Control.extend({
  _className: 'leaflet-control-simplebutton',
  options: {
    faIcon: 'fa-check-circle',
    position: 'topright',
    text: "",
    click: function(){}
  },
  initialize: function (options) {
    L.setOptions(this, options);
  },
  onAdd: function (map) {
    this._map = map;
    this._container = L.DomUtil.create('div',this._className);
    this._buildButton();
    return this._container;
  },
  onRemove: function (map) {
    L.DomEvent.off(this.link, 'click', this.options.click);
  },
  _buildButton: function(){
    var a = this.link = L.DomUtil.create('a','simplebutton-action',this._container);
    a.href = "#";
    if(this.options.text) {
      a.innerHTML = this.options.text;
    }else{
      L.DomUtil.create('i','fa ' + this.options.faIcon, a);
    }
    L.DomEvent.on(a, 'click', this.options.click, this);
  }
});

L.control.simplebutton = function (options) {
  return new L.Control.SimpleButton(options);
};
