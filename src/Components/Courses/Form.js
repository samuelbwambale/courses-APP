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

export default withStyles(styles)(
  class Form extends Component {
    state = this.getInitialCourseState();

    getInitialCourseState() {
      const { course } = this.props;
      return course
        ? course
        : {
            title: "",
            description: "",
            categories: ""
          };
    }

    componentWillReceiveProps({ course }) {
      this.setState({
        ...course
      });
    }

    handleChange = name => ({ target: { value } }) => {
      this.setState({
        [name]: value
      });
    };

    capitalizeFirstLetter = str => {
      return str.charAt(0).toUpperCase() + 
      str.slice(1);
    }

    handleSubmit = () => {
      this.props.onSubmit({
        id: this.state.title.toLowerCase().replace(/ /g, "-"),
        ...this.state
      });
      this.setState(this.getInitialCourseState());
    };

    canBeSubmitted() {
      const {title, description, categories} = this.state
      return title.length > 0 && description.length && categories.length 
    }

    render() {
      const { title, description, categories } = this.state,
        { course, classes, categories: categoriesInProps } = this.props;

      return (
        <form>
          <div>
            <TextField
              label="Title"
              value={title}
              onChange={this.handleChange("title")}
              margin="normal"
              // className={classes.formControl}
              variant="outlined"
              autoFocus
              fullWidth
            />
            <br />

            <TextField
              multiline
              rows="4"
              label="Description"
              value={description}
              onChange={this.handleChange("description")}
              margin="normal"
              // className={classes.formControl}
              variant="outlined"
              fullWidth
            />
            <br />

            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="categories">Categories</InputLabel>
              <Select
                value={categories}
                onChange={this.handleChange("categories")}
                margin="normal"
              >
                {categoriesInProps.map(category => (
                  <MenuItem key={category} value={category}>
                    {this.capitalizeFirstLetter(category)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <br />

            <DialogActions>
              <Button

                color="secondary"
                variant="raised"
                onClick={this.handleSubmit}
                disabled={!this.canBeSubmitted()}
              >
                {course ? "Edit" : "Create"}
              </Button>
            </DialogActions>
          </div>
        </form>
      );
    }
  }
);
