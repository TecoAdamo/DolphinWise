import React, { createContext, useState, useContext, ReactNode } from "react";

type Subscription = {
  id: string;
  name: string;
  price: string;
  dueDate: string;
};

type SubscriptionContextData = {
  subscriptions: Subscription[];
  addSubscription: (subscription: Subscription) => void;
};

const SubscriptionContext = createContext<SubscriptionContextData | undefined>(
  undefined
);

export function SubscriptionProvider({ children }: { children: ReactNode }) {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);

  function addSubscription(subscription: Subscription) {
    setSubscriptions((prev) => [...prev, subscription]);
  }

  return (
    <SubscriptionContext.Provider value={{ subscriptions, addSubscription }}>
      {children}
    </SubscriptionContext.Provider>
  );
}

export function useSubscriptions() {
  const context = useContext(SubscriptionContext);
  if (!context) {
    throw new Error(
      "useSubscriptions must be used within a SubscriptionProvider"
    );
  }
  return context;
}
