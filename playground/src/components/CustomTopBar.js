const React = require('react');
const { Component } = require('react');
const {
  StyleSheet,
  View,
  Image
} = require('react-native');
const { Navigation } = require('react-native-navigation');

class TopBarBackground extends Component {

  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
    this.state = {};
  }

  render() {
    return (
      <Image
        source={require('../../img/whatshot.png')}
        style={viewStyles.topMenuLogo}
      />
    );
  }
}

module.exports = TopBarBackground;

const viewStyles = StyleSheet.create({
  topMenuLogo: {
    height: 40,
    width: 30,
  },
});
