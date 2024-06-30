import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBack from "../arrow-back";
import "./style.scss";

function Names(props) {
    const {
        name, arrow, noArrow, className, title, handleClick,
    } = props;
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
        if (handleClick) handleClick();
    };
    return (
        <div className="names">
            <div className="names_content" onClick={handleBack}>
                {noArrow ? "" : <ArrowBack />}
                {arrow ? "" : (
                    <div className={`title ${className} `}>
                        {" "}
                        {title}
                    </div>
                )}
            </div>
            {arrow ? "" : (
                <div className="names_title">
                    {name}
                </div>
            )}
            <div />
        </div>
    );
}

export default Names;
