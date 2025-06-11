import React from 'react';
import { useParams, Link } from 'react-router-dom';
import automobile from "../assets/policies/automobile.jpg"; // Image import

const policies = [
    { id: 1, name: "Automobile Insurance", description: "Automobile Insurance helps protect you and your vehicle from unexpected costs due to accidents, theft, fire, or damage. Whether you're driving in the city or upcountry, having the right cover gives you peace of mind knowing that repairs, medical costs, or third-party damages won’t come directly out of your pocket. You can choose different levels of coverage depending on your needs — from covering only third-party damage to full protection for your car, passengers, and more.", img: automobile },
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
    const { id } = useParams();
    const policy = policies.find((p) => p.id === Number(id));

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

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">{policy.name}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                {policy.img && (
                    <img
                        src={policy.img}
                        alt={policy.name}
                        className="w-full h-64 object-cover rounded-lg shadow-sm"
                        loading="lazy"
                    />
                )}
                <div>
                    <p className="text-gray-700 text-lg">{policy.description}</p>
                    {/* You can add more fields here (benefits, coverage, etc.) */}
                </div>
            </div>

            <Link to="/products" className="inline-block mt-8 text-blue-600 hover:underline">
                ← Back to Policies
            </Link>
        </div>
    );
};

export default ProductDetail;
