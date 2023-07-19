import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  AppstoreOutlined,
  DownOutlined,
  AudioOutlined,
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import {
  Avatar,
  Space,
  Button,
  Dropdown,
  Input,
  message,
  Table,
  Tag,
  Select,
  Modal,
} from 'antd';
import { Form, Col, Row, List, Divider, Option, TextArea } from 'antd';

import styles from '../../assets/styles/index.module.css';
import { axiosInstance } from '../../shared/services/http-client';

const CreateDevice = () => {
  const { Header, Sider, Content } = Layout;
  const { TextArea } = Input;
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [size, setSize] = useState('large');
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onFinish = values => {
    const moment = require('moment');
    const currentTime = moment().utc().format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
    
    const formValues = { ...values };
    

    // const Username = {data: us}

    const data = {
      data: {
        name: formValues.Name,
        code: formValues.Code,
        status: formValues.Gender,
        address: formValues.intro,
      },
    };

    // const datas = { data: data };

    

    axiosInstance
      .post('/devices', data)
      .then(response => {
        if (response != null) {
          message.success('correct');
          navigate('/DeviceManager');
        }
      })
      .catch(error => {
        console.log(error);
        message.error('error');
      });
  };

 
  return (
    <div>
      <div>
        <h2>
          <Link to="/DeviceManager" className={styles.tittle}>
            All Device
          </Link>
          <span className={styles.subtitle}>&gt;Add a new service</span>
        </h2>
      </div>
      <Content
        style={{
          padding: 10,
          backgroundColor: '#FFFFFF',
          borderRadius: 15,
        }}
      >
        <div>
          <Form name="complex-form" onFinish={onFinish} form={form}>
            <Row>
              <Col span={8}>
                <Form.Item
                  label={<label className={styles.detail}>Code</label>}
                  name="Code"
                  labelCol={{ span: 24 }}
                  rules={[
                    { required: true, message: 'Please enter device code' },
                    {
                      pattern: /^([a-zA-Z]{4})_(0?[1-9]|[1-9][0-9])$/,
                      message:
                        'Please enter in format XXXX_YY with YY being the number from 1 to 99',
                    },
                  ]}
                >
                  <Input
                    className={styles.inputc}
                    placeholder="Enter device code"
                  />
                </Form.Item>
              </Col>

              <Col span={8}>
                <Form.Item
                  label={<label className={styles.detail}>Name</label>}
                  name="Name"
                  labelCol={{ span: 24 }}
                  rules={[
                    { required: true, message: 'Please input your name!' },
                  ]}
                >
                  <Input
                    className={styles.inputc}
                    placeholder="Enter device name"
                  />
                </Form.Item>
              </Col>

              <Col span={8}>
                <Form.Item
                  label={<label className={styles.detail}>Status</label>}
                  name="Gender"
                  labelCol={{ span: 24 }}
                  rules={[{ required: true, message: 'Select a status!' }]}
                >
                  <Select
                    style={{ fontWeight: 'bold' }}
                    placeholder="Select a status"
                  >
                    <Select.Option value="active">active</Select.Option>
                    <Select.Option value="inactive">InActive</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <Form.Item
                  label={<label className={styles.detail}>Address</label>}
                  name="intro"
                  labelCol={{ span: 24 }}
                  rules={[{ required: true, message: 'Please input Intro' }]}
                >
                  <Input.TextArea
                    size="large"
                    autoSize={{
                      minRows: 8,
                      maxRows: 8,
                    }}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Divider style={{ background: '#DDE4EE', marginBottom: 20  }} />
            <Form.Item>
              <Button
                type="primary"
                className={styles.button}
                htmlType="submit"
                style={{ marginRight: '20px', background: '#8767E1' }}
              >
                Save
              </Button>
              <Button className={styles.button} style={{ marginLeft: 8 }}>
                <Link to="/DeviceManager">Cancel</Link>
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Content>
    </div>
  );
};

export default CreateDevice;
