import {comics} from "../api/comics.js"
import {$, $$} from "./function.js"
import {renderHeader, renderFooter, handleSearchBar, handleNavBar} from "./web.js"
import {handleWrapSearch, pagination} from "./function.js"
import {render, handleRandom, handleLike, handleViewer} from "./function.js"
// --------------------------------------------------------------------------------------------
const comicList = $('.comics-right_list');
var boxRanks = $$('.comis-box_random');
const boxSlide = $('.slide-content');
var dayOfWeeks = $$('.day-week');
let updateList = $('.update-comics');

const header = $('header')
const footer = $('footer')
header.innerHTML = renderHeader();
footer.innerHTML = renderFooter();
	handleSearchBar(); handleNavBar()
	// 
boxSlide.innerHTML = handleLike;
comicList.innerHTML = render;
boxRanks[0].innerHTML = handleViewer;
boxRanks[1].innerHTML = handleRandom;
loadDay(comics); handleWrapSearch();


function handlMoveSlide() {
	let sizeScreen = screen.width;
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
	var toDay = dayOfYear.getDay();
	dayOfWeeks[toDay].classList.add('assigned');
	var filterComic = arr.filter((e) => {
		return e.updateDay == toDay;
	})
	//Chèn truyện khi được tác động
	updateList.innerHTML = filterComic.map(renderUpdate).join('');
	dayOfWeeks.forEach((day, index) => {
		day.addEventListener('click', () => {
			$('.day-week.assigned').classList.remove('assigned');
			day.classList.add('assigned')
			let comicOfDay = arr.filter((e) => {
				return e.updateDay == index;
			});
			updateList.innerHTML = comicOfDay.map(renderUpdate).join('')
		})
	})
}
function renderUpdate(item) {
	var {nameComic, linkImg, altImg, linkComic, liked, genre} = item;
		return 	(`
				<div class="update-comic">
					<a href=${linkComic} class="update-comic_link">
						<img src=${linkImg} alt=${altImg} class="comic_image">
						<p class="comic_name">${nameComic}</p>
						<div class="comic_infor">
							<span class="info_like" >
								<i class="fa-solid fa-thumbs-up"></i>
								${liked} 
							</span>
							<span class="info_like" >
								${genre} 
							</span>
						</div>
					</a>
				</div>
			`)
}
pagination();