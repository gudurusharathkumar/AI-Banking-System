package com.sharath.ai_banking_backend.dto;

import lombok.Data;

@Data
public class WithdrawRequest {

    private String accountNumber;
    private double amount;

}