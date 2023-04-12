import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
function DeleteGoal(props: any) {
  const id: string = props.id;

  const clickDelete = (id: string) => {
    axios.delete(`http://localhost:3000/${id}`);
  };
  return (
    <DeleteIcon cursor={"pointer"} onClick={() => clickDelete(id)}></DeleteIcon>
  );
}

export default React.memo(DeleteGoal);
