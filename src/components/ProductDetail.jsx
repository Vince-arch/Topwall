import React from 'react';
import { useParams, Link } from 'react-router-dom';

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


const ProductDetail = () => {
    const { id } = useParams(); // this gets the id param from the URL

    // Convert id string to number, then find matching policy
    const policy = policies.find((p) => p.id === Number(id));

    // If no policy found, show a "not found" message
    if (!policy) {
        return (
            <div className="p-6">
                <h2 className="text-xl font-bold mb-4">Policy not found</h2>
                <Link to="/products" className="text-blue-600 hover:underline">
                    Back to Policies
                </Link>
            </div>
        );
    }

    // Show details of the found policy
    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">{policy.name}</h1>
            <p className="text-gray-700 mb-6">{policy.description}</p>

            {/* You can add more info here */}

            <Link to="/products" className="inline-block mt-6 text-blue-600 hover:underline">
                ← Back to Policies
            </Link>
        </div>
    );
};

export default ProductDetail;
