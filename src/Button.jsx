import React from 'react';

const Button = ({ buttonText, onClickHandler }) => {
  return (
    <div onClick={onClickHandler} className='project-button'>
      {buttonText}
    </div>
  );
};

export default Button;
