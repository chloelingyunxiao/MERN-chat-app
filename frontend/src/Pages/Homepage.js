import React from "react";
import { useEffect, useState } from "react";
import { Container, Box, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";

const Homepage = () => {
  const history = useHistory();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (!userInfo) history.push("/chats");
    console.log("happyhapyy!!!");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      {/* 第一个标题的box */}
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="1g"
        borderWidth="1px"
      >
        <Text fontSize="5xl" fontFamily="work sans" color="black">
          Chat with Every One
        </Text>
      </Box>

      {/* 第二个主要界面的box */}
      <Box
        bg="white"
        w="100%"
        p={4}
        color="black"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Tabs variant="soft-rounded" colorScheme="blue">
          <TabList mb="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <TabPanel>
                <Login></Login>
              </TabPanel>
            </TabPanel>
            <TabPanel>
              <TabPanel>
                <Signup></Signup>
              </TabPanel>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
