import React from 'react';
import { Link } from 'react-router-dom';
import motor from "../assets/policies/motor.jpg";
import contractor from "../assets/policies/contractor.jpg"
import pliability from "../assets/policies/pliability.jpg";
import agro from "../assets/policies/agro.jpg"
import empliability from "../assets/policies/empliability.jpg"
import marine from "../assets/policies/marine.jpg"
import livestock from "../assets/policies/livestock.jpg"

const policies = [
  { id: 1, name: "Motor Insurance", description: "Coverage for motor vehicles and drivers.", img: motor },
  { id: 2, name: "Contractors All Risks", description: "Protects construction projects against damage or loss.", img: contractor },
  { id: 3, name: "Public Liability", description: "Covers legal liabilities to third parties.", img: pliability },
  { id: 4, name: "Agro-insurance", description: "Insurance solutions for farmers and agribusinesses.", img: agro },
  { id: 5, name: "Employer’s Liability", description: "Protects employers from employee injury claims.", img: empliability },
  { id: 6, name: "Marine", description: "Provides coverage for cargo and vessels against loss or damage during transit over sea and inland waterways.", img: marine },
  { id: 7, name: "Livestock Insurance", description: "Coverage for livestock against death or disease.", img: livestock },
  { id: 8, name: "Money Insurance & Fidelity Guarantee", description: "Covers loss of money and employee dishonesty." },
  { id: 9, name: "Domestic Package", description: "Comprehensive protection for homes and belongings." },
  { id: 10, name: "Fire and Allied Perils", description: "Coverage against fire, explosions, and related risks." },
  { id: 11, name: "Hospital Malpractice", description: "Protects medical professionals from legal claims." },
  { id: 12, name: "Good in Transit", description: "" },
  { id: 13, name: "Cash in Transit", description: "" },
  { id: 14, name: "Medical/Health Insurance", description: "Comprehensive health coverage plans." },
  { id: 15, name: "Personal Accident Insurance", description: "Financial protection after accidents or injury." },
  { id: 16, name: "Professional Indemnity", description: "Covers professionals against negligence claims." },
  { id: 17, name: "Theft/ Burglary Insurance", description: "Protection against loss from burglary and theft." },
  { id: 18, name: "Student Personal Cover", description: "Accident coverage for students." },
  { id: 19, name: "WIBA/Group Personal Accident (GPA)", description: "Work Injury Benefits Act compliant group cover." },
  { id: 20, name: "Travel", description: "Travel-related emergency and health cover." },
  { id: 21, name: "Familia Imara Last Expense", description: "Affordable funeral expense coverage." },
  { id: 20, name: "Group Personal Accident (GPA)", description: "Covers a group of individuals against accidental injury, disability, or death." }
];

const Products = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Insurance Policies</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {policies.map((policy) => (
          <div
            key={policy.id}
            className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
          >
            {policy.img && (
              <img
                src={policy.img}
                alt={policy.name}
                className="w-full h-40 object-cover"
                loading="lazy"
              />
            )}
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{policy.name}</h2>
              <p className="text-sm text-gray-600">{policy.description}</p>
              <Link
                to={`/products/${policy.id}`}
                className="mt-4 inline-block text-sm text-blue-600 hover:underline"
              >
                Learn More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
