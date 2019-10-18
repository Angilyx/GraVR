function color() {
	var items = document.querySelectorAll(".customize-item");
	var colorInput = document.getElementById("customize-color").value;
	for (i = 0; i < items.length; i++) {
		items[i].style.backgroundColor = colorInput;
		items[i].style.borderColor = colorInput;
	}
}

function colorText() {
	var items = document.querySelectorAll(".custom-text");
	var colorInput = document.getElementById("customize-text-color").value;
	for (i = 0; i < items.length; i++) {
		items[i].style.color = colorInput;
	}
}

function text() {
	var input = document.getElementById("custom-text-input").value;
	var items = document.querySelectorAll(".custom-text");
	for (i = 0; i < items.length; i++) {
		items[i].innerHTML = input;
	}
}

function image() {
	var url = document.getElementById("custom-image").value;
	var background = document.querySelectorAll(".customize-item");
	for (i = 0; i < items.length; i++) {
		background[i].style.background = "#ffffff url('" + url + "') no-repeat";
		background[i].style.backgroundSize = "cover";
	}

}


//NEXT + PREV HOW IT WORKS;Explanation by Sasie
//There are 3 elements with the class .customize-item
var items = document.querySelectorAll(".customize-item");

/*In an array (a box) the 1st element is in placeholder [0]
So element 2 would be found in placeholder [1] etc.*/

//global temporary variables that will be used during the process
index = 1; //this index is different, everytime the code runs.
item(index);

//Let's say we are at the first element in [0], the circle svg

/*We then click on <button onclick="javascript:array(1);">Next</button>
We tell that in the box called "array" there is number 1*/

function array(n) { // n = 1, thus array(1)
	item(index += n); //and item(1 + 1) = item(2)
}

function item(p) { //p = index +=n = 2, thus item(2) 
	var i; //temporary variable

	//if 2 is bigger than 3 - which it is not, 3 is the amount of elements
	if (p > items.length) {
		index = 1
	}

	//if 2 is smaller than 1 - which it is not
	if (p < 1) {
		index = items.length
	}

	//go through all the elements
	for (i = 0; i < items.length; i++) {
		//and hide them
		items[i].style.display = "none";
	}

	//show the item [index-1] in this case [2-1]=[1], the next element in placeholder [1]
	items[index - 1].style.display = "flex";
}