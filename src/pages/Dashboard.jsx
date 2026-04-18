import React, { useEffect, useState } from "react";
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
    <Text fontSize="32px" fontWeight="bold">
      {value}
    </Text>
  </Box>
);

const Dashboard = () => {
  const [stats, setStats] = useState({
    users: 0,
    products: 0,
    orders: 0,
  });

  useEffect(() => {
    fetch("/api/stats")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box variant="grey">
      <H1 mb="xl">Admin Dashboard</H1>

      <Box style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <Card title="Total Users" value={stats.users} />
        <Card title="Total Products" value={stats.products} />
        <Card title="Total Orders" value={stats.orders} />
      </Box>
    </Box>
  );
};

export default Dashboard;