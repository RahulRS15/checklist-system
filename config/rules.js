module.exports = [
    {
        id: 'valuationFeePaid',
        description: 'Valuation Fee Paid',
        evaluate: (data) => data.isValuationFeePaid === true,
    },
    {
        id: 'ukResident',
        description: 'UK Resident',
        evaluate: (data) => data.isUkResident === true,
    },
    {
        id: 'riskRatingMedium',
        description: 'Risk Rating Medium',
        evaluate: (data) => data.riskRating === 'Medium',
    },
    {
        id: 'ltvBelow60',
    description: 'LTV Below 60%',
    evaluate: (data) => {
        const loanRequired = parseFloat(data.loanRequired || 0);
        const purchasePrice = parseFloat(data.purchasePrice || 0);

        if (!loanRequired || !purchasePrice || purchasePrice <= 0) {
            console.log('Invalid data for LTV calculation:', { loanRequired, purchasePrice });
            return false;
        }

        const ltv = (loanRequired / purchasePrice) * 100;
        console.log(`Loan Required: ${loanRequired}, Purchase Price: ${purchasePrice}, LTV: ${ltv}`);
        return ltv < 60;
        },
    },
    
];
