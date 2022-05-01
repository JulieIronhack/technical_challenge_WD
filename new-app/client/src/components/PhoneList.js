import { API_BASE_URL } from "../consts";
import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { PhoneDetail } from "./PhoneDetail";
import { Row, Col } from "antd";

export function PhoneList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchPhones() {
      try {
        const { data } = await axios.get(API_BASE_URL + "/telephones");
        setData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPhones();
  }, []);

  return (
    <div>
      <Row>
        <Col>
          <h1>telephone</h1>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <h2>List</h2>
          {data.map((elem) => {
            return (
              <div key={elem._id}>
                <Link to={"/telephones/" + elem._id}>
                  <h3>{elem.name}</h3>
                </Link>
              </div>
            );
          })}
        </Col>
        <Col span={12}>
          <PhoneDetail />
        </Col>
      </Row>
    </div>
  );
}
