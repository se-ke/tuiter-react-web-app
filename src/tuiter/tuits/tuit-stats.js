import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    return (
        <div className="row">
            <div className="col-2">
                <i className="bi bi-chat"></i>
                <span> {tuit.replies}</span>
            </div>
            <div className="col-2">
                <i className="bi bi-arrow-repeat"></i>
                <span> {tuit.retuits}</span>
            </div>
            <div className="col-2">
                {tuit.liked &&
                    <i onClick={() => dispatch(updateTuitThunk({
                        ...tuit,
                        likes: tuit.likes - 1,
                        liked: false
                    }))} className="bi bi-heart-fill text-danger"></i>}
                {!tuit.liked &&
                    <i onClick={() => dispatch(updateTuitThunk({
                        ...tuit,
                        likes: tuit.likes + 1,
                        liked: true
                    }))} className="bi bi-heart text-danger"></i>}
                <span>{tuit.likes}</span>
            </div>
            <div className="col-2">
                {tuit.disliked &&
                    <i onClick={() => dispatch(updateTuitThunk({
                        ...tuit,
                        dislikes: tuit.dislikes - 1,
                        disliked: false
                    }))} className="bi bi-hand-thumbs-down-fill"></i>}
                {!tuit.disliked &&
                    <i onClick={() => dispatch(updateTuitThunk({
                        ...tuit,
                        dislikes: tuit.dislikes + 1,
                        disliked: true
                    }))} className="bi bi-hand-thumbs-down"></i>}
                <span>{tuit.dislikes}</span>
            </div>
            <div className="col-4">
                <i className="bi bi-share"></i>
            </div>

        </div>
    )
}

export default TuitStats;