import React from "react";
const WhoToFollowListItem = (
    {
        who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.jpg' }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row me-0 ms-0">
                <div className="col-2 ps-0 pe-0">
                    <img className="rounded-circle" height={48} src={`/images/${who.avatarIcon}`} alt=""/>
                </div>
                <div className="col-8 ps-0 pe-0">
                    <div className="fw-bold">{who.userName}</div>
                    <div>@{who.handle}</div>
                </div>
                <div className="col-2 d-flex align-items-center me-0 ps-0 pe-0">
                    <button className="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;