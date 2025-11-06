import type { QuizQuestion } from "@shared/schema";

export const quizQuestionsData: QuizQuestion[] = [
  {
    id: "q-1",
    question: "How many annual users did Shein have in 2023?",
    options: ["43.7 million", "74.7 million", "88.8 million", "100 million"],
    correctAnswer: 2,
    explanation: "Shein had 88.8 million annual users in 2023, showing massive growth from 43.7 million in 2021.",
    category: "Statistics",
  },
  {
    id: "q-2",
    question: "What was Shein's employee-to-customer ratio in 2023?",
    options: ["1:4,370", "1:5,500", "1:7,195", "1:8,073"],
    correctAnswer: 3,
    explanation: "In 2023, Shein had 1 employee for every 8,073 customers, the worst ratio in the three-year period, indicating increasing worker burden.",
    category: "Worker Conditions",
  },
  {
    id: "q-3",
    question: "What percentage of global carbon emissions does the fashion industry produce?",
    options: ["3%", "5%", "10%", "15%"],
    correctAnswer: 2,
    explanation: "The fashion industry produces 10% of global carbon emissions, more than international flights and maritime shipping combined.",
    category: "Environment",
  },
  {
    id: "q-4",
    question: "What percentage of textiles end up in landfills annually?",
    options: ["35%", "55%", "70%", "85%"],
    correctAnswer: 3,
    explanation: "85% of all textiles produced each year end up in landfills or are incinerated, with less than 1% recycled into new garments.",
    category: "Environment",
  },
  {
    id: "q-5",
    question: "What was the average annual salary for Shein employees in 2023?",
    options: ["$4,050", "$6,672", "$9,972", "$15,000"],
    correctAnswer: 2,
    explanation: "The average salary was $9,972 USD in 2023. While this increased from $4,050 in 2021, it remains below living wage standards in most regions.",
    category: "Worker Conditions",
  },
  {
    id: "q-6",
    question: "How much water does the fashion industry consume annually?",
    options: ["25 billion cubic meters", "50 billion cubic meters", "93 billion cubic meters", "150 billion cubic meters"],
    correctAnswer: 2,
    explanation: "The fashion industry consumes 93 billion cubic meters of water annually - enough to meet the drinking water needs of 5 million people.",
    category: "Environment",
  },
  {
    id: "q-7",
    question: "What percentage of ocean microplastics comes from synthetic textiles?",
    options: ["15%", "25%", "35%", "45%"],
    correctAnswer: 2,
    explanation: "35% of ocean microplastics come from synthetic textiles that release fibers during washing of fast fashion garments.",
    category: "Environment",
  },
  {
    id: "q-8",
    question: "What is a key requirement of the Fashion Sustainability and Social Accountability Act?",
    options: [
      "Ban all synthetic materials",
      "Require companies to disclose supply chains and pay living wages",
      "Only allow local manufacturing",
      "Mandate 100% recycled materials"
    ],
    correctAnswer: 1,
    explanation: "The Act requires fashion companies to disclose supply chain information, mandate living wages, reduce emissions, and establish accountability for labor violations.",
    category: "Policy",
  },
  {
    id: "q-9",
    question: "By what percentage did Shein's annual users grow from 2021 to 2023?",
    options: ["50%", "75%", "103%", "125%"],
    correctAnswer: 2,
    explanation: "Shein's user base grew by 103% (from 43.7 to 88.8 million), while employee count only increased by 10%, showing unsustainable scaling.",
    category: "Statistics",
  },
  {
    id: "q-10",
    question: "Which companies would the Fashion Sustainability Act apply to?",
    options: [
      "All fashion companies",
      "Companies with revenue over $100 million",
      "Only international companies",
      "Companies with over 1,000 employees"
    ],
    correctAnswer: 1,
    explanation: "The Act applies to fashion companies with annual revenues exceeding $100 million operating in the jurisdiction.",
    category: "Policy",
  },
];
