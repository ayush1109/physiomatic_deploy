import React from "react";
import { Grid, FormControlLabel, Radio } from "@material-ui/core";
import { Form, Field } from "react-final-form";
import BasicContainer from "../../Container/BasicContainer";
import { ButtonGroup, Button, Slider } from "@material-ui/core";

function Pain() {
  const onSubmit = (formValues) => {
    console.log(formValues);
  };

  const [painData, setPainData] = React.useState({
    c1: {},
    c2: {},
    c3: {},
    c4: {}
  });

  const initialValues = { date: new Date().toISOString().substr(0, 10) };

  return (
      <Form onSubmit={onSubmit} initialValues={initialValues}>
        {({ handleSubmit, form }) => (
          <form onSubmit={handleSubmit} className="ui form">
            <Grid container spacing={1}>
              <Grid item xs>
                <div className="text-center">
                  <div className="item">
                    <label>Date</label>
                    <Field name="date">
                      {({ input, meta }) => <input type="date" {...input} />}
                    </Field>
                  </div>
                  <br />
                  <div className="item">
                    <label>Pain Onset</label>
                    <div className="item">
                      <ButtonGroup color="primary">
                        <Button
                          onClick={() => {
                            setPainData({
                              ...painData,
                              c1: { ...painData.c1, 1: 1 },
                            });
                          }}
                          variant={
                            painData.c1["1"] === 1 ? "contained" : "outlined"
                          }
                        >
                          Gradual
                        </Button>
                        <Button
                          onClick={() => {
                            setPainData({
                              ...painData,
                              c1: { ...painData.c1, 1: 2 },
                            });
                          }}
                          variant={
                            painData.c1["1"] === 2 ? "contained" : "outlined"
                          }
                        >
                          Acute
                        </Button>
                      </ButtonGroup>
                    </div>
                  </div>
                  <br />
                  
                  <div className="item">
                    <label>Trigger Point</label>
                    <Field name="triggerPoint">
                      {({ input, meta }) => <input type="text" {...input} />}
                    </Field>
                  </div>
                  <br />
                  <div className="item">
                    <label>ADLs Restricted</label>
                    <Field name="adlRestricted">
                      {({ input, meta }) => <input type="text" {...input} />}
                    </Field>
                  </div>
                  <br />
                </div>
              </Grid>
              <Grid item xs>
                <div className="text-center">
                  <div className="item">
                    <label>Pain Site </label>
                    <Field name="painSite">
                      {({ input, meta }) => <input type="text" {...input} />}
                    </Field>
                  </div>
                  <br />

                  <div className="item">
                    <label>Pain Duration</label>
                    <div className="item">
                      <ButtonGroup color="primary">
                        <Button
                          onClick={() => {
                            setPainData({
                              ...painData,
                              c2: { ...painData.c2, 1: 1 },
                            });
                          }}
                          variant={
                            painData.c2["1"] === 1 ? "contained" : "outlined"
                          }
                        >
                          Acute
                        </Button>
                        <Button
                          onClick={() => {
                            setPainData({
                              ...painData,
                              c2: { ...painData.c2, 1: 2 },
                            });
                          }}
                          variant={
                            painData.c2["1"] === 2 ? "contained" : "outlined"
                          }
                        >
                          Sub -Acute
                        </Button>
                        <Button
                          onClick={() => {
                            setPainData({
                              ...painData,
                              c2: { ...painData.c2, 1: 3 },
                            });
                          }}
                          variant={
                            painData.c2["1"] === 3 ? "contained" : "outlined"
                          }
                        >
                          Sub -Chronic
                        </Button>
                        <Button
                          onClick={() => {
                            setPainData({
                              ...painData,
                              c2: { ...painData.c2, 1: 4 },
                            });
                          }}
                          variant={
                            painData.c2["1"] === 4 ? "contained" : "outlined"
                          }
                        >
                          Chronic
                        </Button>
                      </ButtonGroup>
                    </div>
                  </div>
                  <br />

                  <div className="item">
                    <label> Aggravating Factor </label>
                    <Field name="aggravatingFactor">
                      {({ input, meta }) => <input type="text" {...input} />}
                    </Field>
                  </div>
                  <br />
                  <div className="item">
                    <label>Diurnal Variation</label>
                    <div className="item">
                      <ButtonGroup color="primary">
                        <Button
                          onClick={() => {
                            setPainData({
                              ...painData,
                              c3: { ...painData.c3, 1: 1 },
                            });
                          }}
                          variant={
                            painData.c3["1"] === 1 ? "contained" : "outlined"
                          }
                        >
                          Morning
                        </Button>
                        <Button
                          onClick={() => {
                            setPainData({
                              ...painData,
                              c3: { ...painData.c3, 1: 2 },
                            });
                          }}
                          variant={
                            painData.c3["1"] === 2 ? "contained" : "outlined"
                          }
                        >
                          Afternoon
                        </Button>
                        <Button
                          onClick={() => {
                            setPainData({
                              ...painData,
                              c3: { ...painData.c3, 1: 3 },
                            });
                          }}
                          variant={
                            painData.c3["1"] === 3 ? "contained" : "outlined"
                          }
                        >
                          Evening
                        </Button>
                        <Button
                          onClick={() => {
                            setPainData({
                              ...painData,
                              c3: { ...painData.c3, 1: 4 },
                            });
                          }}
                          variant={
                            painData.c3["1"] === 4 ? "contained" : "outlined"
                          }
                        >
                          Night
                        </Button>
                        <Button
                          onClick={() => {
                            setPainData({
                              ...painData,
                              c3: { ...painData.c3, 1: 5 },
                            });
                          }}
                          variant={
                            painData.c3["1"] === 5 ? "contained" : "outlined"
                          }
                        >
                          No specific
                        </Button>
                      </ButtonGroup>
                    </div>
                  </div>
                  <br />
                </div>
              </Grid>
              <Grid item xs>
                <div className="text-center">
                  <div className="item">
                    <label>Pain Intensity</label>
                    <Field name="painIntensity">
                      {({ input, meta }) => (
                        <Slider
                        defaultValue={5}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={1}
                        max={10}
                      />
                      )}
                    </Field>
                  </div>
                  <br />
                  <div className="item">
                    <label> Nature Of Pain </label>
                    <div className="item">
                      <ButtonGroup color="primary">
                        <Button
                          onClick={() => {
                            setPainData({
                              ...painData,
                              c4: { ...painData.c4, 1: 1 },
                            });
                          }}
                          variant={
                            painData.c4["1"] === 1 ? "contained" : "outlined"
                          }
                        >
                          Inflammatory 
                        </Button>
                        <Button
                          onClick={() => {
                            setPainData({
                              ...painData,
                              c4: { ...painData.c4, 1: 2 },
                            });
                          }}
                          variant={
                            painData.c4["1"] === 2 ? "contained" : "outlined"
                          }
                        >
                          Neuropathic 
                        </Button>
                        <Button
                          onClick={() => {
                            setPainData({
                              ...painData,
                              c4: { ...painData.c4, 1: 3 },
                            });
                          }}
                          variant={
                            painData.c4["1"] === 3 ? "contained" : "outlined"
                          }
                        >
                          Functional 
                        </Button>
                      </ButtonGroup>
                    </div>
                  </div>
                  <br />
                  
                  <div className="item">
                    <label>Relieving Factor </label>
                    <Field name="relievingFactor">
                      {({ input, meta }) => <input type="text" {...input} />}
                    </Field>
                  </div>
                  <br />
                </div>
              </Grid>
            </Grid>
            <br />
            <br />
            <div style={{ textAlign: "center" }}>
              <button
                // disabled={!_.isEmpty(errors) || submitting}
                className="ui primary button"
              >
                Save
              </button>
              <button
                // disabled={!_.isEmpty(errors) || submitting}
                className="ui button"
                type="reset"
                // onClick={form.reset}
              >
                Discard
              </button>
            </div>
          </form>
        )}
      </Form>
  );
}

export default Pain;
