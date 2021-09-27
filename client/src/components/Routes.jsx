import { Route } from "react-router-dom";
import Home from "./Home";
import DisplayPlayers from "./display/DisplayPlayers";
import DisplayCourses from "./display/DisplayCourses";
import AddPlayer from "./add/AddPlayer";
import AddCourse from "./add/AddCourse";
import DetailPlayer from "./detail/DetailPlayer";
import DetailCourse from "./detail/DetailCourse";
import DetailCourseImage from "./detail/DetailCourseImage";
import EditPlayer from "./edit/EditPlayer";
import EditCourse from "./edit/EditCourse";
import EditYardages from "./edit/EditYardages";
import DisplayCaddie from "./display/DisplayCaddie";
import DisplayRound from "./display/DisplayRound";
import DetailPrevRound from "./detail/DetailPrevRound";
import EditRound from "./edit/EditRound";
import AddImage from "./add/AddImage";
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
            <Route exact path="/courses/:id/image">
                <DetailCourseImage />
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
            <Route exact path="/caddie">
                <DisplayCaddie />
            </Route>
            <Route exact path="/round">
                <DisplayRound />
            </Route>
            <Route exact path="/rounds/:id">
                <DetailPrevRound />
            </Route>
            <Route exact path="/rounds/:id/edit">
                <EditRound />
            </Route>
            <Route exact path="/img">
                <AddImage />
            </Route>
            <ToastContainer />
        </div>
    )
}
