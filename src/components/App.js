import React, { useEffect } from 'react';
import Contact from './Contact';
import Footer from './Footer';
import Intro from './Intro';
import Navbar from './Navbar';
import Project from './Project';
import AboutSkill from './AboutSkill';
import Experience from './Experience';

const App = () => {
  
  // 頁面變色 頁面第一次 render 後，監聽捲軸 event，一啟動便呼叫 listenScrollEvent
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
  }, [])

  // listenScrollEvent 將要讓捲軸移動到不同的 section 有不同的背景顏色
  const listenScrollEvent = () => {
    // 所有的顏色、section 各自放入 array
    const colors = ['', '', '', '', 'bgcolor__black', 'bgcolor__black', 'bgcolor__black', 'bgcolor__black', 'bgcolor__black'];
    const sections = [...document.getElementsByTagName('section')];
    const scrollFromTop = window.pageYOffset;

    for (let i = 0; i < sections.length; i++) {
      // scrollFromTop 從 0 開始越來越大 section.offsetTop 越來越小，因為一直往上拉
        if (scrollFromTop * 1.4 <= sections[i].offsetTop) {
          document.body.className = colors[i];
          break;
      };
    };
  }

  // cursor 效果
  useEffect(() => {
    const cursorTag = document.querySelector("div.cursors");
    const balls = cursorTag.querySelectorAll("div");

    let aimX = 0;
    let aimY = 0;

    document.addEventListener("mousemove", function(event) {
      aimX = event.pageX;
      aimY = event.pageY;
    })

    balls.forEach((ball, index) => {
      let currentX = 0;
      let currentY = 0;

      let speed = 0.5 - index * 0.025;

      const animate = function(){
        currentX += (aimX - currentX) * speed;
        currentY += (aimY - currentY) * speed;
  
        ball.style.left = currentX + "px";
        ball.style.top = currentY + "px";
  
        requestAnimationFrame(animate);
      }
      animate();
      
    })
  }, [])

  return(
    <div id="top">
      <section><Navbar/></section>
      <svg className="app__smile-icon">
        <use xlinkHref="images/sprite.svg#icon-smile"></use>
      </svg>
      <div className="app__container">
        <section><Intro/></section>
        <section><AboutSkill/></section>
        <section><Project/></section>
        <section><Experience/></section>
      </div>
      <section><Contact/></section>
      <section><Footer/></section>
      <a className="app__btn" href="https://github.com/wangyiwei0108" target="_blank" rel="noreferrer">
          <svg>
            <use xlinkHref="images/sprite.svg#icon-github"></use>
          </svg>
        <div>Github</div>
      </a>
      <div className="cursors">
        <div className="cursors__dot cursors__dot--1"></div>
        <div className="cursors__dot cursors__dot--2"></div>
        <div className="cursors__dot cursors__dot--3"></div>
        <div className="cursors__dot cursors__dot--4"></div>
        <div className="cursors__dot cursors__dot--5"></div>
        <div className="cursors__dot cursors__dot--6"></div>
        <div className="cursors__dot cursors__dot--7"></div>
        <div className="cursors__dot cursors__dot--8"></div>
        <div className="cursors__dot cursors__dot--9"></div>
        <div className="cursors__dot cursors__dot--10"></div>
        <div className="cursors__dot cursors__dot--11"></div>
        <div className="cursors__dot cursors__dot--12"></div>
        <div className="cursors__dot cursors__dot--13"></div>
        <div className="cursors__dot cursors__dot--14"></div>
        <div className="cursors__dot cursors__dot--15"></div>
        <div className="cursors__dot cursors__dot--16"></div>
        <div className="cursors__dot cursors__dot--17"></div>
      </div>
    </div>
  )
}

export default App;