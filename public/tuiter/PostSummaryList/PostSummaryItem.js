const PostSummaryItem = (post) => {
    return (`
        <li class="list-group-item">
            <div class="row">
                <div class="col-10">
                    <div class="text-muted">${post.topic}</div>
                    <div>
                        <span class="fw-bold">${post.userName}</span>
                        <i class="fas fa-check-circle d-inline"></i>
                        <span class="text-muted"> • ${post.time}</span>
                    </div>
                    <div class="fw-bold">${post.title}</div>
                </div>
                <div class="col-2 ps-0">
                    <img class="w-100 tweet-preview-image" src="${post.image}" alt="">
                </div>
            </div>
        </li>
    `)
}
export default PostSummaryItem;