import React from 'react';

const Contact = () => {
  return(
    <div className="contact__container" id="contact">
      <div className="contact__arrow">
        <i className="fas fa-caret-down"></i>
      </div>
      <div className="contact__content">
        <h5>與我聯繫</h5>
        <p>姓名｜王奕崴</p>
        <p>應徵職務｜前端工程師</p>
        <p>E-mail｜wangyiwei0108@gmail.com</p>
        <div className="contact__btn">
          <a href="https://www.cakeresume.com/wangyiwei" target="_blank" rel="noreferrer">
            <div>Resume</div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact;