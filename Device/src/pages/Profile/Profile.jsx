import { UserOutlined } from '@ant-design/icons';
import React from 'react';
import '../../assets/styles/index.css';
import { Link } from 'react-router-dom';
import { Space, Row, Col } from 'antd';
import { Button } from 'antd';
import { axiosInstance } from '../../shared/services/http-client';
import styles from '../../assets/styles/index.module.css';
import { useState, useEffect } from 'react';
import { imgurl } from '../../shared/constants/index';
function ListUser() {
  const [avatar, setAvatar] = useState('');
  const [role, setRole] = useState('');
  const [data, setData] = useState('');
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axiosInstance.get(
          '/users/me?populate=role,avatar'
        );
        setData(response);
        setRole(response.role.name);
        setAvatar(response.avatar.url);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, []);
  return (
    <div>
      <p className="MP">My Profile</p>
      <div className="ViewUser">
        <div className="SetupUser">
          <Row span={24}>
            <Col span={12}>
              <div className="setupimg">
                <Space direction="vertical" size={16}>
                  <Space wrap size={16}>
                    {avatar ? (
                      <img
                        src={`${imgurl}${avatar}`}
                        alt=""
                        style={{
                          height: '200px',
                          width: '200px',
                          borderRadius: '100px',
                        }}
                      />
                    ) : (
                      <img
                        src={`${imgurl}/uploads/avt.png`}
                        alt=""
                        style={{
                          height: '200px',
                          width: '200px',
                          borderRadius: '100px',
                        }}
                      />
                    )}
                  </Space>
                </Space>
              </div>
            </Col>
            <Col span={12}>
              <div>
                <Row span={24}>
                  <Col span={12}>
                    <p className="LB">Name</p>
                    <p className="IF">{data.fullname}</p>
                  </Col>
                  <Col span={12}>
                    <p className="LB">Email</p>
                    <p className="IF">{data.email}</p>
                  </Col>
                </Row>
                <Row span={24}>
                  <Col span={12}>
                    <p className="LB">Phone Number</p>
                    <p className="IF">{data.phoneNumber}</p>
                  </Col>
                  <Col span={12}>
                    <p className="LB">DOB</p>
                    <p className="IF">{data.dob}</p>
                  </Col>
                </Row>
                <Row span={24}>
                  <Col span={12}>
                    <p className="LB">Address</p>
                    <p className="IF">{data.provider}</p>
                  </Col>
                  <Col span={12}>
                    <p className="LB">Role</p>
                    <p className="IF">{role}</p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>

        <div className="ButtonUpdate">
          <Button
            className={styles.button}
            type="primary"
            style={{ marginRight: '20px', background: '#8767E1' }}
          >
            <Link to={`/UserUpdate/${data.id}`}>Update Profile</Link>
          </Button>
          <Button className={styles.button}>
            <Link to="/ChangePassWord">Change PassWord</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ListUser;
