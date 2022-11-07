import { useState } from "react";
import "./Auth.css";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import { baseUrl } from "../../config";

const AuthPage = () => {
  const [register, setRegister] = useState(false);
  const onFinish = (values) => {
    console.log("Success:", values);
    axios
      .post(
        `${baseUrl}/wp-json/jwt-auth/v1/token?username=${values.username}&password=${values.password}`
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="mt-5 w-75 mr-auto ml-auto">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          register: register,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="نام کاربری"
          name="username"
          rules={[
            {
              required: true,
              message: "لطفا نام کاربری خود را وارد کنید",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="رمز عبور"
          name="password"
          rules={[
            {
              required: true,
              message: "لطفا رمز عبور خود را وارد کنید",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        {register && (
          <Form.Item label="نام کاربری" name="username">
            <input type="text" />
          </Form.Item>
        )}

        <Form.Item
          name="register"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox onChange={(e) => setRegister(e.target.checked)}>
            ثبت نام
          </Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
          className="submit-btn"
        >
          <Button type="primary" htmlType="submit">
            ورود
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AuthPage;
