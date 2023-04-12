import {
  Box,
  Button,
  Input,
  Card,
  Text,
  StackDivider,
  Stack,
  Heading,
  CardBody,
  CardHeader,
  HStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { EditIcon, CloseIcon, CheckIcon } from "@chakra-ui/icons";
import DeleteGoal from "./DeleteGoal";
import { Link, useParams, useNavigate } from "react-router-dom";

interface data {
  goal: string;
  _id: string;
}
function Edit() {
  const [goal, setGoal] = useState("");
  const [newGoal, setNewGoal] = useState("");
  const [goals, setgoals] = useState<data[]>([{ goal: "", _id: "" }]);
  const { _id } = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:3000").then((res) => {
      setgoals(res.data);
    });
  }, [goals]);

  const addGoal = async (e: any) => {
    e.preventDefault();
    axios.post("http://localhost:3000/create", { goal: goal }).then((res) => {
      console.log(res.status);
      setGoal("");
    });
    setGoal("");
  };

  const clickUpdate = (e: any) => {
    axios.put(`http://localhost:3000/update/${_id}`, { goal: newGoal });
    navigate("/");
  };

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
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={"row"}
          w={"400px"}
          margin={"5px"}
        >
          <Input
            display={"block"}
            type={"goal"}
            placeholder={"Enter Your Goal"}
            w={"300px"}
            onChange={(e) => setGoal(e.target.value)}
          />
          <Button onClick={addGoal} type="submit">
            submit
          </Button>
        </Box>
        <Card w={"300px"}>
          <CardHeader>
            <Heading size="md">List</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing="2">
              {goals.map((e) => {
                if (e._id === _id) {
                  return (
                    <HStack key={e._id} justifyContent={"space-between"}>
                      <HStack>
                        <Input
                          // ref={inputRef}
                          type={"text"}
                          placeholder={e.goal}
                          onChange={(e) => setNewGoal(e.target.value)}
                          w={"180px"}
                          name={"goal"}
                        />
                      </HStack>
                      <CheckIcon
                        onClick={clickUpdate}
                        fontSize={"x-large"}
                        cursor={"pointer"}
                      />
                      <Link to={"/"}>
                        <CloseIcon />
                      </Link>
                    </HStack>
                  );
                } else {
                  return (
                    <HStack key={e._id} justifyContent={"space-between"}>
                      <Text fontSize="medium">{e.goal}</Text>
                      <HStack>
                        <Link to={"/edit"}>
                          <EditIcon />
                        </Link>
                        <DeleteGoal id={e._id} />
                      </HStack>
                    </HStack>
                  );
                }
              })}
            </Stack>
          </CardBody>
        </Card>
      </Box>
    </Box>
  );
}

export default React.memo(Edit);
