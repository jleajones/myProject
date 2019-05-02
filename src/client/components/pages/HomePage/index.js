import React from 'react';
import { Helmet } from 'react-helmet';
import ReactFullpage from '@fullpage/react-fullpage';

import Page from '../../shared/Page';
import Container from '@components/Container';
// import { frontloadConnect } from 'react-frontload';

// const frontload = () => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('ok');
//     }, 2000);
//   });
// };

const HomePage = () => {
  return (
    <Page name="HomePage">
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="This is the homepage..." />
      </Helmet>
      <div>
        <ReactFullpage
          scrollOverflow={true}
          onLeave={() => {
            console.log('in here..');
          }}
          afterLoad={() => {
            console.log('in here..');
          }}
          render={({ state, fullpageApi }) => {
            return (
                <div id="fullpage-wrapper">
                  <div className="section">
                    <div className="slide">
                      <img style={ { maxWidth: '100%'}} src={'https://source.unsplash.com/collection/4625959/1600x900'} />
                    </div>
                    <div className="slide">
                      <img style={ { maxWidth: '100%'}} src={'https://source.unsplash.com/collection/2378546/1600x900'} />
                    </div>
                    <div className="slide">
                      <img style={ { maxWidth: '100%'}} src={'https://source.unsplash.com/collection/2479019/1600x900'} />
                    </div>
                  </div>
                </div>
            );
          }}
      />
      </div>
    </Page>
  );
};

export default HomePage;
// export default frontloadConnect(frontload)(HomePage);
