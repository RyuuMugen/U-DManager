import { Link, useNavigate } from 'react-router-dom';
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
  Divider,
} from 'antd';
import React, { useState, useEffect } from 'react';
import styles from '../../assets/styles/index.module.css';
import { axiosInstance } from '../../shared/services/http-client.js';
import { ReactComponent as DeleteIcon } from '../../assets/icons/Vector.svg';
const Create = () => {
  const [checkedList, setCheckedList] = useState([]);
  const [hasUserInput, setHasUserInput] = useState(false);
  const [dob, setDob] = useState(null);
  const [search, setSearch] = useState('');
  const [deviceNames, setDeviceNames] = useState([]);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const selectStyle = {
    height: '56px',
  };
  const handleDobChange = value => {
    setDob(value);
  };
  const handleDelete = record => {
    setCheckedList(checkedList.filter(item => item.value !== record.value));
  };
  const handleSearch = event => {
    setSearch(event.target.value);
    setHasUserInput(true);
  };
  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const response = await axiosInstance.get(`/devices`);
        if (response.data) {
          setDeviceNames(response.data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setHasUserInput(false);
      }
    };
    fetchDevices();
  }, [hasUserInput]);
  useEffect(() => {
    if (!hasUserInput) return;
    const fetchDevices = async () => {
      try {
        const response = await axiosInstance.get(
          `/devices?filters[code][$contains]=${search}`
        );
        if (response.data) {
          setDeviceNames(response.data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setHasUserInput(false);
      }
    };
    fetchDevices();
  }, [search, hasUserInput]);

  const plainOptions = deviceNames.map(device => ({
    label: device.attributes.code,
    value: device,
  }));
  const valueList = checkedList.map(item => item.value);
  const onFinish = values => {
    const moment = require('moment');

    const currentTime = moment().utc().format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
    const formValues = { ...values, DOB: values.DOB.format('YYYY-MM-DD') };
    
    let isFalse = formValues.Status === 'false'; // kiểm tra chuỗi có giống "false" hay không
    let bool = isFalse ? false : true;
    const data = {
      username: formValues.Username,
      email: formValues.Email,
      fullname: formValues.Name,
      dob: formValues.DOB,
      phoneNumber: formValues.Phone_number,
      gender: formValues.Gender,
      password: formValues.Password,
      role: parseFloat(formValues.Role),
      blocked: bool,
      createdAt: currentTime,
      devices: valueList,
    };
    axiosInstance
      .post('/users', data)
      .then(response => {
        if (response != null) {
          message.success('correct');
          navigate('/UserManager');
        }
      })
      .catch(error => {
        console.log(error);
        message.error('error');
      });
  };
  return (
    <div>
      <h2>
        <Link to="/UserManager" className={styles.tittle}>
          All user
        </Link>
        <span className={styles.subtitle}>&gt; Add new user</span>
      </h2>
      <div>
        <div className={styles.form}>
          <Form name="create_form" onFinish={onFinish} form={form}>
            <Row>
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
                    placeholder="Enter owner name"
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label={<label className={styles.detail}>Email</label>}
                  name="Email"
                  labelCol={{ span: 24 }}
                  rules={[
                    { required: true, message: 'Please input your Email!' },
                    {
                      type: 'email',
                      message: 'Please enter a valid email address',
                    },
                  ]}
                >
                  <Input
                    className={styles.inputc}
                    placeholder="Enter owner email"
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label={<label className={styles.detail}>Username</label>}
                  name="Username"
                  labelCol={{ span: 24 }}
                  rules={[
                    { required: true, message: 'Please input your Username !' },
                  ]}
                >
                  <Input
                    className={styles.inputc}
                    placeholder="Enter owner username"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <Form.Item
                  label={<label className={styles.detail}>Password</label>}
                  name="Password"
                  labelCol={{ span: 24 }}
                  rules={[
                    {
                      required: true,
                      message: 'Please input your new password!',
                    },
                    {
                      max: 8,
                      message: 'Password must not exceed 8 characters!',
                    },
                    {
                      pattern: /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[^\w\s]).{1,}$/,
                      message:
                        'Password must contain at least one uppercase letter, one number, and one special character!',
                    },
                  ]}
                >
                  <Input.Password
                    className={styles.inputc}
                    placeholder="Enter owner password"
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label={<label className={styles.detail}>Phone number</label>}
                  name="Phone_number"
                  labelCol={{ span: 24 }}
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Phone number!',
                    },
                    { pattern: /^\d+$/, message: 'Please enter numbers only' },
                    { max: 10, message: 'Please enter no more than 10 digits' },
                  ]}
                >
                  <Input
                    className={styles.inputc}
                    placeholder="Enter owner phone number"
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label={<label className={styles.detail}>Gender</label>}
                  name="Gender"
                  labelCol={{ span: 24 }}
                  rules={[
                    { required: true, message: 'Please input your Gender !' },
                  ]}
                >
                  <Select
                    className={`${styles.inputc}`}
                    style={selectStyle}
                    placeholder="Select owner gender"
                  >
                    <Select.Option value="male">Male</Select.Option>
                    <Select.Option value="female">Female</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <Form.Item
                  label={<label className={styles.detail}>DOB</label>}
                  name="DOB"
                  labelCol={{ span: 24 }}
                  rules={[
                    { required: true, message: 'Please input your DOB!' },
                  ]}
                >
                  <DatePicker
                    className={styles.inputc}
                    value={dob}
                    onChange={handleDobChange}
                    placeholder="Select a date"
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label={<label className={styles.detail}>Role</label>}
                  name="Role"
                  labelCol={{ span: 24 }}
                  rules={[
                    { required: true, message: 'Please input your Role!' },
                  ]}
                >
                  <Select
                    className={styles.inputc}
                    placeholder="Select owner Role"
                  >
                    <Select.Option value="1">User</Select.Option>
                    <Select.Option value="3">Admin</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label={<label className={styles.detail}>Status</label>}
                  name="Status"
                  labelCol={{ span: 24 }}
                  rules={[
                    { required: true, message: 'Please input your Status!' },
                  ]}
                >
                  <Select
                    className={styles.inputc}
                    placeholder="Select owner Role"
                  >
                    <Select.Option value="false">Active</Select.Option>
                    <Select.Option value="true">Blocked</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <label className={styles.detail}>Device</label>
            </Row>
            <div className={styles.container}>
              <Row>
                <Col span={12}>
                  <div>
                    <div className={styles.left}>
                      <input
                        className={styles.inputs}
                        placeholder="Search for devices ..."
                        value={search}
                        onChange={handleSearch}
                      />
                      <div className={styles.box}>
                        <List
                          dataSource={plainOptions}
                          renderItem={item => (
                            <List.Item>
                              <Checkbox
                                className={styles.check}
                                value={item.value}
                                checked={checkedList.some(
                                  o => o.value == item.value
                                )}
                                onChange={e => {
                                  if (e.target.checked) {
                                    setCheckedList([...checkedList, item]);
                                  } else {
                                    setCheckedList(
                                      checkedList.filter(
                                        o => o.value !== item.value
                                      )
                                    );
                                  }
                                }}
                              >
                                {item.label}
                              </Checkbox>
                            </List.Item>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col span={12}>
                  <div className={styles.right}>
                    <h2> Select devices({checkedList.length})</h2>
                    <div className={styles.box}>
                      <Table
                        dataSource={checkedList}
                        pagination={{ pageSize: 3 }}
                        columns={[
                          {
                            dataIndex: 'label',
                            key: 'label',
                            className: `${styles.check}`,
                          },
                          {
                            key: 'action',
                            render: (text, record) => (
                              <Space size="middle">
                                <a onClick={() => handleDelete(record)}>
                                  <DeleteIcon />
                                </a>
                              </Space>
                            ),
                          },
                        ]}
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>

            <Divider style={{ background: '#DDE4EE' }} />
            <Form.Item>
              <Button
                type="primary"
                className={styles.button}
                style={{ background: '#8767E1' }}
                htmlType="submit"
              >
                Save
              </Button>
              <Button className={styles.button} style={{ marginLeft: 8 }}>
                <Link to="/UserManager">Cancel</Link>
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Create;
