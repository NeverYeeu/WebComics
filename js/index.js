import {comics} from "../api/src.js"
import {$, $$} from "./function.js"
import {renderHeader, renderFooter, handleSearchBar, handleNavBar, renderNavbar} from "./web.js"
import {handleWrapSearch, pagination} from "./function.js"
import {render, handleRandom, handleLike, handleViewer} from "./function.js"
// --------------------------------------------------------------------------------------------
let sizeScreen = screen.width;
const comicList = $('.comics-right_list');
var boxRanks = $$('.comis-box_random');
const boxSlide = $('.slide-content');
var dayOfWeeks = $$('.day-week');
let updateList = $('.update-comics');

const header = $('header')
const footer = $('footer')
header.innerHTML = renderHeader();
footer.innerHTML = renderFooter();
const navbar = $('nav');
const mobile = $('.nav-mobile');
console.log(sizeScreen)
if(sizeScreen > 480){
	navbar.innerHTML = renderNavbar();
}
else if(sizeScreen <= 480) {
	mobile.innerHTML = renderNavbar();
}
	handleSearchBar(); handleNavBar()
	// 
boxSlide.innerHTML = handleLike;
comicList.innerHTML = render;
boxRanks[0].innerHTML = handleViewer;
boxRanks[1].innerHTML = handleRandom;
let srcComics = comics.comic;
loadDay(srcComics); handleWrapSearch();


function handlMoveSlide() {
	var sizeLinks = $$('.content_comic-img');
	if  (sizeScreen <= 480) {
		sizeLinks.forEach((img) => {
			img.style.width = (sizeScreen / 2 ) - 6  + 'px'
		})
		moveSlide(2)
	}
	else {
		moveSlide(5)
	}
	var slideContent = $('.slide-content');
	function moveSlide(numImg) {
		var sizeLink = sizeLinks[0].clientWidth + 2.4 + 12;
		var moveSlide = 0;
		var maxLink = sizeLink * (sizeLinks.length - +numImg );
		// maxLink -= sizeLink;
		var nextSlide = () => {
			if (moveSlide < maxLink) {moveSlide =  moveSlide + sizeLink;}
			else {moveSlide = 0; }
			slideContent.style.marginLeft = '-' + moveSlide + 'px';
		}
		var prevSlide = () => {
			if (moveSlide == 0) {moveSlide = maxLink;}
			else {moveSlide -= sizeLink;}
			slideContent.style.marginLeft = '-' + moveSlide + 'px';
		}
			$('.slide-icon_right').addEventListener('click', nextSlide);
			$('.slide-icon_left').addEventListener('click', prevSlide);
		setInterval(() =>{
			nextSlide();
		}, 10000);
	}
}
handlMoveSlide();

function loadDay(arr) {
	//Lấy ngày hôm nay truyện cập nhật
	let dayOfYear = new Date();
	console.log(arr)
	var toDay = dayOfYear.getDay();
	dayOfWeeks[toDay].classList.add('assigned');
	var filterComic = arr.filter((e) => {
		return e.updateChap == toDay;
	})
	//Chèn truyện khi được tác động
	updateList.innerHTML = filterComic.map(renderUpdate).join('');
	renderGenre(filterComic)
	dayOfWeeks.forEach((day, index) => {
		day.addEventListener('click', () => {
			$('.day-week.assigned').classList.remove('assigned');
			day.classList.add('assigned')
			let comicOfDay = arr.filter((e) => {
				return e.updateChap == index;
			});
			updateList.innerHTML = comicOfDay.map(renderUpdate).join('')
			renderGenre(comicOfDay)
		})
	})
}
function renderUpdate(item) {
	var { linkImage, nameComic, linkComic, liked} = item;
		return 	(`
				<div class="update-comic">
					<a href=${linkComic} class="update-comic_link">
						<img src=${linkImage} alt=${nameComic} class="comic_image">
						<p class="comic_name">${nameComic}</p>
						<div class="comic_infor">
							<span class="info_like" >
								<i class="fa-solid fa-thumbs-up"></i>
								${liked} 
							</span>
							<span class="info_like"></span>
						</div>
					</a>
				</div>
			`)
}
function renderGenre(comicOfDay) {
	let genre = $$('.info_like:nth-child(2)');
		for (let i = 0; i < genre.length; ++i){
			genre[i].innerHTML = comicOfDay[i].nameGenre.map((genre) => {
				return (`
					<p>${genre.genre}</p>
				`)
			});
		}
}
pagination();