import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Components/Layouts";
import Courses from "./Components/Courses";
import { categories, courses } from "./store"

class App extends Component {
  state = {
    courses,
    category: 'engineering'
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

  handleCategorySelected = (category) => {
    this.setState({
      category
    })

  }

  render() {
    console.log(this.getCoursesByCategory());
    const courses = this.getCoursesByCategory();
    const { category } = this.state;
    return (
      <Fragment>
        <Header />
        <h4>Hi from React</h4>
        <Courses courses={courses} category={category}/>
        <Footer category={category} categories={categories} onSelect={this.handleCategorySelected}/>
      </Fragment>
    );
  }
}

export default App;
