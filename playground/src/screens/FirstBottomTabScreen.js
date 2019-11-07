const React = require('react');
const Root = require('../components/Root');
const Button = require('../components/Button')
const Navigation = require('./../services/Navigation');
const Screens = require('./Screens');
const { component } = require('../commons/Layouts');
const {
  SWITCH_TAB_BY_INDEX_BTN,
  SWITCH_TAB_BY_COMPONENT_ID_BTN,
  SET_BADGE_BTN,
  CLEAR_BADGE_BTN,
  HIDE_TABS_BTN,
  SHOW_TABS_BTN,
  HIDE_TABS_PUSH_BTN
} = require('../testIDs')

class FirstBottomTabScreen extends React.Component {
  render() {
    return (
      <Root componentId={this.props.componentId}>
        
      </Root>
    );
  }
}

module.exports = FirstBottomTabScreen;
