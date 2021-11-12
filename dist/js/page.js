let comments = $('.comments .page-card-content');
let replyComment = document.querySelector('.replying-comment');

// Get current date
const namaBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
const ambilDate = new Date();
const tahun = ambilDate.getFullYear();
const bulan = namaBulan[ambilDate.getMonth()];
const tanggal = String(ambilDate.getDate()).padStart(2, '0');
let tglComment = tanggal + ' ' + bulan + ' ' + tahun;
let commentWrapper = 'comment';
let commentReplyWrapper = 'comment-1'
let commentId;
let commentAttr;

// Get selected comment to reply on click
$('.user-comment').on('click', '.btn-reply-comment', function(ev) {
    let userComment = $(this).parent();
    commentAttr = userComment.parent().attr('id');
    commentId = commentAttr.slice(-1)
    let replyCommentWrapper = $(this).parent().clone(true);
    let commentContent = replyCommentWrapper.children().last().remove();

    // show selected comment to reply
    let replyWrapper = document.querySelector('.replying-comment');
    let replyTag = document.createElement('span');
    replyTag.classList.add('reply-sub')
    replyTag.innerHTML = 'Reply <i class="bi bi-reply-fill flipped"></i>'
    replyWrapper.append(replyTag);
    replyCommentWrapper.appendTo(replyWrapper);
    $('.replying-comment').css('display', 'block');
})

// Insert comment on click
$('.btn-comment').on('click', function(e) {
    e.preventDefault();
    let inputName = $('#input-comment-nama').val();
    let inputEmail = $('#input-comment-email').val();
    let inputComment = $('#input-comment-area').val();
    // Add new comment
    if(replyComment.getElementsByClassName('user-comment').length != 0) {
        // Insert child comment
        let insertComment = `<div class="${commentWrapper} ${commentReplyWrapper}" id="commentChild-${commentId}">
        <div class="user-profile-comment w-max">
            <img src="./img/no-profile-comment.png" alt="User" class="user-img-comment">
        </div>
        <div class="user-comment">
            <h2 class="username-comment">${inputName}</h2>
            <span class="comment-date">
                <i class="bi bi-calendar-event-fill"></i> ${tglComment}
            </span>
            <p class="comment-desc">
                ${inputComment}
            </p>

            <button class="btn-reply-comment">Reply <i class="bi bi-reply-fill"></i></button>
        </div>
    </div>`;

    $('#comment-' + commentId).parent().append(insertComment);
    $('.replying-comment').css('display', 'none');
    } else {
        // insert comment
        let insertComment = `
        <div class="${commentWrapper}">
        <div class="user-profile-comment w-max">
            <img src="./img/no-profile-comment.png" alt="User" class="user-img-comment">
        </div>
        <div class="user-comment">
            <h2 class="username-comment">${inputName}</h2>
            <span class="comment-date">
                <i class="bi bi-calendar-event-fill"></i> ${tglComment}
            </span>
            <p class="comment-desc">
                ${inputComment}
            </p>

            <button class="btn-reply-comment">Reply <i class="bi bi-reply-fill"></i></button>
        </div>
    </div>`;
    
    comments.append(insertComment);
    }

    // clear input value and hide selected reply comment
    inputName = $('#input-comment-nama').val('');
    inputEmail = $('#input-comment-email').val('');
    inputComment = $('#input-comment-area').val('');
    $('.replying-comment').empty();
  })
