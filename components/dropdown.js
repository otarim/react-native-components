'use strict'

var React = require('react-native')

var {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback
} = React

var Dropdown = React.createClass({
	getInitialState() {
		var props = this.props
		return {
			index: parseInt(props.selected,10) || 0,
			display: false,
			defaultValue: props.defaultValue || false,
			onChange: props.onChange || function(){},
			value: props.selected ? this.props.children[props.selected].props.value : null
		}
	},
	// componentWillUnmount: function() {
	//   document.removeEventListener('clicxk',this,false)
	// },
	// componentDidMount: function() {
	// 	document.addEventListener('click',this,false)
	// },
	handleEvent() {
		this.setState({
			'display': false
		})
	},
	toggleDisplay() {
		this.setState({
			display: !this.state.display
		})
	},
	updateIndex(index) {
		return function(){
			var curIndex = this.state.index
			this.setState({
				index: index,
				display: false,
				defaultValue: false,
				value: this.props.children[index].props.value
			})
			if(index !== curIndex){
				this.state.onChange && this.state.onChange.call(this,index,this.state.value)
			}
		}.bind(this)
	},
	renderValue() {
		return (
			<TouchableWithoutFeedback
				onPress={this.toggleDisplay}
			>
				<View
					style={this.props.style}
				>
					<Text>{this.state.defaultValue || this.props.children[this.state.index].props.value}</Text>
				</View>
			</TouchableWithoutFeedback>
		)
	},
	renderOptions() {
		if(this.state.display){
			var items = this.props.children,
				itemIndexs = Object.keys(items)
			var options = itemIndexs.map(function(index){
				index = parseInt(index,10)
				return (
					<TouchableWithoutFeedback
						onPress={this.updateIndex(index)}
					>
						<View
							style={[items[index].props.style,(!this.state.defaultValue && this.state.index === index) ? this.props.selectedStyle : '']}
						>
							{items[index].props.children}
						</View>
					</TouchableWithoutFeedback>
				)
			}.bind(this))
			return (
				<View
      		style={this.props.wrapperStyle}
				>
				{options}
				</View>
			)
		}else{
			return null
		}
	},
  render: function() {
    return (
      <View>
      	{this.renderValue()}
      	{this.renderOptions()}
      </View>
    )
  }
})


module.exports = Dropdown
