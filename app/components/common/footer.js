import React from 'react';

const Footer = () => {
  const theDate = new Date();
  const year = theDate.getFullYear() + '. All right reserved';
  return (
    <footer class='footer'>
      <h4>
        &copy; <span>{year}</span>
      </h4>
    </footer>
  );
};

export default Footer;
