import React, { Component } from "react";
import { View, Button, ViewPagerAndroid, Text } from "react-native";

var styles = {
  container: {
    flex: 1
  },
  pageStyle: {
    alignItems: "center",
    padding: 20
  }
};

export default class First extends Component {
  state = {
    data: [
      <View style={styles.pageStyle} key={1}>
        <Text>First page (Scroll Me)</Text>
      </View>,
      <View style={styles.pageStyle} key={2}>
        <Text>Second page (Scroll Me)</Text>
      </View>
    ]
  };
  _addPage = () => {
    const data = this.state.data;
    data.push(
      <View style={styles.pageStyle} key={data.length + 1}>
        <Text>{data.length + 1} page (Scroll Me)</Text>
      </View>
    );
    this.setState({ data });
  };
  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this._addPage} title="AddPage" />
        <ViewPagerAndroid style={styles.container} initialPage={0}>
          {this.state.data}
        </ViewPagerAndroid>
      </View>
    );
  }
}
