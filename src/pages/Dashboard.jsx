import React from "react";
import { Box, H1, H3, Text } from "@adminjs/design-system";

const Card = ({ title, value }) => (
  <Box
    variant="white"
    padding="xl"
    width="250px"
    boxShadow="card"
    borderRadius="lg"
  >
    <H3>{title}</H3>
    <Text fontSize="32px" fontWeight="bold">{value}</Text>
  </Box>
);

const Dashboard = () => {
  return (
    <Box variant="grey">
      <H1 mb="xl">Admin Dashboard</H1>

      <Box style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <Card title="Total Users" value="--" />
        <Card title="Total Products" value="--" />
        <Card title="Total Orders" value="--" />
      </Box>
    </Box>
  );
};

export default Dashboard;