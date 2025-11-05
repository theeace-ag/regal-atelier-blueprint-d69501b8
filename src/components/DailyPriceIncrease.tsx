import React, { useState, useEffect, useRef } from 'react';

const DailyPriceIncrease = () => {
  // Use useRef to store the launch date so it's only initialized once per component mount
  const launchDateRef = useRef<Date | null>(null);

  if (!launchDateRef.current) {
    const today = new Date();
    launchDateRef.current = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0));
  }

  const baseValue = 62190; // The base current value
  const initialAdditionalIncrease = 17000; // The initial increased amount

  const calculateIncrease = () => {
    const today = new Date();
    const todayUTC = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0));

    // Ensure launchDateRef.current is not null before using it
    const diffTime = todayUTC.getTime() - (launchDateRef.current?.getTime() || todayUTC.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const effectiveDiffDays = Math.max(0, diffDays); // Ensure it doesn't go negative

    const dailyIncreaseFactor = 150; // Increase by Rs 150 daily
    const currentTotalValue = baseValue + initialAdditionalIncrease + (effectiveDiffDays * dailyIncreaseFactor);
    return currentTotalValue.toLocaleString('en-IN'); // Format as Indian Rupees with commas
  };

  const [increase, setIncrease] = useState(calculateIncrease());

  useEffect(() => {
    const timer = setInterval(() => {
      setIncrease(calculateIncrease());
    }, 1000 * 60 * 60 * 24); // Update daily

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-card p-6 rounded-lg shadow-md text-center border border-muted/20">
      <p className="font-serif text-sm uppercase tracking-wider text-muted-foreground">Current Value</p>
      <p className="font-serif text-5xl font-bold mt-2 text-primary-foreground">Rs 62,190</p>
      <p className="font-serif text-sm mt-2 text-card-foreground">This Month</p>
    </div>
  );
};

export default DailyPriceIncrease;