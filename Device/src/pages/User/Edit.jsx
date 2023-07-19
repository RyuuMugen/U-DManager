import { Link, useNavigate, useParams } from 'react-router-dom';
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

import moment from 'moment';
import { ReactComponent as DeleteIcon } from '../../assets/icons/Vector.svg';
const Create = () => {
  const [checkedList, setCheckedList] = useState([]);
  const [dob, setDob] = useState(null);
  const [search, setSearch] = useState('');
  const [deviceNames, setDeviceNames] = useState([]);
  const [userProfile, setUserProfile] = useState(null);
  const [hasUserInput, setHasUserInput] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const userId = useParams();
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
    const fetchUsers = async () => {
      try {
        const response = await axiosInstance.get(
          `/users/${userId.id}?populate=role,devices`
        );
        if (response) {
          setUserProfile(response);
          const newCheckedList = response.devices.map(device => {
            const value = { ...device };
            delete value.id;
            return {
              label: device.code,
              value: {
                id: device.id,
                attributes: value,
              },
            };
          });
          setCheckedList(newCheckedList);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, [userId]);
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

  let roleValue;

  if (userProfile?.role.id === 1) {
    roleValue = '1';
  } else if (userProfile?.role.id === 2) {
    roleValue = '2';
  } else {
    roleValue = '3';
  }
  useEffect(() => {
    form.setFieldsValue({
      Username: userProfile?.username,
      Email: userProfile?.email,
      Name: userProfile?.fullname,
      Phone_number: userProfile?.phoneNumber,
      Gender: userProfile?.gender,
      DOB: moment(userProfile?.dob),
      Status: userProfile?.blocked ? 'true' : 'false',
      Role: roleValue,
    });
  }, [form, userProfile]);

  const plainOptions = deviceNames.map(device => ({
    label: device.attributes.code,
    value: device,
  }));
  const valueList = checkedList.map(item => item.value);
  const onFinish = values => {
    const moment = require('moment');

    const currentTime = moment().utc().format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
    const formValues = { ...values, DOB: values.DOB.format('YYYY-MM-DD') };

    let isFalse = formValues.Status === 'true';
    let bool = isFalse ? true : false;
    const data = {
      username: formValues.Username,
      fullname: formValues.Name,
      email: formValues.Email,
      dob: formValues.DOB,
      phoneNumber: formValues.Phone_number,
      gender: formValues.Gender,
      role: parseFloat(formValues.Role),
      blocked: bool,
      updatedAt: currentTime,
      devices: valueList,
    };
    axiosInstance
      .put(`/users/${userId.id}`, data)
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
        <Link to="/UserManager" className={styles.tittle}>All user</Link>
        <span className={styles.subtitle}>&gt; {userProfile?.username}</span>
      </h2>
      <div className={styles.form}>
        <Form
          name="create_form"
          onFinish={onFinish}
          form={form}
          initialValues={{ name: userProfile?.username }}
        >
          <Row>
            <Col span={8}>
              <Form.Item
                label={<label className={styles.detail}>Name</label>}
                name="Name"
                labelCol={{ span: 24 }}
                rules={[{ required: true, message: 'Please input your name!' }]}
              >
                <Input className={styles.inputc} />
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
                <Input disabled className={styles.inputc} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label={<label className={styles.detail}>Usename</label>}
                name="Username"
                labelCol={{ span: 24 }}
                rules={[
                  { required: true, message: 'Please input your Username !' },
                ]}
              >
                <Input
                  className={styles.inputc}
                  disabled
                  placeholder="Enter owner username"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
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
                  className={styles.inputc}
                  size="large"
                  placeholder="Select owner gender"
                >
                  <Select.Option value="male">Male</Select.Option>
                  <Select.Option value="female">Female</Select.Option>
                  <Select.Option value="None">None</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label={<label className={styles.detail}>DOB</label>}
                name="DOB"
                labelCol={{ span: 24 }}
                rules={[{ required: true, message: 'Please input your DOB!' }]}
              >
                <DatePicker
                  className={styles.inputc}
                  value={dob}
                  onChange={handleDobChange}
                  placeholder="Select a date"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <Form.Item
                label={<label className={styles.detail}>Role</label>}
                name="Role"
                labelCol={{ span: 24 }}
                rules={[{ required: true, message: 'Please input your Role!' }]}
              >
                <Select className={styles.inputc} size="large">
                  <Select.Option value="1">User</Select.Option>
                  <Select.Option value="2">Public</Select.Option>
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
                <Select className={styles.inputc} size="large">
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
                              value={item.value}
                              checked={checkedList.some(
                                o => o.value === item.value
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
                      columns={[
                        {
                          dataIndex: 'label',
                          key: 'label',
                        },
                        {
                          key: 'action',
                          render: (text, record) => (
                            <Space size="middle">
                              <a onClick={() => handleDelete(record)}><DeleteIcon/></a>
                            </Space>
                          ),
                        },
                      ]}
                      pagination={{ pageSize: 3 }}
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
  );
};

export default Create;
