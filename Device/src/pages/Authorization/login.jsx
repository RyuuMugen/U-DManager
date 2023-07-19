import { axiosInstance } from '../../shared/services/http-client';
import { Button, Form, Input, message } from 'antd';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Menus from '../menu.jsx';
import styles from '../../assets/styles/index.module.css';

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const key = [];
  const navigate = useNavigate(); // Sử dụng hook useNavigate

  useEffect(() => {
    const accessToken = localStorage.getItem('ACCESS_TOKEN');
    if (accessToken) {
      setIsLoggedIn(true);
      setLoading(false);
    } else {
      setIsLoggedIn(false);
      setLoading(false);
    }
  }, []);

  const onFinish = (values) => {
    const data = {
      identifier: values.username,
      password: values.password,
    };

    axiosInstance
      .post('/auth/local', data)
      .then((response) => {
        const { jwt } = response;
        if (jwt != null) {
          key.push(jwt);
          
          message.success('Logged in successfully');
          localStorage.setItem('setIsLoggedIn', true);
          localStorage.setItem('ACCESS_TOKEN', key);
          setIsLoggedIn(true);
          navigate('/UserManager'); // Chuyển hướng người dùng sau khi đăng nhập thành công
        }
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage('Login failed');
        message.error('Login failed');
        setIsLoggedIn(false);
      });
  };

  const onLogout = () => {
    
    localStorage.setItem('setLoggedIn', 'false');
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('role');
    localStorage.removeItem('id');
    setIsLoggedIn(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isLoggedIn) {
    return (
      <div className="container">
        <div className={styles.textbox}>
          <h2 className={styles.login}>Welcome</h2>
          <p className={styles.textl}>Log in to your account</p>
        </div>
        <Form name="normal_login" className="login-form" onFinish={onFinish}>
          <Form.Item
            label={<label className={styles.textf}>Email</label>}
            name="username"
            rules={[{ required: true, message: 'Enter email' }]}
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Input className={styles.inputf} placeholder="Username" />
          </Form.Item>
          <Form.Item
            label={<label className={styles.textf}>Password</label>}
            name="password"
            rules={[{ required: true, message: 'Enter password' }]}
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Input
              className={styles.inputf}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.buttonf}
            >
              <p className={styles.buttont}>Log in</p>
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }

  return (
    <div>
      <Menus onLogout={onLogout} />
    </div>
  );
};

export default Login;
