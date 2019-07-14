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
    const initialCourses = categories.reduce((courses, category) => ({
      ...courses,
      [category]: []
    }), {})
    console.log('>>>>>', courses, initialCourses)
    return Object.entries(
      this.state.courses.reduce((courses, course) => {
        const { categories } = course;

        courses[categories] = [...courses[categories], course]

        return courses;
      }, initialCourses)
    );
  };

  handleCategorySelect = category => {
    this.setState({
      category
    });
  };

  handleCourseSelect = id => {
    this.setState(({ courses }) => ({
      course: courses.find(ex => ex.id === id)
    }));
  };

  handleCourseCreate = course => {
    this.setState(({ courses }) => ({
      courses: [...courses, course]
    }));
  };

  handleCourseDelete = id => {
    this.setState(({ courses }) => ({
      courses: courses.filter(course => course.id !== id)
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
        <Courses
          courses={courses}
          category={category}
          onSelect={this.handleCourseSelect}
          course={course}
          onCourseDelete={this.handleCourseDelete}
        />
        <Footer
          category={category}
          categories={categories}
          onSelect={this.handleCategorySelect}
        />
      </Fragment>
    );
  }
}

export default App;
