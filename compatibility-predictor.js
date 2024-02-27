const data = require("./data.json");
const config = require("./config.json");

const { applicants } = data;
const { attributeWeights } = config;

function printApplicantScoresInJson() {
  console.log(JSON.stringify(scoreApplicants(attributeWeights)));
}

function scoreApplicants(attributeWeights) {
  return {
    scoreApplicants: applicants.map((applicant) => {
      const { name, attributes } = applicant;
      const score = calculateApplicantScore(attributes, attributeWeights);
      return { name, score };
    }),
  };
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

printApplicantScoresInJson();
