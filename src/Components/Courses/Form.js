import React, { Component } from "react";

import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  DialogActions,
  Button
} from "@material-ui/core";

import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  formControl: {
    width: 500
  }
});

export default withStyles(styles) (class Form extends Component {
  state = this.getInitialCourseState()

  getInitialCourseState() {
    const { course } = this.props
    return course ? course : {
      title: "",
      description: "",
      categories: ""
    }
  }

  componentWillReceiveProps({ course }) {
    this.setState({
      ...course
    })

  }

  handleChange = name => ({ target: { value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleSubmit = () => {
    this.props.onSubmit({
      id: this.state.title.toLowerCase().replace(/ /g, "-"),
      ...this.state
    });
    this.setState(this.getInitialCourseState());
  };
  render() {
    const { title, description, categories } = this.state,
          { course, classes, categories: categoriesInProps } = this.props;
    

    return (
      <form>
        <TextField
          label="Title"
          value={title}
          onChange={this.handleChange("title")}
          margin="normal"
          className={classes.formControl}
        />
        <br />
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="categories">Categories</InputLabel>
          <Select value={categories} onChange={this.handleChange("categories")}>
            {categoriesInProps.map(category => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <br />
        <TextField
          multiline
          rows="4"
          label="Description"
          value={description}
          onChange={this.handleChange("description")}
          margin="normal"
          className={classes.formControl}
        />
        <br />
        <DialogActions>
          <Button color="primary" variant="raised" onClick={this.handleSubmit}>
            {course ? 'Edit' : 'Create'}
          </Button>
        </DialogActions>
      </form>
    );
  }
}
);
