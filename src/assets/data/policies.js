import {
    motor,
    contractor,
    pliability,
    agro,
    empliability,
    marine,
    livestock,
    fidelity,
    domestic,
    fire,
    mmalpractice,
    git,
    cit,
    medical,
    paccident,
    pindemnity,
    theft,
    wiba,
    travel,
    gpa
} from "../policies";

const policies = [
    {
        id: 1,
        name: "Motor Insurance",
        description: "Coverage for motor vehicles and drivers.",
        img: motor,
    },
    {
        id: 2,
        name: "Contractors All Risks",
        description: "Protects construction projects against damage or loss.",
        img: contractor,
    },
    {
        id: 3,
        name: "Public Liability",
        description: "Covers legal liabilities to third parties.",
        img: pliability,
    },
    {
        id: 4,
        name: "Agro-insurance",
        description: "Insurance solutions for farmers and agribusinesses.",
        img: agro,
    },
    {
        id: 5,
        name: "Employer’s Liability",
        description: "Protects employers from employee injury claims.",
        img: empliability,
    },
    {
        id: 6,
        name: "Marine",
        description:
            "Provides coverage for cargo and vessels against loss or damage during transit over sea and inland waterways.",
        img: marine,
    },
    {
        id: 7,
        name: "Livestock Insurance",
        description: "Coverage for livestock against death or disease.",
        img: livestock,
    },
    {
        id: 8,
        name: "Money Insurance & Fidelity Guarantee",
        description: "Covers loss of money and employee dishonesty.",
        img: fidelity,
    },
    {
        id: 9,
        name: "Domestic Package",
        description: "Comprehensive protection for homes and belongings.",
        img: domestic,
    },
    {
        id: 10,
        name: "Fire and Allied Perils",
        description: "Coverage against fire, explosions, and related risks.",
        img: fire,
    },
    {
        id: 11,
        name: "Medical Malpractice",
        description: "Protects medical professionals from legal claims.",
        img: mmalpractice,
    },
    {
        id: 12,
        name: "Goods in Transit",
        description: "Covers goods against loss or damage during transportation by road, rail, sea, or air.",
        img: git,
    },
    {
        id: 13,
        name: "Cash in Transit",
        description: "covers loss of money due to theft or robbery while being transported.",
        img: cit,
    },
    {
        id: 14,
        name: "Medical/Health Insurance",
        description: "Covers costs for treatment, hospitalization, and medication due to illness or injury.",
        img: medical,
    },
    {
        id: 15,
        name: "Personal Accident Insurance",
        description: "Financial protection after accidents or injury.",
        img: paccident,
    },
    {
        id: 16,
        name: "Professional Indemnity",
        description: "Covers professionals against negligence claims.",
        img: pindemnity,
    },
    {
        id: 17,
        name: "Theft/ Burglary Insurance",
        description: "Protection against loss from burglary and theft.",
        img: theft,
    },
    {
        id: 18,
        name: "WIBA",
        description: "Work Injury Benefits Act compliant group cover.",
        img: wiba,
    },
    {
        id: 19,
        name: "Travel",
        description: "Travel-related emergency and health cover.",
        img: travel
    },
    {
        id: 20,
        name: "Group Personal Accident (GPA)",
        description: "Covers a group of individuals against accidental injury, disability, or death.",
        img: gpa
    },
];

export default policies;
