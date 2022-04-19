import React, { Component } from "react";

class SecondContent extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: this.props.pageTitle,
            count: this.props.numTopics
        }
    }
    // componentDidMount(){
    //     fetch("http://www.localhost:3000")
    //     .then(res=>res.json())
    //     .then((result) => {
    //         this.setState({count: this.state.count + 1});
    //     })
    // }
    add(x=1,y=2){
        return x+y;
    }
    onClick = ()=>{
        console.log(this.add());
        this.setState({count: this.state.count + 1});
    }
    changeCount = (e) => {
        
        this.setState({[e.target.name]: Number(e.target.value)});
    }
    render() {
        const {count} = this.state;
        const {count: firstname}= this.state;

        return (
            <secondcontent>
                <br></br>This is the Second Content
                <h2>{this.state.title}</h2>
                <p>Number of Topics: {this.state.count }</p>
                <input name="count" value={count} onChange={this.changeCount}/>
                <button onClick={this.onClick}>Increase count</button>
            </secondcontent>
        )
    }
}

export default SecondContent;