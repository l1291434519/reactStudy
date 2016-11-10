import React from 'react';

/*
class Index extends React.Component {

	getInitialState() {
	    return {liked: false};
	};

	handleClick(event) {
	    this.setState({liked: !this.state.liked});
	 };

    render() {
    	var text = this.state.liked ? '喜欢' : '不喜欢';
        return (
            <div>
                <h2>Index!</h2>
                 <p onClick={this.handleClick}>
			        你<b>{text}</b>我。点我切换状态。
			     </p>
            </div>
        )
    }
}
*/

var Index = React.createClass({
  getInitialState: function() {
    return {liked: false};
  },
  handleClick: function(event) {
    this.setState({liked: !this.state.liked});
  },
  render: function() {
    var text = this.state.liked ? '喜欢' : '不喜欢';
    return (
    	<div>
      <p onClick={this.handleClick}>
        你<b>{text}</b>我。点我切换状态。
      </p>
      <br/><br/><br/><br/><br/>
      <p onTouchMove={this.handleClick}>
        你<b>{text}</b>我。滑动我切换状态。
      </p>
      </div>
    );
  }
});

export default Index;