import { TextField } from "@mui/material";

const Input = ({ label, ...props }) => {
  return (
    <div style={{ margin: "20px 0px" }}>
      {/* <label>{label}</label> */}
      {/* <input style={{padding:"2px"}}  /> */}
      <TextField
        label={label}
        size="small"
        sx={{ width: "100%" }}
        {...props}
        variant="outlined"
      />
    </div>
  );
};

export default Input;
