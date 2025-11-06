import type { SheinStatistics, PolicyData } from "@shared/schema";

export const sheinStatistics: SheinStatistics = {
  annualUsers: [
    { year: 2021, users: 43.7 },
    { year: 2022, users: 74.7 },
    { year: 2023, users: 88.8 },
  ],
  employeeRatios: [
    { year: 2021, ratio: 4370, employeesPerCustomer: "1:4370" },
    { year: 2022, ratio: 7195, employeesPerCustomer: "1:7195" },
    { year: 2023, ratio: 8073, employeesPerCustomer: "1:8073" },
  ],
  salaryData: [
    { year: 2021, salary: 4050.48 },
    { year: 2022, salary: 6672.00 },
    { year: 2023, salary: 9972.00 },
  ],
  employeeCount: [
    { year: 2021, employees: 10000 },
    { year: 2022, employees: 10382 },
    { year: 2023, employees: 11000 },
  ],
};

export const policyData: PolicyData = {
  name: "Fashion Sustainability and Social Accountability Act",
  description: "A comprehensive legislative framework designed to hold fashion companies accountable for their environmental and social impacts throughout their supply chains.",
  goals: [
    "Require fashion brands to disclose supply chain information and environmental impacts",
    "Mandate living wages for garment workers across the supply chain",
    "Set binding targets for reducing carbon emissions and textile waste",
    "Establish accountability mechanisms for labor rights violations",
    "Promote circular economy practices and sustainable material sourcing",
  ],
  implementation: "The Act would apply to fashion companies with annual revenues exceeding $100 million operating in the jurisdiction. Companies must conduct annual impact assessments, publish sustainability reports, and implement remediation plans for identified violations. Non-compliance results in fines and potential market restrictions.",
  impact: "This policy aims to transform the fast fashion industry by ensuring transparency, protecting workers' rights, reducing environmental damage, and incentivizing sustainable business practices. It addresses the root causes of exploitation and environmental degradation in the global fashion supply chain.",
};

export const environmentalFacts = [
  {
    stat: "10% of global carbon emissions",
    description: "The fashion industry produces more carbon emissions than international flights and maritime shipping combined",
  },
  {
    stat: "93 billion cubic meters",
    description: "Annual water consumption by the fashion industry, enough to meet the needs of 5 million people",
  },
  {
    stat: "85% ends up in landfills",
    description: "Of all textiles produced annually, the vast majority is discarded rather than recycled",
  },
  {
    stat: "35% of ocean microplastics",
    description: "Comes from synthetic textiles released during washing of fast fashion garments",
  },
];
