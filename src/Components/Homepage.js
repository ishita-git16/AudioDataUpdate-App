import React, { useEffect, useState } from "react";
import { Button,  Input, Row, Space, message } from "antd";
// import "./App.css"
import 'antd/dist/antd.css';
import axios from "axios";
import moment from 'moment';


const { TextArea } = Input;
const HomePage = () => {
    const [data, setData] = useState({});
    //   const [newData, setNewData] = useState({});
    //   const [printPretty, setPrintPretty] = useState({});



    //Get data
    useEffect(() => {
        axios({
            method: "GET",
            url: `/getjson`,
        })
            .then((res) => {

                setData(res.data);
                console.log(res.data);

            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    // //Update Data
  


    const onDataChange = (event) => {
        //   console.log(event.target.value);
        console.log(JSON.parse(event.target.value))
        setData(JSON.parse(event.target.value))
        // setData(event.target.value);
    }
    function onChange(time, timeString) {
        // console.log(time, timeString);
    }

    function PrettyPrint(props) {
        //   setPrintPretty(<pre>{JSON.stringify(props.jsonObj,null,2)}</pre>);
        return (<pre>{JSON.stringify(props.jsonObj, null, 2)}</pre>)
        // setPrintPretty(<pre>{JSON.stringify(props.jsonObj,null,2)}</pre>);
    }

    const onSubmit = () => {
        //   console.log(data);
        axios({
            method: "POST",
            url: `/updatejson`,
            data: data
        })
            .then((res) => {
                //   setData(res);
                message.success("Audiodata Updated Successfully")
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>
            <div style={{ width: "100%", height: "200%" }}>
                <div style={{ paddingTop:"30px", marginLeft: "38%" }}>
                    <h2 style={{ marginLeft: "13%", color: "white" }}> AudioData</h2>

                    {/* <Row> */}
                    <Space>

                        <textarea
                            autoFocus
                            onChange={onDataChange}
                            type="text"
                            rows="30"
                            cols="60"
                            value={JSON.stringify(data, null, 2)}
                            defaultValue={JSON.stringify(data, null, 2)}

                        >
                            {/* jnjdnm */}
                        </textarea>

                    </Space>
                    {/* </Row> */}
                    <Row>
                        <Button type="primary" onClick={onSubmit} style={{ marginLeft: "180px" }}>
                            Submit
                        </Button>
                    </Row>
                </div>
            </div>
            {/* <TimePicker onChange={onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} /> */}




        </>
    );
};
export default HomePage;

