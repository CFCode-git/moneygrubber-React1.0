import Layout from '../components/Layout';
import React, {ReactNode, useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import styled from 'styled-components';
import {RecordItem, useRecords} from '../Hooks/useRecords';
import {useTags} from '../Hooks/useTags';
import dayjs from 'dayjs';
// import 'core-js';

const CategoryWrapper = styled.div`
  background: #FFF;
`;
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background: #FFF;
  font-size:18px;
  line-height: 20px;
  padding:10px 16px;
  > .note{
    margin-right:auto;
    margin-left:16px;
    color:#999;
  }
`;
const Header = styled.h3`
  font-size:18px;
  line-height: 20px;
  padding:10px 16px;
`;

function Statistics() {
  const [category, setCategory] = useState<'-' | '+'>('-');
  const {records} = useRecords();
  const {getName} = useTags();
  const selectedRecords = records.filter(r => r.category === category);

  /* 使用桶排序 */
  const hash: { [K: string]: RecordItem[] } = {}; // 声明一个桶 {'2020-05-11':[item,item],'2020-05-10':[item,item],'2020-05-12':[item,item]}

  /* 先分组 */
  selectedRecords.map(r => {
    const key = dayjs(r.createdAt).format('YYYY年MM月DD日');
    const value = r;
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(r);
  });


  /* 把 Hash 变成数组 【entries有些浏览器不兼容，可以引入core-js解决】 进行比较 */
  // console.log(Object.entries(hash));// ['2020-05-11',[item,item]]
  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) { return 0; }
    if (a[0] > b[0]) { return -1;}
    if (a[0] < b[0]) {return 1;}
    return 0;
  });

  return (
    <Layout>
      <CategorySection value={category}
                       onChange={value => setCategory(value)}
      />
      {array.map(([date, records]) => <div key={date}>
          <Header>
            {date}
          </Header>
          <div>
            {records.map(r => {
              return <Item key={r.createdAt}>
                <div className="tags oneLine">
                  {r.tagIds
                    .map(tagId => <span key={tagId}>{getName(tagId)}</span>)
                    // [span,span,span]
                    // [span, ',' ,span, ',' ,span]
                    .reduce((result, span, index,array) =>
                      result.concat(index<array.length-1 ? [span, '，'] : [span]),
                      [] as ReactNode[]
                    )}
                </div>
                {r.note &&
                <div className="note">
                  {r.note}
                </div>}
                <div className="amount">
                  ￥{r.amount}
                </div>
              </Item>;
            })}
          </div>
        </div>
      )}

    </Layout>
  );
}

export default Statistics;
