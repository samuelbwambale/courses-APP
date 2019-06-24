import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Components/Layouts";
import Courses from "./Components/Courses";
import { categories, courses } from "./store"

class App extends Component {
  state = {
    courses
  };

  getCoursesByCategory = () => {
    return Object.entries(this.state.courses.reduce((courses, course) => {
      const { categories } = course;

      courses[categories] = courses[categories]
        ? [...courses[categories], course]
        : [course]
      
        return courses;
    }, {}));
  }

  render() {
    console.log(this.getCoursesByCategory());
    const courses = this.getCoursesByCategory();
    return (
      <Fragment>
        <Header />
        <h4>Hi from React</h4>
        <Courses courses={courses}/>
        <Footer categories={categories}/>
      </Fragment>
    );
  }
}

export default App;
