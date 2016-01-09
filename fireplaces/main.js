var xAnimationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

var data = {

	backgrounds: {
		path: 'backgrounds/',
		title: 'Background',
		items: [
			{
				label: 'Light',
				file: 'light.jpg'
			}
		]
	},

	flue: {
		path: 'flues/',
		title: 'Flue',
		items: [
			{
				label: 'Musta',
				file: 'musta.png',
				extra: false
			},
			{
				label: 'Harmaa',
				file: 'harmaa.png',
				extra: false
			},
			{
				label: 'Valkoinen',
				file: 'valkoinen.png',
				extra: false
			},
			{
				label: 'Kirkas',
				file: 'kirkas.png',
				extra: false
			},
			{
				label: 'Harjattu',
				file: 'harjattu.png',
				extra: false
			},
			{
				label: 'Harkkohormi',
				file: 'harkkohormi.png',
				extra: false
			},
		]
	},

	fireplaces: {
		path: 'fireplaces-teeri/',
		title: 'Fireplace',
		items: [
			{
				label: 'Urban',
				file: 'urban.png',
				extra: false,
				stock: true
			},
			{
				label: 'Snow',
				file: 'snow.png',
				extra: false,
				stock: true
			},
			{
				label: 'Star Galaxy',
				file: 'star-galaxy.png',
				extra: false,
				stock: true
			},
			{
				label: 'Nero',
				file: 'nero.png',
				extra: false,
				stock: true
			},
			{
				label: 'Pure White',
				file: 'pure-white.png',
				extra: false,
				stock: true
			},
			{
				label: 'Concrete',
				file: 'concrete.png',
				extra: false,
				stock: true
			},
			{
				label: 'Aurora India',
				file: 'aurora-india.png',
				extra: false,
				stock: true
			},
			{
				label: 'Emperadoro',
				file: 'emperadoro.png',
				extra: false,
				stock: false
			},
			{
				label: 'Red Shimmer',
				file: 'red-shimmer.png',
				extra: false,
				stock: false
			},
			{
				label: 'Frosty Carrina',
				file: 'frosty-carrina.png',
				extra: false,
				stock: false
			},
			{
				label: 'Piatra Grey',
				file: 'piatra-grey.png',
				extra: false,
				stock: false
			},
			{
				label: 'Cocoa Fudge',
				file: 'cocoa-fudge.png',
				extra: false,
				stock: false
			},
			{
				label: 'Dreamy Marfil',
				file: 'dreamy-marfil.png',
				extra: false,
				stock: false
			},
			{
				label: 'Urban',
				file: 'urban-korotettu.png',
				extra: true,
				stock: true
			},
			{
				label: 'Snow',
				file: 'snow-korotettu.png',
				extra: true,
				stock: true
			},
			{
				label: 'Star Galaxy',
				file: 'star-galaxy-korotettu.png',
				extra: true,
				stock: true
			},
			{
				label: 'Nero',
				file: 'nero-korotettu.png',
				extra: true,
				stock: true
			},
			{
				label: 'Pure White',
				file: 'pure-white-korotettu.png',
				extra: true,
				stock: true
			},
			{
				label: 'Concrete',
				file: 'concrete-korotettu.png',
				extra: true,
				stock: true
			},
			{
				label: 'Aurora India',
				file: 'aurora-india-korotettu.png',
				extra: true,
				stock: true
			},
			{
				label: 'Emperadoro',
				file: 'emperadoro-korotettu.png',
				extra: true,
				stock: false
			},
			{
				label: 'Red Shimmer',
				file: 'red-shimmer-korotettu.png',
				extra: true,
				stock: false
			},
			{
				label: 'Frosty Carrina',
				file: 'frosty-carrina-korotettu.png',
				extra: true,
				stock: false
			},
			{
				label: 'Piatra Grey',
				file: 'piatra-grey-korotettu.png',
				extra: true,
				stock: false
			},
			{
				label: 'Cocoa Fudge',
				file: 'cocoa-fudge-korotettu.png',
				extra: true,
				stock: false
			},
			{
				label: 'Dreamy Marfil',
				file: 'dreamy-marfil-korotettu.png',
				extra: true,
				stock: false
			},
		]
	},

	doors: {
		path: 'doors/',
		title: 'Doors',
		items: [
			{
				label: 'Kromi',
				file: 'kromi.png',
				extra: false
			},
			{
				label: 'Kulta',
				file: 'kulta.png',
				extra: false
			},
			{
				label: 'Tumma kromi',
				file: 'tumma-kromi.png',
				extra: false,
			},
			{
				label: 'Satiinikromi',
				file: 'satiinikromi.png',
				extra: false,
			},
			{
				label: 'Satiinikromi Nostoluukku',
				file: 'satiinikromi-nostoluukku.png',
				extra: true,
			},
			{
				label: 'Kulta Nostoluukku',
				file: 'kulta-nostoluukku.png',
				extra: true,
			},
			{
				label: 'Tumma Kromi Nostoluukku',
				file: 'tumma-kromi-nostoluukku.png',
				extra: true,
			},
			{
				label: 'Satiinikromi Nostoluukku',
				file: 'satiinikromi-nostoluukku.png',
				extra: true,
			},
		]
	},

}


var Fireplace = {

	$layers: $('<div>').addClass('layers'),
	$tb: $('<div>').addClass('toolbar'),
	
	vw: $(window).width(),
	vh: $(window).height(),

	resourcesPath: 'assets/',

	items: { },

	initialize: function(data) {

		$('body').append(this.$layers);
		$('body').append(this.$tb);

		var self = this;

		_.each(data, function(obj, key) {
			
			self.items[key] = {
				total: obj.items.length,
				current: null
			};

			self._createLayer(key);
			self._renderCanvas(key, obj, 0);
			self._createToolbar(key, obj);
		});
	},

	_createToolbar: function(key, obj) {
		
		var div = $('<div>').addClass('key');

		div.append($('<h1>').text(obj.title));
		div.append($('<canvas width=200 height=200>').css({ border: '1px solid red'}));

		this.$tb.append(div);

	},

	_renderCanvas: function(key, object, index) {

		var self = this;
		var item = this.items[key];
		item.current = index;

		var canvas = self.$layers.find('[data-name=' + key + ']')[0];

		var ctx = canvas.getContext("2d");
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		var img = new Image();
		img.onload = function () {
			self.drawImageProp(ctx, img, 0, 0, canvas.width, canvas.height);
		};

		img.src = self.resourcesPath + data[key].path + data[key].items[item.current].file;

	},

	_createLayer: function(name) {
		var self = this;

		var $layer = $('<canvas>')
			.attr('width', this.vw - 200)
			.attr('height', this.vh)
			.attr('data-name', name)
			.css({ left: 200 })
			.addClass('layer')
			.appendTo(this.$layers)
			.on('click', function(event) {
				
				var key = $(this).attr('data-name');

				if( this.getContext('2d').getImageData(event.clientX, event.clientY, 1, 1).data[3] == 0) {
					var e = $.Event('click');
					e.clientX = event.clientX;
					e.clientY = event.clientY;
					$(this).prev().trigger(e);
				} else {
					
					var next = self.items[key].current + 1 >= self.items[key].total ? 0 : self.items[key].current + 1;
					console.log(next);
					self._renderCanvas(key, data[key], next);
				}
			})
	},

	drawImageProp: function(ctx, img, x, y, w, h, offsetX, offsetY) {

		if (arguments.length === 2) {
			x = y = 0;
			w = ctx.canvas.width;
			h = ctx.canvas.height;
		}

		// default offset is center
		offsetX = typeof offsetX === "number" ? offsetX : 0.5;
		offsetY = typeof offsetY === "number" ? offsetY : 0.5;

		// keep bounds [0.0, 1.0]
		if (offsetX < 0) offsetX = 0;
		if (offsetY < 0) offsetY = 0;
		if (offsetX > 1) offsetX = 1;
		if (offsetY > 1) offsetY = 1;

		var iw = img.width,
		    ih = img.height,
		     r = Math.min(w / iw, h / ih),
		    nw = iw * r,   // new prop. width
		    nh = ih * r,   // new prop. height
		    cx, cy, cw, ch, ar = 1;

		// decide which gap to fill    
		if (nw < w) ar = w / nw;
		if (nh < h) ar = h / nh;
		nw *= ar;
		nh *= ar;

		// calc source rectangle
		cw = iw / (nw / w);
		ch = ih / (nh / h);

		cx = (iw - cw) * offsetX;
		cy = (ih - ch) * offsetY;

		// make sure source rectangle is valid
		if (cx < 0) cx = 0;
		if (cy < 0) cy = 0;
		if (cw > iw) cw = iw;
		if (ch > ih) ch = ih;

		// fill image in dest. rectangle
		ctx.drawImage(img, cx, cy, cw, ch,  x, y, w, h);
	}
};

$(document).ready(function() {

	var fp = Fireplace.initialize(data);

});