import { Box, Heading, Input, Button, VStack, HStack, Checkbox, Text } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Heading mb={4}>Todo List</Heading>
        <HStack>
          <Input
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <Button onClick={addTask} colorScheme="teal">
            Add Task
          </Button>
        </HStack>
        <VStack spacing={2} align="stretch" w="100%">
          {tasks.map((task, index) => (
            <HStack key={index} spacing={4}>
              <Checkbox
                isChecked={task.completed}
                onChange={() => toggleTaskCompletion(index)}
              />
              <Text
                as={task.completed ? "s" : ""}
                flex="1"
              >
                {task.text}
              </Text>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default Index;