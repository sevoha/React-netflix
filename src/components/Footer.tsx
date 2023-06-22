import { FunctionComponent } from "react";

interface FooterProps {
    devName: string
    devYear: number
}
 
const Footer: FunctionComponent<FooterProps> = ({devName, devYear}) => {
    return (  
        <div>
            <p>Website of {devName} {devYear}</p>
            <div>
                <i className="fa-brands fa-github fa-lg"></i>
                <i className="fa-brands fa-linkedin fa-lg"></i>
            </div>
        </div>
    );
}
 
export default Footer;