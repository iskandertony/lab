import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'antd';
import { AppstoreOutlined, BookOutlined } from '@ant-design/icons';
import "./style.scss";

const CustomMenu = () => {
    const navigate = useNavigate();

    const menuItems = [
        {
            key: 'englishTime',
            label: 'English Time',
            icon: <AppstoreOutlined />,
            onClick: () => navigate('/english/time'),
        },
        {
            key: 'newWords',
            label: 'Новые Слова',
            icon: <BookOutlined />,
            onClick: () => navigate('/english/words'),
        },
        // Продолжайте добавлять новые пункты здесь
    ];

    return (
        <div className="container english">
            <div className="content">
            <Menu
                mode="inline"
                items={menuItems.map(item => ({
                    key: item.key,
                    icon: item.icon,
                    label: item.label,
                    onClick: item.onClick,
                }))}
            />
            <div>
                iska
            </div>
            </div>
        </div>
    );
};

export default CustomMenu;
