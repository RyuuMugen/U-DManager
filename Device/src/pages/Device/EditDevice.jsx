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
import { axiosInstance } from '../../shared/services/http-client';
import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import { Layout, Menu, theme,Divider } from 'antd';
import {
  Input,
  Form,
  Button,
  Col,
  Row,
  Select,
  DatePicker,
  message,
  Checkbox,
  List,
  Table,
  Space,
} from 'antd';
import styles from '../../assets/styles/index.module.css';

const EditDevice = () => {
  const { Header, Sider, Content } = Layout;
  const userId = useParams();
  const [form] = Form.useForm();
  const [deviceProfile, setDeviceProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosInstance.get(`/devices/${userId.id}`);
        if (response) {
          setDeviceProfile(response.data.attributes);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, [userId]);

  useEffect(() => {
    form.setFieldsValue({
      Code: deviceProfile?.code,
      Name: deviceProfile?.name,
      Status: deviceProfile?.status ? 'Active' : 'Blocked',
      Address: deviceProfile?.address,

      //   Status:deviceProfile?.data.attributes.status,

      //   Status:userProfile?.confirmed ? "Blocked" : "Active",
    });
  }, [form, deviceProfile]);
  const onFinish = values => {
    const str = values.Status;
    const str2 = str.toLowerCase();
    const data = {
      data: {
        name: values.Name,
        status: str2,
        address: values.Address,
      },
    };
    axiosInstance
      .put(`/devices/${userId.id}`, data)
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
          <span className={styles.subtitle}>&gt; {deviceProfile?.name}</span>
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
          <Form name="complex-form" form={form} onFinish={onFinish}>
            <Row>
              <Col span={8}>
                <Form.Item
                  label={<label className={styles.detail}>Code</label>}
                  name="Code"
                  labelCol={{ span: 24 }}
                  rules={[
                    { required: true, message: 'Please input your CODE!' },
                  ]}
                >
                  <Input disabled className={styles.inputc} />
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
                  <Input className={styles.inputc} />
                </Form.Item>
              </Col>

              <Col span={8}>
                <Form.Item
                  label={<label className={styles.detail}>Status</label>}
                  name="Status"
                  labelCol={{ span: 24 }}
                  rules={[{ required: true, message: 'Select a status!' }]}
                >
                  <Select size="large" style={{ fontWeight: 'bold' }}>
                    <Select.Option value="active">Active</Select.Option>
                    <Select.Option value="blocked">Blocked</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <Form.Item
                  label={<label className={styles.detail}>Address</label>}
                  name="Address"
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
            <Divider style={{ background: '#DDE4EE', marginBottom: 20 }} />
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={styles.button}
                style={{
                  background: '#8767E1',
                  width: '109px',
                  color: 'white',
                }}
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

export default EditDevice;
