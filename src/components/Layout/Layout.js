import React, { useState } from "react";
import "./Layout.css";
import { Breadcrumb, Layout, Menu } from "antd";
import menu_list from "../../Routes";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../store/auth";
const { Header, Content, Footer } = Layout;

const WooLayout = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  let path = location.pathname.split("/")[1];
  return (
    <Layout className="layout" dir="rtl">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={menu_list
            .findIndex((menu) => menu.value === location.pathname.split("/")[1])
            .toString()}
          items={menu_list.map((nav, index) => ({
            key: index,
            label: nav.title,
            style:
              isAuthenticated() && nav.value === "auth"
                ? { display: "none" }
                : !isAuthenticated() && nav.value === "profile"
                ? { display: "none" }
                : "",
            onClick: () => {
              navigate(nav.value, true);
            },
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
