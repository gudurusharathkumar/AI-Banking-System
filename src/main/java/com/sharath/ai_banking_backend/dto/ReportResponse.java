package com.sharath.ai_banking_backend.dto;

import lombok.Data;

@Data
public class ReportResponse {

    private String accountNumber;
    private Double totalDeposits;
    private Double totalWithdrawals;
    private Double totalTransfers;
    private Double currentBalance;
}