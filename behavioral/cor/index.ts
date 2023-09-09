// ハンドラ達に渡すオブジェクトのインターフェース
interface Order {
  inventoryAvailable: boolean;
  isUserAuthenticated: boolean;
  isPaymentAuthorized: boolean;
}

// 各ハンドラのインターフェース
interface OrderValidationHandler {
  setNext(handler: OrderValidationHandler): OrderValidationHandler;
  handle(order: Order): string | null;
}

// Base object for validation handlers
const orderValidationHandler = {
  setNext: (handler) => {
    this.nextHandler = handler;
    return handler;
  },
  handle: (order) => null,
};

// 在庫チェックのハンドラ
const inventoryCheck = {
  ...orderValidationHandler,
  handle: (order) => {
    if (order.inventoryAvailable) {
      console.log("Inventory check passed.");
      return this.nextHandler ? this.nextHandler.handle(order) : null;
    } else {
      return "Inventory check failed.";
    }
  },
};

// User Authentication Handler
const userAuthentication = {
  ...orderValidationHandler,
  handle: (order) => {
    if (order.isUserAuthenticated) {
      console.log("User authentication passed.");
      return this.nextHandler ? this.nextHandler.handle(order) : null;
    } else {
      return "User authentication failed.";
    }
  },
};

// Payment Authorization Handler
const paymentAuthorization = {
  ...orderValidationHandler,
  handle: (order) => {
    if (order.isPaymentAuthorized) {
      console.log("Payment authorization passed.");
      return null;
    } else {
      return "Payment authorization failed.";
    }
  },
};

// Create an order
const order = {
  inventoryAvailable: false,
  isUserAuthenticated: false,
  isPaymentAuthorized: false,
};

// Setting the chain
inventoryCheck.setNext(userAuthentication).setNext(paymentAuthorization);

const result = inventoryCheck.handle(order);

if (result) {
  console.log(`Order validation failed: ${result}`);
} else {
  console.log("Order validation succeeded.");
}
