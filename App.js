import logo from './logo.svg';
import './App.css';
import React from 'react'


import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Message from './Components/Message'
import Counter from './Components/Counter'
import FunctionClick from './Components/FunctionClick';
import ClassClick from  './Components/ClassClick'
import EventBinding from './Components/EventBinding';
import ParentComponent from './Components/ParenTComponent';
import ConditionalRendering from './Components/ConditionalRendering'
import NameList from './Components/NameList';
import StyleSheets from './Components/StyleSheets'
import Inline from './Components/Inline';
import './appStyles.css'
import Form from './Components/Form'
import  styles from'./appStyles.modules.css'
import LifeCycleA from './Components/LifeCycleA';
import LifeCycleB from './Components/LifeCycleB';
import LifeCycleC from './Components/LifeCycleC';
import FragmentDemo from './Components/FragmentsDemo'
import Table from './Components/Table';
import ParentComp from './Components/ParentComp'
import RefsDemo from './Components/RefsDemo';
import Forms1 from './Components/Forms1';
import TodoList from './Components/TodoList';
import First from './Components/First'
import Calculator from './Components/Calculator';

function App() {
  return (
    <div className="App">
      <Calculator/>
      {/* <TodoList/> */}
      {/* <First /> */}
      {/* <RefsDemo/> */}
      {/* <ParentComp/> */}
      {/* <Table/> */}
      {/* <FragmentDemo/> */}
      {/* <LifeCycleC/> */}
      {/* <LifeCycleA/> */}
      {/* <Form/> */}
      {/* <Forms1 /> */}
      {/* <TodoList/> */}
      
      {/* <h1 className="error">error</h1>
      <h1 className={styles.success}>success</h1>
       <StyleSheets/> */}
      {/* <Inline/>  */}
      {/* <NameList/> */}
      {/* <ConditionalRendering/> */}
       {/* <ParentComponent/> */}
      {/* <EventBinding/> */}
      {/* <FunctionClick/>
      <ClassClick/> */}
      {/* <h1>Hello world</h1> */}
      {/* <Greet sources="Hyderabad" destination="Nellore">
        <p>Via ONGole and Kavali</p>
      </Greet>
      <Greet sources="Hyderabad" destination="visakhapatnam">
        <button>Search Tickets</button>
      </Greet>
      <Greet sources="Hyderabad" destination="Vijayawada"/>
       <Welcome  name ="Jashu" lastName ="Devireddy">
         <button>Family</button>
         </Welcome>
      <Welcome name ="Ajay" lastName="Devireddy"/>
      <Welcome name="Bhavana" lastName="Devireddy"/>   */}
      {/* <Message/> */}
      {/* <Counter/> */}
    </div>
  )
}

export default App;
