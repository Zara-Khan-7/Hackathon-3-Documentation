export default {
    name: "order",
    title: "Orders",
    type: "document",
    fields: [
      { name: "fullName", title: "Full Name", type: "string" },
      { name: "email", title: "Email", type: "string" },
      { name: "phone", title: "Phone", type: "string" },
      { name: "address", title: "Address", type: "string" },
      { name: "city", title: "City", type: "string" },
      { name: "postalCode", title: "Postal Code", type: "string" },
      { name: "country", title: "Country", type: "string" },
      { name: "paymentMethod", title: "Payment Method", type: "string" },
      { name: "status", title: "Order Status", type: "string", options: { list: ["Pending", "Shipped", "Delivered"] } },
      { name: "createdAt", title: "Created At", type: "datetime", initialValue: new Date().toISOString() },
    ],
  };
  