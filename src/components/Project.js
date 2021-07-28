import React from 'react';
import aqi from '../assets/project-aqi.png';
import todo from '../assets/project-todo.png';
import shopping from '../assets/project-cart.png';
import restaurant from '../assets/project-res.png';

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
            <h5>01 臺灣空氣品質查詢</h5>
            <ul>
              <li>使用前端框架 React、React Hooks</li>
              <li>透過 Fetch API，串接政府 Open Data</li>
              <li>以 Async / Await 處理非同步請求</li>
              <li>資料處理（filter、map、forEach 之應用）</li>
              <li>設定元件之狀態預設值</li>
              <li>CSS Flexbox 、Grid 排版，規劃 RWD 網頁</li>
            </ul>
            <div className="project__btns">
              <a href="https://wangyiwei0108.github.io/react-aqi-search/" target="_blank" rel="noreferrer"><div>網站連結</div></a >
              <a href="https://github.com/wangyiwei0108/react-aqi-search" target="_blank" rel="noreferrer"><div>查看原始碼</div></a >
            </div>
          </div>
          <div className="project__pic">
            <a href="https://wangyiwei0108.github.io/react-aqi-search/" target="_blank" rel="noreferrer">
              <img alt="project-air" src={aqi}/>
            </a >
          </div>
        </div>
        <div className="project__project">
          <div className="project__intro">
            <h5>02 待辦事項</h5>
            <ul>
              <li>使用前端框架 React、React Hooks</li>
              <li>具備新增、讀取、修改、刪除以及篩選功能</li>
              <li>透過 useRef 操控 DOM 元素狀態（input）</li>
              <li>使用 localStorage 儲存網頁資料</li>
              <li>以 SASS 實現深色模式切換的功能</li>
              <li>CSS Flexbox 、Grid 排版，規劃 RWD 網頁</li>
            </ul>
            <div className="project__btns">
              <a href="https://wangyiwei0108.github.io/react-todolist/" target="_blank" rel="noreferrer"><div>網站連結</div></a >
              <a href="https://github.com/wangyiwei0108/react-todolist" target="_blank" rel="noreferrer"><div>查看原始碼</div></a >
            </div>
          </div>
          <div className="project__pic">
            <a href="https://wangyiwei0108.github.io/react-todolist/" target="_blank" rel="noreferrer">
              <img alt="project-air" src={todo}/>
            </a >
          </div>
        </div>
        <div className="project__project">
          <div className="project__intro">
            <h5>03 購物車</h5>
              <ul>
                <li>前端使用 React、React Class</li>
                <li>後端以 Node.js / Express 撰寫 RESTful API</li>
                <li>HTTP 請求方法：get、post、delete 的應用</li>
                <li>Redux 管理狀態；Redux Thunk 處理非同步請求</li>
                <li>功能具備商品搜尋、篩選、排序；購物車新增、刪除</li>
                <li>可發送表單至後端，並從後端抓取資料於網頁呈現</li>
              </ul>
              <div className="project__btns">
                <a href="https://react-shopping-cart-yiwei.herokuapp.com/#/" target="_blank" rel="noreferrer"><div>網站連結</div></a >
                <a href="https://github.com/wangyiwei0108/react-shopping-cart" target="_blank" rel="noreferrer"><div>查看原始碼</div></a >
              </div>
          </div>
          <div className="project__pic">
            <a href="https://react-shopping-cart-yiwei.herokuapp.com/#/" target="_blank" rel="noreferrer">
              <img alt="project-air" src={shopping}/>
            </a >
          </div>
        </div>
        <div className="project__project">
          <div className="project__intro">
            <h5>04 餐館 <span>Landing Page</span></h5>
              <ul>
                <li>使用前端框架 React、React Hooks</li>
                <li>以元件的狀態（Boolean），控制 className</li>
                <li>隱藏或顯示 Navbar 漢堡選單的斷點設定</li>
                <li>以 CSS Grid 排版不同尺寸照片的 gallery</li>
                <li>藉由 react-responsive-carousel 實現輪播</li>
                <li>CSS Flexbox 、Grid 排版，規劃 RWD 網頁</li>
              </ul>
              <div className="project__btns">
                <a href="https://wangyiwei0108.github.io/react-restaurant-website/" target="_blank" rel="noreferrer"><div>網站連結</div></a >
                <a href="https://github.com/wangyiwei0108/react-restaurant-website" target="_blank" rel="noreferrer"><div>查看原始碼</div></a >
              </div>
          </div>
          <div className="project__pic">
            <a href="https://wangyiwei0108.github.io/react-restaurant-website/" target="_blank" rel="noreferrer">
              <img alt="project-air" src={restaurant}/>
            </a >
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project;