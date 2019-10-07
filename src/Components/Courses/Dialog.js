import React, { Component, Fragment } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Form from "./Form"


export default class CreateDialog extends Component {
    state = {
      open: false
    };

    handleToggle = () => {
      this.setState({
        open: !this.state.open
      });
    };

    handleFormSubmit = course => {
      this.handleToggle()
      this.props.onCreate(course)

    }

    render() {
      const { open } = this.state,
            { categories } = this.props; // props in the Header component

      return (
        <Fragment>
          <Button
            variant="fab"
            color="secondary"
            mini
            onClick={this.handleToggle}
          >
            <AddIcon />
          </Button>

          <Dialog
            open={open}
            aria-labelledby="form-dialog-title"
            onClose={this.handleToggle}
            fullWidth
            maxWidth="sm"
          >
            <DialogTitle id="form-dialog-title">
              Create a New Course
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please fill out the form below.
              </DialogContentText>
              <Form
              categories={categories}
              onSubmit={this.handleFormSubmit}
              />
            </DialogContent>
          </Dialog>
        </Fragment>
      );
    }
  }
