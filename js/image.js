var images = [
	{
		id: 1,
		linkImage: '/img/images/image-001.jpg',
		nameImage: 'Anime_girl',
		keyImage: 'pngtree'
	},
	{
		id: 2,
		linkImage: '/img/images/image-001.jpg',
		nameImage: 'image_0002',
		keyImage: 'Girl anime'
	},
	{
		id: 3,
		linkImage: '/img/images/image-002.jpeg',
		nameImage: 'Anime_girl',
		keyImage: 'Anime Girl'
	},
	{
		id: 4,
		linkImage: '/img/images/image-004.jfif',
		nameImage: 'image_0004',
		keyImage: 'Girl anime'
	},
	{
		id: 5,
		linkImage: '/img/images/image-005.jpg',
		nameImage: 'Anime_girl',
		keyImage: 'Anime Girl'
	},
	{
		id: 6,
		linkImage: '/img/images/image-006.jpg',
		nameImage: 'image_0006',
		keyImage: 'Girl anime'
	},
	{
		id: 7,
		linkImage: '/img/images/image-007.jpg',
		nameImage: 'Anime_girl',
		keyImage: 'Anime Girl'
	},
	{
		id: 8,
		linkImage: '/img/images/image-008.jpg',
		nameImage: 'image_0008',
		keyImage: 'Girl anime'
	},
	{
		id: 9,
		linkImage: '/img/images/image-009.jpg',
		nameImage: 'image_0009',
		keyImage: 'Girl anime'
	},
	{
		id: 10,
		linkImage: '/img/images/image-010.png',
		nameImage: 'Anime_girl',
		keyImage: 'Anime Girl'
	}
];
var newImages = [...new Set(images.map((image) => {return image}))]
const listBox = document.querySelector('.list-image');
listBox.innerHTML = newImages.map((image) => {
	var {linkImage, nameImage, keyImage} = image;
	return 	(`
			<div class="image_box">
				<img class="image_box-img" src=${linkImage} alt=${nameImage}>
				<ul>
					<li class="image_box-infor">${keyImage}</li>
				</ul>
				<div class="image_box-read">
					<i class="fa-solid fa-download"></i>
				</div>
			</div>
			`)
}).join('');

	//Tải ảnh về máy--------------------------------------------------------------------------
const dowloadBtns = document.querySelectorAll('.image_box-read');
let imgDownloads = document.querySelectorAll('.image_box-img');
dowloadBtns.forEach((dowloadBtn, index) => {
	dowloadBtn.addEventListener('click', () => {
		const selectDownload = confirm('Bạn có muốn tải ảnh này không!');
		if(selectDownload == true) {
			let imgPath = imgDownloads[index].getAttribute('src');
			let fileName = getFileName(imgPath);
			saveAs(imgPath, fileName);
		}
	});
})
function getFileName(str) {
	return str.substring(str.lastIndexOf('/') + 1);
}