import {chapterComics} from "../api/comics.js"
import {handleRandom, handleViewer, renderComment} from "./function.js"
import {comics} from "../api/src.js"
// ---------------------------------------------------------------------------
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const listChap = $('.list_chap')
let boxInforComic = $('.box_infor-comic');
const comicBackground = $('.infor-comic_background img');
const comicImage = $('.infor-comic_img img');
// Chèn link-------------------------------------------------------------------
var boxRanks = $$('.comis-box_random');
boxRanks[0].innerHTML = handleViewer;
boxRanks[1].innerHTML = handleRandom;
$('#comments').innerHTML = renderComment();
// Ham xu ly truyen tranh------------------------------------------------
function handleComic(){
	let getName = $('section').getAttribute('id');
	let nameLength = getName.length;
	// Lấy giá tri cua truyen tranh
	let getNumber = getName.slice(10, nameLength);
	let getValueComic = comics.comic[getNumber];
	handleChapter(getValueComic); renderInforComic(getValueComic)
	renderImgWebsite(getValueComic)
} handleComic();

// // Chèn link vào btn ------------------------------------------------------
// thêm hộp nav vào website-------------------------------------------------
const navWeb = $('#nav-website');
navWeb.innerHTML = renderNavWeb()
function renderNavWeb() {
	return (`
	<div class="website-link close">
		<a href="#searchBar" class="link_page underline">
			<i class="fa-solid fa-magnifying-glass"></i>
		</a>
		<a href="index.html" class="link_page">
			<i class="fa-solid fa-house"></i>
		</a>
		<a href="acount.html" class="link_page">
			<i class="fa-solid fa-user"></i>
		</a>
	</div>
	<div class="website-icon">
		<input type="checkbox" id="checkbox">
		<label for="checkbox" class="toggle">
			<div class="bars" id="bar1"></div>
			<div class="bars" id="bar2"></div>
			<div class="bars" id="bar3"></div>
		</label>
	</div>
	`)
}
// Lấy giá trị comic trong list comics--------------------------------------------
function renderInforComic(comic) {
	let boxInforOthers = $('.box_infor-others')
	let inforComicName = $('.infor-comic_name')
	inforComicName.innerHTML = renderInfor();
	boxInforOthers.innerHTML = renderInforOthers();
	insertInfor(comic); insertInforComic(comic);
}
// THêm ảnh vào Website-----------------------------------------------------------
function renderImgWebsite(comic) {
	let getHeightInfor = $('.box_infor-comic').offsetHeight;
	comicBackground.setAttribute('src', comic.linkBackImg)
	comicBackground.style.height = getHeightInfor + 'px';
	comicImage.setAttribute('src', comic.linkImage)
}
//Thêm vào mục theo dõi-----------------------------------------------------------
var btnFollows = $$('.follow_empty');
btnFollows.forEach((value, key) => {
	value.addEventListener('click', () =>{
		document.querySelector('.follow_empty.close').classList.remove('close')
		value.classList.add('close');
	})
})
// Chèn danh sách chap vào Website------------------------------------------------
function renderChap(item) {
	var {nameChapter, linkChapter, timeUpdate } = item;
	return	(`
		<li class="infor-chapter_list">
			<a class="chapter_list-link" href="${linkChapter}">${nameChapter}
				<span class="chapter_list-time">${timeUpdate}</span>
			</a>
		</li>
	`)
};
//Nhận dạng truyện tranh----------------------------------------------------------
function handleChapter(comic){
	const linkRead = $$('.img-link_read');
	let listChapter = comic.listChapter;
	let listChapterLength = listChapter.length;
	// Chèn link vao hai nut btn Doc moi nhat, doc tu dau--------------------
	function renderLinkBtn(){
		let linkFirstChapter = listChapter[0].linkChapter
		let linkLastChapter = listChapter[listChapterLength - 1].linkChapter
		linkRead[0].setAttribute('href', linkFirstChapter);
		linkRead[1].setAttribute('href', linkLastChapter);
	} renderLinkBtn();
	listChap.innerHTML = listChapter.map(renderChap).join('')
} 
function renderInfor(){	
	return (`
		<div class="comic_name-comic">Truyện Tranh</div>
		<ul class="comic_name-others">
			<li>Tên khác:
				<span>Comic</span>
			</li>
			<li>Tác giả:
				<span>Author</span>
			</li>
			<li>Nhóm dịch:
				<span></span>
			</li>
			<li>Tình trạng:
				<span>On going</span>
			</li>
			<li>Thể loại:
				<span></span>
			</li>
			<li>Tham khảo:
				<span></span>
			</li>
		</ul>
		<div class="comic_follow">
			<div class="follow_empty">
				<i class="fa-regular fa-bookmark"></i>
				Follow
			</div>
			<div class="follow_empty close">
				<i class="fa-solid fa-bookmark"></i>
				Following
			</div>
		</div>
		<div class="comic_name-rate">
			<div class="rating">
				<input value="5" name="rating" id="star5" type="radio">
				<label for="star5"></label>
				<input value="4" name="rating" id="star4" type="radio">
				<label for="star4"></label>
				<input value="3" name="rating" id="star3" type="radio">
				<label for="star3"></label>
				<input value="2" name="rating" id="star2" type="radio">
				<label for="star2"></label>
				<input value="1" name="rating" id="star1" type="radio">
				<label for="star1"></label>
			</div>
			<div class="name-rate_text">
				<span class="rate_text">5</span>/ 5
				(<span class="rate_num">0</span> lượt đánh giá)
			</div>
		</div>
	`)
}
function renderInforOthers(){
	return (`
	<ul class="infor-others_list">
		<li class="others_list open" >
			<i class="fa-solid fa-book"></i>
			Cốt truyện
		</li>
		<li class="others_list" >
			<i class="fa-solid fa-user-tie"></i>
			Nhân vật
		</li>
		<li class="others_list">
			<i class="fa-solid fa-comment"></i>
			Thông tin thêm
		</li>
		<div class="line"></div>
	</ul>
	<ul class="infor-others_text">
		<li class="others_text others_text-plot open"></li>
		<li class="others_text ">
			<div class="others_text-character">
				<span>
					<img class="text-character_img">
					<div class="text-charactername"></div>
				</span>
				
			</div>
		</li>
		<li class="others_text">Thông tin thêm</li>
	</ul>
	`)

}; 
// render ra thong tin cua truyen nhu name, tac gia, nhom dich--------------------
function insertInforComic(comic){
	const listInfor = $$('.comic_name-others > li  span');
	const nameComic = $('.comic_name-comic');
	nameComic.innerText = comic.nameComic;
	listInfor[0].innerText = comic.nameOther;
	listInfor[1].innerText = comic.nameAuthor;
	listInfor[2].innerHTML = comic.nameTranslator.map(renderListTranslator).join('');
	listInfor[3].innerText = comic.currentStatus;
	listInfor[4].innerHTML = comic.nameGenre.map(renderListGenre).join('');
	listInfor[5].innerHTML = comic.srcConsult.map(renderListConsult).join('');
	function renderListGenre(item){
		let {genre, linkGenre} = item;
		return (`
			<a href=${linkGenre}>${genre}</a>
		`)
	}	
	function renderListConsult(item) {
		let {nameConsult, linkConsult} = item;
		return (`
			<a href=${linkConsult}>${nameConsult}</a>
		`)
	}
	function renderListTranslator(item){
		let {name, linkTranslator} = item;
		return (`
			<a href=${linkTranslator}>${name}</a>
		`)
	}
}
function insertInfor(comic){
	let otherTextPlot = $('.others_text-plot');
	let characterName = $('.text-charactername');
	let srcImage = $('.text-character_img');
	otherTextPlot.innerText = comic.textPlot;
	characterName.innerText = comic.mainCharacter;
	srcImage.src = comic.imageCharacter;
}
function handleNavComic(){
	let listInfortExtra = $$('.infor-others_list li');
	let otherTexts = $$('.infor-others_text li')
	listInfortExtra.forEach((item,index) => {
		item.addEventListener('click', () => {
			$('.infor-others_list li.open').classList.remove('open')
			$('.infor-others_text li.open').classList.remove('open')
			item.classList.add('open');
			otherTexts[index].classList.add('open')
		})
	})
} handleNavComic();