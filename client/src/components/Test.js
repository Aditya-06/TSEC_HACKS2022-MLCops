import React from 'react';

const Test = () => {
  return (
    <div style={{ height: '100vh' }}>
      Test
      <div>
        <object
          data="http://africau.edu/images/default/sample.pdf"
          type="application/pdf"
          width="1000vw"
          height="900vh"
        >
          <p>
            Alternative text - include a link{' '}
            <a href="http://africau.edu/images/default/sample.pdf">
              to the PDF!
            </a>
          </p>
        </object>
      </div>
    </div>
  );
};

export default Test;
