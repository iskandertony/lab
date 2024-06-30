import React, { useState } from 'react';
import { List, Card, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import "./style.scss";
import topics from './topics.json'; // Убедитесь, что путь к файлу корректен

const EnglishWords = () => {
    const [currentIndex, setCurrentIndex] = useState(0); // Индекс текущего топика

    // Следующий топик
    const nextTopic = () => {
        const nextIndex = currentIndex + 1 < topics.length ? currentIndex + 1 : 0;
        setCurrentIndex(nextIndex);
    };

    // Предыдущий топик
    const prevTopic = () => {
        const prevIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : topics.length - 1;
        setCurrentIndex(prevIndex);
    };

    // Получаем слова для текущего топика
    const currentWords = topics[currentIndex].words;

    return (
        <div className="container">
            <h2 style={{ margin: '16px 0' }}>{topics[currentIndex].topic}</h2>
            <div className="navigation-buttons">
                <Button onClick={prevTopic} icon={<LeftOutlined />} />
                <Button onClick={nextTopic} style={{ marginLeft: 8 }} icon={<RightOutlined />} />
            </div>
            <List
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 6,
                    xxl: 3,
                }}
                dataSource={currentWords}
                renderItem={item => (
                    <List.Item>
                        <Card title={item.en}>{item.ru}</Card>
                    </List.Item>
                )}
            />
        </div>
    );
};

export default EnglishWords;
