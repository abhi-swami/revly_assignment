import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  Switch,
  Select,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FetchWrapper } from "../../utils/fetchWrapper";
export const Signup = () => {
  const [signupData, setSignupData] = useState({});
  const [click, setClick] = useState(false);
  const toast = useToast();
  const API = new FetchWrapper()

  const handleClick = (event) => {
    setClick(event.target.checked);
    setSignupData({});
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const role = click ? "teacher" : "student";
    setSignupData({ ...signupData, [name]: value, role });
  };

  const fetchRequest = async() =>{

  }
  const handleSubmit = () => {
    if ("role" in signupData) {
      // toast({
      //   title: "Please provide all details",
      //   description: "Some details are missing.",
      //   status: "success",
      //   duration: 9000,
      //   isClosable: true,
      // });
      fetchRequest()
    } else {
      toast({
        title: "Please provide all details",
        description: "Some details are missing.",
        status: "info",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  console.log(signupData);
  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Stack spacing={4} mx={"auto"} maxW={"lg"} py={6} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"3xl"}>Sign-up To Create an Account</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={4}aa
        >
          <Stack spacing={4}>
            <FormControl display="flex" alignItems="center">
              <FormLabel htmlFor="email-alerts" mb="0">
                Are You a Tutor ?
              </FormLabel>
              <Switch id="email-alerts" onChange={handleClick} name="role" />
            </FormControl>
            {click ? (
              //teacher form

              <form>
                <FormControl id="name">
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={signupData.name}
                    onChange={handleChange}
                  />
                </FormControl>

                <FormControl id="age">
                  <FormLabel>Age</FormLabel>
                  <Input
                    type="number"
                    id="age"
                    name="age"
                    value={signupData.age}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl id="experties">
                  <FormLabel>Subject Experties</FormLabel>
                  <Select
                    placeholder="Select Subject"
                    name="Subject Experties"
                    onChange={handleChange}
                  >
                    <option value="Physics">Physics</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Math">Math</option>
                    <option value="Biology">Biology</option>
                    <option value="Hindi">Hindi</option>
                    <option value="English">English</option>
                    <option value="History">History</option>
                    <option value="Geography">Geography</option>
                  </Select>
                </FormControl>

                <FormControl id="experience">
                  <FormLabel>Experience (in years) </FormLabel>
                  <Input
                    type="number"
                    id="experience"
                    name="experience"
                    value={signupData.experience}
                    onChange={handleChange}
                  />
                </FormControl>

                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={signupData.email}
                    onChange={handleChange}
                  />
                </FormControl>

                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    name="password"
                    value={signupData.password}
                    onChange={handleChange}
                  />
                </FormControl>
                <Stack spacing={5}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  ></Stack>
                  <Button
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    onClick={handleSubmit}
                  >
                    Sign Up
                  </Button>
                </Stack>
              </form>
            ) : (
              //student form
              <form action="">
                <FormControl id="name">
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={signupData.name}
                    onChange={handleChange}
                  />
                </FormControl>

                <FormControl id="age">
                  <FormLabel>Age</FormLabel>
                  <Input
                    type="number"
                    id="age"
                    name="age"
                    value={signupData.age}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl id="standard">
                  <FormLabel>Standard</FormLabel>
                  <Select
                    placeholder="Select Standard"
                    name="standard"
                    value={signupData.standard}
                    onChange={handleChange}
                  >
                    <option value="5">5th</option>
                    <option value="6">6th</option>
                    <option value="7">7th</option>
                    <option value="8">8th</option>
                    <option value="9">9th</option>
                    <option value="10">10th</option>
                  </Select>
                </FormControl>

                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={signupData.email}
                    onChange={handleChange}
                  />
                </FormControl>

                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    name="password"
                    value={signupData.password}
                    onChange={handleChange}
                  />
                </FormControl>
                <Stack spacing={5}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  ></Stack>
                  <Button
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    onClick={handleSubmit}
                  >
                    Sign Up
                  </Button>
                </Stack>
              </form>
            )}
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
