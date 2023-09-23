
function renderComment() {
	return(`
		<div id="comments" class="box_infor-comments">
			<div class="infor-comments_header">Bình luận
				<i class="fa-regular fa-comment"></i>
			</div>
			<div class="infor-comment_box close">
				<img src="/img/background.jpg" alt="" class="comment_box-img">
				<div class="comment_box-input">
					<textarea name="comment" id="" placeholder="Bình luận" col="5" rows="2"></textarea>
					<button class="box-input_submit">Submit</button>
				</div>
			</div>
		</div>
	`)
}