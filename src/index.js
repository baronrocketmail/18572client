import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <div>
      <div className={"firstPage"}>
     <h1>All Payments Up to Date</h1>
     <div className={"linkBar"}>
         <h4 className={"itemOne"}>cybernetic stream</h4>
         <h4 className={"itemTwo"}>autopay</h4>
     </div>

      </div>
          <video  controls muted autoPlay={true} width={"100%"}>
              <source src="https://storage.googleapis.com/ponn/1080P_4000K_410269351.mp4" type="video/mp4"/>
                      Your browser does not support the video tag.
          </video>
          <img width="100%" src={"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-spaceblack?wid=5120&hei=2880&fmt=jpeg&qlt=90&.v=1663703841897"}/>
      </div>
  </React.StrictMode>
);
