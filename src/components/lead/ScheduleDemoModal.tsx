import { CalendarClock, Check, X } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { SiteLink } from "../ui/SiteLink";
import { DemoModalContext } from "./demoModalContext";

const interestOptions = ["POS", "Inventory Management", "Accounting", "Employee Management"] as const;

type DemoFormState = {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  city: string;
  businessName: string;
  interest: (typeof interestOptions)[number];
};

const initialForm: DemoFormState = {
  name: "",
  email: "",
  countryCode: "+91",
  phone: "",
  city: "",
  businessName: "",
  interest: "POS",
};

export function ScheduleDemoProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const openDemoModal = () => {
    setIsSubmitted(false);
    setIsOpen(true);
  };

  return (
    <DemoModalContext.Provider value={{ openDemoModal }}>
      {children}
      {isOpen ? <ScheduleDemoModal isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} onClose={() => setIsOpen(false)} /> : null}
    </DemoModalContext.Provider>
  );
}

type ScheduleDemoModalProps = {
  isSubmitted: boolean;
  setIsSubmitted: (value: boolean) => void;
  onClose: () => void;
};

function ScheduleDemoModal({ isSubmitted, setIsSubmitted, onClose }: ScheduleDemoModalProps) {
  const [form, setForm] = useState(initialForm);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const updateField = <K extends keyof DemoFormState>(field: K, value: DemoFormState[K]) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className="demo-modal" role="dialog" aria-modal="true" aria-labelledby="demo-modal-title" aria-describedby="demo-modal-description" onMouseDown={(event) => event.stopPropagation()}>
        <div className="demo-modal-header">
          <div className="demo-modal-heading">
            <div className="demo-modal-icon"><CalendarClock aria-hidden="true" className="h-5 w-5" /></div>
            <div>
              <p className="eyebrow">Schedule a demo</p>
              <h2 id="demo-modal-title">Let’s find the right fit for your business.</h2>
            </div>
          </div>
          <button ref={closeButtonRef} type="button" className="modal-close" aria-label="Close demo form" onClick={onClose}>
            <X aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="demo-success" role="status">
            <div className="demo-success-icon"><Check aria-hidden="true" className="h-6 w-6" /></div>
            <h3>Thank you.</h3>
            <p>Thanks for sharing your details. This gives the BlizBooks team a clear place to start the conversation.</p>
            <button type="button" className="button button-primary" onClick={onClose}>Close</button>
          </div>
        ) : (
          <form className="demo-form" onSubmit={handleSubmit}>
            <p id="demo-modal-description" className="demo-form-intro">Tell us a little about your business and what you want to explore.</p>
            <div className="demo-form-grid">
              <label className="form-field">
                <span>Name <strong>*</strong></span>
                <input required name="name" value={form.name} onChange={(event) => updateField("name", event.target.value)} />
              </label>
              <label className="form-field">
                <span>Email <strong>*</strong></span>
                <input required type="email" name="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} />
              </label>
              <label className="form-field">
                <span>Phone number <strong>*</strong></span>
                <span className="phone-field">
                  <input className="phone-country-code" readOnly aria-label="Country code" name="countryCode" value={form.countryCode} />
                  <input required name="phone" inputMode="tel" value={form.phone} onChange={(event) => updateField("phone", event.target.value)} />
                </span>
              </label>
              <label className="form-field">
                <span>City <strong>*</strong></span>
                <input required name="city" value={form.city} onChange={(event) => updateField("city", event.target.value)} />
              </label>
              <label className="form-field demo-business-field">
                <span>Business Name <strong>*</strong></span>
                <input required name="businessName" value={form.businessName} onChange={(event) => updateField("businessName", event.target.value)} />
              </label>
            </div>
            <fieldset className="interest-fieldset">
              <legend>What are you interested in? <strong>*</strong></legend>
              <div className="interest-options">
                {interestOptions.map((option) => (
                  <label className={`interest-option ${form.interest === option ? "interest-option-selected" : ""}`} key={option}>
                    <input type="radio" name="interest" value={option} checked={form.interest === option} onChange={() => updateField("interest", option)} />
                    <span>{form.interest === option ? <Check aria-hidden="true" className="h-4 w-4" /> : null}{option}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <button type="submit" className="button button-primary demo-submit">Submit</button>
            <p className="demo-privacy-copy">By submitting this form, you agree to receive updates from BlizBooks and accept our <SiteLink href="/privacy-policy" onClick={onClose}>Privacy Policy</SiteLink>.</p>
          </form>
        )}
      </div>
    </div>
  );
}
