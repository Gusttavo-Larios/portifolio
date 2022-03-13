import React from "react";
import { Button } from "./styles";

function ButtonMedia({ icon, label, link }) {
  return (
    <a href={link}>
      <Button>
        <img src={icon} alt={label} />
        {label}
      </Button>
    </a>
  );
}

export default ButtonMedia;
