export type LegalSection = {
  heading: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
};

export type LegalDocument = {
  slug: string;
  title: string;
  intro: string;
  sections: readonly LegalSection[];
};

export const legalDocuments: readonly LegalDocument[] = [
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    intro: "This Privacy Policy explains how BlizBooks may collect, use, store, protect and manage information when customers and authorised users access or use BlizBooks.",
    sections: [
      {
        heading: "1. Introduction",
        paragraphs: [
          "BlizBooks is a cloud-based business management platform designed to help businesses manage essential operations through integrated digital solutions including billing, POS, GST invoicing, accounting, inventory, workforce management, payroll, reporting and analytics, and related business-management functions.",
          "BlizBooks may be provided through mobile, web and Windows platforms, depending on the services available to the customer.",
          "This Privacy Policy explains how BlizBooks may collect, use, store, protect and manage information when customers and authorised users access or use BlizBooks.",
        ],
      },
      {
        heading: "2. Information We May Collect",
        paragraphs: ["Depending on the services used, BlizBooks may collect or process:"],
        bullets: [
          "Business name and business information",
          "Name, mobile number and email address",
          "User login and account information",
          "Employee and workforce information entered by authorised users",
          "Billing and invoice information",
          "Sales and purchase information",
          "Inventory and stock information",
          "Attendance, payroll and advance information",
          "Expense and accounting information",
          "Payment and transaction-related information",
          "Device and browser information",
          "IP address and technical information",
          "Login and security information",
          "Customer-support communications",
          "Other information voluntarily provided by the customer",
        ],
      },
      {
        heading: "3. How We Use Information",
        paragraphs: ["BlizBooks may use information for legitimate business and operational purposes, including:"],
        bullets: [
          "Providing and maintaining BlizBooks services",
          "Creating and managing user accounts",
          "Processing billing and business transactions",
          "Supporting accounting, inventory and payroll functions",
          "Generating reports and analytics",
          "Providing customer support",
          "Sending service-related notifications and payment reminders",
          "Maintaining platform security",
          "Detecting and preventing misuse or fraudulent activity",
          "Improving system performance and functionality",
          "Maintaining business and transaction records",
          "Complying with applicable legal and regulatory requirements",
        ],
      },
      {
        heading: "4. Customer Business Data",
        paragraphs: [
          "Customers may enter business, employee, customer, financial, inventory and transaction information into BlizBooks.",
          "The customer is responsible for ensuring that information entered into BlizBooks is accurate and that the customer has appropriate authority or lawful basis to collect and process information relating to employees, customers and other individuals.",
          "BlizBooks may process such information for providing the contracted services, maintaining security, supporting operations and complying with applicable law.",
        ],
      },
      {
        heading: "5. Data Security",
        paragraphs: [
          "BlizBooks will take reasonable technical and organisational measures to protect information against unauthorised access, misuse, alteration, disclosure, loss or destruction.",
          "However, no internet, cloud or digital system can be guaranteed to be completely secure. Customers are also responsible for protecting their login credentials, devices and authorised user access.",
        ],
      },
      {
        heading: "6. Multi-User and Role-Based Access",
        paragraphs: ["BlizBooks may provide multiple-user and role-based access.", "Customers are responsible for:"],
        bullets: [
          "Assigning appropriate user permissions",
          "Protecting login credentials",
          "Removing access for former employees",
          "Monitoring authorised users",
          "Reporting suspected unauthorised access",
        ],
      },
      {
        heading: "7. Payment Information",
        paragraphs: [
          "Where BlizBooks uses or integrates with third-party payment gateways, banks or other financial service providers, transaction processing may be subject to the terms and privacy policies of those providers.",
          "BlizBooks may process transaction-related information necessary to identify and verify payments.",
          "Customers should verify payment status before considering a transaction successfully completed.",
        ],
      },
      {
        heading: "8. Third-Party Services",
        paragraphs: [
          "BlizBooks may use or integrate with third-party services such as payment providers, hosting providers, communication services and other technology providers.",
          "Third-party providers may have separate privacy policies and terms. BlizBooks is not responsible for independent third-party policies or failures except where liability is imposed by applicable law.",
        ],
      },
      {
        heading: "9. Data Retention",
        paragraphs: ["BlizBooks may retain information for as long as reasonably necessary to:"],
        bullets: [
          "Provide the services",
          "Maintain business and transaction records",
          "Meet legal and regulatory obligations",
          "Resolve disputes",
          "Prevent fraud or misuse",
          "Maintain security and audit records",
        ],
      },
      {
        heading: "10. Data Breach and Security Incidents",
        paragraphs: ["If BlizBooks becomes aware of a personal-data security incident requiring action under applicable law, BlizBooks will take reasonable steps in accordance with applicable legal and regulatory requirements."],
      },
      {
        heading: "11. Privacy Rights and Grievance Redressal",
        paragraphs: [
          "Where applicable under Indian law, individuals may have rights relating to their personal data, including applicable rights concerning access, correction, erasure, consent withdrawal and grievance redressal.",
          "Privacy-related concerns may be submitted to:\nGrievance Officer: [Name]\nEmail: [Official Email]\nPhone: [Official Phone Number]\nAddress: [Registered Office Address]",
        ],
      },
      {
        heading: "12. Legal Compliance",
        paragraphs: ["BlizBooks intends to comply with applicable Indian data-protection, information-technology, consumer-protection, tax and other relevant laws and regulations.", "This may include the Digital Personal Data Protection Act, 2023, the Information Technology Act, 2000, applicable rules and regulations, and other laws applicable to the services provided."],
      },
      {
        heading: "13. Changes to Privacy Policy",
        paragraphs: ["BlizBooks may update this Privacy Policy from time to time due to changes in its services, technology, business practices or applicable law.", "The latest version will be published through the appropriate BlizBooks website or application."],
      },
    ],
  },
  {
    slug: "terms-and-conditions",
    title: "Terms & Conditions",
    intro: "These Terms & Conditions govern access to and use of the BlizBooks software, website, mobile application and related digital business-management services.",
    sections: [
      { heading: "1. Acceptance of Terms", paragraphs: ["These Terms & Conditions govern access to and use of the BlizBooks software, website, mobile application and related digital business-management services.", "By registering for, accessing or using BlizBooks, the customer acknowledges that they have read, understood and agreed to these Terms & Conditions, subject to rights available under applicable law."] },
      { heading: "2. Description of Services", paragraphs: ["BlizBooks provides digital business-management solutions that may include:"], bullets: ["POS and billing", "GST invoicing", "Accounting", "Inventory and stock management", "Payroll and workforce management", "Expense management", "CRM-related functions", "Reports and analytics", "Payment-related integrations", "Multi-user and role-based access", "Mobile, web and Windows access", "The availability of particular features may depend on the customer’s selected service or subscription."] },
      { heading: "3. Software Is Not for Resale", paragraphs: ["BlizBooks is a digital software and business-management service and is not a physical product offered for resale.", "The customer receives a limited right to access and use the applicable BlizBooks service.", "The customer shall not, without prior written permission:"], bullets: ["Resell BlizBooks", "Sublicense BlizBooks", "Copy the software", "Redistribute the software", "Reverse engineer the software", "Modify or reproduce the underlying technology", "Commercially exploit BlizBooks outside the agreed service"] },
      { heading: "4. Account Registration", paragraphs: ["Customers must provide accurate and complete information when creating an account.", "Customers are responsible for:"], bullets: ["Maintaining account accuracy", "Protecting passwords and credentials", "Controlling authorised users", "Preventing unauthorised access", "Informing BlizBooks of suspected account misuse"] },
      { heading: "5. Multi-User Access", paragraphs: ["BlizBooks may provide role-wise access to different users.", "The customer is responsible for assigning suitable permissions to owners, managers, accountants, employees and other authorised users.", "The customer remains responsible for actions performed through its authorised accounts."] },
      { heading: "6. Customer Responsibilities", paragraphs: ["Customers agree to:"], bullets: ["Use BlizBooks only for lawful purposes.", "Provide accurate information.", "Maintain appropriate user access.", "Protect account credentials.", "Use the software according to applicable laws.", "Maintain appropriate records of their business transactions.", "Obtain required permissions or consent for information entered into the platform."] },
      { heading: "7. Prohibited Activities", paragraphs: ["Users shall not:"], bullets: ["Attempt unauthorised access to BlizBooks.", "Interfere with the operation of the platform.", "Introduce malware or malicious code.", "Misuse another user’s account.", "Attempt to bypass security controls.", "Reverse engineer the software except where expressly permitted by applicable law.", "Copy, resell or redistribute the software without permission.", "Use BlizBooks for unlawful activities."] },
      { heading: "8. Intellectual Property", paragraphs: ["All intellectual property associated with BlizBooks, including its software, technology, design, interface, branding, logos, documentation and related materials, belongs to BlizBooks or its respective licensors unless expressly stated otherwise.", "Use of BlizBooks does not transfer ownership of the underlying intellectual property to the customer."] },
      { heading: "9. Payments and Transactions", paragraphs: ["Customers are responsible for providing accurate payment and transaction information.", "Where third-party payment providers, banks or gateways are involved, their respective terms and policies may also apply.", "BlizBooks shall not be responsible for failures caused solely by a customer’s bank, payment provider, internet connection, device or other third-party service."] },
      { heading: "10. Failed Transactions", paragraphs: ["Where a transaction fails due to a technical or processing failure attributable to BlizBooks after the customer’s payment has been successfully debited, the customer may submit a refund request according to the BlizBooks Refund Policy.", "Eligible requests should generally be submitted within 7 days from the transaction date."] },
      { heading: "11. Claim Limit", paragraphs: ["For eligible verified service-related claims, BlizBooks’ contractual liability shall be limited to a maximum of ₹2,000 (Indian Rupees Two Thousand), unless a higher amount is required by applicable law or expressly agreed in writing.", "This amount does not constitute an automatic compensation payment for every complaint, service interruption or transaction failure."] },
      { heading: "12. Service Availability", paragraphs: ["BlizBooks aims to provide reliable access to its services but cannot guarantee uninterrupted availability at all times.", "Services may be temporarily affected by:"], bullets: ["Scheduled maintenance", "Emergency maintenance", "Internet/network problems", "Cloud infrastructure issues", "Third-party service failures", "Cybersecurity incidents", "Government requirements", "Events beyond the reasonable control of BlizBooks"] },
      { heading: "13. Suspension or Termination", paragraphs: ["BlizBooks may suspend or restrict access where reasonably necessary due to:"], bullets: ["Violation of these Terms", "Unlawful use", "Security concerns", "Fraudulent activity", "Non-payment", "Misuse of the platform", "Where appropriate and legally required, BlizBooks may provide notice before suspension or termination."] },
      { heading: "14. Limitation of Liability", paragraphs: ["To the maximum extent permitted by applicable law, BlizBooks shall not be liable for indirect, incidental, special or consequential losses arising from the use or inability to use the service.", "BlizBooks shall not be responsible for losses caused solely by customer negligence, incorrect data entry, unauthorised customer access, third-party failures, network failures or events beyond BlizBooks’ reasonable control.", "Nothing in these Terms excludes liability that cannot legally be excluded or limited."] },
      { heading: "15. Indemnification", paragraphs: ["To the extent permitted by law, customers agree to indemnify BlizBooks and its authorised representatives against claims or losses arising from:"], bullets: ["Unlawful use of BlizBooks", "Violation of these Terms", "Customer-provided data that violates third-party rights", "Unauthorised use resulting from failure to protect account credentials", "Misuse of the platform"] },
      { heading: "16. Governing Law", paragraphs: ["These Terms shall be governed by the laws of India, subject to mandatory statutory rights and remedies available to customers."] },
      { heading: "17. Dispute Resolution", paragraphs: ["Customers should first attempt to resolve disputes through BlizBooks’ customer support or grievance process.", "If a dispute cannot be resolved amicably, it may be referred to the competent courts or authorities having jurisdiction under applicable law.", "Proposed jurisdiction: [Bengaluru, Karnataka, India]", "The final jurisdiction clause should be reviewed and confirmed by BlizBooks’ legal counsel based on the company’s registered office and applicable law."] },
      { heading: "18. Legal Compliance", paragraphs: ["BlizBooks intends to comply with applicable Indian laws and regulations, including laws relating to information technology, personal data, consumer protection, taxation and digital business services."] },
      { heading: "19. Changes to Terms", paragraphs: ["BlizBooks may modify these Terms & Conditions when necessary due to changes in services, business practices or applicable law.", "Updated Terms will be published through the appropriate BlizBooks website or application."] },
    ],
  },
  {
    slug: "refund-policy",
    title: "Refund Policy",
    intro: "This Refund Policy explains the circumstances under which customers may request a refund for eligible BlizBooks transactions.",
    sections: [
      { heading: "1. Introduction", paragraphs: ["This Refund Policy explains the circumstances under which customers may request a refund for eligible BlizBooks transactions.", "BlizBooks provides digital software and business-management services rather than a physical product for resale."] },
      { heading: "2. Seven-Day Refund Period", paragraphs: ["Where a customer has been charged for a transaction that has failed due to a technical or transaction-processing failure attributable to BlizBooks, the customer may request a refund within 7 days from the date of the failed transaction.", "Requests submitted after 7 days may not be accepted unless a refund is required under applicable law or is otherwise approved by BlizBooks."] },
      { heading: "3. Failed Transaction", paragraphs: ["A transaction may be considered eligible for review where:"], bullets: ["The customer’s account was successfully debited.", "The corresponding BlizBooks service or transaction was not successfully completed.", "The failure is verified as being attributable to BlizBooks or its applicable transaction-processing system.", "The customer may be required to provide sufficient information to verify the transaction."] },
      { heading: "4. Information Required for Refund Request", paragraphs: ["A customer may be required to provide:"], bullets: ["Customer/business name", "Registered mobile number or email address", "Transaction/reference number", "Transaction date and time", "Amount paid", "Payment confirmation", "Bank/payment-provider transaction evidence", "Description of the issue", "Any additional information reasonably required for verification"] },
      { heading: "5. Refund Verification", paragraphs: ["All refund requests are subject to verification.", "BlizBooks may review transaction records, payment information and technical logs before approving or rejecting a refund request.", "Submitting a refund request does not automatically guarantee approval."] },
      { heading: "6. Refund Processing", paragraphs: ["Once an eligible refund is approved, BlizBooks will initiate the refund through the original payment method where reasonably possible.", "The time required for the refunded amount to appear in the customer’s account may depend on the relevant bank, card issuer, UPI provider, payment gateway or financial institution."] },
      { heading: "7. Non-Refundable or Non-Eligible Situations", paragraphs: ["A refund may not be available where:"], bullets: ["The service or transaction was successfully completed.", "The customer entered incorrect information.", "The failure was caused by the customer’s device or internet connection.", "The failure was caused by the customer’s bank or payment provider.", "The issue resulted from a third-party service.", "The customer has misused or violated the BlizBooks Terms & Conditions.", "The refund request is submitted after the applicable 7-day period.", "The transaction is fraudulent, unauthorised or otherwise invalid.", "The claim does not satisfy the eligibility requirements.", "Nothing in this section removes any consumer or statutory rights that cannot legally be excluded."] },
      { heading: "8. ₹2,000 Claim Limit", paragraphs: ["For eligible and verified service-related claims covered by this Refund Policy, the maximum contractual claim amount shall be ₹2,000 (Indian Rupees Two Thousand), unless a higher amount is required by applicable law or expressly agreed in writing by BlizBooks.", "The ₹2,000 limit is a contractual claim limit and should not be interpreted as an automatic compensation amount.", "BlizBooks may require supporting documents or transaction evidence before determining eligibility."] },
      { heading: "9. No Automatic Compensation", paragraphs: ["A failed transaction does not automatically entitle the customer to compensation.", "Refunds or claims will be considered based on:"], bullets: ["Whether the amount was actually debited.", "Whether the corresponding service or transaction failed.", "The reason for the failure.", "Whether the failure is attributable to BlizBooks.", "Whether the claim was submitted within the applicable period.", "Applicable law."] },
      { heading: "10. Duplicate or Incorrect Payments", paragraphs: ["If a customer believes that an amount has been charged more than once for the same transaction, the customer should contact BlizBooks promptly with the relevant transaction details.", "BlizBooks may investigate duplicate transactions and process eligible refunds after verification."] },
      { heading: "11. Unauthorised Transactions", paragraphs: ["Customers should immediately report transactions they believe are unauthorised or fraudulent.", "BlizBooks may request supporting information and may coordinate with the relevant payment provider where appropriate.", "Customers should also immediately contact their bank or payment provider where required."] },
      { heading: "12. Cancellation", paragraphs: ["Where cancellation is permitted under the applicable BlizBooks service or subscription terms, the customer should submit the cancellation request through the designated BlizBooks support channel.", "Cancellation does not automatically create a right to a refund unless provided under the applicable agreement, this Refund Policy or applicable law."] },
      { heading: "13. Third-Party Payment Providers", paragraphs: ["Where payment is processed through a third-party payment gateway, bank, card network or UPI provider, the applicable provider’s processing timelines and procedures may affect refund processing.", "BlizBooks cannot guarantee the exact time taken by a third-party financial institution to credit an approved refund."] },
      { heading: "14. Customer Responsibility", paragraphs: ["Customers are responsible for:"], bullets: ["Providing accurate payment information.", "Checking transaction status.", "Keeping transaction records.", "Reporting failed transactions promptly.", "Providing accurate information during refund investigations."] },
      { heading: "15. Legal Rights", paragraphs: ["Nothing in this Refund Policy is intended to restrict or remove any right, remedy or protection that cannot legally be excluded under applicable Indian law.", "The Refund Policy should be read together with the BlizBooks Terms & Conditions and Privacy Policy."] },
      { heading: "16. Governing Law", paragraphs: ["This Refund Policy shall be governed by the laws of India, subject to applicable consumer and statutory rights."] },
      { heading: "17. Dispute Resolution", paragraphs: ["Customers should first contact BlizBooks customer support regarding refund disputes.", "If the matter cannot be resolved through internal resolution, the customer may pursue remedies available under applicable Indian law before the appropriate competent authority or court.", "Proposed jurisdiction: [Bengaluru, Karnataka, India]"] },
      { heading: "18. Changes to Refund Policy", paragraphs: ["BlizBooks may update this Refund Policy from time to time to reflect changes in its services, payment processes, business practices or applicable law.", "The latest version will be made available through the appropriate BlizBooks website or application."] },
    ],
  },
];

export function getLegalDocument(slug: string) {
  return legalDocuments.find((document) => document.slug === slug);
}
