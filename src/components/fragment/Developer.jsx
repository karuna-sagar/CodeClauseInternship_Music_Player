import React from 'react';
import '../assets/scss/Developer.scss';
import { IconButton } from "@material-ui/core";
import { Facebook, Instagram, LinkedIn, Twitter } from "@material-ui/icons";

const Developer = () => {
    return (
        <div className={"Developer"}>
            <h3 className={"Developer-head"}>Meet the developer</h3>
            <div className="Developer-profile">
                <div className="Developer-profileCard">
                    <div className={"Card-details"}>
                        <h3>Karuna Sagar</h3>
                        <p>Full Stack developer</p>
                        <p>Competitive Coder</p>
                    </div>
                </div>
                <div className="Developer-profileDetails">
                    <p>A Computer Science and Engineering Student at Jss Academy of Technical Education, Bangalore.</p>
                    <p>Graduating in 2024 and looking for a responsible position to gain practical knowledge</p>
                    <p>A full-stack web developer and a Competitive coder.</p>
                    <p>I love designing fully responsive websites.</p>
                    <p>I have a keen interest in developing projects, whenever I want to learn something new.</p>
                    <div className="Card-btn">
                        <IconButton target={"_blank"} href={"https://www.facebook.com"} title={"Karuna Sagar"}>
                            <Facebook />
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://twitter.com"} title={"Karuna Sagar"}>
                            <Twitter />
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.linkedin.com/in"} title={"Karuna Sagar"}>
                            <LinkedIn />
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.instagram.com/"} title={"Karuna Sagar"}>
                            <Instagram />
                        </IconButton>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Developer;