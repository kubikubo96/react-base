import React from 'react'
import './NotFound.css'
import {Link} from 'react-router-dom';
import NotFoundImage from '../../assets/images/notfound.jpg'
import {getUrlParam} from "../../helper/common";

const NotFound = () => {
    const uuid = getUrlParam('uuid');
    const LinkHome = `/my-assignment/?uuid=${uuid}`;
    return (
        <div className="notFound">
            <div className="notFound__title">
                <span>404 Page not found</span>
            </div>
            <div className="notFound__container">
                <div className="notFound__scarecrow">
                    <img src={NotFoundImage} alt="Scarecrow" className="notFound__scarecrowimg" width="100%"/>
                </div>
                <div className="notFound__body">
                    <p className="notFound__bads">I have bad news for you.</p>
                    <p className="notFound__bodsParagraph">The page you are looking for might be remove or is
                        temporarily unavailable</p>
                    <button className="notFound__button"><Link to={LinkHome} className="link-route">Back to home
                        page</Link></button>
                </div>
            </div>
            <div className="notFound__footer">
                <p>@Viettel Media</p>
            </div>
        </div>
    )
}

export default NotFound;
