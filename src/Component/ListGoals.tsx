import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Card,
  Text,
  StackDivider,
  Stack,
  Heading,
  CardBody,
  CardHeader,
  HStack,
} from "@chakra-ui/react";
import { EditIcon, CheckCircleIcon } from "@chakra-ui/icons";
import DeleteGoal from "./DeleteGoal";
import { Link } from "react-router-dom";

interface data {
  goal: string;
  _id: string;
  complete: boolean;
}

function ListGoals() {
  const [goals, setgoals] = useState<data[]>([
    { goal: "", _id: "", complete: false },
  ]);
  const [comp, setCopm] = useState<boolean>(false);
  useEffect(() => {
    axios.get("http://localhost:3000").then((res) => {
      setgoals(res.data);
    });
  }, [goals]);

  const handleCopmlete = async (id: string) => {
    await setCopm(!comp);
    axios.put(`http://localhost:3000/complete/${id}`, {
      complete: comp,
    });
  };
  return (
    <Card w={"300px"}>
      <CardHeader>
        <Heading size="md">List</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="2">
          {goals.map((e) => {
            return (
              <HStack key={e._id} justifyContent={"space-between"}>
                <Text
                  textDecoration={e.complete ? "line-through" : "none"}
                  fontSize="medium"
                >
                  {e.goal}
                </Text>
                <HStack>
                  <Link to={`/edit/${e._id}`}>
                    <EditIcon />
                  </Link>
                  <DeleteGoal id={e._id} />
                  <CheckCircleIcon
                    cursor={"pointer"}
                    onClick={() => handleCopmlete(e._id)}
                  />
                </HStack>
              </HStack>
            );
          })}
        </Stack>
      </CardBody>
    </Card>
  );
}

export default React.memo(ListGoals);
