// Strategyのinterface
type PaymentStrategy = {
  /**
   * 決済処理
   */
  pay: (amount: number) => void;
  /**
   * 決済キャンセル処理
   */
  rollback: (amount: number) => void;
};

const CashPayment: PaymentStrategy = {
  pay: (amount) => {
    console.log(`CASH: ${amount}`);
  },
  rollback: (amount) => {
    // 実装省略
  },
};

const CreditCardPayment: PaymentStrategy = {
  pay: (amount) => {
    const getCreditCardCompany = () => ({
      completePayment: (a: number) => console.log(`Credit Card: ${a}`),
    });
    const creditCardCompany = getCreditCardCompany();
    creditCardCompany.completePayment(amount);
  },
  rollback: (amount) => {
    // 実装省略
  },
};

const PayyyPayPayment: PaymentStrategy = {
  pay: (amount) => {
    const payyypayClient = new PayyyPay();
    payyypayClient.payComplete(amount);
  },
  rollback: (amount) => {
    // 実装省略
  },
};

const MerrrPayPayment: PaymentStrategy = {
  pay: (amount) => {
    const merrrClient = new MerrrPayPayment();
    merrrClient.transaction(amount);
  },
  /**
   * 決済キャンセル処理
   */
  rollback: (amount) => {
    // 実装省略
  },
};

// @memo 上記の使用例
const ShoppingCart = (paymentStrategy: PaymentStrategy) => {
  return {
    checkout: (amount: number) => {
      paymentStrategy.pay(amount);
    },
  };
};

// Client code
const cart1 = ShoppingCart(CreditCardPayment);
cart1.checkout(500);

const cart2 = ShoppingCart(CashPayment);
cart2.checkout(300);

const cart3 = ShoppingCart(PayyyPayPayment);
cart3.checkout(200);

const cart4 = ShoppingCart(MerrrPayPayment);
cart4.checkout(100);
