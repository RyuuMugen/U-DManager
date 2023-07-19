import React, { useState, useEffect } from 'react';
import {
  Button,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  message,
  Row,
  Space,
  Upload,
} from 'antd';
import { CameraOutlined, DeleteOutlined } from '@ant-design/icons';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../shared/services/http-client';
import { imgurl } from '../../shared/constants/index';
import styles from '../../assets/styles/index.module.css';
import '../../assets/styles/index.css';
import moment from 'moment';

function UserUpdate() {
  const [userProfile, setUserProfile] = useState(null);
  const [dob, setDob] = useState(null);
  const [avatar, setAvatar] = useState('');
  const navigate = useNavigate();
  const userId = useParams();
  const [fileList, setFileList] = useState([]);
  const [form] = Form.useForm();
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  const handleDobChange = value => {
    setDob(value);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosInstance.get(
          `/users/${userId.id}?populate=role,avatar`
        );
        if (response) {
          setUserProfile(response);
          setAvatar(response.avatar.url);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, [userId]);

  useEffect(() => {
    form.setFieldsValue({
      Name: userProfile?.fullname,
      Username: userProfile?.username,
      Email: userProfile?.email,
      Phone_number: userProfile?.phoneNumber,
      DOB: moment(userProfile?.dob),
      Role: userProfile?.role.name,
    });
  }, [form, userProfile]);

  const onFinish = async values => {
    const formValues = { ...values, DOB: values.DOB.format('YYYY-MM-DD') };
    const data = {
      fullname: formValues.Name,
      dob: formValues.DOB,
      phoneNumber: formValues.Phone_number,
    };

    try {
      const response = await axiosInstance.put(`/users/${userId.id}`, data);
      if (response != null) {
        message.success('correct');
        setIsButtonClicked(true);
        await onChange(); // Gọi hàm onChange
        navigate('/ListUser');
      }
    } catch (error) {
      console.log(error);
      message.error('error');
    }
  };

  const handleDelete = () => {
    setFileList([]);
    setShowDeleteButton(false);
  };

  const onChange = async e => {
    const file = fileList[0];
    const newFileList = file ? [file] : [];
    setFileList(newFileList);

    const formData = new FormData();
    formData.append('ref', 'plugin::users-permissions.user');
    formData.append('refId', `${userId.id}`);
    formData.append('field', 'avatar');
    formData.append('files', file);

    try {
      const response = await axiosInstance.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isButtonClicked) {
      onChange();
    }
  }, [isButtonClicked]);

  return (
    <div>
      <p className="MP">My Profile</p>
      <div className="ViewUser1">
        <div className="SetupUser1">
          <Row>
            <Col span={12}>
              <div className="setupimg">
                <Space direction="vertical" size={16}>
                  <Space wrap size={16}>
                    <div className="image-wrapper">
                      <img
                        src={
                          fileList.length > 0
                            ? URL.createObjectURL(fileList[0])
                            : `${imgurl}${avatar}`
                        }
                        alt=""
                        className="blurred-image"
                      />
                      <div className="button-wrapper">
                        <Upload
                          accept="image/*"
                          fileList={fileList}
                          beforeUpload={() => false}
                          showUploadList={false}
                          onChange={e => {
                            const file = e.fileList[0]?.originFileObj;
                            const newFileList = file ? [file] : [];
                            setFileList(newFileList);
                            setShowDeleteButton(true);
                          }}
                        >
                          <span className="camera-icon">
                            <CameraOutlined style={{ fontSize: '40px' }} />
                          </span>
                        </Upload>
                        {showDeleteButton && (
                          <span className="delete-icon" onClick={handleDelete}>
                            <DeleteOutlined style={{ fontSize: '40px' }} />
                          </span>
                        )}
                      </div>
                    </div>
                  </Space>
                </Space>
              </div>
            </Col>
            <Col span={12}>
              <div>
                <Form
                  name="nest_messages"
                  onFinish={onFinish}
                  style={{
                    maxWidth: 600,
                  }}
                  form={form}
                  id="myForm"
                >
                  <Row>
                    <Col span={24}>
                      <label className={styles.labelStyle}>Name</label>
                      <Form.Item name="Name" labelCol={{ span: 24 }}>
                        <Input
                          className={styles.inputp}
                          defaultValue={userProfile?.fullname}
                        />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row>
                    <Col span={24}>
                      <label className={styles.labelStyle}>Email</label>
                      <Form.Item name="Email" labelCol={{ span: 24 }}>
                        <Input
                          className={styles.inputp}
                          disabled
                          defaultValue={userProfile?.email}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                      <label className={styles.labelStyle}>Username</label>
                      <Form.Item name="Username" labelCol={{ span: 24 }}>
                        <Input
                          className={styles.inputp}
                          disabled
                          defaultValue={userProfile?.username}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={8}>
                      <label className={styles.labelStyle}>DOB</label>
                      <Form.Item name="DOB" labelCol={{ span: 24 }}>
                        <DatePicker
                          className={styles.inputc}
                          value={dob}
                          style={{ height: '56px' }}
                          onChange={handleDobChange}
                          placeholder="Select a date"
                        />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <label className={styles.labelStyle}>Phone number</label>
                      <Form.Item name="Phone_number" labelCol={{ span: 24 }}>
                        <Input
                          className={styles.inputp}
                          defaultValue={userProfile?.Phone_number}
                        />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row>
                    <Col span={24}>
                      <label className={styles.labelStyle}>Role</label>
                      <Form.Item name="Role" labelCol={{ span: 24 }}>
                        <Input
                          className={styles.inputp}
                          disabled
                          defaultValue={userProfile?.role.name}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
          <Row>
            <Divider style={{ background: '#DDE4EE' }} />
          </Row>
          <Row justify="start">
            <Form.Item>
              <Button
                className={styles.button}
                type="primary"
                style={{ marginRight: '20px', background: '#8767E1' }}
                htmlType="submit"
                form="myForm"
                onClick={() => setIsButtonClicked(true)}
              >
                Update Profile
              </Button>
            </Form.Item>
            <Form.Item>
              <Link to="/ListUser">
                <Button className={styles.button}>Cancel</Button>
              </Link>
            </Form.Item>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default UserUpdate;
