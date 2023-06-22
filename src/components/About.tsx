import { FunctionComponent } from "react";
import Navbar from "./Navbar";

interface AboutProps {
    
}
 
const About: FunctionComponent<AboutProps> = () => {
    return (<>
    <Navbar/>
    <h2> Seva Koval</h2>
    <p>Full Stack Dev in progres</p>
    <img src="/myAvatar.png" alt="myAvatar" />
    </>
    );
}
 
export default About;