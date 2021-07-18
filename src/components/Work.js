import React from 'react';

const Work = () => {
  return (
    <div className="work__container">
      <div className="work__header">
          <div className="marquee">
            <div>
              <span>&nbsp;Work&nbsp;Work&nbsp;Work&nbsp;Work&nbsp;Work&nbsp;Work&nbsp;Work&nbsp;Work&nbsp;Work&nbsp;Work&nbsp;Work&nbsp;Work&nbsp;Work&nbsp;Work&nbsp;Work&nbsp;Work&nbsp;Work&nbsp;Work&nbsp;Work&nbsp;Work&nbsp;Work&nbsp;Work</span>
            </div>
          </div>
      </div>
      <ul className="work__info">
        <li>
          <div className="work__date">2019.08 - 2020.04</div>
          <div className="work__job">網站編輯</div>
          <div className="work__company">《<span>Shopping Design</span>》</div>
        </li>
        <li>
          <div className="work__date">2019.04 - 2020.07</div>
          <div className="work__job">企劃專員</div>
          <div className="work__company">《<span>Shopping Design</span>》</div>
        </li>
        <li>
          <div className="work__date">2017.04 - 2019.03</div>
          <div className="work__job">執行長助理</div>
          <div className="work__company">《數位時代》</div>
        </li>
      </ul>
    </div>
  )
}

export default Work;