import {chapterComics, serverImage} from "../api/comics.js"
import {renderBoxAdmin} from "./function.js"
// -----------------------------------------------------------------------------------------
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let currentComic = $('section').getAttribute('id')
let chapterLists = chapterComics[currentComic]
//Chèn thời gian ra truyện------------------------------------------------
var nameChap = $('#identify-chap');
var currentChap = nameChap.innerHTML;
const update = $('.comic-update span');
updateTime(chapterLists);
function updateTime(chapterLists) {
	chapterLists.forEach((chapter) => {
		if(currentChap == chapter.nameChapter) {
			update.innerText = chapter.timeDate;
		}
	})
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
// Tạo ra biến để lấy ảnh---------------------------------------------------
// const indentifyChap = $('#identify-chap').innerText;
// const idChapter = indentifyChap.split(" ").join("");
// let id = idChapter.toLowerCase()
// const imageLinks = serverImage["readicCom-0001"][0].chapter1["server1"]
// var imgList = $('.comic-list_img');
// function reServer() {
// 	chapterLists.forEach((chapter, index) => {
// 		chapter.nameChapter == indentifyChap;
// 		imgList.innerHTML = imageLinks[index].map((chapterImg) => {
// 			var {src} = chapterImg;
// 			return (`
// 				<div class="comic-list_img">
// 					<img src=${src} alt="">
// 				</div>	
// 			`)
// 		}).join('');
// 	})
// }
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



// Đóng mở chapter list---------------------------------------------------
//Đóng mở boxListChap

//Up chap
//Edit icon next, prev Chap
//SearchChapter
var boxListChap = $$('.list_chap-box'); 
var insertOpen = $$('.chap-wrap_header');
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
toggleBox(chapterLists);

// List Chapter-----------------------------------------------------------
var listChap = $$('.list-chap');
upChapLink(chapterLists);
function upChapLink(arr){
	for (var listC = 0; listC < listChap.length; listC++ ) {
		listChap[listC].innerHTML = arr.map((item) => {
			var {nameChapter, linkChapter } = item;
			return(`
				<li><a href="${linkChapter}">${nameChapter}</a></li>
			`)
		}).join('');
	}
}
//Search chapter in Box---------------------------------------------------
const chapterSearchs = $$('.search-chap');
searchChapters(chapterLists)
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
var buttonNav = $$('.list_chap-icon');
var navIcon = $$('.chap-icon_link');
var linkPage = $$('.link_page-move');
editIconChap(chapterLists)
function editIconChap(newListC) {
	if (newListC == []) {
		for (let b = 0; b < buttonNav.length; ++b){
			buttonNav[b].classList.add('not-chap');
		}
	}
	for ( let i in newListC){
		if (currentChap == newListC[i].nameChapter){
			const indexChap = i;
			// setAttribute('class', 'current-chap');
			// ta lấy được i
			//TH1: chap trước lỗi(undefined) & chap sau nó có chap
			//Th2: chap sau lỗi & chap trước có chap
			//TH3: Cả hai chap trước và sau đều lỗi
			//TH4: Cả hai chap trước và sau đều chạy được
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
// const navChaps = $$('nav.navPage')
// console.log(navChaps)
// window.onscroll = () => {handleNavChap()}
// function handleNavChap() {
// 	if(!document.documentElement.scrollTop) {
// 		navChaps[0].style.display = 'block';
// 	} else {
// 		navChaps[0].style.display = 'none';
// 	}
// }
// -------------------------------------Nav-website-----------------------------------
const linkBox = document.querySelector('.website-link');
const controlLinkBox = document.querySelector('.toggle');
controlLinkBox.onclick = () => {
linkBox.classList.toggle('close');
};
