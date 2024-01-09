import { Input } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
const LoginPage1 = () => {
  return (
    <div>
      <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
    </div>
  );
};

export default LoginPage1;
