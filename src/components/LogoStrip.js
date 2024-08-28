import React from 'react';

const LogoStrip = () => {
  return (
    <div className="logo-strip-container">
      <h2>Deals in</h2>
      <div className="logo-strip">
        <div className="logo-strip-inner">
          <img src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/2c919b36737053.5727be560a798.jpg' alt="Company 1" />
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSazVsIzSyzhqHxdegGc_SwY0QgGwe-um1jA&s' alt="Company 2" />
          <img src='https://upload.wikimedia.org/wikipedia/commons/a/a1/RGB_LOGO_APOLLO_TYRES_COMPACT_POS_GTD.jpg' alt="Company 3" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2AmwcaP-j5Kb3iIdVkWJy3iY-m8XA36JT1A&s" alt = "Company 4"/>
          <img src="https://zeevector.com/wp-content/uploads/JK-Tyre-logo-PNG-Transparent.png" alt="Company 5"/>
          {/* Add more logos if needed*/}
        </div>
      </div>
    </div>
  );
};

export default LogoStrip;
