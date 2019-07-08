import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Components/Layouts";
import Courses from "./Components/Courses";
import { categories, courses } from "./store";

class App extends Component {
  state = {
    courses,
    course: {},
    category: ""
  };

  getCoursesByCategory = () => {
    return Object.entries(
      this.state.courses.reduce((courses, course) => {
        const { categories } = course;

        courses[categories] = courses[categories]
          ? [...courses[categories], course]
          : [course];

        return courses;
      }, {})
    );
  };

  handleCategorySelected = category => {
    this.setState({
      category
    });
  };

  handleCourseCourseSelected = id => {
    this.setState(({ courses }) => ({
      course: courses.find(ex => ex.id === id)
    }));
  };

  handleCourseCreate = course => {
    this.setState(({ courses }) => ({
      courses: [
        ...courses,
        course
      ]
    }))

  }

  render() {
    const courses = this.getCoursesByCategory();
    const { category, course } = this.state;
    return (
      <Fragment>
        <Header
        categories={categories}
        onCourseCreate={this.handleCourseCreate}
        
        />
        <h4>Hi from React</h4>
        <Courses
          courses={courses}
          category={category}
          onSelect={this.handleCourseCourseSelected}
          course={course}
        />
        <Footer
          category={category}
          categories={categories}
          onSelect={this.handleCategorySelected}
        />
      </Fragment>
    );
  }
}

export default App;
