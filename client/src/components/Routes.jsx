import { Route } from "react-router-dom";
import Players from "./Players";
import Courses from "./Courses";
import AddPlayer from "./AddPlayer";
import AddCourse from "./AddCourse";
import PlayerDetail from "./PlayerDetail";
import CourseDetail from "./CourseDetail";
import EditPlayer from "./EditPlayer";
import EditCourse from "./EditCourse";
// import EditYardage from "./Yardage";
import { ToastContainer } from "react-toastify";


export default function Routes() {



    return (
        <div>
            <Route exact path="/players">
                <Players />
            </Route>
            <Route exact path="/players/:id">
                <PlayerDetail />
            </Route>
            <Route exact path="/courses">
                <Courses />
            </Route>
            <Route exact path="/courses/:id">
                <CourseDetail />
            </Route>
            <Route exact path="/addplayer">
                <AddPlayer />
            </Route>
            <Route exact path="/addcourse">
                <AddCourse />
            </Route>
            <Route exact path="/players/:id/edit">
                <EditPlayer />
            </Route>
            <Route exact path="/courses/:id/edit">
                <EditCourse />
            </Route>

            <ToastContainer />
        </div>
    )
}
