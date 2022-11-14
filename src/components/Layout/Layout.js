import { Breadcrumb, Layout, Menu } from "antd";
import React, { useContext, useState } from "react";
import menu_list from "../../Routes";
import {useLocation, useNavigate} from "react-router-dom"
import { AuthContext } from "../../store/auth";

const { Header, Content, Footer } = Layout;

const WooCommerceLayout = ({ children }) => {
  const {isAuthenticated} = useContext(AuthContext)
  let navigate = useNavigate()
  let location = useLocation()

  let path = location.pathname.split('/')[1]
  
  return (
    <Layout className="layout" dir="rtl">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[menu_list.findIndex(menu => menu.value === path).toString()]}
          items={menu_list.map((nav, index) => ({
            key: index,
            label: nav.title,
            style:
            isAuthenticated() === true && nav.value === "auth"
                ? { display: "none" }
                : isAuthenticated() === false && nav.value === "profile"
                ? { display: "none" }
                : "",
                onClick:()=>{navigate(nav.value,true)}
          }))}
        >
          
        </Menu>
      </Header>
      <Content
        style={{
          padding: "0 50px",
          minHeight: "82vh",
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
        Sm.S ©2018 Created by Toplearn
      </Footer>
    </Layout>
  );
};

export default WooCommerceLayout;
