// Strategyのinterface
interface PaymentStrategy {
  /**
   * 決済処理
   */
  pay(amount: number): void;

  /**
   * 決済キャンセル処理
   */
  rollback(amount: number): void;
}

class CashPayment implements PaymentStrategy {
  public pay(amount: number): void {
    console.log(`CASH: ${amount}`);
  }

  public rollback(amount: number): void {
    // 実装省略
  }
}

class CreditCardPayment implements PaymentStrategy {
  public pay(amount: number): void {
    const getCreditCardcomp = getCreditCardCompany();
    getCreditCardcomp.completePayment(amount);
  }

  public rollback(amount: number): void {
    // 実装省略
  }
}

class PayyyPayPayment implements PaymentStrategy {
  public pay(amount: number): void {
    const payyypayClient = new PayyyPay();
    payyypayClient.payComplete(amount);
  }
  public rollback(amount: number): void {
    // 実装省略
  }
}

class MerrrPayPayment implements PaymentStrategy {
  public pay(amount: number): void {
    const merrrClient = new MerrrPayPayment();
    merrrClient.transaction(amount);
  }
  public rollback(amount: number): void {
    // 実装省略
  }
}

class ooPayPayment implements PaymentStrategy {
  public pay(amount: number): void {
    /**
     * ooPayのクライアントの決済処理
     */
  }

  public rollback(amount: number): void {
    /**
     * ooPayのクライアントの決済キャンセル処理
     */
  }
}

/**
 * @memo 上記の使用例
 */
class ShoppingCart {
  private paymentStrategy: PaymentStrategy;

  constructor(paymentStrategy: PaymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }

  public checkout(amount: number): void {
    this.paymentStrategy.pay(amount);
  }
}

// Client code
const cart1 = new ShoppingCart(new CreditCardPayment());
cart1.checkout(500);

const cart2 = new ShoppingCart(new CashPayment());
cart2.checkout(300);
