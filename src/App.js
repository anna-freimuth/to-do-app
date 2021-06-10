import React from "react";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
    return (
        <div className="container pt-4">
            <h2 className="text-center">To Do List Application</h2>
            <section id="form">
                <Form/>
            </section>
            <section id="list-wrapper">
               <ToDoList />
            </section>
        </div>
    );
}

export default App;
