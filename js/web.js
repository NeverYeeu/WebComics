import {comics} from "../api/comics.js"
import {handleNavWeb} from "./function.js"
// -------------------------------------Nav-website-----------------------------------
handleNavWeb();
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
// -----------------------------------Thêm header/ footer------------------------------------
let header =  $('header');
let footer = $('footer');
if (header) {
	header.innerHTML = (
		`
		<div class="column header-website" >
			<div class="logo">
				<a href="/index.html">Readic-Com
					<div class="hello">Hello World</div>
				</a>
			</div>
			<ul class="nav-list">
				<li class="filter-list"><a class="filter-list_link" href="">Readic Chat</a></li>
				<li class="filter-list">
					<a href="/genre.html" class="filter-list_link">Thể loại</a>
					<div class="filter-list_wrapper">
						<ul class="filter-list_genre">
							<li><a href="" style="color: var(--primary-color)">Tất cả
							</a></li>
							<li><a href="">Action</a></li>
							<li><a href="">Adult</a></li>
							
						</ul>
					</div>
				</li>
				<li class="filter-list">
					<a class="filter-list_link" href="/filtertop.html">Rank</a>
					<div class="filter-list_wrapper">
						<ul class="filter-list_genre filter-list_genre2">
							<li><a href="" >
								<i class="fa-regular fa-eye"></i>
								Top all 
							</a></li>
							<!-- <li><a href=""><i class="fa-regular fa-eye"></i>Top Tháng</a></li>
							<li><a href=""><i class="fa-regular fa-eye"></i>Top Tuần</a></li>
							<li><a href=""><i class="fa-regular fa-eye"></i>Top Ngày</a></li>
							<li><a href=""><i class="fa-regular fa-eye"></i>Top like</a></li>
							<li><a href=""><i class="fa-regular fa-eye"></i>Top chapter</a></li> -->
						</ul>
					</div>
				</li>
	
				<li class="filter-list"><a class="filter-list_link" href="/image.html">ReadicImg</a></li>
				<li class="filter-list"><a class="filter-list_link" href="">Light novel</a></li>	
			</ul>
			<div class="wrap-search">
					<div class="search-input"><input type="text" placeholder="Search..." id="searchBar" name="searchBar"></div> 
					<div class="search-icon">
						<i class="fa-solid fa-magnifying-glass open"></i>
						<i class="fa-solid fa-xmark"></i>
					</div>
					<div class="wrap-search_comics">
						<header>Kết quả tìm kiếm:</header>
						<div class="search_comic-info">
							<a href="" class="search_comic-box">
								<img src="./img/background.jpg" alt="" class="comic-box_img">
								<div class="comic-box_info">
									<span>Onepiece</span>
									<span class="box_info-genre">Anime</span>
								</div>
							</a>
						</div>
						<div class="overlay-close"></div>
					</div>
				</div>
			<a href="/acount.html" class="user-log">
				<span >Register</span>
				<span>/</span>
				<span>Log in</span>
			</a>
			<div id="navIcon" ><i class="fa-solid fa-bars"></i></div>
		</div>
		`
	)
	footer.innerHTML = (
		`
		<footer id="footer">
			<div class="column column-footer" ">
				<div class="column-footer_left">
					<p>Copyright © 2023 All Rights Reserved</p>
				</div>
				<div class="column-footer_right">
					
				</div>
			</div>
		</footer>
		`
	)
}
//Search bar-------------------------------------------------------------
const inputSearchBar = document.getElementById('searchBar');
var boxSearch = $('.wrap-search_comics');
inputSearchBar.addEventListener('keyup',() => {
	boxSearch.classList.add('open');
});
$('.overlay-close').addEventListener('click', () =>{
	boxSearch.classList.remove('open');
})
searchComics(comics)
function searchComics(arr) {
	inputSearchBar.addEventListener('keyup', (e) => {
		const searchData = e.target.value.toLowerCase();
		
		const filterData = arr.filter((item) => {
			return item.nameComic.toLowerCase().includes(searchData);
		})
		var displaySearch = (items) =>{
			const searchComics = $('.search_comic-info');
			searchComics.innerHTML = items.map((item) => {
				var {linkImg, nameComic, genre, linkComic } = item;
				return (`
							<a href="${linkComic }" class="search_comic-box">
								<img src=${linkImg} alt="" class="comic-box_img">
								<div class="comic-box_info">
									<span>${nameComic}</span>
									<span class="box_info-genre">${genre}</span>
								</div>
							</a>
						`)
			}).join('');
		}
		displaySearch(filterData);
	})
}
// -----------------------------Extra Effect when Hover-----------------------------
//thêm màu khi hover vào nav
var changeColor = $$('.filter-list_link');
var boxChange = $$('.filter-list_wrapper');
	boxChange[0].onmousemove = () =>{
		changeColor[1].classList.add('color-primary');
	}
	boxChange[0].onmouseout = () =>{
		changeColor[1].classList.remove('color-primary');
	}
	boxChange[1].onmousemove = () =>{
		changeColor[2].classList.add('color-primary');
	}
	boxChange[1].onmouseout = () =>{
		changeColor[2].classList.remove('color-primary');
	}
function handleNavIcon(){
	let navIcon = $('#navIcon');
	let navList = $('.nav-list')
	navIcon.onclick = () => {
		navList.classList.toggle('open')
	}
}
handleNavIcon()





