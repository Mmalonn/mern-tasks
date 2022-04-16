import React, {Component} from "react";


class App extends Component{

    constructor(){
        super();
        this.state={
            title:"",
            description:""
        }
        this.handleChange=this.handleChange.bind(this);
        this.addTask=this.addTask.bind(this);
    }

    addTask(e){
        e.preventDefault();
        console.log(this.state);

    }

    handleChange(e){
        const {name,value}=e.target;
        console.log(name,value)
        this.setState({
            [name]:value
        })
    }

    render(){
        return(
            <div>
                {/*navigation */}
                <nav className ="light-blue darken-4">
                    <div className ="container">
                        <a className="brand-logo" href="/">MERN Stack</a>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col s5">
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={this.addTask}>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input name="title" onChange={this.handleChange} type="text" placeholder="Task Title">
                                                </input>
                                            </div>
                                            <div className="input-field col s12">
                                                <textarea name="description" onChange={this.handleChange} placeholder="Task description" className="materialize-textarea">
                                                </textarea>
                                            </div>
                                            <button type="submit" className="btn light-blue darken-4">Send</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col s7">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;