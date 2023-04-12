import { Box, Button, Heading, Input } from "@chakra-ui/react";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import ListGoals from "./ListGoals";
function Create() {
  const [goal, setGoal] = useState("");
  const inputRef = useRef<any>(null);
  const addGoal = async (e: any) => {
    e.preventDefault();
    axios.post("http://localhost:3000/create", { goal: goal }).then((res) => {
      console.log(res.status);
      setGoal(" ");
    });
  };
  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <Box display={"flex"} justifyContent={"center"} marginTop={"10%"}>
      <Box
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
        alignItems={"center"}
        backgroundColor={"blackAlpha.300"}
        w={"600px"}
        padding={"10px"}
      >
        <Heading>Enter your targets</Heading>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={"row"}
          w={"400px"}
          margin={"5px"}
        >
          <Input
            ref={inputRef}
            display={"block"}
            type={"goal"}
            placeholder={"Enter Your Goal"}
            w={"300px"}
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          />
          <Button onClick={addGoal} type="submit">
            submit
          </Button>
        </Box>
        <ListGoals />
      </Box>
    </Box>
  );
}

export default Create;
