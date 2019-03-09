/*var css1 = new ChangeCss("#test1", "red","yellow","10px");

css1.change();*/
/*
function ChangeCss(elem,clr,bg, padding) {
	this.elem = [...document.querySelectorAll(elem)];
	this.padding = padding;
	this.clr = clr;
	this.bg = bg;
}

//var css2 = new ChangeCss("#test2", "blue","#ddd","15px");
//var css3 = new ChangeCss("#test3", "green","#000","20px");
var css4 = new ChangeCss(".test4", "balck","#dfd","20px");
ChangeCss.prototype.change = function() {
	for (let i = 0; i < this.elem.length;i++) {
	this.elem[i].style.padding = this.padding;
	this.elem[i].style.color = this.clr;
	this.elem[i].style.backgroundColor = this.bg;
}
};
/*
css2.change();
css3.change();
css4.change();
*/
