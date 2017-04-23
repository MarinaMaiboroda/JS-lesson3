var count = 5;

window.onload = function(){
	//alert('I am ready');
	var message = prompt('Please enter name');
	if (message != null){
		var res = ucFirst(message);

		if (res != undefined){
			alert(res);
		}	
	}
}

function showMessage(){
	var countin;
	alert(countin);
	alert('Click!');
}

var $btn = document.getElementById('first_btn');

$btn.onclick = showMessage;

$btn.onclick = function(){
	showMessage();
}

function countElem(a, b){
	var res = a % b;
	return res;
}

(function(){
	var $btn_counter = document.getElementById('count_smth');
	console.log($btn_counter);
	$btn_counter.onclick = function(){
		var x = prompt('Enter x');
		var y = prompt('Enter y');
		var result = countElem(x, y);
		alert('Our result ' + result);
		alert('Our element ' + this.getAttribute('id'));
	}

		
	
})()	

var $menu_link = document.getElementById('has-sub-menu');
	$menu_link.onclick =  function(){
		event.preventDefault();
		showSubmenu($menu_link);
	}	

function showSubmenu(link){
	var sub_menu = link.nextElementSibling;

	if (sub_menu.getAttribute('class') === 'sub-menu'){

		if (sub_menu.getAttribute('data-condition') === 'close'){
			sub_menu.setAttribute('data-condition' , 'open');
			sub_menu.style.display = "block";
		}
		else{
			sub_menu.setAttribute('data-condition' , 'close');
			sub_menu.style.display = "none";
		}	
	}
}



function ucFirst(str){
	console.log(str.charCodeAt(0));

	if ((str.length > 0) && ((str.charCodeAt(0) >= 97) && (str.charCodeAt(0) <= 122))){

		var new_str = str.charAt(0).toUpperCase() + str.substr(1);
		return new_str;
	}else{
		alert("Please enter correct data");
	}	
}