import React from 'react';
import {Button} from "antd";
import {useNavigate} from "react-router-dom";
import MenuVertical from "../../components/menu";

const Landing = () => {
    const navigate = useNavigate()
    const handleEng = () => {
        navigate("/challenges")
    }
    return (
        <div>
            <MenuVertical />
            <Button onClick={handleEng}>English</Button>
        </div>
    );
};

export default Landing;
