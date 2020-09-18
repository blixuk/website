var converter = new showdown.Converter();

function loader() {
	try {
		URL = window.location.href.split('?');
		args = URL[1].split('=');

		if (args[0] == 'page') {
			getPage('/pages/' + args[1] + '.md');
			document.title = 'Blix | ' + args[1];
		} else {
			getPage('/pages/404.md');
		}
	} catch(TypeError) {
		getPage('/pages/Home.md');
	}
}

function getPage(page) {
	try {
		jQuery.get(page, function(txt) {
			document.getElementById("output").innerHTML = converter.makeHtml(txt);
		}).fail(function() {
			getPage('/pages/404.md');
		});
	} catch(err) {
		document.getElementById("output").innerHTML = err.message;
	}
}