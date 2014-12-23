describe ('prueba de Provider', function() {
	beforeEach(module('flickrApp.provider'));

	var javi;

	beforeEach(inject(function($provider) {
		javi = $provider('Flickr');
	}))

	it ("igual a todo esto", function(){
		var tel = 'asdfadsf';
		expect(javi).toBe('dddddddd');
	})
});

