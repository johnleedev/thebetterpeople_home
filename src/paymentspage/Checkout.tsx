import { useEffect, useRef, useState } from "react";
import { PaymentWidgetInstance, loadPaymentWidget, ANONYMOUS } from "@tosspayments/payment-widget-sdk";
import { nanoid } from "nanoid";

const clientKey = "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq"
const customerKey = "YbX2HuSlsC9uVJW6NMRMj"

export default function Checkout() {
  const paymentWidgetRef = useRef<PaymentWidgetInstance | null>(null)
  const price = 50_000

  useEffect(() => {
    (async () => {
      const paymentWidget = await loadPaymentWidget(clientKey, customerKey)
      paymentWidget.renderPaymentMethods("#payment-widget", price)
      paymentWidgetRef.current = paymentWidget
    })()
  }, [])

  return (
    <div className="App">
      <h1>주문서</h1>
      <div id="payment-widget" />
    </div>
  )
}