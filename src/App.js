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
      course: courses.find(ex => ex.id === id),
      editMode: false
    }));
  };

  handleCourseCreate = course => {
    this.setState(({ courses }) => ({
      courses: [...courses, course]
    }));
  };

  handleCourseDelete = id => {
    this.setState(({ courses }) => ({
      courses: courses.filter(course => course.id !== id),
      editMode: false,
      course: {}
    }))
  }

  handleSelectCourseEdit = id => {
    this.setState(({ courses }) => ({
      course: courses.find(ex => ex.id === id),
      editMode: true,
    }));
  }

  handleCourseEdit = course => {
    this.setState(({ courses }) => ({
      courses: [
        ...courses.filter(crs => crs.id !== course.id),
        course
      ],
      course,
    }))
  }

  render() {
    const courses = this.getCoursesByCategory();
    const { category, course, editMode } = this.state;
    return (
      <Fragment>
        <Header
          categories={categories}
          onCourseCreate={this.handleCourseCreate}
        />
        <Courses
          courses={courses}
          editMode={editMode}
          category={category}
          // categories from the store
          categories={categories}
          onSelect={this.handleCourseSelect}
          course={course}
          onCourseDelete={this.handleCourseDelete}
          onCourseEdit={this.handleSelectCourseEdit}
          onEdit={this.handleCourseEdit}
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
