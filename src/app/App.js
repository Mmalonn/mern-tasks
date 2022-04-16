import React, {Component} from "react";


class App extends Component{

    constructor(){
        super();
        this.state={
            title:"",
            description:"",
            tasks:[]
        }
        this.handleChange=this.handleChange.bind(this);
        this.addTask=this.addTask.bind(this);
    }

    addTask(e){
        e.preventDefault();
        fetch("/api/tasks",{
            method:"POST",
            body:JSON.stringify(this.state),
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            }
        })
        .then(res=>res.json())
        .then(data=>{
            M.toast({html:"Task Saved"})
            this.setState({title:"",description:""})
            this.fetchTasks();
        })
        .catch(err=>console.log(err)) 
    }

    componentDidMount(){
        this.fetchTasks();
    }

    fetchTasks(){
        fetch("/api/tasks")
            .then(res=>res.json())
            .then(data=>{
                this.setState({tasks:data});
                console.log(this.state.tasks)
            })
            .catch(err=>console.log(err))
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
                                                <input value={this.state.title} name="title" onChange={this.handleChange} type="text" placeholder="Task Title">
                                                </input>
                                            </div>
                                            <div className="input-field col s12">
                                                <textarea value={this.state.description} name="description" onChange={this.handleChange} placeholder="Task description" className="materialize-textarea">
                                                </textarea>
                                            </div>
                                            <button type="submit" className="btn light-blue darken-4">Send</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col s7">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.tasks.map(task=>{
                                            return(
                                                <tr key={task._id}>
                                                    <td>{task.title}</td>
                                                    <td>{task.description}</td>
                                                    <td>
                                                        <button className="btn light-blue darken-4">
                                                            <i className="material-icons">edit</i>
                                                        </button>
                                                        <button className="btn light-blue darken-4" style={{margin:"4px"}}>
                                                            <i className="material-icons" >delete</i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )         
                                         })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;