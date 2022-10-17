const WhoToFollowListItem = (who) => {
    return (`
        <li class="list-group-item">
            <div class="row">
                <div class="col-3 col-xl-2 d-flex align-items-center pe-0 pe-xxl-2">
                    <img class="rounded-circle w-100" src="../../images/${who.avatarIcon}" alt="">
                </div>
                <div class="col-5 col-xl-7">
                    <div>
                        <span class="fw-bold">${who.userName}</span>
                        <i class="fas fa-check-circle d-inline"></i>
                    </div>
                    <div>@${who.handle}</div>
                </div>
                <div class="col-4 col-xl-3 d-flex align-items-center">
                    <button class="btn btn-primary w-100 override-bs pe-0 ps-0">Follow</button>
                </div>
            </div>
        </li>
    `)
}
export default WhoToFollowListItem;