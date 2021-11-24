import React, { useEffect, useState } from "react";
import { Collapse, Button, Input, Row, Space, message } from "antd";
// import "./App.css"
import 'antd/dist/antd.css';
import axios from "axios";
import moment from 'moment';
import { Tabs } from 'antd';

const { TabPane } = Tabs;
const { Panel } = Collapse;
const Navigation = () => {
    const [data, setData] = useState({});
    const [days, setDays] = useState([]);
    const [count, setCount] = useState('Monday');
    const [newList, setNewList] = useState([]);

    useEffect(() => {
        axios({
            method: "GET",
            url: `/getjson`,
        })
            .then((res) => {

                const listData1 = [];
                const listData2 = [];
                // const myObj = JSON.parse(res.data);


                for (const x in res.data) {
                    listData1.push(x);
                    setCount(x);
                    // setDays(x);

                }


                console.log(days);
                setDays(listData1);


            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    function callback(key) {
        console.log(key);
        axios({
            method: "GET",
            url: `/getjson`,
        })
            .then((res) => {
                const newList1 = [];
                res.data.key.map((kdata) => {
                    // kdata.map((mdata) => {
                    newList1.push(kdata.from__time);
                    // })
                })
                setNewList(newList1);


            })
            .catch((err) => {
                console.log(err);
            });

    }

    function callback1(key) {
        console.log(key);
    }

    return (
        <Tabs defaultActiveKey="1" onChange={callback} >

            {
                <>
                    {/* {[...Array.from( ['Mom', 'sds', 'dsdss'], (v, i) => v)].map(v => (
                // ["Mom", "sds", "dsdss"]
            <TabPane tab={`Tab-${v}`} 
            // key={v} 
            // disabled={i === 28}
            >
              Content of tab {v}
            </TabPane>
          ))} */}
                    <TabPane tab={days[0]} key={days[0]}>
                        <Collapse defaultActiveKey={['1']} onChange={callback1}>
                            <Panel header={newList} key="1" data={newList}>
                                <p>{days[0]}</p>
                            </Panel>
                            <Panel header="This is panel header 2" key="2">
                                <p>{days[0]}</p>
                            </Panel>

                        </Collapse>
                    </TabPane>
                    <TabPane tab={days[1]} key={days[1]} >
                    <Collapse defaultActiveKey={['1']} onChange={callback1}>
                            <Panel header={newList.from__time1} key="1" data={newList}>
                                <p>{days[0]}</p>
                            </Panel>
                            <Panel header="This is panel header 2" key="2">
                                <p>{days[0]}</p>
                            </Panel>

                        </Collapse>
                    </TabPane>
                    <TabPane tab={days[2]} key={days[2]}>
                        Content of Tab Pane 4
                    </TabPane>
                    <TabPane tab={days[3]} key={days[3]}>
                        Content of Tab Pane 5
                    </TabPane>
                </>

            }

        </Tabs>

    );
}

export default Navigation;