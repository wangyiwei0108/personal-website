import React, {useEffect} from 'react';
import About from './About';
import Skill from './Skill';
import Contact from './Contact';
import Footer from './Footer';
import Intro from './Intro';
import Navbar from './Navbar';
import Work from './Work';

const App = () => {
  
  // 頁面第一次 render 後，監聽捲軸 event，一啟動便呼叫 listenScrollEvent
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
  }, [])

  // listenScrollEvent 將要讓捲軸移動到不同的 section 有不同的背景顏色
  const listenScrollEvent = () => {
    // 所有的顏色、section 各自放入 array
    const colors = ['', '', '', 'bgcolor__black', 'bgcolor__black', 'bgcolor__black', 'bgcolor__black'];
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
    <div className="app__wrapper">
      <svg className="smile">
        <use xlinkHref="images/sprite.svg#icon-smile"></use>
      </svg>
      <div className="app__container">
        <section><Navbar/></section>
        <section><Intro/></section>
        <section><About/></section>
        <section><Skill/></section>
        <section><Work/></section>
        <section><Contact/></section>
        <section><Footer/></section>
      </div>
      <a className="btn" href="https://github.com/wangyiwei0108" target="_blank" rel="noreferrer">
          <svg>
            <use xlinkHref="images/sprite.svg#icon-github"></use>
          </svg>
        <p>Github</p>
      </a>
      <div className="cursors">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default App;