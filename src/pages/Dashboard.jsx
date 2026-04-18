import React from 'react'

const Dashboard = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Dashboard</h1>
      <p>Welcome to your eCommerce admin panel.</p>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div style={{ padding: "20px", border: "1px solid #ddd" }}>
          <h3>Total Users</h3>
          <p>View from Users table</p>
        </div>

        <div style={{ padding: "20px", border: "1px solid #ddd" }}>
          <h3>Total Products</h3>
          <p>View from Products table</p>
        </div>

        <div style={{ padding: "20px", border: "1px solid #ddd" }}>
          <h3>Total Orders</h3>
          <p>View from Orders table</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard