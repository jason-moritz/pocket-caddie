import { Route } from "react-router-dom";
import Home from "./Home";
import DisplayPlayers from "./DisplayPlayers";
import DisplayCourses from "./DisplayCourses";
import AddPlayer from "./AddPlayer";
import AddCourse from "./AddCourse";
import DetailPlayer from "./DetailPlayer";
import DetailCourse from "./DetailCourse";
import EditPlayer from "./EditPlayer";
import EditCourse from "./EditCourse";
import EditYardages from "./EditYardages";
import { ToastContainer } from "react-toastify";


export default function Routes() {
    return (
        <div>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/players">
                <DisplayPlayers />
            </Route>
            <Route exact path="/courses">
                <DisplayCourses />
            </Route>
            <Route exact path="/players/:id">
                <DetailPlayer />
            </Route>
            
            <Route exact path="/courses/:id">
                <DetailCourse />
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
            <Route exact path="/players/:id/yardages">
                <EditYardages />
            </Route>
            <ToastContainer />
        </div>
    )
}
