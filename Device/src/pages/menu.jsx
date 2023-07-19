import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';
import { Outlet, Link } from 'react-router-dom';
import { Layout, Menu, theme, Button, Dropdown, Row, Col } from 'antd';
import React, { useState, useEffect } from 'react';
import '../assets/styles/index.css';
import { ReactComponent as UserIcon } from '../assets/icons/Users.svg';
import { axiosInstance } from '../shared/services/http-client';
import { imgurl } from '../shared/constants/index';
const { Header, Sider, Content } = Layout;

const Menus = ({ onLogout }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [data, setData] = useState('');
  const [avatar, setAvatar] = useState('');
  const url = window.location.href;
  const deviceId = url.split('/').pop();

  useEffect(() => {
    axiosInstance.get('/users/me?populate=role,avatar').then(res => {
      
      setData(res);
      localStorage.setItem('id', res.id);
      localStorage.setItem('role', res.role.id);
      setAvatar(res.avatar.url);
    });
  }, []);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const items = [
    {
      key: '1',
      label: <Link to="/ListUser">Profile</Link>,
    },
    {
      key: '2',
      label: <p onClick={onLogout}>Logout</p>,
    },
  ];
  return (
    <Layout className="SetupHeight">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="custom-sider"
      >
        <div className="logo" />
        <h1
          style={{
            margin: '20px 20px',
            color: '#111111',
          }}
        >
          Menu
        </h1>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={deviceId}
          items={[
            {
              key: 'UserManager',
              icon: <UserIcon />,
              label: (
                <Link to="/UserManager">
                  <p className="custom">User</p>
                </Link>
              ),
            },
            {
              key: 'DeviceManager',
              icon: <UserIcon />,
              label: (
                <Link to="/DeviceManager">
                  <p className="custom">Device</p>
                </Link>
              ),
            },
          ]}
        />
      </Sider>

      <Layout className="site-layout">
        <Header
          style={{
            padding: '0',
            display: 'flex',
            alignItems: 'center',
            lineHeight: '0px',
            justifyContent: 'space-between',
            background: colorBgContainer,
          }}
        >
          <div>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed),
              }
            )}
          </div>

          <div>
            <Dropdown
              menu={{
                items,
              }}
              placement="bottom"
              arrow
            >
              <div className="set">
                <Row span={24}>
                  <Col span={8}>
                    {avatar ? (
                      <img
                        src={`${imgurl}${avatar}`}
                        alt=""
                        style={{
                          height: '32px',
                          width: '32px',
                          borderRadius: '20px',
                        }}
                      />
                    ) : (
                      <img
                        src={`${imgurl}/uploads/avt.png`}
                        alt=""
                        style={{
                          height: '32px',
                          width: '32px',
                          borderRadius: '20px',
                        }}
                      />
                    )}
                  </Col>
                  <Col span={16}>
                    <div className="set">
                      <Row span={24} className="NameM">
                        <p>{data.fullname}</p>
                      </Row>
                      <Row span={24}>
                        {' '}
                        <p className="RoleM">{data.role?.name}</p>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </div>
            </Dropdown>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 10px',
            padding: 12,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Menus;