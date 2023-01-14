//text

var showText = function (target, message, index, interval) {
	if (index < message.length) {
		$(target).append(message[index++]);
		setTimeout(function () {
			showText(target, message, index, interval);
		}, interval);
	}
};

$(document).ready(function () {
	//song

	//text
	setTimeout(function () {
		var text = $(".text-edit")
			.html()
			.replace(/<br *\/?>/gi, "\n");
		showText("#msg", text, 0, 150);
	}, 1000);

	//star
	var stars = 900;
	var $stars = $(".stars");
	var r = 800;
	for (var i = 0; i < stars; i++) {
		var $star = $("<div/>").addClass("star");
		$stars.append($star);
	}
	$(".star").each(function () {
		var cur = $(this);
		var s = 0.2 + Math.random() * 1;
		var curR = r + Math.random() * 310;
		cur.css({
			transformOrigin: "0 0 " + curR + "px",
			transform:
				" translate3d(0,0,-" +
				curR +
				"px) rotateY(" +
				Math.random() * 360 +
				"deg) rotateX(" +
				Math.random() * -50 +
				"deg) scale(" +
				s +
				"," +
				s +
				")",
		});
	});

	const curry =
		(f) =>
		(...args) =>
			args.length >= f.length ? f(...args) : curry(f.bind(f, ...args));

	const compose = (f, g) => (x) => f(g(x));
	const composeN =
		(...fns) =>
		(...args) =>
			fns.reverse().reduce((x, f) => f.apply(f, [].concat(x)), args);
});
