L.Control.SimpleButton = L.Control.extend({
  _className: 'leaflet-control-simplebutton',
  options: {
    faIcon: 'fa-check-circle',
    position: 'topright',
    text: "",
    id: "",
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
    L.DomEvent.off(this._link, 'click', this.options.click);
  },
  _buildButton: function(){
    this._link = L.DomUtil.create('a','simplebutton-action',this._container);
    this._link.href = "#";
    if(this.options.id) {
      this._link.id = this.options.id;
    }
    if(this.options.text) {
      this._link.innerHTML = this.options.text;
    }else{
      L.DomUtil.create('i','fa ' + this.options.faIcon, this._link);
    }
    L.DomEvent.on(this._link, 'click', this.options.click, this._link);
  }
});

L.control.simplebutton = function (options) {
  return new L.Control.SimpleButton(options);
};
