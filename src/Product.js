import React, {Component} from 'react';

class Clock extends Component{

		constructor(props){
			super(props);
			this.state={Date: new Date() };
		}

		componentDidMount(){
			this.timerID = setInterval(
			() => this.tick(),
			1000
			);
		}

		componentWillUnmount(){
			clearInterval(this.timerID);
		}

		tick(){
			this.setState({
				Date: new Date()
			});
		}

	render(){
		return(
		   <div>
			    <h1>Hello Clock :-)</h1>
				<h1>{this.state.Date.toLocaleTimeString()}</h1>
			</div>		
			)
	}

}



export default Clock



// import React, { Component } from 'react';

// class Product extends Component {
// 	render() {
// 		return (
// 			<div>
// 			<Cart/>
// 			</div>
// 		);
// 	}
// }

// class Cart extends Component {
// 	 constructor(props){
// 	 	super(props);
// 	 	this.state = {qty:0};
// 	 }

// updateQty=()=>{
// 	this.setState((state)=>(
// 		{qty: state.qty+1})
// )}

//   // static getDerivedStateFromProps(props, state) {
//   //   return {favoritecolor: props.favcol };
//   // }


// // componentDidMount() call after render method  

// componentDidMount(){
// 	console.log('execute after Component render');
// }

// componentDidUpdate(prevProps, prevState){
// 	console.log('Component Updated');
// }
//  	render() {
//  		return(
//  			<div>
//  			<h1>{this.props.date.toLocaleTimeString()}</h1>
//  			<h2>Cart Items {this.state.qty}</h2>
// 			<button onClick={this.updateQty}>update Qty</button>
//  			</div>
//  		);
//  	}
// }

 // export default Product;