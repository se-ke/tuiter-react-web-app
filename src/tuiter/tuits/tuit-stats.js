import React from "react";

const TuitStats = ({tuit}) => {
    return (
        <div className="row">
            <div className="col-3">
                <i className="bi bi-chat"></i>
                <span> {tuit.replies}</span>
            </div>
            <div className="col-3">
                <i className="bi bi-arrow-repeat"></i>
                <span> {tuit.retuits}</span>
            </div>
            <div className="col-3">
                {tuit.liked && <i className="bi bi-heart-fill text-danger"></i>}
                {!tuit.liked && <i className="bi bi-heart"></i>}
                <span> {tuit.replies}</span>
            </div>
            <div className="col-3">
                <i className="bi bi-share"></i>
            </div>

        </div>
    )
}

export default TuitStats;