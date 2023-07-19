import { Link } from 'react-router-dom';
import { Input, Form, Button, message, Row, Col, Divider } from 'antd';
import React, { useState } from 'react';
import '../../assets/styles/index.css';
import { axiosInstance } from '../../shared/services/http-client';
import styles from '../../assets/styles/index.module.css';

function Change() {
  const onFinish = values => {
    const data = {
      currentPassword: values.current_password,
      password: values.new_password,
      passwordConfirmation: values.confirm_password,
    };
    axiosInstance
      .post('/auth/change-password', data)
      .then(response => {
        if (response != null) {
          window.location.reload();
          localStorage.removeItem('ACCESS_TOKEN');
          localStorage.setItem('setLoggedIn', 'false');
          localStorage.removeItem('role');
          localStorage.removeItem('id');
          message.success('correct');
        }
      })
      .catch(error => {
        console.log(error);
        message.error('Current Password Incorrect');
      });
  };
  return (
    <div>
      <h2 className="tittle">Change PassWord</h2>
      <Col span={24}>
        <div className="change">
          <Row span={24}>
            <Form
              name="password_form"
              onFinish={onFinish}
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
            >
              <Row span={24}></Row>
              <Row span={24}>
                <label className="changetext">
                  Now you can create a new password for your acconut
                </label>
              </Row>
              <Row span={24}>
                <label className="changetext">Current Password</label>
              </Row>

              <Form.Item
                name="current_password"
                labelCol={{ span: 24 }}
                rules={[
                  {
                    required: true,
                    message: 'Please input your current password!',
                  },
                ]}
              >
                <Input.Password
                  placeholder="Enter current password"
                  className="passInput"
                />
              </Form.Item>
              <Row span={24}>
                <label className="changetext">New Password</label>
              </Row>
              <Form.Item
                name="new_password"
                labelCol={{ span: 24 }}
                rules={[
                  {
                    required: true,
                    message: 'Please input your new password!',
                  },
                  { max: 8, message: 'Password must not exceed 8 characters!' },
                  {
                    pattern: /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[^\w\s]).{1,}$/,
                    message:
                      'Password must contain at least one uppercase letter, one number, and one special character!',
                  },
                ]}
              >
                <Input.Password
                  placeholder="Enter new password"
                  className="passInput"
                />
              </Form.Item>

              <Row span={24}>
                <label className="changetext">Confirm New Password</label>
              </Row>
              <Form.Item
                name="confirm_password"
                labelCol={{ span: 24 }}
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your new password!',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('new_password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          'The two passwords that you entered do not match!'
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  placeholder="Enter confirm password"
                  className="passInput"
                />
              </Form.Item>
              <Divider style={{ background: '#DDE4EE' }} />
              <Form.Item>
                <Button
                  className={styles.button}
                  style={{ background: '#8767E1' }}
                  type="primary"
                  htmlType="submit"
                >
                  Save
                </Button>
                <Button className={styles.button} style={{ marginLeft: 8 }}>
                  <Link to="/ListUser">Cancel</Link>
                </Button>
              </Form.Item>
            </Form>
          </Row>
        </div>
      </Col>
    </div>
  );
}

export default Change;
