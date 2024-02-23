const data = require("./data.json");

const { applicants } = data;

function scoreApplicants(applicants, attributeWeights) {
  return JSON.stringify({
    scoreApplicants: applicants.map((applicant) => {
      const { name, attributes } = applicant;
      const score = calculateApplicantScore(attributes, attributeWeights);
      return { name, score };
    }),
  });
}

function calculateApplicantScore(applicantAttributes, attributeWeights) {
  let weightedScore = 0;
  let totalWeight = 0;

  for (let attributeWeight in attributeWeights) {
    if (applicantAttributes.hasOwnProperty(attributeWeight)) {
      weightedScore += attributeWeights[attributeWeight] * applicantAttributes[attributeWeight];
    }
    totalWeight += attributeWeights[attributeWeight];
  }

  const score = weightedScore / totalWeight / 10;
  const formattedScore = Number.parseFloat(score).toFixed(1);
  return formattedScore;
}

// Example usage
console.log(scoreApplicants(applicants, { intelligence: 9, endurance: 1 }));