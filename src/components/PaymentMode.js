import React from 'react';
import '../styles.css'; 

const PaymentMode = () => {
  return (
    <div className="payment-mode-container">
      <div className="payment-mode-title">
        <h2>Payment Mode</h2>
      </div>
      <div className="payment-mode-list-container">
        <ul className="payment-mode-list">
          <li>Deposit to Account</li>
          <li>Net Banking</li>
          <li>Credit Card/Debit Card</li>
          <li>UPI</li>
          <li>Wallets (PayTM/PhonePe/Amazon etc.)</li>
        </ul>
      </div>
    </div>
  );
};

export default PaymentMode;
