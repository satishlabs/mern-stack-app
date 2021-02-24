
import './App.css';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CourseList from './CourseList';

class App extends Component{
  render(){
    return(
      <div>
        <h1 className="text-center">Course App Store!</h1>
        <br />
        <CourseList />
      </div>
    );
  }
}
export default App;
