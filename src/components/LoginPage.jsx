import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import "../css/LoginPage.css";
import { useDispatch, useSelector } from "react-redux";
import { setFormData } from "../redux/form/action";
const LoginPage = () => {
  const dispatch = useDispatch();
  const onFinish = (values) => {
        dispatch(setFormData(values));
    console.log("Received values of form: ", values);
  };
  return (
    <>
      <div className="mainPage">
        <div className="centerOfPage" style={{}}>
          <h1 className="headingOfPage">Login</h1>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                className="inputField"
                // style={{ width: "300px" }}
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                className="inputField"
                // style={{ width: "300px" }}
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              {/* <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item> */}

              <a className="login-form-forgot" href="">
                Forgot password ?
              </a>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
