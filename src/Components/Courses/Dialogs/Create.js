import React, { Component, Fragment } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  formControl: {
    width: 500
  }
});

export default withStyles(styles)(
  class CreateDialog extends Component {
    state = {
      open: false,
      course: {
        title: "",
        description: "",
        categories: ""
      }
    };

    handleToggle = () => {
      this.setState({
        open: !this.state.open
      });
    };

    handleChange = name => ({ target: { value } }) => {
      this.setState({
        course: {
          ...this.state.course,
          [name]: value
        }
      });
    };

    handleSubmit = () => {
      const { course } = this.state
      this.props.onCreate({
        ...course,
        id: course.title.toLowerCase().replace(/ /g, '-')
      })
      this.setState({
        open: false,
        course: {
          title: "",
          description: "",
          categories: ""
        }
      })
    }

    render() {
      const {
          open,
          course: { title, description, categories }
        } = this.state,
        { classes, categories: categoriesInProps } = this.props;

      return (
        <Fragment>
          <Button
            variant="fab"
            color="primary"
            mini
            onClick={this.handleToggle}
          >
            <AddIcon />
          </Button>

          <Dialog
            open={open}
            aria-labelledby="form-dialog-title"
            onClose={this.handleToggle}
          >
            <DialogTitle id="form-dialog-title">
              Create a New Course
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please fill out the form below.
              </DialogContentText>
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
                  <Select
                    value={categories}
                    onChange={this.handleChange("categories")}
                  >
                    {categoriesInProps.map(category => (
                      <MenuItem key={category} value={category}>{category}</MenuItem>
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
              </form>
            </DialogContent>
            <DialogActions>
              <Button
              color="primary"
              variant="raised"
              onClick={this.handleSubmit}
              >
                Create
              </Button>
            </DialogActions>
          </Dialog>
        </Fragment>
      );
    }
  }
);
