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
  Text,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { FetchWrapper } from "../../utils/fetchWrapper";
import { useNavigate } from "react-router-dom";
export const Signup = () => {
  const [signupData, setSignupData] = useState({});
  const [click, setClick] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const API = new FetchWrapper(process.env.REACT_APP_API_URL);

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

  const fetchRequest = async () => {
    try {
      const responece = await API.post(
        click ? "teacher/register" : "student/register",
        signupData
      );
      const data = await responece.json();
      console.log(data);
    } catch (err) {
      console.error(err);
      if (err) {
        toast({
          title: "Opps an erro occured",
          description: `${err}`,
          status: "info",
          duration: 9000,
          isClosable: true,
        });
      }
    } finally {
      setIsLoading(false);
    }
  };
  const handleSubmit = () => {
    fetchRequest();
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
          p={4}
          aa
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
                    name="subjectExpert"
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
                    isDisabled = {isLoading}
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
                    isDisabled = {isLoading}
                  >
                    Sign Up
                  </Button>
                </Stack>
              </form>
            )}
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"flex-start"}
              >
                <Text>Aleady have an account?</Text>
                <Text color={"blue.400"} onClick={() => navigate("/")}>
                  Click Here
                </Text>
              </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
