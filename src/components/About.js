import React from 'react';

const About = () => {
  return(
    <div className="about__container">
      <div className="about__header">
          <div className="marquee">
            <div>
              <span>&nbsp;About&nbsp;About&nbsp;About&nbsp;About&nbsp;About&nbsp;About&nbsp;About&nbsp;About&nbsp;About&nbsp;About&nbsp;About&nbsp;About&nbsp;About&nbsp;About&nbsp;About&nbsp;About&nbsp;About&nbsp;About&nbsp;About&nbsp;About&nbsp;About&nbsp;About</span>
            </div>
          </div>
      </div>
      <div className="about__content">
        <h5 className="about__text-1">曾任設計雜誌編輯，是無技術背景的程式麻瓜一枚。充滿好奇心，喜歡探索未知事物，在一次新嘗試下，開始以網路自學的方式，踏上學習前端技術的道路，並決定以成為前端工程師為目標努力。</h5>
        <p className="about__text-2">目前已自學 1 年時間。最初，透過 freeCodeCamp 網站，了解 HTML 與 CSS 的基本概念與用法。接著，再進一步修習 Udemy 的線上課程，更全面且深入地學習這門技術。其中包括：JavaScript 背後的運作機制、前端框架 React 的操作、CSS 與 SASS 的進階技巧⋯⋯等。</p>
        <p className="about__text-2">我熟練 HTML、CSS、SASS 與 JavaScript，能夠以 flexbox 、grid 切版、規劃響應式網頁版型；並透過 Ajax 串接 API 獲取資料；且熟悉前端框架 React，也有使用 Redux 管理元件狀態的經驗；此外，外語能力良好，能閱讀英文技術文件。作品集部分，可於下方查看。</p>
      </div>
    </div>
  )
}

export default About;