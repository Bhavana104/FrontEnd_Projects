export type WalletBankAccount = {
  achAccount: string;
  bank: string;
  id: number;
  name: string;
};

export type WalletCreditCard = {
  alias: string;
  brand: string;
  cardNumberLastFour: string;
  expirationDate: string;
  id: number;
};

export type WalletResponse = {
  creditCards: WalletCreditCard[];
  bankAccounts: WalletBankAccount[];
};
