import { FunctionComponent } from "react";
import Navbar from "./Navbar";

interface HomeProps {
    
}
 
const Home: FunctionComponent<HomeProps> = () => {
    return (<>
    <Navbar/>
    <img src="https://www.aljazeera.com/wp-content/uploads/2023/03/AP23058560548764.jpg?resize=770%2C513&quality=80" alt="" />
    </>);
}
 
export default Home;