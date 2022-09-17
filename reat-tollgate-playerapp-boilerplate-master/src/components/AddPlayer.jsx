import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import { Grid, Checkbox, Button } from "@mui/material";
import { useFormik } from "formik";
import services from "../services/service";

export class AddPlayer extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);

    // this.formData=this.formData.bind(this)
    this.state = {
      playerName: "",
      playerCountry: "",
      totalMatches: "",
    };
  }
  // formData = useFormik({
  //     initialValues: {
  //         playerName:"",
  //         playerCountry:"",
  //         totalMatches:""

  //     },
  //     // validationSchema: formDataSchema,
  //     onSubmit: (values) => {
  //       this.formData.handleReset();

  //       console.log(values);
  //     },
  //   });

  handleChange(e) {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
    // console.log(this.state);
  }
  async submitHandler(e) {
    e.preventDefault();
    if (this.state.playerName == "") {
      console.error("fill the player name");
    } else if (this.state.playerCountry == "") {
      console.error("fill the player Country");
    } else if (this.state.totalMatches == "") {
      console.error("fill the total matches");
    } else {
      services.postData(this.state);
      console.log(this.state);
      this.setState({
        playerName: "",
        playerCountry: "",
        totalMatches: "",
      });
    }
  }

  render() {
    return (
      <form
        style={{
          maxWidth: "600px",
          boxShadow: "0px 0px 5px gray",
          margin: "10px auto",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <Grid item xs={12} sx={{ display: "flex", margin: "10px" }}>
          <TextField
            sx={{ flexGrow: 1 }}
            required
            id="standard-required"
            name="playerName"
            label="Player Name"
            variant="standard"
            size="small"
            value={this.state.playerName}
            onChange={this.handleChange}

            // error={
            //   formData.touched.AddressLine1 &&
            //   Boolean(formData.errors.AddressLine1)
            // }
            // helperText={
            //   formData.touched.AddressLine1 && formData.errors.AddressLine1
            // }
          />
        </Grid>

        <Grid item xs={12} sx={{ display: "flex", margin: "10px" }}>
          <TextField
            sx={{ flexGrow: 1 }}
            required
            id="standard-required"
            name="playerCountry"
            label="Player Country"
            variant="standard"
            size="small"
            value={this.state.playerCountry}
            onChange={this.handleChange}

            // error={
            //   formData.touched.AddressLine1 &&
            //   Boolean(formData.errors.AddressLine1)
            // }
            // helperText={
            //   formData.touched.AddressLine1 && formData.errors.AddressLine1
            // }
          />
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", margin: "10px" }}>
          <TextField
            sx={{ flexGrow: 1 }}
            id="standard-required"
            name="totalMatches"
            label="Total mataches played"
            variant="standard"
            size="small"
            value={this.state.totalMatches}
            onChange={this.handleChange}
            type="number"
            required

            // error={
            //   formData.touched.AddressLine1 &&
            //   Boolean(formData.errors.AddressLine1)
            // }
            // helperText={
            //   formData.touched.AddressLine1 && formData.errors.AddressLine1
            // }
          />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "end", marginTop: "10px" }}
        >
          <Button variant="contained" size="large" onClick={this.submitHandler}>
            Save
          </Button>
        </Grid>
      </form>
    );
  }
}

export default AddPlayer;
