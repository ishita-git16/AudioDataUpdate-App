import React, { useEffect, useState } from "react";
import { Button, Input, Row, Space, message } from "antd";
// import "./App.css"
import 'antd/dist/antd.css';
import axios from "axios";
import moment from 'moment';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const Navigation = () => {
    const [data, setData] = useState({});
    const [days, setDays] = useState([]);

    useEffect(() => {
        axios({
            method: "GET",
            url: `/getjson`,
        })
            .then((res) => {

                const listData1 = [];

                // const myObj = JSON.parse(res.data);


                for (const x in res.data) {
                    listData1.push(x);
                    // setDays(x);

                }
                // const listData2=[];
                // const listData3=[];
                // res.data.map((kdata) => {
                //     // listData3.push(kdata);
                //     kdata[0].map((mdata) => {
                //         mdata.map((ndata) => {

                //             listData1.push(ndata.from);
                //             listData2.push(ndata.to);
                //         });
                //         // listData.push(mdata);

                //     });
                //     //   listData.push(kdata);

                //   });
                console.log(days);
                setDays(listData1);
                // setData(res.data);
                // console.log(listData1)
                // console.log(res.data);

            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    function callback(key) {
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
                    <TabPane tab={days[0]} key="2">
                        Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab={days[1]} key="3">
                        Content of Tab Pane 3
                    </TabPane>
                    <TabPane tab={days[2]} key="4">
                        Content of Tab Pane 4
                    </TabPane>
                    <TabPane tab={days[3]} key="5">
                        Content of Tab Pane 5
                    </TabPane>
                </>

            }

        </Tabs>

    );
}

export default Navigation;