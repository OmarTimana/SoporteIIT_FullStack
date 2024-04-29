import { Menu, ConfigProvider } from 'antd'
import { MailOutlined, SettingOutlined  } from '@ant-design/icons';
import { useState } from 'react';

const items = [
  {
    label: 'INICIO',
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: 'SERVICIOS',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
    key: 'alipay',
  },
];

const Navbar = () => {

  const [current, setCurrent] = useState('mail');
  const onClick = (e:any) => {
  console.log('click ', e);
  setCurrent(e.key);
  };


  return (
      <ConfigProvider
      theme={{
        components: {
          Menu: {
            colorPrimary: '#F6F5F2',
            itemColor: '#F6F5F2',
            itemHoverColor:'#A9A9A9',
            itemHoverBg:'#153448',
            itemSelectedBg:'#2C4E80',
            popupBg:'#00215E',
          },
        },
      }}
    >
     
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} style={{backgroundColor:'transparent', width:'80vw'}} className='flex font-bold text-lg flex-auto justify-end align-middle mb-2'/>

    </ConfigProvider>

  )

};

export default Navbar