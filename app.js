function ChangeCss(elem,clr,bg, padding) {
	this.elem = [...document.querySelectorAll(elem)];
	this.padding = padding;
	this.clr = clr;
	this.bg = bg;
}
var css2 = new ChangeCss("#test2", "blue","#ddd","15px");
var css3 = new ChangeCss("#test3", "green","#000","20px");
var css4 = new ChangeCss(".test4", "balck","#dfd","20px");
var css5 = new ChangeCss(".test5", "#cd2efd","#ddd","25px");
var click = new ChangeCss("#btn");
ChangeCss.prototype.change = function() {
	if (this.elem[0].hasAttribute("id")) {
	this.elem[0].style.padding = this.padding;
	this.elem[0].style.color = this.clr;
	this.elem[0].style.backgroundColor = this.bg;
	} else if (this.elem[0].hasAttribute("class")) {
		for (let i = 0; i < this.elem.length; i++) {
	this.elem[i].style.padding = this.padding;
	this.elem[i].style.color = this.clr;
	this.elem[i].style.backgroundColor = this.bg;
		}
	}
	
};

ChangeCss.prototype.btn = function() {
	this.elem[0].onclick = function() {
		css5.change();
		css2.change();
		css3.change();
		css4.change();
	}
}

click.btn();

/*
function css(property, value) {
	this.elem[0].setAttribute("style", property + ":" + value);
}
*/
/*
function $(sd) {
	this.name = document.getElementById(sd);
}

var test2 = new $("test2");

$.prototype.css = function(property, value) {
	this.name.setAttribute("style", property + ":" + value);
}

test2.css("color", "red");
test2.css("color", "red");
*/

