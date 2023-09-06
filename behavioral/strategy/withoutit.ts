class Payment {
  public cashPay(amount: number) {
    console.log(`CASH: ${amount}`);
  }
  public cashPayRollback(amount: number): void {}
  public creditCardPay(amount: number) {}
  public creditCardPayRollback(amount: number) {}
  /**
   * その他の決済方法の関数
   */
}

// type PaymentType = "cash" | "credit"
// const payment = (payType: PaymentType) {
//     if(payType === 'cash') {
//         console.log('cash')
//     }
// }
