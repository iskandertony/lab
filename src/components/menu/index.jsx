import React from 'react';
import {Menu} from "antd";
import { HomeOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => <div>Home Page</div>;
const User = () => <div>User Page</div>;
const Settings = () => <div>Settings Page</div>;

const MenuVertical = () => {
    return (

            <div style={{ display: 'flex', minHeight: '100vh' }}>
                <Menu
                    mode="vertical"
                    theme="dark"
                    style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                >
                    <Menu.Item key="1" icon={<HomeOutlined />}>
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<UserOutlined />}>
                        <Link to="/user">User</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<SettingOutlined />}>
                        <Link to="/settings">Settings</Link>
                    </Menu.Item>
                </Menu>
                <div style={{ flex: 1, padding: '20px' }}>
                <div>iska</div>
                </div>
            </div>

    );
};

export default MenuVertical;
