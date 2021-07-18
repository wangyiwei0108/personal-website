import React from 'react';

const Project = () => {
  return(
    <div className="project__container" id="project">
      <div className="project__header">
        <div className="marquee">
          <div>
            <span>&nbsp;project&nbsp;project&nbsp;project&nbsp;project&nbsp;project&nbsp;project&nbsp;project&nbsp;project&nbsp;project&nbsp;project&nbsp;project&nbsp;project&nbsp;project&nbsp;project&nbsp;project&nbsp;skill&nbsp;skill&nbsp;skill&nbsp;skill&nbsp;skill&nbsp;skill&nbsp;skill</span>
          </div>
        </div>
      </div>
      <div className="project__projects">
        <div className="project__project">
          <div className="project__intro">
            <h5>01 空氣品質查詢</h5>
            <ul>
              <li>串接 API 取用政府 Open Data</li>
              <li>以 React Hooks 撰寫元件</li>
              <li>響應式網頁設計（RWD）</li>
            </ul>
            <div className="project__btns">
              <a href="https://wangyiwei0108.github.io/react-aqi-search/" target="_blank" rel="noreferrer"><div>網站連結</div></a >
              <a href="https://github.com/wangyiwei0108/react-aqi-search" target="_blank" rel="noreferrer"><div>查看原始碼</div></a >
            </div>
          </div>
          <div className="project__pic">
            <a href="https://wangyiwei0108.github.io/react-aqi-search/" target="_blank" rel="noreferrer">
              <img alt="project-air" src="images/air02.png"/>
            </a >
          </div>
        </div>
        <div className="project__project">
          <div className="project__intro">
            <h5>02 待辦事項</h5>
            <ul>
              <li>運用 Local Storage 儲存資料</li>
              <li>具備 CRUD（新增、讀取、修改、刪除）功能</li>
              <li>以 SASS 實作深色模式（Dark Mode）</li>
              <li>以 React Hooks 撰寫元件</li>
              <li>響應式網頁設計（RWD）</li>
            </ul>
            <div className="project__btns">
              <a href="https://wangyiwei0108.github.io/react-todolist/" target="_blank" rel="noreferrer"><div>網站連結</div></a >
              <a href="https://github.com/wangyiwei0108/react-todolist" target="_blank" rel="noreferrer"><div>查看原始碼</div></a >
            </div>
          </div>
          <div className="project__pic">
            <a href="https://wangyiwei0108.github.io/react-todolist/" target="_blank" rel="noreferrer">
              <img alt="project-air" src="images/todo02.png"/>
            </a >
          </div>
        </div>
        <div className="project__project">
          <div className="project__intro">
            <h5>03 購物車</h5>
              <ul>
                <li>以 Node.js / Express 撰寫後端</li>
                <li>使用 Mongodb 儲存資料</li>
                <li>藉由 Redux 管理狀態</li>
                <li>以 React Classes 撰寫元件</li>
                <li>響應式網頁設計（RWD）</li>
              </ul>
              <div className="project__btns">
                <a href="https://react-shopping-cart-yiwei.herokuapp.com/#/" target="_blank" rel="noreferrer"><div>網站連結</div></a >
                <a href="https://github.com/wangyiwei0108/react-shopping-cart" target="_blank" rel="noreferrer"><div>查看原始碼</div></a >
              </div>
          </div>
          <div className="project__pic">
            <a href="https://react-shopping-cart-yiwei.herokuapp.com/#/" target="_blank" rel="noreferrer">
              <img alt="project-air" src="images/cart01.png"/>
            </a >
          </div>
        </div>
        <div className="project__project">
          <div className="project__intro">
            <h5>04 餐館 <span>Landing Page</span></h5>
              <ul>
                <li>CSS Flexbox & Grid 排版</li>
                <li>以 React Hooks 撰寫元件</li>
                <li>響應式網頁設計（RWD）</li>
              </ul>
              <div className="project__btns">
                <a href="https://wangyiwei0108.github.io/react-restaurant-website/" target="_blank" rel="noreferrer"><div>網站連結</div></a >
                <a href="https://github.com/wangyiwei0108/react-restaurant-website" target="_blank" rel="noreferrer"><div>查看原始碼</div></a >
              </div>
          </div>
          <div className="project__pic">
            <a href="https://wangyiwei0108.github.io/react-restaurant-website/" target="_blank" rel="noreferrer">
              <img alt="project-air" src="images/res01.png"/>
            </a >
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project;