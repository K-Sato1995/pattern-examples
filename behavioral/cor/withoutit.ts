// Function to validate order
function validateOrder(order: Order): string | null {
  if (!order.inventoryAvailable) {
    return "Inventory check failed.";
  }

  if (!order.isUserAuthenticated) {
    return "User authentication failed.";
  }

  if (!order.isPaymentAuthorized) {
    return "Payment authorization failed.";
  }

  return null;
}

// Client Code
const order1 = {
  inventoryAvailable: false,
  isUserAuthenticated: false,
  isPaymentAuthorized: false,
};

const result1 = validateOrder(order);

if (result) {
  console.log(`Order validation failed: ${result}`);
} else {
  console.log("Order validation succeeded.");
}
