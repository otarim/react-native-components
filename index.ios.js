'use strict'

var React = require('react-native'),
  Tab = require('./components/tab.js'),
  Dropdown = require('./components/dropdown.js')

var {
  StyleSheet,
  View,
  Text,
  Image,
  AppRegistry
} = React

var tab = React.createClass({
  render() {
    return (
      <Tab
        curClass={styles.curTab}
        curIndex="0"
        onChange={function(prev,cur){
          console.log(prev,cur)
        }}
        style={{marginTop: 200}}
        tabWrapperStyle={styles.tabWrapper}
      >
      <View
        style={styles.tabContent}
        title="1"
        tabStyle={styles.tab}
        tabTitleStyle={styles.tabTitle}
      >
        <View
          style={{
            flexDirection: 'row',
            padding: 10
          }}
        >
          <Image
          style={{height: 160,width: 160}}
          source={{uri: 'https://avatars2.githubusercontent.com/u/2024477?v=3&s=460'}} />
          <Text
            style={{flex: 2,margin: 5}}
          >
            misaka mikoto
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: 160
            }}
          >
            <View
              style={{height: 10,borderRadius: 10}}
            >
              <Text>
                20
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={styles.tabContent}
        tabStyle={styles.tab}
        title="2"
        tabTitleStyle={styles.tabTitle}
      >
        <Text>222</Text>
      </View>
      <View
        style={styles.tabContent}
        tabStyle={styles.tab}
        title="3"
        tabTitleStyle={styles.tabTitle}
      >
        <Text>333</Text>
      </View>
      </Tab>
    )
  }
})

var AwsomeProject = React.createClass({
  render() {
    return (
      <Dropdown
        selected="1"
        onChange={function(curIndex,curValue){
          console.log(curIndex,curValue)
        }}
        style={{backgroundColor: '#ffffff',marginTop: 200,padding: 5,borderColor: '#cccccc',borderWidth: 1}}
        wrapperStyle={{borderColor: '#cccccc',borderWidth: 1,marginTop: -1}}
        selectedStyle={{backgroundColor: '#E0F6FF'}}
      >
        <View
          style={style.option}
          value="1"
        >
          <Text>
            1
          </Text>
        </View>
        <View
          style={style.option}
          value="2"
        >
          <Text>
            2
          </Text>
        </View>
        <View
          style={style.option}
          value="3"
        >
          <Text>
            3
          </Text>
        </View>
      </Dropdown>
    )
  }
})


var styles = StyleSheet.create({
  curTab: {
    backgroundColor: '#E0F6FF'
  },
  tabWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#E0F6FF'
  },
  tab: {
    borderColor: '#ffffff',
    borderWidth: 1,
    backgroundColor: '#EBF9FF',
    flex: 1
  },
  tabContent: {
    height: 180,
    backgroundColor: '#F5FCFF'
  },
  tabTitle: {
    textAlign: 'center',
    lineHeight: 28,
    height: 40,
    fontWeight: 'bold'
  },
  option: {backgroundColor: '#ffffff',padding: 5}
})

AppRegistry.registerComponent('AwsomeProject',function(){
  return AwsomeProject
})
