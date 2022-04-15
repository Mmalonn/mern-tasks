import React, {Component} from "react";
import  {render}  from "react";

class APP extends Component{
    render(){
        return(
            <h1>Hello</h1>
        )
    }
}

render(<App/>, document.getElementById("app"));