import React, { useState, useEffect } from 'react';
import {
  Descriptions,
  Avatar,
  Space,
  Layout,
  Menu,
  message,
  Button,
  Form,
  Col,
  Row,
  Divider,
} from 'antd';
import styles from '../../assets/styles/index.module.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../shared/services/http-client.js';

function Details() {
  const [userProfile, setUserProfile] = useState(null);
  const [userDevice, setUserDevice] = useState(null);
  const userId = useParams();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const role = localStorage.getItem('role');
  const permission =() =>{
    message.error('You are not allowed to do this');
  }
  const deleteUser = userId => {
    if (window.confirm('Do you want to delete this user?')) {
      axiosInstance
        .delete(`/users/${userId}`)
        .then(res => {
          message.success('delete complete');
          navigate('/UserManager');
        })
        .catch(err => {
          console.log(err);
          message.error('có lỗi');
        });
    }
  };
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosInstance.get(
          `/users/${userId.id}?populate=role,devices`
        );
        if (response) {
          setUserProfile(response);
          setUserDevice(response.devices);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, [userId]);

  return (
    <div>
      <div>
        <h2>
          <Link to="/UserManager" className={styles.tittle}>
            All user
          </Link>
          <span className={styles.subtitle}>&gt; {userProfile?.fullname}</span>
        </h2>
      </div>
      <div className={styles.form}>
        <Form name="form" form={form}>
          <Row>
            <Col span={8}>
              <Form.Item
                label={<label className={styles.label}>Name</label>}
                labelCol={{ span: 24 }}
              >
                <div>
                  <p className={styles.detail}>{userProfile?.fullname}</p>
                </div>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label={<label className={styles.label}>Email</label>}
                labelCol={{ span: 24 }}
              >
                <div>
                  <p className={styles.detail}>{userProfile?.email}</p>
                </div>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label={<label className={styles.label}>Username</label>}
                labelCol={{ span: 24 }}
              >
                <div>
                  <p className={styles.detail}>{userProfile?.username}</p>
                </div>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <Form.Item
                label={<label className={styles.label}>DOB</label>}
                labelCol={{ span: 24 }}
              >
                <div>
                  <p className={styles.detail}>{userProfile?.dob}</p>
                </div>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label={<label className={styles.label}>Phone number</label>}
                labelCol={{ span: 24 }}
              >
                <div>
                  <p className={styles.detail}>{userProfile?.phoneNumber}</p>
                </div>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label={<label className={styles.label}>Gender</label>}
                labelCol={{ span: 24 }}
              >
                <div>
                  <p className={styles.detail}>{userProfile?.gender}</p>
                </div>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <Form.Item
                label={<label className={styles.label}>Role</label>}
                labelCol={{ span: 24 }}
              >
                <div>
                  <p className={styles.detail}>{userProfile?.role.name}</p>
                </div>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <p className={styles.label}>Device</p>
          </Row>
          <div className={styles.container}>
            <Row>
              <Col span={12}>
                <div>
                  <div className={styles.left2}>
                    {userDevice?.map(value => (
                      <p key={value.id} className={styles.device}>
                        {value.code}
                      </p>
                    ))}
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <Divider style={{ background: '#DDE4EE' }} />
          <Form.Item>
            <Button
              className={styles.button}
              style={{ background: '#8767E1', width: '109px' }}
              type="primary"
              htmlType="submit"
            >
              <Link to={`/Edit/${userProfile?.id}`}>Edit</Link>
            </Button>
            {role === '3' && (
              <Button
                onClick={() => deleteUser(userProfile?.id)}
                className={styles.button}
                style={{ marginLeft: 8 }}
              >
                Delete
              </Button>
            )}

            {role === '1' && (
              <Button
                onClick={() => permission()}
                className={styles.button}
                style={{ marginLeft: 8 }}
              >
                Delete
              </Button>
            )}
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Details;
