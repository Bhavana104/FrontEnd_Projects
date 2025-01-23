export type LoyaltyUserResponse = {
  loyaltyId: string;
  currentTierName: string;
  currentTierId: number;
  currentTierPointThreshold: number;
  nextTierName: string;
  nextTierId: number;
  tierPoints: number;
  tierSpend: number;
  nextTierPointThreshold: number;
  nextTierSpendThreshold: number;
  availablePoints: number;
  pointTransferIncrement: number;
  tierGoodThrough: string;
  hasActiveReferralCode: boolean;
  linkedPartners: {
    partner: string;
    registrationDate: string;
  }[];
  numberOfTransactions: number;
  statementPeriodCardSpendPoints: number;
  pendingPoints: number;
  audienceMemberships: {
    name: string;
  }[];
  isEligibleForPendingPoints: boolean;
  referral: {
    code: string;
    link: string;
    overallReferralCount: number;
    referralIntervalProgress: number;
    referralInterval: number;
    totalPointsEarned: number;
    referralProgramStatus: string;
    referralCodeStatus: string;
  };
  lastStatementDate: string;
  nextStatementDate: string;
  lyftPoints: number;
  categoryPoints: {
    category: string;
    points: number;
  }[];
  activationOffers: {
    numberOfAvailableActivationOffers: number;
  };
  milestoneRewards: {
    claimableMilestoneRewards: number;
    earnedMilestoneRewards: number;
    milestoneRewardLyft: number;
    rewards: {
      name: string;
      start: string;
      end?: string;
      active?: boolean;
    }[];
  };
  instantOffers: {
    [key: string]: number;
  };
  activation: {
    [key: string]: string;
  };
};
