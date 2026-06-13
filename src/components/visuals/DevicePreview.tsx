import { HeroDashboard } from "./HeroDashboard";

export function DevicePreview() {
  return (
    <div className="device-preview" aria-hidden="true">
      <div className="laptop">
        <div className="laptop-screen">
          <div className="device-dashboard-scale">
            <HeroDashboard />
          </div>
        </div>
      </div>
      <div className="phone">
        <div className="phone-bar" />
        <strong>₹12,45,000</strong>
        <small>Total Sales</small>
        <div className="mini-donut" />
      </div>
    </div>
  );
}
