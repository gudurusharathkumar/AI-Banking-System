package com.sharath.ai_banking_backend.dto;

import lombok.Data;

@Data
public class DepositRequest {

    private String accountNumber;
    private double amount;
}