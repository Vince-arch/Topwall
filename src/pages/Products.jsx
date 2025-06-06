import React from 'react';
import { Link } from 'react-router-dom';

const policies = [
  { id: 1, name: "Automobile Insurance", description: "Coverage for motor vehicles and drivers." },
  { id: 2, name: "Contractors All Risks", description: "Protects construction projects against damage or loss." },
  { id: 3, name: "Public Liability", description: "Covers legal liabilities to third parties." },
  { id: 4, name: "Agro-insurance", description: "Insurance solutions for farmers and agribusinesses." },
  { id: 5, name: "Employer’s Liability", description: "Protects employers from employee injury claims." },
  { id: 6, name: "Pension & Life insurance", description: "Long-term savings and life coverage plans." },
  { id: 7, name: "Livestock Insurance", description: "Coverage for livestock against death or disease." },
  { id: 8, name: "Money Insurance & Fidelity Guarantee", description: "Covers loss of money and employee dishonesty." },
  { id: 9, name: "Domestic Package", description: "Comprehensive protection for homes and belongings." },
  { id: 10, name: "Fire and Allied Perils", description: "Coverage against fire, explosions, and related risks." },
  { id: 11, name: "Hospital Malpractice", description: "Protects medical professionals from legal claims." },
  { id: 12, name: "Life & Pensions", description: "Savings and retirement benefits with life cover." },
  { id: 13, name: "Loan Guard", description: "Pays off loans in case of disability or death." },
  { id: 14, name: "Medical/Health Insurance", description: "Comprehensive health coverage plans." },
  { id: 15, name: "Personal Accident Insurance", description: "Financial protection after accidents or injury." },
  { id: 16, name: "Professional Indemnity", description: "Covers professionals against negligence claims." },
  { id: 17, name: "Theft/ Burglary Insurance", description: "Protection against loss from burglary and theft." },
  { id: 18, name: "Student Personal Cover", description: "Accident coverage for students." },
  { id: 19, name: "WIBA/Group Personal Accident (GPA)", description: "Work Injury Benefits Act compliant group cover." },
  { id: 20, name: "Travel", description: "Travel-related emergency and health cover." },
  { id: 21, name: "Familia Imara Last Expense", description: "Affordable funeral expense coverage." },
];

const Products = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Insurance Policies</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {policies.map((policy) => (
          <div
            key={policy.id}
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-2">{policy.name}</h2>
            <p className="text-sm text-gray-600">{policy.description}</p>
            <Link to={`/products/${policy.id}`} className="mt-4 inline-block text-sm text-blue-600 hover:underline">
              Learn More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
