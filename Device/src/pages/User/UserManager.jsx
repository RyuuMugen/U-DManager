import {
  UserOutlined,
  DownOutlined,
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { imgurl } from '../../shared/constants/index';
import { axiosInstance } from '../../shared/services/http-client';
import {
  Space,
  Button,
  Dropdown,
  Input,
  message,
  Table,
  Tag,
  Select,
} from 'antd';
import debounce from 'lodash/debounce';
import styles from '../../assets/styles/index.module.css';
const permission = () => {
  message.error('You are not allowed to do this');
};
const UserManager = () => {
  const [searchEmail, setSearchEmail] = useState('username');
  const [searchResults, setSearchResults] = useState('');
  const [Status, setStatus] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');
  const { Search } = Input;
  const id = localStorage.getItem('id');
  const role = localStorage.getItem('role');

  const deleteUser = userId => {
    if (window.confirm('Do you want to delete this user?')) {
      axiosInstance
        .delete(`/users/${userId}`)
        .then(res => {
          message.success('delete complete');
          axiosInstance
            .get(`/users?populate=avatar&filters[id][$ne]=${id}`)
            .then(response => {
              setSearchResults(response);
            });
        })
        .catch(err => {
          console.log(err);
          message.error('có lỗi');
        });
    }
  };
  const columns = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
      render: (_, record) => (
        <>
          <span className={styles.nameu}>{record.id}</span>
        </>
      ),
    },
    {
      title: 'Name',
      dataIndex: 'username',
      key: 'username',
      render: (_, record) => (
        <Space size="middle">
          <div>
            {record?.avatar?.url ? (
              <img
                src={`${imgurl}${record.avatar.url}`}
                alt={record.avatar.url}
                style={{ width: '32px', height: '32px', borderRadius: '16px' }}
              />
            ) : (
              <img
                src={`${imgurl}/uploads/avt.png`}
                alt="Default Avatar"
                style={{ width: '32px', height: '32px', borderRadius: '16px' }}
              />
            )}
          </div>
          <span className={styles.nameu}>{record.username}</span>
        </Space>
      ),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: (_, record) => (
        <>
          <span className={styles.nameu}>{record.email}</span>
        </>
      ),
    },
    {
      title: 'Phone_Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
      render: (_, record) => (
        <>
          <span className={styles.nameu}>{record.phoneNumber}</span>
        </>
      ),
    },
    {
      title: 'Status',
      key: 'blocked',
      dataIndex: 'blocked',
      render: (_, { blocked }) => (
        <>
          {blocked ? (
            <Tag className={styles.nameu} color="volcano">
              Blocked
            </Tag>
          ) : (
            <Tag className={styles.nameu} color="geekblue">
              Active
            </Tag>
          )}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/Details/${record.id}`}>
            <Button
              icon={<EyeOutlined />}
              style={{ color: '#1D3557', paddingRight: '10px', border: 'none' }}
            />
          </Link>
          {role === '3' && (
            <Link to={`/Edit/${record.id}`}>
              <Button
                icon={<EditOutlined />}
                style={{
                  color: '#1D3557',
                  paddingRight: '10px',
                  border: 'none',
                }}
              />
            </Link>
          )}

          {role === '1' && (
            <Button
              onClick={() => permission()}
              icon={<EditOutlined />}
              style={{ color: '#1D3557', paddingRight: '10px', border: 'none' }}
            />
          )}
          {role === '3' && (
            <Button
              icon={<DeleteOutlined />}
              style={{ color: '#1D3557', paddingRight: '10px', border: 'none' }}
              onClick={() => deleteUser(record.id)}
            />
          )}

          {role === '1' && (
            <Button
              onClick={() => permission()}
              icon={<DeleteOutlined />}
              style={{ color: '#1D3557', paddingRight: '10px', border: 'none' }}
            />
          )}
        </Space>
      ),
    },
  ];

  useEffect(() => {
    axiosInstance
      .get(
        `/users?filters[${searchEmail}][$contains]=${searchKeyword}&filters[blocked][$contains]=${Status}&populate=avatar&filters[id][$ne]=${id}`
      )
      .then(res => {
        setSearchResults(res);
      });
  }, [Status, searchKeyword]);

  useEffect(() => {
    axiosInstance
      .get(`/users?populate=avatar&filters[id][$ne]=${id}`)
      .then(res => {
        setSearchResults(res);
      });
  }, []);

  const handleSearchInputChange = debounce(async event => {
    const { value } = event.target;

    setSearchKeyword(value.trim());

    axiosInstance
      .get(
        `/users?filters[${searchEmail}][$contains]=${value.trim()}&filters[blocked][$contains]=${Status}&populate=avatar&filters[id][$ne]=${id}`
      )
      .then(res => {
        setSearchResults(res);
      });
  }, 500);

  return (
    <div>
      <div className={styles.form}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>
            <h2 className={styles.tittles}>All Users</h2>
          </div>

          <div>
            {role === '3' && (
              <Button
                className={styles.button}
                style={{ background: '#8767E1' }}
                type="primary"
              >
                <Link to="/Create">Add User</Link>
              </Button>
            )}

            {role === '1' && (
              <Button
                className={styles.button}
                style={{ background: '#8767E1' }}
                type="primary"
                onClick={() => permission()}
              >
                Add User
              </Button>
            )}
          </div>
        </div>

        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              paddingBottom: 20,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid #CBCBCB',
                width: '493px',
                borderRadius: '8px',
              }}
            >
              <div>
                <Select
                  bordered={false}
                  defaultValue="Name"
                  style={{
                    width: 200,
                    border: 'none',
                  }}
                  onChange={e => {
                    setSearchEmail(e);
                  }}
                  options={[
                    {
                      value: 'email',
                      label: 'Email',
                    },
                    {
                      value: 'username',
                      label: 'Name',
                    },
                  ]}
                />
              </div>

              <div>|</div>

              <div>
                <Search
                  placeholder="Search"
                  allowClear
                  bordered={false}
                  onSearch={setSearchKeyword}
                  onChange={handleSearchInputChange}
                  enterButton={
                    <Button
                      type="submit"
                      style={{
                        border: 'none',
                        backgroundColor: '#FFFFFF', // Xóa border của button
                      }}
                    >
                      <SearchOutlined style={{ fontSize: '18px' }} />
                    </Button>
                  }
                  style={{
                    width: '262px',
                    marginLeft: '20px',
                    border: 'none',
                  }}
                />
              </div>
            </div>

            <div style={{ marginLeft: '50px' }}>
              <div>
                <Select
                  defaultValue="Status"
                  style={{
                    width: 296,
                  }}
                  onChange={e => {
                    console.log(e);
                    setStatus(e);
                  }}
                  options={[
                    {
                      value: '0',
                      label: 'Active',
                    },
                    {
                      value: '1',
                      label: 'Inactive',
                    },
                    {
                      value: '',
                      label: 'All',
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>

        <Table columns={columns} dataSource={searchResults} />
      </div>
    </div>
  );
};

export default UserManager;
