// import {comics} from "../api/comics.js"
import {comics} from "../api/src.js"

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
export{$, $$}
// Lâyys gia tri comic--------------------------------------------------------------
let getComic = comics.comic;
// Tạo danh sách truyện nhiều lượt xem ---------------------------------------------
const newComics = getComic.reverse()
const render = newComics.map(renderComics).join('')



	export {render} 
const randomComics = [...new Set(getComic.map((item) => {return item}))];
// Tạo mảng ngẫu nhiên--------------------------------------------------------------
for (var i = randomComics.length - 1; i> 0; i--) {
	var j = Math.floor(Math.random() * (i + 1));
	[randomComics[i],  randomComics[j]] = [randomComics[j], randomComics[i]]
}
// 
const likeComics = [...new Set(getComic.map((item) => item))]
const viewComics = [...new Set(getComic.map((item) => item))]
likeComics.sort((a, b) => b.liked - a.liked)
viewComics.sort((a, b) => b.viewer - a.viewer)

const handleLike = likeComics.map(renderSlide).join('');
const handleViewer = viewComics.map(renderRank).join('');
const handleRandom = randomComics.map(renderRank).join('');

export {handleRandom, handleLike, handleViewer}
export {likeComics, viewComics, randomComics}
function renderComics(item) {
	let getChapter = item.listChapter.length;
	let nameChap = item.listChapter[getChapter - 1].nameChapter
	let linkChap =  `chapter` + '/' +  item.listChapter[getChapter - 1].linkChapter
	let updateChap = item.listChapter[getChapter - 1].timeUpdate
	var {linkComic, linkImage, nameComic, viewer, liked} = item
	return (`
		<div class="right_list-info">
			<a href=${linkComic} class="list-info_wrapper">
				<img src=${linkImage} alt=${nameComic} class="list-info_img">
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
// Tạo bảng xếp hạng truyện---------------------------------------------------------
function renderRank(item) {
	let getChapter = item.listChapter.length;
	let nameChap = item.listChapter[getChapter - 1].nameChapter
	let linkChap =  `chapter` + '/' +  item.listChapter[getChapter - 1].linkChapter

	var {nameComic, linkImage,nameComic, linkComic , viewer} = item;
			// var nameComic = item.nameComic;
			return (
			`
			<div class="comic-wrap">
				<a href=${linkComic }><img src=${linkImage} alt=${nameComic} class="comic-wrap_img"></a>
				<div class="comic-wrap_info">
					<a href=${linkComic } class="wrap_info-name">${nameComic}</a>
					<a href =${linkChap} class="wrap_info-chap">${nameChap}</a>
				</div>
				<div class="wrap_info-viewer">
					<i class="fa-regular fa-eye"></i>
					${viewer}
				</div>
			</div>
			`
			)
}

function renderSlide(item) {
	let getChapter = item.listChapter.length;
	let nameChap = item.listChapter[getChapter - 1].nameChapter
	var {nameComic, linkComic , linkImage} = item;
	return (
		`
		<a href=${linkComic } class="content_comic">
			<img src=${linkImage} alt=${nameComic} class="content_comic-img">

			<div class="content_comic-name">
				<div>${nameComic}</div>
				<div>${nameChap}</div>
			</div>
		</a>
		`
	)
}
//  Pagination-------------------------------------------------------------------
function pagination() {
	let thisPage = 1;
	let limit = 10;
	let list = $$('.right_list-info');
	let listPage = $('.listPage');
	function loadItem(){
		let beginGet = limit * (thisPage - 1);
		let endGet = limit * thisPage - 1;
		list.forEach((item, key)=>{
			if(key >= beginGet && key <= endGet){
				item.style.display = 'block';
			}else{
				item.style.display = 'none';
			}
		})
		renderListPage()
		tabPage()
	}
	loadItem();
	function renderListPage() {
		let count = Math.ceil(list.length / limit);
		let prevPage = $('.prev-page')
		let nextPage = $('.next-page')
		if (thisPage != 1) {
			prevPage.classList.remove('close')
			prevPage.onclick = () => { thisPage--; loadItem()}
		} else if(thisPage == 1) {prevPage.classList.add('close')}
		listPage.innerHTML = '';
		for( var i = 1; i <= count; i++){
			let newPage = document.createElement('li');
			newPage.innerText = i;
			if(i == thisPage){
				newPage.classList.add('active');
			}
			listPage.appendChild(newPage)
		}
		if (thisPage != count) {
			nextPage.classList.remove('close')
			nextPage.onclick = () => {thisPage++; loadItem()}
		} else if (thisPage >= count ) {nextPage.classList.add('close')}
	}
	function tabPage() {
		let pages = $$('.listPage > li')
		pages.forEach((page, index)=> {
			page.addEventListener('click', ()=>{
				thisPage = index + 1
				loadItem()
			})
		})
	}
}
//  Hộp Thông Báo Lỗi------------------------------------------------------------
function renderBoxAdmin() {
	return (`
	<div class="comic-information">
		Nếu bạn không Tải được ảnh, Hãy đổi Server Ảnh! 
	</div>
	<div class="comic-server_img">
		<span class="server_active">Server 1</span>
		<span>Server 2</span>
		<span>Server VIP</span>
	</div>
	<span class="comic-error">
		<p>Báo lỗi!</p>
		<i class="fa-solid fa-triangle-exclamation"></i>
	</span>
	<form action=""  class="comic-box_error">
		<h4>Báo lỗi</h4>
		<span>Nếu ảnh bị mất hoặc không có ảnh, hãy đổi Server ảnh trước khi Báo Lỗi.</span>
		<select name="" id="style-error">
			<option value="error-chap" selected>Chọn loại lỗi</option>
			<option value="error-image" >Ảnh lỗi, không thấy ảnh</option>
			<option value="error-chapter">Chapter bị trùng</option>
			<option value="error-translate">Truyện chưa dịch</option>
			<option value="error-comic">Đăng sai truyện</option>
		</select>
		<div>
			<label for="description-error">Bạn có thể mô tả chi tiết lỗi, Admin sẽ fix sớm nhất có thể.</label>
			<input type="text"  id="description-error" placeholder="Mô tả lỗi...">
		</div>
		<div class="btn-error">
			<button type="submit">Submit</button>
			<span>
				Đóng
				<i class="fa-solid fa-xmark"></i>
			</span>
		</div>
	</form>
	
	`)
}
// 
function handleNavWeb() {
	const linkBox = document.querySelector('.website-link');
	const controlLinkBox = document.querySelector('.toggle');
	controlLinkBox.onclick = () => {
		linkBox.classList.toggle('close');
	};
}
// Render Comment----------------------------------------------------------------
function renderComment() {
	return (`
	<div class="infor-comments_header">Bình luận
		<i class="fa-regular fa-comment"></i>
	</div>
	<div class="infor-comment_box close">
		<img src="img/background.jpg" alt="" class="comment_box-img">
		<div class="comment_box-input">
			<textarea name="comment" id="" placeholder="Bình luận" col="5" rows="2"></textarea>
			<button class="box-input_submit">Submit</button>
		</div>
	</div>
	`)
}
// 
function handleWrapSearch() {
	let searchbar = $('.search-input');
	let iconSearchs = $$('.search-icon > i');
	let searchComics = $('.wrap-search_comics');
	let overLay = $('.overlay-close');

	function handleIcon() {
		iconSearchs[0].addEventListener('click', () => {
			iconSearchs[0].classList.remove('open')
			iconSearchs[1].classList.add('open')
			searchbar.classList.add('open')
			searchComics.classList.add('open')
		})
		iconSearchs[1].addEventListener('click', () => {
			iconSearchs[1].classList.remove('open')
			iconSearchs[0].classList.add('open')
			searchbar.classList.toggle('open')
			searchComics.classList.remove('open')
		})
		overLay.addEventListener('click' , () => {
			iconSearchs[1].classList.remove('open')
			iconSearchs[0].classList.add('open')
			searchbar.classList.toggle('open')
			searchComics.classList.remove('open')
		})
	} handleIcon();
}
export{
	renderComment, handleNavWeb, pagination,handleWrapSearch,
	renderBoxAdmin
}