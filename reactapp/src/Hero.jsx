import { Component } from "react";

class Hero extends Component{
       constructor(props){
        super(props);
          this.state = {
               name : "syed samad ali",
               age : 20
          }
       }
    render(){
              return <>
              <h1>hello {this.state.name}</h1>
              <h2>Age : {this.state.age}</h2>
                <button onClick={()=>{
                     this.setState({
                        age :  this.state.age+1
                    })
                }}>Logout</button>
              </>
        
    }
}

export default Hero;




