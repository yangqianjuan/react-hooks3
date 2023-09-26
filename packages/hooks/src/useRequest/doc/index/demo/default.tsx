import React from 'react';
import Mock from 'mockjs';
import { useRequest } from 'reactHooks';
export default () => {
  const getUserName = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Mock.mock('@name'));
      }, 1000);
    });
  };
  // debugger;
  const { loading, data, error } = useRequest(getUserName);
  // console.log(loading, data, error);
  if (loading) {
    return <div>加载中。。。</div>;
  }
  if (error) {
    return <div>error:{error}</div>;
  }
  if (data) {
    return <div>data:{data}</div>;
  }
};
