const axios = require('axios');
const rules = require('../config/rules');

const API_URL =
    'http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639';

async function evaluateChecklist() {
    try {
        const response = await axios.get(API_URL);
const data = response.data;

console.log('Full API Response:', JSON.stringify(data, null, 2));
 // Debug log to verify API response

        // Evaluate each rule
        const results = rules.map((rule) => ({
            id: rule.id,
            description: rule.description,
            passed: rule.evaluate(data),
        }));

        return results;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw new Error('Failed to fetch input data.');
    }
}

module.exports = { evaluateChecklist };
