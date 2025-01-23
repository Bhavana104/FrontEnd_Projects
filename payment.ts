export type TenantLedgerResponse = {
  total: number;
  charges: {
    description: string;
    date: string;
    amount: number;
    securityDeposit: boolean;
  }[];
  minimumAmount: number;
  totalWithoutSecurityDeposit: number;
  standingState: {
    blocked: boolean;
    message: string;
  };
  acceptablePaymentMethods: string[];
  pendingPayments: any[];
  credits: any[];
  creditsTotal: number;
  lastRetrievedAt: string;
  platformLedgerId: string;
};

export type PaymentRequest = {
  amount: number;
  requestId: string;
  paymentMethodId: string;
  paymentMethodType: "creditCard" | "bankAccount";
  pointsToUse: number;
};

export type PaymentResponse = {
  paymentId: string;
  paymentMethodType: "creditCard" | "bankAccount";
  paymentMethodId: string;
  amount: number;
  pointsUsed: number;
  pointsEarned: number;
  paymentDate: string;
};

export type WalletResponse = {
  creditCards: {
    id: number;
    cardNumberLastFour: string;
    expirationDate: string;
    brand: string;
    alias: string;
  }[];
  bankAccounts: {
    id: number;
    bank: string;
    name: string;
    achAccount: string;
  }[];
};
