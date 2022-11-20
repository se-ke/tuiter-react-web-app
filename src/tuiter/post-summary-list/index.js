import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk} from "../../services/tuits-thunks";
import TuitItem from "../tuits/tuit-item";

const PostSummaryList = () => {
    const {tuits, loading} = useSelector(state => state.tuitsData)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findTuitsThunk())
        //eslint-disable-next-line
    }, [])
    return(
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                <ul className="list-group">
                    {
                        tuits.map(post => <TuitItem key={post._id} tuit={post}/>)
                    }
                </ul>
            }
        </ul>
    );
};
export default PostSummaryList;