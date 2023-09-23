import {comics, chapterComics} from "../api/comics.js"
import {handleRandom, handleViewer} from "./function.js"
// ---------------------------------------------------------------------------
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const listChap = $('.list_chap')
// Chèn link-------------------------------------------------------------------
var boxRanks = $$('.comis-box_random');
boxRanks[0].innerHTML = handleViewer;
boxRanks[1].innerHTML = handleRandom;

//Thêm vào mục theo dõi----------------------------------------------------
	var btnFollows = $$('.follow_empty');
	btnFollows.forEach((value, key) => {
		value.addEventListener('click', () =>{
			document.querySelector('.follow_empty.close').classList.remove('close')
			value.classList.add('close');
		})
	})
// Thêm hiệu ứng Tab UI------------------------------------------------------
const tabs = $$(".others_list");
const panes = $$(".others_text");
tabs.forEach((tab, index) => {
	const pane = panes[index];
	tab.onclick = function () {
	$(".others_list.select-it").classList.remove("select-it");
	$(".others_text.open").classList.remove("open");

	this.classList.add("select-it");
	pane.classList.add("open");
	};
});
//Nhận dạng truyện tranh-------------------------------------------------------
const idComics = $('section').getAttribute('id')
let currentChap = chapterComics[idComics]

// Chèn link vào btn ------------------------------------------------------
const linkRead = $$('.img-link_read');

function linkReadComic(listChapter) {
	var firstListChapter = listChapter[0].linkChapter;
	var indexLastChapter = listChapter.length - 1;
	var lastListChapter = listChapter[indexLastChapter].linkChapter;
	linkRead[0].setAttribute('href', firstListChapter);
	linkRead[1].setAttribute('href', lastListChapter);
}
linkReadComic(currentChap);

listChap.innerHTML = currentChap.map(renderChap).join('')
function renderChap(item) {
	var {nameChapter, linkChapter, timeDate } = item;
	return	(`
		<li class="infor-chapter_list">
			<a class="chapter_list-link" href="${linkChapter}">${nameChapter}
				<span class="chapter_list-time">${timeDate}</span>
			</a>
		</li>
	`)
}