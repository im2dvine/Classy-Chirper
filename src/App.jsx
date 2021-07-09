// import React, { useState } from 'react';

// const App = () => {
//     const [username, setUsername] = useState();
//     const [chirps, setChirps] = useState();
//     const [chirpArr, setChirpArr] = useState([
//         {
//             username: "Harley Quinn",
//             message: "Mr! J! *heart eyes*",
//         },
//         {
//             username: "Joker",
//             message: "Why so serious?",
//         },
//         {
//             username: "Bruce Wayne",
//             message: "I AM BATMAN!!",
//         },
//     ]);



//     const submitChirp = () => {
//         let newChirp = {
//             username: username,
//             message: chirps,
//         };

//         setChirpArr([...chirpArr, newChirp]);
//     };


//     return (
//         <>
//             <div id="main-container">
//                 <div id="container">
//                     <div id="chirp-body display flex">
//                         <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="username"></input>
//                         <input onChange={(e) => setChirps(e.target.value)} type="text" placeholder="What To Chirp?"></input>
//                         <button onClick={submitChirp} className="btn-success"> Chirp It! </button>
//                     </div>
//                 </div>
//                 <div className="container-body">
//                 <div className="chirps card-body">
//                     {chirpArr.map((chirp) => {
//                         return (
//                             <div className="border border-success rounded text-center" key={chirp.id}>
//                                 <h3>@{chirp.username}</h3>
//                                 <p>{chirp.message}</p>
//                             </div>
//                         )
//                     })}
//                 </div>
//                 </div>
//             </div>
//         </>
//     );
// };






// export default App;


/*Classy Chirper*/

// import React from 'react';

// // inherit features by extending React's component class
// class App extends React.Component {
//     // constructor makes sure to build this.props for us
//     // and it works the same was as you're used to
//     constructor(props) {
//         super(props);
//         // unlike useState, in a class *ALL* state is in *ONE* object
//         this.state = {
//             email: '',
//             password: ''
//         };
//     }

//     // class methods will act as your utility functions
//     handleLogin(e) {
//         e.preventDefault();
//         console.log('Loggin in as:');
//         console.log(this.state);
//         // the inherited method `this.setState` is the state setter function you always use
//         this.setState({ email: '', password: '' });
//     }

//     // insted of just a return statement, we place our JSX return into the render method
//     render() {
//         return (
//             <form>
//                 <input
//                     // same attributes for a controlled react input
//                     // everything will start with `this.` in a class
//                     value={this.state.email}
//                     onChange={e => this.setState({ email: e.target.value })}
//                 />
//                 <input
//                     value={this.state.password}
//                     onChange={e => this.setState({ password: e.target.value })}
//                 />
//                 <button onClick={e => this.handleLogin(e)}>Login</button>
//             </form>
//         );
//     }
// }

// export default App;





// import React, { useState } from "react";
import React from "react";
import ChirpCard from "./components/ChirpCard";
import { v4 as uuidv4 } from "uuid";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            message: "",
            todos: [
                { id: uuidv4(), username: "Harley Quinn", message: "Mr! J! *heart eyes*" },
                { id: uuidv4(), username: "Joker", message: "Why so serious?" },
                { id: uuidv4(), username: "Bruce Wayne", message: "I AM BATMAN!" },
            ],
        };
    }


    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            username: "",
            todos: [
                ...this.state.todos,
                { id: uuidv4(), username: this.state.username },
            ]
        });
    }

    render() {
        return (
            <main className="container display-flex">
                <section className="row justify-content-center mt-5">
                    <div className="col-md-7">
                        <form className="form-group">
                            {/* <label> username and message </label> */}
                            <input
                                value={this.state.username}
                                placeholder="username"
                                onChange={(e) => this.setState({ username: e.target.value })}
                            />
                            <input
                                value={this.state.message}
                                placeholder="message"
                                onChange={(e) => this.setState({ message: e.target.value })}
                            />
                            <button
                                onClick={(e) => this.handleSubmit(e)}
                                className="btn btn-success">{" "}Chirp it!{" "}
                            </button>
                            <section className="row justify-content-center mt-3">
                                <div className="col-md-6">
                                    <div className="chirp-group">
                                        {this.state.todos.map((todo) => (
                                            <ChirpCard key={`todo-username-${todo.id}`} todo={todo} />
                                        ))}
                                    </div>
                                </div>
                            </section>
                        </form>
                    </div>
                </section>
            </main>
        );
    }
}

export default App;