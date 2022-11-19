import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import "./Auth.css";
import axios from "axios";
import { AXIOS_API_URL } from "../../config";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";

const date = new Date();
const expires_date = new Date(date.setDate(date.getDate() + 3));

const AuthPage = () => {
  const [form] = Form.useForm();
  const [register, setRegister] = useState(false);
  const [cookies, setCookie] = useCookies(["token"]);

  console.log(expires_date);

  const onFinish = async (values) => {
    console.log("Success:", values);

    if (register) {
      const nonce = (
        await axios.get(
          `${AXIOS_API_URL}/api/get_nonce/?controller=user&method=register`
        )
      ).data.nonce;

      if (nonce) {
        axios
          .post(
            `${AXIOS_API_URL}/api/user/register?username=${values.username}&email=${values.email}&nonce=${nonce}&display_name=${values.name}&notify=both&insecure=cool&user_pass=${values.password}`
          )
          .then((res) => {
            console.log(res);
            setRegister(false);
            form.resetFields();
            toast.success("ثبت نام شما با موفقیت انجام شد");
          })
          .catch((err) => toast.error("مشکلی در ثبت نام "));
      }
    } else {
      axios
        .post(
          `${AXIOS_API_URL}/wp-json/jwt-auth/v1/token?username=${values.username}&password=${values.password}`
        )
        .then((res) => {
          console.log(res);
          const { user_display_name, user_email, token } = res.data;
          if (res.data) {
            toast.success("ورود با موفقیت انجام شد");
            window.localStorage.setItem("username", user_display_name);
            window.localStorage.setItem("email", user_email);
            setCookie("token", token, { path: "/", expires: expires_date });
            setTimeout(() => {
              window.location.replace("/");
            }, 3000);
          }
        })
        .catch((err) => toast.error("مشکلی در  ورود پیش آمده است "));
    }
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
              message: "لطفا نام کاربری خود را وارد کنید!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="رمزعبور"
          name="password"
          rules={[
            {
              required: true,
              message: "لطفا رمزعبور خود را وارد کنید!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        {register ? (
          <>
            <Form.Item
              label="پست الکترونیکی"
              name="email"
              rules={[
                {
                  required: true,
                  message: "لطفا پست الکترونیکی خود را وارد کنید!",
                },
                { type: "email", message: "لطفا مقدار معتبری را وارد کنید!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="نام"
              name="name"
              rules={[
                {
                  required: true,
                  message: "لطفا نام خود را وارد کنید!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </>
        ) : (
          ""
        )}

        <Form.Item
          name="register"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox
            onChange={(e) => {
              // console.log(e)
              setRegister(e.target.checked);
            }}
          >
            ثبت نام؟
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
            {register ? "ثبت نام" : "ورود"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AuthPage;
