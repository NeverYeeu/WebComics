// I. Hiện số view:
// 		1.view day
// 		2.view week
// 		3.view month
//		4.view year
// II. Hiện số lượt like
// III. Hiện số ngày cập nhật
import {comics} from "../api/comics.js"
import {pagination} from "./function.js"
import {viewComics, likeComics, randomComics} from "./function.js"

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// tạo hiêu ứng click vào filter
const topComics = $$('.top-comic');
topComics.forEach( (tabComic) => {
	tabComic.onclick = function () {
		$('.top-comic.colorBack').classList.remove('colorBack')
		this.classList.add('colorBack')
	}
})
// Top Update--------------------------------------------------------------------------
let topComicsDay = $('.top_day');
let topComicsWeek = $('.top_week');
let topComicsLike = $('.top_like');
let nameTop = $('.name-top')
let comicListRight = $('.comics-right_list')
//render Comics------------------------------------------------------------------------
comicListRight.innerHTML =  comics.map(renderComics).join(''); 

topComicsDay.addEventListener('click', function(){
	nameTop.innerText = 'Top Day';
	comicListRight.innerHTML =  viewComics.map(renderComics).join('');
	pagination();
})
topComicsWeek.addEventListener('click', function(){
	nameTop.innerText = 'Top Week';
	comicListRight.innerHTML =  viewComics.map(renderComics).join('');
	pagination();
})
topComicsLike.addEventListener('click', function(){
	nameTop.innerText = 'Top Like';
	comicListRight.innerHTML =  likeComics.map(renderComics).join('');
	pagination();
})
//Top month-------------------------------------------------------------------------------
function topMonth(){
	document.querySelector('.top_month').addEventListener('click', () => {
		document.querySelector('.name-top').innerText = 'Top Month'
		alert('Chức năng này hiện đang cập nhât!')
	});
}
//Top year--------------------------------------------------------------------------------
function topYear(){
	document.querySelector('.top_year').addEventListener('click', () => {
		document.querySelector('.name-top').innerText = 'Top Year'
		alert('Chức năng này hiện đang cập nhât!')
	});
}
topMonth(); topYear();
function renderComics(item) {
	var {linkComic, linkImg, altImg, viewer, liked, linkComic, nameComic, linkChap, nameChap, updateChap} = item
	return (`
		<div class="right_list-info">
			<a href=${linkComic} class="list-info_wrapper">
				<img src=${linkImg} alt=${altImg} class="list-info_img">
				<div class="list-info_interact">
					<span class="info_interact-viewer">
						<i class="fa-regular fa-eye"></i>
						${viewer}
					</span>
					<span class="info_interact-liked">
						<i class="fa-solid fa-heart"></i>
						${liked}
					</span>
				</div>
			</a>
			<a href=${linkComic } class="list-info_name">${nameComic}</a>
			<div class="list-info_chapter">
				<a href=${linkChap} class="infor_chapter-link" >
					${nameChap}
				</a>
				<span class="infor_chapter-time">${updateChap}</span>
			</div>
		</div>
	`)
}		
pagination();