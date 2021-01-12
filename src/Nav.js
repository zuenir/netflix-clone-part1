import React, {useEffect, useState} from 'react'
import './Nav.css';

function Nav() {

    const [show, handlesShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 100){
                handlesShow(true);
            }else handlesShow(false);
        });

        return() => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}> 
            <img
                className="nav__logo"
                src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png"
                alt="Nextflix Logo"/>
            
            <img
                className="nav__avatar"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
                alt="Netflix Avatar"
                />
        </div>
    )
}

export default Nav;
