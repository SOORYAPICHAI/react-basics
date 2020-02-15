import React from "react";
import { TextField, Grid, Button } from "@material-ui/core";
import { Personal_details_form } from "components/errorMessages/index";
import { useStyles } from "styles/formFunctionalComponent";
export const Personal_details = props => {
  // STATE    ***STARTS***

  const [error, setError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [value, setValue] = React.useState({
    name: "",
    role: "",
    mobile: ""
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

  // STYLES ***STARTS***
  const classes = useStyles();
  // STYLES ***ENDS***
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <form
          action="javascript:void(0)"
          onSubmit={e => {
            handleSubmit(e);
          }}
        >
          <Grid container item xs={12}>
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
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
            >
              <Grid
                container
                justify="space-around"
                item
                xs={4}
                className={classes.form_button}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  disabled
                >
                  Edit
                </Button>
                <Button variant="contained" color="secondary" type="submit">
                  Add
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};
