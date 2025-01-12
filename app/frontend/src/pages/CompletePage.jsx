
import React, { useEffect, useState } from "react";
import { useStripe } from "@stripe/react-stripe-js";


export default function CompletePage() {
  const stripe = useStripe();
  const [status, setStatus] = useState("default");
  const [intentId, setIntentId] = useState(null);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      if (!paymentIntent) {
        return;
      }

      setStatus(paymentIntent.status);
      setIntentId(paymentIntent.id);
    });
  }, [stripe]);

  if (status !== "succeeded") {
    return <h2>Something went wrong. Please try again.</h2>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Thank You!</h1>
        <p style={styles.subtitle}>Your payment was successful.</p>
        <p style={styles.details}>We appreciate your purchase.</p>
        <p style={styles.orderInfo}>
          <strong>Payment ID:</strong> {intentId}
        </p>
        <button style={styles.button} onClick={() => window.location.href = "/"}>
          Back To Home
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '400px',
    width: '100%',
  },
  title: {
    fontSize: '32px',
    margin: '0',
    color: '#333333',
  },
  subtitle: {
    fontSize: '18px',
    marginTop: '10px',
    color: '#666666',
  },
  details: {
    fontSize: '16px',
    marginTop: '20px',
    color: '#888888',
  },
  orderInfo: {
    fontSize: '14px',
    marginTop: '20px',
    color: '#333333',
  },
  button: {
    marginTop: '30px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  }
};
