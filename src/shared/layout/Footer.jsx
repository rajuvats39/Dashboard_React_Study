import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-bottom mt-2">
        <p>&copy; {new Date().getFullYear()} RvCorner. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
