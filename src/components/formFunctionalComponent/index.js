import React from "react";
import { TextField, Grid, Button } from "@material-ui/core";
import { Personal_details_form } from "components/ErrorMessages/index";

export const Personal_details = props => {
  // STATE    ***STARTS***

  const [error, setError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [value, setValue] = React.useState({
    name: null,
    role: null,
    mobile: null
  });

  // STATE    ***ENDS***

  //   -----------------------

  // COMMON FUNCTIONS   ***STARTS***

  const handleEmptyFields = e => {
    if (e.target.value) {
      setError(true);
      setErrorMessage(Personal_details_form.Message.Required);
    } else {
      setError(false);
      setErrorMessage(null);
    }
  };

  // COMMON FUNCTIONS   ***ENDS***

  //   -------------------

  // HANDLING FUNCTIONS ***STARTS***

  const handleSubmit = e => {
    handleEmptyFields(e);
  };

  const handleChange = e => {
    setValue({ ...value, [e.target.name]: e.target.value });
    handleEmptyFields(e);
  };

  // HANDLING FUNCTIONS ***ENDS***

  //   -----------------------

  return (
    <form
      action="javascript:void(0)"
      onSubmit={e => {
        handleSubmit(e);
      }}
    >
      <Grid container xs={12}>
        <Grid item xs={12}>
          <TextField
            error={error}
            id="standard-error-helper-text"
            label="Name"
            name="name"
            value={value.name}
            helperText={errorMessage}
            onChange={e => {
              handleChange(e);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            error={error}
            id="standard-error-helper-text"
            label="Role"
            name="role"
            value={value.role}
            helperText={errorMessage}
            onChange={e => {
              handleChange(e);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            error={error}
            id="standard-error-helper-text"
            label="Mobile"
            name="mobile"
            value={value.mobile}
            helperText={errorMessage}
            onChange={e => {
              handleChange(e);
            }}
          />
        </Grid>
        <Grid container item xs={12}>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              disabled
            >
              Edit
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" color="secondary" type="submit">
              Add
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};
