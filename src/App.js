import React from 'react';
import { Tabbar, Tab, Page, Toolbar, BackButton, ToolbarButton, Icon } from 'react-onsenui';
import './App.css';
import MapPage from './MapPage';
import { HomePage } from './HomePage';
import logoURL from './assets/img/iscream-logo.png';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {index:0};
  }

  render() {
    return (
      <Page>
        <Toolbar className="gradient-back">
          <div className="left">
           
          </div>
          <div className="center">
            <img src={logoURL} height="40px" alt="iscream.app"/>
          </div>
          <div className="right">
            
          </div>
        </Toolbar>
        <Tabbar
          onPreChange={({ index }) => this.setState({index})}
          onPostChange={() => console.log('postChange')}
          onReactive={() => console.log('postChange')}
          position='bottom'
          index={this.state.index}
          renderTabs={(activeIndex, tabbar) => [
            {
              content: <Page title="Home" active={activeIndex === 0} tabbar={tabbar}>
                <HomePage/>
                  </Page>,
              tab: <Tab label="Home" icon="md-home" />
            },
            {
              content: <Page title="Maps" active={activeIndex === 1} tabbar={tabbar}>
                    <MapPage/>
                </Page>,
              tab: <Tab label="Maps" icon="md-map" />
            },
            {
              content: <Page title="Me" active={activeIndex === 2} tabbar={tabbar} />,
              tab: <Tab label="Me" icon="md-account" />
            },
            {
              content: <Page title="Settings" active={activeIndex === 3} tabbar={tabbar} />,
              tab: <Tab label="Settings" icon="md-settings" />
            }]
          }
        />
      </Page>
    );
  }
}

export default App;
