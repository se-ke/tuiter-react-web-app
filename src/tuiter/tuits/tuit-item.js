import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer";
import TuitStats from "./tuit-stats";

const TuitItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-auto">
                    <img width={50}
                         className="float-end rounded-circle"
                         src={`/images/${tuit.image}`}
                         alt=""/>
                </div>
                <div className="col-10">
                    <div className="w-100">
                        <span className="fw-bold">{tuit.userName} </span>
                        <i className="bi bi-patch-check-fill text-primary"></i>
                        <span className="text-muted"> {tuit.handle} • {tuit.time}</span>
                        <span className="float-end">
                            <i className="bi bi-x-lg float-end"
                               onClick={() => deleteTuitHandler(tuit._id)}></i>
                        </span>
                    </div>
                    <div className="mb-2">
                        {tuit.tuit}
                    </div>
                    <TuitStats tuit={tuit}/>
                </div>
            </div>
        </li>

    )
}
export default TuitItem;