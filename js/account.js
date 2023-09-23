import {handleNavWeb} from "./function.js"
handleNavWeb();
var boxForms = document.querySelectorAll('.form-box');
	var openBoxForm = document.querySelectorAll('.form_login');
	openBoxForm[0].onclick = ()=> {
		boxForms[0].classList.add('close');
		boxForms[1].classList.remove('close');
	}
	openBoxForm[1].onclick = ()=> {
		boxForms[1].classList.add('close');
		boxForms[0].classList.remove('close');
	}