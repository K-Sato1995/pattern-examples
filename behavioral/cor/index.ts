interface Order {
  inventoryAvailable: boolean;
  isUserAuthenticated: boolean;
  isPaymentAuthorized: boolean;
}

// Handler Interface
interface OrderValidationHandler {
  setNext(handler: OrderValidationHandler): OrderValidationHandler;
  handle(order: Order): string | null;
}

// ConcreteHandler Class
class InventoryCheck implements OrderValidationHandler {
  private nextHandler?: OrderValidationHandler;

  setNext(handler: OrderValidationHandler): OrderValidationHandler {
    this.nextHandler = handler;
    return handler;
  }

  handle(order: Order): string | null {
    if (order.inventoryAvailable) {
      console.log("Inventory check passed.");
      return this.nextHandler?.handle(order) || null;
    } else {
      return "Inventory check failed.";
    }
  }
}

// ConcreteHandler Class
class UserAuthentication implements OrderValidationHandler {
  private nextHandler?: OrderValidationHandler;

  setNext(handler: OrderValidationHandler): OrderValidationHandler {
    this.nextHandler = handler;
    return handler;
  }

  handle(order: Order): string | null {
    if (order.isUserAuthenticated) {
      console.log("User authentication passed.");
      return this.nextHandler?.handle(order) || null;
    } else {
      return "User authentication failed.";
    }
  }
}

// ConcreteHandler Class
class PaymentAuthorization implements OrderValidationHandler {
  handle(order: Order): string | null {
    if (order.isPaymentAuthorized) {
      console.log("Payment authorization passed.");
      return null;
    } else {
      return "Payment authorization failed.";
    }
  }
}

const order = {
  inventoryAvailable: false,
  isUserAuthenticated: false,
  isPaymentAuthorized: false,
};

const inventoryCheck = new InventoryCheck();
const userAuthentication = new UserAuthentication();
const paymentAuthorization = new PaymentAuthorization();

// Setting the chain
inventoryCheck.setNext(userAuthentication).setNext(paymentAuthorization);

const result = inventoryCheck.handle(order);

if (result) {
  console.log(`Order validation failed: ${result}`);
} else {
  console.log("Order validation succeeded.");
}
