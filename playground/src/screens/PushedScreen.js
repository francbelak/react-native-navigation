const _ = require('lodash');
const React = require('react');
const { BackHandler } = require('react-native');
const Navigation = require('../services/Navigation');
const Root = require('../components/Root');
const Button = require('../components/Button');
const {
  PUSHED_SCREEN_HEADER,
  TOP_BAR_BTN,
  PUSH_BTN,
  POP_BTN,
  PUSH_NO_ANIM_BTN,
  POP_TO_FIRST_SCREEN_BTN,
  POP_TO_ROOT_BTN,
  ADD_BACK_HANDLER,
  REMOVE_BACK_HANDLER,
  SET_STACK_ROOT_BUTTON
} = require('../testIDs');
const Screens = require('./Screens');

class PushedScreen extends React.Component {
  static options() {
    return {
      topBar: {
        testID: PUSHED_SCREEN_HEADER,
        title: {
          text: 'Pushed Screen'
        },
        rightButtons: {
          id: 'singleBtn',
          text: 'single',
          testID: TOP_BAR_BTN
        }
      }
    };
  }

  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  navigationButtonPressed({ buttonId }) {
    if (buttonId === 'backPress') alert('back button clicked')
  }

  render() {
    const stackPosition = this.getStackPosition();
    return (
      <Root componentId={this.props.componentId} footer={`Stack Position: ${stackPosition}`}>
        <Button label='Push simple' testID={PUSH_BTN} onPress={() => { this.pushSimple(Screens.Pushed); }} />
        <Button label='Push complex' testID={PUSH_BTN} onPress={() => { this.pushComplex(Screens.FirstBottomTabsScreen); }} />
      </Root>
    );
  }

  getTopBar() {
    return {
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
        icon: require('../../img/options.png')
      }]
    };
  }

  pushSimple = (screen) => Navigation.push(this, {
    component: {
      name: screen,
      options: {
        topBar: this.getTopBar(),
      }
    }
  });

  pushComplex = (screen) => Navigation.push(this, {
    bottomTabs: {
        options: {
          bottomTabs: {
            animate: true,
            backgroundColor: 'gray',
            titleDisplayMode: 'alwaysShow',
            currentTabIndex: 0
          }
        },
        children: [{
          component: {
            name: screen,
            options: {
              topBar: this.getTopBar(),
              bottomTab: {
                text: 'Test 1',
                icon: require('../../img/options.png'),
                testID: 'TEST!1_ID',
                selectedIconColor: 'red',
                selectedTextColor: 'red'
              }
            }
          }
        }]
      }
  });

  getStackPosition = () => this.props.stackPosition || 1;
}

module.exports = PushedScreen;
