import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import logo from './logo.png';
import Project from './Calculator';

const { Header, Content, Footer } = Layout;

const items = new Array(3).fill(null).map((_, index) => ({
  key: String(index + 1),
  label: `nav ${index + 1}`,
}));

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header
        style={{
          background: '#fff',
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          mode="horizontal"
          
          defaultSelectedKeys={['1']}
          items={[{
            key: '1',
            label: <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <img src={logo} height={50} />
            </div>
          }]}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Project />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Department of periodontology - University Hassan 2 Casablanca ©{new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};

export default App;