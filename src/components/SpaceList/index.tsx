import { ProList } from '@ant-design/pro-components';
import { Avatar, Tag } from 'antd';
import React from 'react';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';

const IconText = ({ icon, text }: { icon: any; text: string }) => (
  <span>
    {React.createElement(icon, { style: { marginInlineEnd: 8 } })}
    {text}
  </span>
);

const data = [
  '语雀的天空',
  'Ant Design',
  '蚂蚁金服体验科技',
  'TechUI',
  'TechUI 2.0',
  'Bigfish',
  'Umi',
  'Ant Design Pro',
].map((item) => ({
  title: item,
  subTitle: <Tag> test </Tag>,
  content: (
    <div>
      段落示意：蚂蚁金服设计平台 sss
      {item}
    </div>
  ),
  actions: (
    <div
      style={{
        display: 'flex',
        marginLeft: '50%',
        justifyContent: 'space-evenly',
      }}
    >
      <IconText icon={StarOutlined} text="123" />
      <IconText icon={LikeOutlined} text="156" />
      <IconText icon={MessageOutlined} text="2" />
    </div>
  ),
  avatar: (
    <Avatar
      style={{ marginInlineEnd: 10 }}
      src={'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'}
      alt={'iWiki'}
      size={'large'}
      shape={'square'}
    />
  ),
}));

// const Testt = () => (
//   <div className={style.container}>
//     <List
//       size="large"
//       dataSource={data}
//       grid={{gutter: 10, column: 2, md: 3, sm: 1}}
//       split={true}
//       renderItem={(item) => (
//         <div className={style.listItemContainer}>
//           <div
//             className={style.listItem}
//           >
//             <List.Item
//               style={{
//                 marginBlock: "8px",
//                 marginInline: 0,
//                 paddingBlock: 0,
//                 paddingInline: "8px",
//                 backgroundColor: "red"
//               }}
//               className={style.listItem}
//
//               key={item.title}
//               actions={[
//                 <IconText icon={StarOutlined} text="156" key="list-vertical-star-o"/>,
//                 <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o"/>,
//                 <IconText icon={MessageOutlined} text="2" key="list-vertical-message"/>,
//               ]}
//             >
//               <List.Item.Meta
//                 avatar={<Avatar
//                   src={"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"}
//                   alt={'iWiki'}
//                   size={"large"}
//                   shape={"square"}
//                 />}
//                 title={<a>{item.title}</a>}
//                 description={item.description}
//               />
//               {item.content}
//             </List.Item>
//           </div>
//         </div>
//       )}
//     />
//   </div>
// );
export default () => {
  return (
    <div>
      <ProList<{ title: string }>
        rowKey="id"
        grid={{ gutter: 10, column: 2, md: 3, sm: 1 }}
        onItem={(record: any) => {
          return {
            onMouseEnter: () => {
              console.log(record);
            },
            onClick: () => {
              console.log(record);
            },
          };
        }}
        dataSource={data}
        split={true}
        metas={{
          title: {},
          subTitle: {},
          description: {},
          actions: {
            cardActionProps: 'actions',
          },
          avatar: {},
          content: {},
        }}
      />
    </div>
  );
};
