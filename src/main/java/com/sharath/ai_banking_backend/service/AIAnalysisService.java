package com.sharath.ai_banking_backend.service;

import org.springframework.stereotype.Service;

@Service
public class AIAnalysisService {

    public String analyzeTransactions() {

        return "Total Deposits: 50000, "
                + "Total Withdrawals: 20000, "
                + "Shopping Expenses: 35%, "
                + "Recommended Savings: 10000";
    }
}