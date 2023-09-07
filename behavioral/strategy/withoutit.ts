type PaymentType = "cash" | "credit" | "payyyPay" | "merrrPay";

const pay = (payType: PaymentType, amount: number) => {
  if (payType === "cash") {
    console.log("cash");
  } else if (payType === "credit") {
    console.log("credit");
  } else if (payType === "payyyPay") {
    console.log("payyyPay");
  } else if (payType === "merrrPay") {
    console.log("merrrPay");
  } else {
    console.log("サポートしていない決済方法です");
  }
};

const rollback = (payType: PaymentType, amount: number) => {
  if (payType === "cash") {
    console.log("cash");
  } else if (payType === "credit") {
    console.log("credit");
  } else if (payType === "payyyPay") {
    console.log("payyyPay");
  } else if (payType === "merrrPay") {
    console.log("merrrPay");
  } else {
    console.log("サポートしていない決済方法です");
  }
};

// @memo 上記の使用例
const Cart = (paymentStrategy: PaymentStrategy) => {
  return {
    checkout: (payType: PaymentType, amount: number) => {
      pay(payType, amount);
    },
    rollbackPayment: (payType: PaymentType, amount: number) => {
      rollback(payType, amount);
    },
  };
};
