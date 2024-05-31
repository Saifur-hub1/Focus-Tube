import React from "react";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";

const MyComponent = () => {
  const handleClick = () => {
    console.log("Add button clicked!");
    // Add your custom action here
  };

  return (
    <Tooltip title="Add">
      <IconButton color="primary" onClick={handleClick}>
        <AddIcon />
      </IconButton>
    </Tooltip>
  );
};

export default MyComponent;
