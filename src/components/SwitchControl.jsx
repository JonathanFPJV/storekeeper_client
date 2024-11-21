import React, { useState } from "react";
import { Switch, Typography } from "@mui/material";

const SwitchControl = () => {
  const [isOn, setIsOn] = useState(false);

  const handleChange = () => setIsOn(!isOn);

  return (
    <div>
      <Typography variant="h6">{isOn ? "Sistema Activo" : "Sistema Inactivo"}</Typography>
      <Switch checked={isOn} onChange={handleChange} />
    </div>
  );
};

export default SwitchControl;
