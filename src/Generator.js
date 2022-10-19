import * as React from "react";
import _DISPLAY_TYPES from "./DisplayValue";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Switch from "@mui/material/Switch";
import Data from "./data";
import "./App.css";

const label = { inputProps: { "aria-label": "Switch demo" } };
var fieldType = _DISPLAY_TYPES;
var tp = "text";

//list data
const countries = [
  { code: "AD", label: "Andorra", phone: "376" },
  {
    code: "AE",
    label: "United Arab Emirates",
    phone: "971",
  },
];

function Generator({ num }) {
  return (
    <>
      <div className="form form-horizontal">
        {Object.entries(Data).map((item, i) => (
          <div key={i} className="row rowx">
            <div className="input">
              <label>
                {num === 1 ? item[1].name : item[1].langs.ar_EG.name}
              </label>

              {/* Know the type of field */}
              {Object.entries(fieldType).map(function(it) {
                if (it[1] === item[1].displayType) {
                  tp = it[0].toLowerCase();
                  console.log(tp);
                }
                return '';
            })}

              {/* Check type of field */}
              {item[1].displayType === 16 ? (
                <TextField
                  id="datetime-local"
                  label=""
                  className="input "
                  type="datetime-local"
                  defaultValue="2017-05-24T10:30"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              ) : item[1].displayType === 20 ? (
                <Switch {...label} className="input" />
              ) : item[1].displayType === 19 ? (
                <Autocomplete
                  id={item[1].ad_Column_ID}
                  className="input "
                  options={countries}
                  autoHighlight
                  getOptionLabel={(option) => option.label}
                  readOnly={item[1].isReadOnly}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      className="input "
                      label={item[1].name}
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "new-password", // disable autocomplete and autofill
                      }}
                    />
                  )}
                />
              ) : (
                <div className="inputData">
                  <input
                    id={item[1].ad_Column_ID}
                    type={tp}
                    readOnly={item[1].isReadOnly}
                    name={item[1].name}
                    className="input"
                  ></input>
                  {item[1].isMandatory && (
                    <i className="fa fa-asterisk" aria-hidden="true"></i>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Generator;
