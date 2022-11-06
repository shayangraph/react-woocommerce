import React, { useState } from "react";
import "./Layout.css";
import { Breadcrumb, Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;

const WooLayout = ({ children }) => {
  const [authState, setAuthState] = useState(false);

  const menu_list = [
    { title: "صفحه اصلی", value: "home" },
    { title: "لیست خرید", value: "cart" },
    { title: "پروفایل", value: "profile" },
    { title: "صفحه ورود", value: "auth" },
  ];

  return (
    <Layout className="layout" dir="rtl">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["0"]}
          items={menu_list.map((nav, index) => ({
            key: index,
            label: nav.title,
            style:
              authState && nav.value === "auth"
                ? { display: "none" }
                : !authState && nav.value === "profile"
                ? { display: "none" }
                : "",
          }))}
        />
      </Header>
      <Content
        style={{
          padding: "0 50px",
          minHeight: "85vh",
        }}
      >
        {/* <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <div className="site-layout-content">{children}</div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        graph ©2018 Created by shayan
      </Footer>
    </Layout>
  );
};
export default WooLayout;
