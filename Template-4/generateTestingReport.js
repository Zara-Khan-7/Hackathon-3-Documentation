// Import required modules
const Papa = require("papaparse");
const fs = require("fs");

// Define test cases data
const testCases = [
  {
    testCaseId: "TC001",
    description: "Verify login functionality",
    steps: "1. Open login page\n2. Enter valid credentials\n3. Click 'Login'",
    expectedResult: "User successfully logged in",
    actualResult: "User successfully logged in",
    status: "Passed",
    severityLevel: "Low",
    assignedTo: "N/A",
    remarks: "Test passed as expected.",
  },
  {
    testCaseId: "TC002",
    description: "Test invalid credentials",
    steps: "1. Open login page\n2. Enter invalid credentials\n3. Click 'Login'",
    expectedResult: "Show Error Message,Invalid Credentials",
    actualResult: "Error message displayed",
    status: "Passed",
    severityLevel: "Low",
    assignedTo: "John Doe",
    remarks: "Works as Expected",
  },
  {
    testCaseId: "TC003",
    description: "Validate cart functionality",
    steps: "1. Add product to cart\n2. View cart",
    expectedResult: "Product appears in the cart",
    actualResult: "Product appears in the cart",
    status: "Passed",
    severityLevel: "Low",
    assignedTo: "N/A",
    remarks: "Works as expected.",
  },
  {
    testCaseId: "TC004",
    description: "Test checkout flow",
    steps: "1. Add product to cart\n2. Proceed to checkout\n3. Enter payment details",
    expectedResult: "Order placed successfully",
    actualResult: "Order placed successfully",
    status: "Passed",
    severityLevel: "High",
    assignedTo: "Jane Smith",
    remarks: "Work as expected",
  },
];

// Convert data to CSV format
const csv = Papa.unparse(testCases);

// Write the CSV to a file
const outputFilePath = "testing-report.csv";
fs.writeFileSync(outputFilePath, csv);

console.log(`CSV report generated successfully: ${outputFilePath}`);
