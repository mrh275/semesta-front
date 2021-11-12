let comments = $('.comments .page-card-content');
let inputName = $('#input-comment-nama').val();
let inputEmail = $('#input-comment-email').val();
let inputComment = $('#input-comment-area').val();
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

$('.btn-comment').on('click', function(e) {
    e.preventDefault();
    // Add new comment
    if(replyComment.getElementsByClassName('user-comment').length != 0) {
        let insertComment = `<div class="${commentWrapper} ${commentReplyWrapper}">
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
    replyComment.removeChild(replyComment.lastChild);
    } else {
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
    replyComment.removeChild(replyComment.lastChild);
    }
  })

    // Select reply comment
    const replybtn = document.querySelectorAll('.btn-reply-comment');
    let cloneComment;
    replybtn.forEach(item => {
        item.addEventListener('click', event => {
            let getComment = item.parentElement;
            cloneComment = getComment.cloneNode(true)
            let buton = cloneComment.getElementsByTagName('button');
            console.log(buton)
            let replyWrapper = document.querySelector('.replying-comment');
            let replyTag = document.createElement('span');
            replyTag.classList.add('reply-sub')
            replyTag.innerHTML = 'Reply <i class="bi bi-reply-fill flipped"></i>'
            replyWrapper.append(replyTag, cloneComment)
        })
    })

    function removeBtn() {
        replyComment.getElementsByTagName('button').remove();
    }