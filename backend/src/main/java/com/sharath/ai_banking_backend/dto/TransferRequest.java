package com.sharath.ai_banking_backend.dto;

import lombok.Data;

@Data
public class TransferRequest {

    private String fromAccountNumber;
    private String toAccountNumber;
    private double amount;

}