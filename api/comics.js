const comics = [
	{
		id: 1,
		nameComic: "Sekai Saikyou No Shinjuu Tsukai",
		translator: "NeverYeeu",
		nameChap: "Chapter 8",
		linkImg: "https://i.postimg.cc/br14P1y6/Sekai-Saikyou-No-Shinjuu-Tsukai-2.jpg",
		altImg: "Sekai_Saikyou_No_Shinjuu_Tsukai",
		linkChap: "/chapter/ReadicCom-0001/chapter-8.html",
		updateChap: "06/08/23",
		updateDay: "2",
		linkComic: "/chapter/ReadicCom-0001/ReadicCom-0001.html",
		genre: ["adventure", "natural"],
		viewer: 1,
		liked: 0
	  },
	  {
		id: 2,
		nameComic: "Sủng Thú Siêu Thần",
		translator: "Unknown",
		nameChap: "Chapter 0",
		linkImg: "https://i.postimg.cc/vm11YGJd/1669086278681-cua-hang-sung-thu-sieu-than2.png",
		altImg: "Sủng_Thú_Siêu_Thần",
		linkChap: "/chapter/ReadicCom-0002/chapter-0.html",
		updateChap: "16/08/23",
		updateDay: "2",
		linkComic: "/chapter/ReadicCom-0002/ReadicCom-0002.html",
		genre: ["manhwa", "comic", "action"],
		viewer: 1,
		liked: 0
	  },
	  {
		id: 3,
		nameComic: "Ta Có Một Sơn Trại",
		linkImg: "https://i.postimg.cc/BnvDQhYx/001.jpg",
		altImg: "Ta_Có_Một_Sơn_Trại",
		linkComic: "/chapter/ReadicCom-0003/ReadicCom-0003.html",
		popularity: "Hot",
		nameChap: "Chapter 1",
		linkChap: "/chapter/ReadicCom-0003/chapter-1.html",
		updateChap: "22/08/23",
		updateDay: "4",
		genre: ["manhua", "comic", "action"],
		viewer: 52,
		liked: 10
	  },
	  {
		id: 4,
		nameComic: "Toàn Chức Pháp Sư",
		linkImg: "https://i.postimg.cc/mrWVbmgZ/image.jpg",
		altImg: "Toàn_Chức_Pháp_Sư",
		linkComic: "/chapter/ReadicCom-0004/ReadicCom-0004.html",
		popularity: "Hot",
		nameChap: "Chapter 1",
		linkChap: "/chapter/ReadicCom-0004/chapter-1.html",
		updateChap: "22/08/23",
		updateDay: "3",
		genre: "Manhua",
		viewer: 78,
		liked: 6
	  },
	  {
		id: 5,
		nameComic: "Onepiece",
		linkImg: "https://upload.wikimedia.org/wikipedia/vi/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg",
		altImg: "Onepiece",
		linkComic: "/truyenTran",
		popularity: "Hot",
		nameChap: "chap1",
		linkChap: "/chapter.html",
		updateChap: "06/08/23",
		updateDay: "6",
		genre: "Manga",
		viewer: 1,
		liked: 5
	  },
	  {
		id: 6,
		nameComic: "SSS Class Suiside Hunter",
		linkImg: "https://img.wattpad.com/cover/267530490-256-k432650.jpg",
		altImg: "SSS_Class_Suiside_Hunter",
		linkComic: "/truyenTran",
		popularity: "Hot",
		nameChap: "Chapter 1",
		linkChap: "/chapter.html",
		updateChap: "04/08/23",
		updateDay: "0",
		genre: ["manhwa", "chuyển sinh", "action"],
		viewer: 12,
		liked: 10
	  },
	
	  {
		id: 7,
		nameComic: "Làm Nông Dân Trong Tòa Tháp Thử Thách",
		linkImg: "https://st.nettruyenmax.com/data/comics/26/lam-nong-dan-trong-toa-thap-thu-thach.jpg",
		altImg: "Làm_Nông_Dân_Trong_Tòa_Tháp_Thử_Thách",
		linkComic: "/truyenTran",
		popularity: "Hot",
		nameChap: "Chapter 21",
		linkChap: "/chapter.html",
		updateChap: "05/07/23",
		updateDay: "3",
		genre: ["anime", "comic", "action"],
		viewer: 78,
		liked: 0
	  },
	  {
		id: 8,
		nameComic: "Lạn Kha Kỳ Duyên",
		linkImg: "https://st.nettruyenmax.com/data/comics/120/lan-kha-ky-duyen.jpg",
		altImg: "Lạn_Kha_Kỳ_Duyên",
		linkComic: "/truyenTran",
		popularity: "Hot",
		nameChap: "Chapter 238",
		linkChap: "/chapter.html",
		updateChap: "05/08/23",
		updateDay: "2",
		genre: "manhwa",
		viewer: 42,
		liked: 9
	  },
	  {
		id: 9,
		nameComic: "Nghịch Thiên Tà Thần",
		linkImg: "https://st.nettruyenmax.com/data/comics/154/nghich-thien-ta-than.jpg",
		altImg: "Nghịch_Thiên_Tà_Thần",
		linkComic: "/truyenTran",
		popularity: "Hot",
		nameChap: "Chapter 640",
		linkChap: "/chapter.html",
		updateChap: "06/08/23",
		updateDay: "1",
		genre: "manhua",
		viewer: 67,
		liked: 35
	  }
]
export {comics}

const chapterComics = {
	"readicCom-0000": [
		{
			"nameChapter": "Chapter 0",
			"linkChapter": "/chapter/ReadicCom-0000/chapter-0.html",
			"timeDate": "22/08/2023"
		}
	],
	"readicCom-0001": [
		{
		  "nameChapter": "Chapter 1",
		  "linkChapter": "/chapter/ReadicCom-0001/chapter-1.html",
		  "timeDate": "08/08/2023"
		},
		{
		  "nameChapter": "Chapter 2",
		  "linkChapter": "/chapter/ReadicCom-0001/chapter-2.html",
		  "timeDate": "09/08/2023"
		},
		{
		  "nameChapter": "Chapter 3",
		  "linkChapter": "/chapter/ReadicCom-0001/chapter-3.html",
		  "timeDate": "10/08/2023"
		},
		{
		  "nameChapter": "Chapter 4",
		  "linkChapter": "/chapter/ReadicCom-0001/chapter-4.html",
		  "timeDate": "11/08/2023"
		},
		{
		  "nameChapter": "Chapter 5",
		  "linkChapter": "/chapter/ReadicCom-0001/chapter-5.html",
		  "timeDate": "12/08/2023"
		},
		{
		  "nameChapter": "Chapter 6",
		  "linkChapter": "/chapter/ReadicCom-0001/chapter-6.html",
		  "timeDate": "13/08/2023"
		},
		{
		  "nameChapter": "Chapter 7",
		  "linkChapter": "/chapter/ReadicCom-0001/chapter-7.html",
		  "timeDate": "14/08/2023"
		},
		{
		  "nameChapter": "Chapter 8: Có cái gì vậy",
		  "linkChapter": "/chapter/ReadicCom-0001/chapter-8.html",
		  "timeDate": "15/08/2023"
		}
	],
	"readicCom-0002": [
	{
		"nameChapter": "Chapter 0",
		"linkChapter": "/chapter/ReadicCom-0002/chapter-0.html",
		"timeDate": "22/08/2023"
	}
	],
	"readicCom-0003": [
	{
		"nameChapter": "Chapter 1",
		"linkChapter": "/chapter/ReadicCom-0003/chapter-1.html",
		"timeDate": "22/08/2023"
	}
	],
	"readicCom-0004": [
	{
		"nameChapter": "Chapter 1",
		"linkChapter": "/chapter/ReadicCom-0004/chapter-1.html",
		"timeDate": "22/08/2023"
	}
	]
}
export {chapterComics}
const serverImage = {
	"readicCom-0001": [
		{
			chapter1: {
				"server1" : [
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
				]
			}
		},
	],
}
export {serverImage}