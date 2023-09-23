	//Server 1-------------------------------------------------------------
var comic_Img = [
	[
		{src :'https://i.postimg.cc/7hnpLXVs/Sekai-Saikyou-No-Shinjuu-Tsukai-Chapter-1-image-0.jpg'},
		{src :'https://i.postimg.cc/4yPSGyfj/Sekai-Saikyou-No-Shinjuu-Tsukai-Chapter-1-image-1.jpg'},
		{src :'https://i.postimg.cc/wTBWJ6TT/Sekai-Saikyou-No-Shinjuu-Tsukai-Chapter-1-image-10.jpg'},
		{src :'https://i.postimg.cc/h4syfJn5/Sekai-Saikyou-No-Shinjuu-Tsukai-Chapter-1-image-11.jpg'},
		{src :'https://i.postimg.cc/y8gvQvZM/Sekai-Saikyou-No-Shinjuu-Tsukai-Chapter-1-image-12.jpg'},
		{src :'https://i.postimg.cc/7YQKnpf1/Sekai-Saikyou-No-Shinjuu-Tsukai-Chapter-1-image-13.jpg'},
		{src :'https://i.postimg.cc/g2C4f8yn/Sekai-Saikyou-No-Shinjuu-Tsukai-Chapter-1-image-14.jpg'},
		{src :'https://i.postimg.cc/vBMhmyNy/Sekai-Saikyou-No-Shinjuu-Tsukai-Chapter-1-image-15.jpg'},
		{src :'https://i.postimg.cc/vBzzgKJV/Sekai-Saikyou-No-Shinjuu-Tsukai-Chapter-1-image-16.jpg'},
		{src :'https://i.postimg.cc/MKXDHddn/Sekai-Saikyou-No-Shinjuu-Tsukai-Chapter-1-image-17.jpg'},
		{src :'https://i.postimg.cc/HW6zTf4G/Sekai-Saikyou-No-Shinjuu-Tsukai-Chapter-1-image-18.jpg'},
		{src :'https://i.postimg.cc/PrcMwYR2/Sekai-Saikyou-No-Shinjuu-Tsukai-Chapter-1-image-19.jpg'},
		{src :'https://i.postimg.cc/pVQNkXHf/Sekai-Saikyou-No-Shinjuu-Tsukai-Chapter-1-image-2.jpg'},
		{src :'https://i.postimg.cc/nLfYdZZm/Sekai-Saikyou-No-Shinjuu-Tsukai-Chapter-1-image-20.jpg'},
		{src :'https://i.postimg.cc/vTK55w3c/Sekai-Saikyou-No-Shinjuu-Tsukai-Chapter-1-image-21.jpg'},
		{src :'https://i.postimg.cc/vB3rHVn7/Sekai-Saikyou-No-Shinjuu-Tsukai-Chapter-1-image-22.jpg'},
		{src :'https://i.postimg.cc/5yywH25h/Sekai-Saikyou-No-Shinjuu-Tsukai-Chapter-1-image-23.jpg'},
		{src :'https://i.postimg.cc/kMYQ0Wqq/Sekai-Saikyou-No-Shinjuu-Tsukai-Chapter-1-image-24.jpg'},
		{src :'https://i.postimg.cc/tCLhTysc/Sekai-Saikyou-No-Shinjuu-Tsukai-Chapter-1-image-25.jpg'},
		{src :'https://i.postimg.cc/8PFRNszW/Sekai-Saikyou-No-Shinjuu-Tsukai-Chapter-1-image-26.jpg'},
		{src :'https://i.postimg.cc/hjymqqFp/Sekai-Saikyou-No-Shinjuu-Tsukai-Chapter-1-image-27.jpg'},
		{src :'https://i.postimg.cc/nzcm5hWX/Sekai-Saikyou-No-Shinjuu-Tsukai-Chapter-1-image-28.jpg'},
		{src :'https://i.postimg.cc/YSxgbWdc/Sekai-Saikyou-No-Shinjuu-Tsukai-Chapter-1-image-29.jpg'},
		{src :'https://i.postimg.cc/Gm5694FC/Sekai-Saikyou-No-Shinjuu-Tsukai-Chapter-1-image-3.jpg'},
		{src :'https://i.postimg.cc/cC0bPwSQ/Sekai-Saikyou-No-Shinjuu-Tsukai-Chapter-1-image-4.jpg'},
		{src :'https://i.postimg.cc/zfH6hq7R/Sekai-Saikyou-No-Shinjuu-Tsukai-Chapter-1-image-5.jpg'},
		{src :'https://i.postimg.cc/KznW9QdG/Sekai-Saikyou-No-Shinjuu-Tsukai-Chapter-1-image-6.jpg'},
		{src :'https://i.postimg.cc/8583BxXX/Sekai-Saikyou-No-Shinjuu-Tsukai-Chapter-1-image-7.jpg'},
		{src :'https://i.postimg.cc/0NSXQc5Y/Sekai-Saikyou-No-Shinjuu-Tsukai-Chapter-1-image-8.jpg'},
		{src :'https://i.postimg.cc/9MtxP07z/Sekai-Saikyou-No-Shinjuu-Tsukai-Chapter-1-image-9.jpg'},
	], 
	// chapter_1Img, 
];
const indentifyChap = document.querySelector('#identify-chap').innerText;
var imgList = document.querySelector('.comic-list_img');
	//get Api Chapter---------------------------------------------
function getApi(listChapter) {
	fetch(chapterApi)
		.then((res)=> res.json())
		.then(listChapter)
}
function reServer() {
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
}
export {} 



