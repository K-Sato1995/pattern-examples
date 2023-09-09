// 決済方法のインターフェース(入口の形)
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

// 決済方法の具体的実装(1)
const cashPayment: PaymentStrategy = {
  pay: (amount) => {
    console.log(`CASH: ${amount}`);
  },
  rollback: (amount) => {
    // 実装省略
  },
};

const creditCardPayment: PaymentStrategy = {
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

const payyyPayPayment: PaymentStrategy = {
  pay: (amount) => {
    const payyypayClient = new PayyyPay();
    payyypayClient.payComplete(amount);
  },
  rollback: (amount) => {
    // 実装省略
  },
};

const merrrPayPayment: PaymentStrategy = {
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
const shoppingCart = (paymentStrategy: PaymentStrategy) => {
  return {
    purchase: (amount: number) => {
      paymentStrategy.pay(amount);
    },
    rollbackPayment: (amount: number) => {
      paymentStrategy.rollback(amount);
    },
  };
};

// Client code
const cart1 = shoppingCart(creditCardPayment);
cart1.purchase(500);

const cart2 = shoppingCart(cashPayment);
cart2.purchase(300);

const cart3 = shoppingCart(payyyPayPayment);
cart3.purchase(200);

const cart4 = shoppingCart(merrrPayPayment);
cart4.purchase(100);
