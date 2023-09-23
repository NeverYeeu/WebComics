	//Server 1-------------------------------------------------------------
var chapter_1Img = [
	{src: '/img/background.jpg'},
]
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
var comic_Img = [
	[
		{src: '/img/background.jpg'},
		{src: '/img/background.jpg'},
		
	], 
	chapter_1Img, 
];
const indentifyChap = document.querySelector('#identify-chap').innerText;
var imgList = document.querySelector('.comic-list_img');

function reServer() {
	getApi(function(listChapter) {
		listChapter.forEach((chapter, index) => {
			chapter.nameChapter == indentifyChap;
			imgList.innerHTML = comic_Img[index].map((chapterImg) => {
				var {src} = chapterImg;
				return (`
					<div class="comic-list_img">
						<img src=${src} alt="">
					</div>	
				`)
			}).join('');
		})
	});
}

// imgList.innerHTML = im
var serverBtns =  document.querySelectorAll('.comic-server_img > span');
serverBtns.forEach((serverBtn, index) => {
	serverBtn.addEventListener('click', (e) =>{
		document.querySelector('.comic-server_img > span.server_active').classList.remove('server_active');
		serverBtn.classList.add('server_active');
		reServer();
	})
})