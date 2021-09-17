import { Route } from "react-router-dom";
import Players from "./Players";
import Courses from "./Courses";
import AddPlayer from "./AddPlayer";
import AddCourse from "./AddPlayer";
import { ToastContainer } from "react-toastify";


export default function Routes() {



    return (
        <div>
            <Route exact path="/players">
                <Players />
            </Route>
            <Route exact path="/courses">
                <Courses />
            </Route>
            <Route exact path="/addplayer">
                <AddPlayer />
            </Route>
            <Route exact path="/addcourse">
                <AddCourse />
            </Route>
            <ToastContainer />
        </div>
    )
}
