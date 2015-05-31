'use strict'

var React = require('react-native'),
  TimerMixin = require('react-timer-mixin')

var {
	StyleSheet,
	View,
	Text,
  TouchableHighlight
} = React

var Tab = React.createClass({
  mixins: [TimerMixin],
  getInitialState() {
    var props = this.props
    return {
      len: props.children.length,
      index: parseInt(props.curIndex,10),
      curClass: props.curClass,
      onChange: props.onChange || function(){}
    }
  },
  changeTab(index) {
    return function(){
      if(index === this.state.index) return
      var preIndex = this.state.index
      this.setState({
        index: index
      })
      this.setTimeout(function(){
        this.state.onChange && this.state.onChange.call(this,preIndex,index)
      }.bind(this))
    }.bind(this)
  },
  renderTabContent() {
    return this.props.children[this.state.index]
  },
  renderTabset() {
    var {index,len,curClass} = this.state,
      children = this.props.children
    var ret = [],self = this
    for(var i = 0;i < len; i++){
      (function(i){
        ret.push(
          <TouchableHighlight
            onPress={self.changeTab(i)}
            style={[children[i].props.tabStyle,(index === i) ? curClass : '']}
          >
            <Text style={children[i].props.tabTitleStyle}>
              {children[i].props.title}
            </Text>
          </TouchableHighlight>
        )
      })(i)
    }
    return ret
  },
  render() {
    return (
      <View
        style={this.props.style}
      >
        <View
          style={this.props.tabWrapperStyle}
        >
          {this.renderTabset()}
        </View>
        {this.renderTabContent()}
      </View>
    )
  }
})

module.exports = Tab

// 单个 children 返回 object，多个返回 array

