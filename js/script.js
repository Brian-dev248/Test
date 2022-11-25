var nav_btn = document.querySelector('.nav_btn');
var close_btn = document.querySelector('.close_btn');
var hidden_bg = document.querySelector('.hidden_bg');
var btn_read_more = document.querySelector('.btn-read_more');

nav_btn.addEventListener('click', () => {
	document.querySelector('html').classList.add('menu-active');
});
close_btn.addEventListener('click', () => {
	document.querySelector('html').classList.remove('menu-active');
});
hidden_bg.addEventListener('click', () => {
	document.querySelector('html').classList.remove('menu-active');
});
btn_read_more.addEventListener('click', () => {
	if(btn_read_more.parentElement.parentElement.classList.contains('active')){
		btn_read_more.parentElement.parentElement.classList.remove('active')
	}
	else{
		btn_read_more.parentElement.parentElement.classList.add('active')
	}
});