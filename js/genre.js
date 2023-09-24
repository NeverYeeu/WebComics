import {comics} from "../api/comics.js"
import {pagination} from "./function.js"
import {viewComics, likeComics, randomComics} from "./function.js"

// Thêm mảng các thẻ loại truyện--------------------------------------------------------------
var genreDescription = [
	{nameGenre: 'action', description: 'Truyên này là truyện action'},
	{nameGenre: 'adventure', description: 'Truyên này là truyện adventure'},
	{nameGenre: 'anime', description: 'Truyên này là truyện anime'},
	{nameGenre: 'isekai',description: 'Truyên này là truyện isekai'},
	{nameGenre: 'comedy', description: 'Truyên này là truyện comedy'},
	{nameGenre: 'comic', description: 'Truyên này là truyện comic'},
	{nameGenre: 'demon', description: 'Truyên này là truyện demon'},
	{nameGenre: 'detective', description: 'Truyên này là truyện detective'},
	{nameGenre: 'doujishi', description: 'Thể loại truyện phóng tác do fan hay có thể cả những Mangaka khác với tác giả truyện gốc. Tác giả vẽ Doujinshi thường dựa trên những nhân vật gốc để viết ra những câu chuyện theo sở thích của mình.'},
	{nameGenre: 'drama', description: 'Truyên này là truyện drama'},
	{nameGenre: 'fantasy', description: 'Truyên này là truyện fantasy'},
	{nameGenre: 'gender', description: 'Truyên này là truyện gender'},
	{nameGenre: 'bender', description: 'Truyên này là truyện bender'},
	{nameGenre: 'harem', description: 'Truyên này là truyện harem'},
	{nameGenre: 'historica', description: 'Truyên này là truyện historica'},
	{nameGenre: 'horror', description: 'Truyên này là truyện horror'},
	{nameGenre: 'huyền huyễn', description: 'Truyên này là truyện huyền huyễn'},
	{nameGenre: 'isekai', description: 'Truyên này là truyện isekai'},
]
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var comicListRight = $('.comics-right_list');
var genreList = $('.genre-list');
	genreList.innerHTML = genreDescription.map((genre) => {
	var {nameGenre} = genre;
	return (`
		<li class="list_check">
			<input value=${nameGenre} id=${nameGenre} name="genre" type="radio">
			<label for=${nameGenre}>${nameGenre}</label>
		</li>
	`)
}).join('')

//Render nội dung ra trình duyệt-----------------------------------------------
	comicListRight.innerHTML = viewComics.map(renderComics).join('')
	pagination();
	comicsFilter(comics);

//Top Comics---------------------------------------------------------------
$('.top_day').addEventListener('click', function() {
	comicListRight.innerHTML = viewComics.map(renderComics).join('')
});
$('.top_like').addEventListener('click', function(){
	comicListRight.innerHTML = likeComics.map(renderComics).join('')
});
$('.top_radom').addEventListener('click', function(){
	comicListRight.innerHTML = randomComics.map(renderComics).join('')
})

var genreLists = $$('.list_check > input[type = radio]');
var genreValue;
function getValue(array, genreValue) {
	genreLists.forEach((genre, index) => {
		genre.addEventListener('click', () => {
			genre.classList.toggle('checked');
			if(genre.classList.contains('checked')){
				genreValue = genre.getAttribute('id'); 
				comicsFilter(array, genreValue);

			} else {
				// genreValue = {};
			}
			// return genreValue;
		})
	})
}
getValue(comics, genreValue);
// Ta có một mảng 
// dùng filter để trả về mảng có thuộc tính thỏa mãn
//
// getValue((genreValue) => console.log(genreValue))

// Tìm kiếm và tạo bộ lọc truyên tranh
//Tìm kiếm theo từ khóa ở các ô radio.
function comicsFilter(array, genreValue) {
	var newArray = array.filter((a) => {
		return a.genre.includes(genreValue);
	})
	//Lọc và tìm kiếm theo thể loại truyện------------------------------------------
	$('.genre-btn > button:nth-child(1)').addEventListener('click', () => {
		comicListRight.innerHTML = newArray.map(renderComics).join('');
		insertGenre(genreValue);

		$('.top_day').addEventListener('click', function() {
			comicListRight.innerHTML = viewComics.map(renderComics).join('')
		});
		$('.top_like').addEventListener('click', function(){
			comicListRight.innerHTML = likeComics.map(renderComics).join('')
		});
		$('.top_radom').addEventListener('click', function(){
			comicListRight.innerHTML = random.map(renderComics).join('')
		})
		pagination();
	})
}
function insertGenre(genreValue) {
	if (genreValue !== undefined) {
		$('.name-top').innerText = genreValue;
		$('.name-description > span:nth-child(1)').innerText = genreValue;
		genreLists.forEach((genre, index) => {
			genre.addEventListener('click', () => {
				$('.name-description > span:nth-child(2)').innerText = genreDescription[index].description;
			})
		})
	}
}
	//Xem tất cả-----------------------------------------------------------------------------
$('.genre-btn > button:nth-child(2)').addEventListener('click', () => {
	location.reload();
});

//Hiệu ứng khi ta click chuột
	function activeBtn() {
		var topBtns = $$('.top-comic');
		topBtns.forEach((topBtn, index) => {
			topBtn.addEventListener('click', () => {
				$('.top-comic.colorBack').classList.remove('colorBack');
				topBtn.classList.add('colorBack');
			} )
		})
	}
	activeBtn();
var boxGenre = $('.box-genre');
const genreBtn = $('.top_genre');
const genreOverlay = $('.genre_overlay');
if(genreBtn) {
	genreBtn.addEventListener('click', () => {
		boxGenre.classList.toggle('open');
		genreOverlay.classList.toggle('open')
	})
}
genreOverlay.onclick = () => {
	boxGenre.classList.remove('open')
	genreOverlay.classList.remove('open')
	// genreBtn.classList.remove('colorBack')
}
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

