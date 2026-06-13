export function ReceiptIllustration() {
  return (
    <div className="receipt-illustration" aria-hidden="true">
      <span className="bar one" />
      <span className="bar two" />
      <span className="bar three" />
      <div className="receipt">
        <i />
        <i />
        <i />
      </div>
      <div className="calculator">
        {Array.from({ length: 9 }, (_, index) => (
          <span key={index} />
        ))}
      </div>
      <div className="coin">₹</div>
    </div>
  );
}
