// @ts-check
const { Navigation } = require('react-native-navigation');
const { registerScreens } = require('./screens');
const { Platform } = require('react-native');
const { setDefaultOptions } = require('./commons/Options')
const testIDs = require('./testIDs');
const Screens = require('./screens/Screens');

function start() {
  registerScreens();
  Navigation.events().registerAppLaunchedListener(async () => {
    setDefaultOptions();

    Navigation.setRoot({
      root: {
        sideMenu: {
          id: 'sideMenu',
          right: {
            component: {
              id: 'sideMenuRight',
              name: 'SideMenuRight'
            }
          },
          center: {
            stack: {
              id: 'AppRoot',
              children: [{
                component: {
                  name: 'Pushed',
                  passProps: {},
                  options: {
                    topBar: {
                      buttonColor: '#fff',
                      backButton: {
                        color: '#fff'
                      },
                      background: {
                        color: '#ff0000',
                      },
                      title: {
                        component: {
                          name: 'CustomTopBar',
                          alignment: 'center',
                        },
                      },
                      rightButtons: [{
                        id: 'TOP_BAR_BURGER_ID',
                        icon: require('../img/options.png')
                      }]
                    },
                    sideMenu: {
                      right: {
                        enabled: true
                      }
                    }
                  }
                }
              }]
            }
          }
        }
      }
    });
  });
}

module.exports = {
  start
};
