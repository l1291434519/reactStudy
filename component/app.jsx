
/**
 * 组件 类 继承 首字母需大写
 *
 */
class Comment extends React.Component {
  render() {
    return (
      <div>
        my name is Component
      </div>
    );
  }
}

class Comment2 extends React.Component {
  render() {
    return (
      <div>
        my name is Component2
      </div>
    );
  }
}

class BoxCom extends React.Component {
	render(){
		return(
			<div>
			 box Component
			</div>
			);
	}
}

//console.log(React);
console.log(BoxCom);

var box = ReactDOM.render(
	<BoxCom/>,
	document.getElementById('example')
);