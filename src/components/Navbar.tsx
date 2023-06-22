import { FunctionComponent } from "react";
import { NavLink, useNavigate } from "react-router-dom";

interface NavbarProps {
    
}
const Navbar: FunctionComponent<NavbarProps> = () => {
  let navigate = useNavigate()
    return (
        <nav className="navbar navbar-expand-lg bg-light">
   <div className="container-fluid">
     <NavLink className="navbar-brand " to=""> <img className="App-logo" src={("/logo.png")}/> WatchMe-App </NavLink>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         <li className="nav-item">
           <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
         </li>
         <li className="nav-item">
           <NavLink className="nav-link active" to="/top-series">Top-Series</NavLink>
         </li>
         <li className="nav-item">
           <NavLink className="nav-link active" to="/about">About</NavLink>
         </li>
         </ul>
          <NavLink className="nav-link active" to={"/"}>
          <button className="btn btn-outline-success" type="button">LogOut</button>
          </NavLink>
     </div>
   </div>
 </nav>
    );
}
 
export default Navbar;





{/* <nav>
            <NavLink to="/" className="nav-item">Home</NavLink>
            <NavLink to="/topseries" className="nav-item">Top Series</NavLink>
            <NavLink to="/about" className="nav-item">About</NavLink>
        </nav> */}