import React from 'react';
import {Card, Collapse} from 'antd';
import "./style.scss";

const { Panel } = Collapse;

const EnglishTime = () => {
    const tenses = [
        {
            key: '1',
            title: 'Present Simple',
            content: 'Используется для обозначения регулярных действий, общих истин, привычек и расписаний. Пример: She works in a bank.',
            structure: "Subject + Verb (base form) + (s/es for third person singular)",
            features: 'частота: always, usually, often, sometimes, never; общие истины; привычки; расписание',
        },
        {
            key: '2',
            title: 'Past Simple',
            content: 'Используется для выражения действий, которые произошли и завершились в определённое время в прошлом. Пример: I visited Paris last summer.',
            structure: "Subject + Verb (Past Simple form)",
            features: 'слова которые помогают понять: Yesterday, Last night, Ago, The other day, Once, When I was..., In 1990 / In the 20th century / In the 1980s, That time, That day, The day before',
        },
        {
            key: '3',
            title: 'Present Perfect',
            content: 'Описывает действия, которые были совершены в прошлом, но имеют отношение к настоящему моменту, или действия, совершенные в неопределенное время до настоящего. Пример: He has written five books.',
            structure: "Subject + has/have + Past Participle (V3/ed)",
            features: 'слова которые помогают понять: just, already, yet, ever, never, for, since',
        },
        {
            key: '4',
            title: 'Present Continuous',
            content: 'Используется для описания действий, происходящих в момент речи, или для выражения запланированных будущих действий. Пример: They are watching TV right now.',
            structure: "Subject + is/are/am + V-ing (Present Participle)",
            features: 'слова которые помогают понять: now, at the moment, right now, Look!, Listen!',
        },
        {
            key: '5',
            title: 'Past Continuous',
            content: 'Описывает длительные действия, которые происходили в определённый момент времени в прошлом. Часто используется для указания, что одно длительное действие было прервано другим действием. Пример: I was reading when she called.',
            structure: "Subject + was/were + V-ing (Present Participle)",
            features: 'слова которые помогают понять: while, when, as, all day, all night, the whole evening',
        },
        {
            key: '6',
            title: 'Present Perfect Continuous',
            content: 'Действие, которое началось в прошлом и всё ещё продолжается',
            structure: "Subject + has/have + been + V-ing (Present Participle)",
            features: 'слова которые помогают понять: always, since, for, lately, recently',
        }
    ];


    return (
        <div className="container english_time">
            {tenses.map((tense, index) => (
                <Card title={tense.title} key={index} className="card">
                    <Collapse accordion bordered={false}>
                        <Panel header={tense.title} key={tense.key}>
                            <div className="flex flex-column gap-10">
                            <div className="text">{tense.content}</div>
                            <div className="text">{tense.features}</div>
                                <div className="text">{tense.structure}</div>
                            </div>
                        </Panel>
                    </Collapse>
                </Card>
            ))}
        </div>
    );
};

export default EnglishTime;
