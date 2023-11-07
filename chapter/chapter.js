import {comics} from "../api/src.js"
import {renderBoxAdmin} from "../js/function.js"
// -----------------------------------------------------------------------------------------
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let navPages = $$('.navPage');
navPages[0].innerHTML = renderNavChapter();
navPages[1].innerHTML = renderNavChapter();
// ---------------------------------------------------------------------------------
let currentChap = $('#identify-chap').innerText;
var buttonNav = $$('.list_chap-icon');
var navIcon = $$('.chap-icon_link');
var linkPage = $$('.link_page-move');
const chapterSearchs = $$('.search-chap');
var listChap = $$('.list-chap');
const comicUpdate = $('.comic-update span');
var boxListChap = $$('.list_chap-box'); 
var insertOpen = $$('.chap-wrap_header');

// Láy giá trị hình ảnh Chapter-----------------------------------------------------
let getImage = comics.image;
const getComic = comics.comic.reverse();
let getName = $('section').getAttribute('id');
function handleComics(){
	let nameLength = getName.length;
	// Lấy giá tri cua truyen tranh
	let getNumber = getName.slice(10, nameLength);
	let getChap = currentChap.slice(8, currentChap.length);
	function getValueComic() {
		let getValue = getComic[getNumber];
		let chapterList = getValue.listChapter
		comicUpdate.innerText = chapterList[0].timeUpdate;
			// ------------------------------
			toggleBox(chapterList); searchChapters(chapterList)
			upChapLink(chapterList); editIconChap(chapterList); 
			handleHistory(getValue); handleInforName(getValue);
	} getValueComic();
	function getValueImage() {
		let listImage = getImage[getNumber].readicCom[getChap].linkImage;
		handleListImage(listImage);
	} getValueImage();
	
} handleComics();
// ---------------------------------------------------------------------------------
function handleHistory(comic) {
	let comicHistories = $$('.comic-history');
		comicHistories[0].innerHTML = renderHistory();
		comicHistories[1].innerHTML = renderHistory();
		let linkHistories = $$('.comic-history a');
		console.log(linkHistories)
		function renderHistory() {
			return (`
			<a href="/index.html" class="comic-history_info history_info-link">Home</a>
				<span><i class="fa-solid fa-angles-right"></i></span>
			<a class="comic-history_info history_info-link change-name">change-name</a>
				<span><i class="fa-solid fa-angles-right"></i></span>
			<span class="comic-history_info change-comic"></span>
			`)
		} renderHistory();
		linkHistories[1].setAttribute('href', `/` + comic.linkComic);
		linkHistories[3].setAttribute('href', `/` + comic.linkComic);
}
function renderNavChapter() {
	return(`
	<div class="comic-chap">
		<div class="list_chap-icon">
			<a href="" class="chap-icon_link"><i class="fa-solid fa-chevron-left icon_nav"></i>Prev</a>
		</div>
		<div class="list_chap-wrap">
			<div class="chap-wrap_header">
				<p class="change-comic">Chapter</p>
				<div class="navlist-icon">
					<i class="fa-solid fa-caret-down navlist-icon_open"></i>
					<i class="fa-regular fa-circle-xmark navlist-icon_close close"></i>
				</div>
			</div>
			<div class="list_chap-box list_chap-box2 ">
				<input type="text" class="search-chap" placeholder="Search chap: Ex 1, 10,...">
				<i class="fa-regular fa-circle-xmark icon-box"></i>
				<ul class="list-chap"></ul>
				<div class="chap-box_close"></div>
			</div>
		</div>
		<div class="list_chap-icon">
			<a href="" class="chap-icon_link">Next<i class="fa-solid fa-chevron-right icon_nav"></i></a>
		</div>
		
	</div>
	`)
} ;
//Chèn thời gian ra truyện------------------------------------------------
function handleListImage(arr) {
	let listImage = $('.comic-list_img');
	listImage.innerHTML = arr.map(renderImages).join('');
	function renderImages(item) {
		let {src} = item;
		return (`
			<img alt="" src=${src}>
		`)
	}
}

//Tải Server---------------------------------------------------------------
//Hộp báo lỗi cho Admin---------------------------------------------------
var boxServer = $('#boxServer');
boxServer.innerHTML = renderBoxAdmin();
const serverBtns =  $$('.comic-server_img > span');
const errorBtn = $('.comic-error');
const boxError = $('.comic-box_error');
const submitBtn = $('.btn-error > button');
const closeBoxError = $('.btn-error > span');
function alertAdmin() {
	var [firstServerBtn, ...otherBtns] = serverBtns;
		firstServerBtn.addEventListener('click', () => {
			location.reload()
		});
		otherBtns.forEach((serverBtn, index) => {
			serverBtn.addEventListener('click', (e) =>{
				$('.comic-server_img > span.server_active').classList.remove('server_active');
				serverBtn.classList.add('server_active');
				// reServer();
			})
		})
	
	errorBtn.addEventListener('click', () => {
		boxError.style.top = 120 + 'px';
		boxError.classList.remove('close');
	})
	submitBtn.addEventListener('click', () => {
		alert('Cảm ơn bạn đã thông báo. Chúng tôi sẽ fix lại lỗi trong thời gian sớm nhất!');
	})
	closeBoxError.addEventListener('click', () => {
		boxError.classList.toggle('close')
	})
} alertAdmin();


// Đóng mở chapter list---------------------------------------------------
//Đóng mở boxListChap
//Up chap
//Edit icon next, prev Chap
//SearchChapter
function toggleBox(newListC) {
	if (newListC.length !== 0 ) {
			insertOpen[0].onclick = ()=> {
				boxListChap[0].classList.toggle('open');
			}
			insertOpen[1].onclick = ()=> {
				boxListChap[1].classList.toggle('open');
			}
			function closeBoxList1() {
				boxListChap[0].classList.remove('open');
			}
			function closeBoxList2() {
				boxListChap[1].classList.remove('open');
			}
			var closeIconBox =  $$('.icon-box');
				closeIconBox[0].addEventListener('click', closeBoxList1);
				closeIconBox[1].addEventListener('click', closeBoxList2);
			var closeTextBox = $$('.chap-box_close');
				closeTextBox[0].addEventListener('click', closeBoxList1);
				closeTextBox[1].addEventListener('click', closeBoxList2);
	}
}
// List Chapter-----------------------------------------------------------
function upChapLink(arr){
	for (var listC = 0; listC < arr.length; listC++ ) {
		listChap[listC].innerHTML = arr.map((item) => {
			var {nameChapter, linkChapter } = item;
			return(`
				<li><a href="${linkChapter}">${nameChapter}</a></li>
			`)
		}).join('');
	}
}
//Search chapter in Box---------------------------------------------------
function searchChapters(newListC) {
	for (let chapterSearch = 0; chapterSearch < chapterSearchs.length; ++chapterSearch) {
		chapterSearchs[chapterSearch].onkeyup = (e) => {
			const searchChap = e.target.value.toLowerCase();
			const filterChap = newListC.filter((item) => {
				return item.nameChapter.toLowerCase().includes(searchChap);
			});
			upChapLink(filterChap);
		}
	}
}
// Thêm hoặc xóa link chuyển chap ở nút ấn------------------------------
// setAttribute('class', 'current-chap');
			// ta lấy được i
			//TH1: chap trước lỗi(undefined) & chap sau nó có chap
			//Th2: chap sau lỗi & chap trước có chap
			//TH3: Cả hai chap trước và sau đều lỗi
			//TH4: Cả hai chap trước và sau đều chạy được
function editIconChap(newListC) {
	if (newListC == []) {
		for (let b = 0; b < buttonNav.length; ++b){
			buttonNav[b].classList.add('not-chap');
		}
	}
	for ( let i in newListC){
		if (currentChap == newListC[i].nameChapter){
			const indexChap = i;
			
			var extraHref = (index) => {
				let prevChapter = newListC[ +index - 1 ];
				let nextChapter = newListC[ +index + 1 ];
				if( prevChapter == undefined &&  nextChapter == undefined) {
					buttonNav[0].classList.add('not-chap');
					buttonNav[1].classList.add('not-chap');
					buttonNav[2].classList.add('not-chap');
					buttonNav[3].classList.add('not-chap');
					linkPage[0].classList.add('not-chap');
					linkPage[1].classList.add('not-chap');
				} else if(prevChapter == undefined && nextChapter !== undefined) {
					buttonNav[0].classList.add('not-chap');
					buttonNav[2].classList.add('not-chap');
					linkPage[0].classList.add('not-chap');
					linkPage[1].setAttribute('href', nextChapter.linkChapter);
					navIcon[1].setAttribute('href', nextChapter.linkChapter);
					navIcon[3].setAttribute('href', nextChapter.linkChapter);
				}else if (prevChapter !== undefined && nextChapter == undefined) {
					buttonNav[1].classList.add('not-chap');
					buttonNav[3].classList.add('not-chap');
					linkPage[1].classList.add('not-chap');
					linkPage[0].setAttribute('href', prevChapter.linkChapter);
					navIcon[0].setAttribute('href', prevChapter.linkChapter);
					navIcon[2].setAttribute('href', prevChapter.linkChapter);
				} else {
					navIcon[0].setAttribute('href', prevChapter.linkChapter);
					navIcon[2].setAttribute('href', prevChapter.linkChapter);
					linkPage[0].setAttribute('href', prevChapter.linkChapter);
					linkPage[1].setAttribute('href', nextChapter.linkChapter);
					navIcon[1].setAttribute('href', nextChapter.linkChapter);
					navIcon[3].setAttribute('href', nextChapter.linkChapter);
				}
			}; 
			extraHref(indexChap);
		}
	};
}
// Nav-website-----------------------------------------------------------
const linkBox = document.querySelector('.website-link');
const controlLinkBox = document.querySelector('.toggle');
controlLinkBox.onclick = () => {
linkBox.classList.toggle('close');
};
// THêm tên truyen chapter cho website-----------------------------------
function handleInforName(comic) {
	let changeName = $$('.change-name');
	var changeChap = $$('.change-comic');
	function renderName() {
		for (var j = 0; j < changeName.length; ++j) {
			changeName[j].innerText = comic.nameComic;
		}
	}  renderName();
	function renderChapter() {
		for (var k = 0; k < changeChap.length; ++k) {
			changeChap[k].innerText = currentChap;
		}
	} renderChapter();
} 

