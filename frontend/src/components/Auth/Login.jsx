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
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FetchWrapper } from "../../utils/fetchWrapper";

export const Login = () => {
  const [loginData, setLoginData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const API = new FetchWrapper(process.env.REACT_APP_API_URL);

  const [click, setClick] = useState(false);

  const navigate = useNavigate();

  const toast = useToast();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setLoginData({ ...loginData, [name]: value });
  };
  console.log(loginData);

  const handleClick = (event) => {
    setClick(event.target.checked);
  };

  const fetchRequest = async () => {
    setIsLoading(true);
    try {
      const responece = await API.post(
        click ? "teacher/login" : "student/login",
        loginData
      );
      const data = await responece.json();
      console.log(data);
      if (data.message === "Login successfull!") {
        toast({
          title: "Login Successfull",
          description: ``,
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (err) {
      console.error(err);
      if (err) {
        toast({
          title: "Opps an error occured",
          description: `${err}`,
          status: "error",
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
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <form action="">
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="email-alerts" mt="2">
                  Are You a Tutor ?
                </FormLabel>
                <Switch id="email-alerts" onChange={handleClick} name="role" />
              </FormControl>
              <Stack spacing={5}>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={handleSubmit}
                  isDisabled={isLoading}
                >
                  Sign in
                </Button>
              </Stack>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"flex-start"}
              >
                <Text>Don't have an account?</Text>
                <Text color={"blue.400"} onClick={() => navigate("/signup")}>
                  Click Here
                </Text>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
