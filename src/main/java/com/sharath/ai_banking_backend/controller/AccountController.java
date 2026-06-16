package com.sharath.ai_banking_backend.controller;

import java.util.List;

import com.sharath.ai_banking_backend.dto.DashboardResponse;
import com.sharath.ai_banking_backend.dto.DepositRequest;
import com.sharath.ai_banking_backend.dto.TransferRequest;
import com.sharath.ai_banking_backend.dto.WithdrawRequest;
import com.sharath.ai_banking_backend.entity.Account;
import com.sharath.ai_banking_backend.entity.Transaction;
import com.sharath.ai_banking_backend.repository.TransactionRepository;
import com.sharath.ai_banking_backend.service.AccountService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {
    "http://localhost:5173",
    "https://ai-banking-system-chi.vercel.app"
})
@RestController
@RequestMapping("/api/accounts")
public class AccountController {

    @Autowired
    private AccountService accountService;

    @Autowired
    private TransactionRepository transactionRepository;

    @PostMapping("/create")
    public String createAccount(
            @RequestParam String accountHolderName) {

        return accountService.createAccount(accountHolderName);
    }

    @PostMapping("/deposit")
    public String deposit(
            @RequestBody DepositRequest request) {

        return accountService.deposit(request);
    }

    @PostMapping("/withdraw")
    public String withdraw(
            @RequestBody WithdrawRequest request) {

        return accountService.withdraw(request);
    }

    @GetMapping("/balance")
    public Double checkBalance(
            @RequestParam String accountNumber) {

        return accountService.checkBalance(accountNumber);
    }

    @PostMapping("/transfer")
    public String transferMoney(
            @RequestBody TransferRequest request) {

        return accountService.transferMoney(
                request.getFromAccountNumber(),
                request.getToAccountNumber(),
                request.getAmount());
    }

    @GetMapping("/details")
    public Account getAccountDetails(
            @RequestParam String accountNumber) {

        return accountService.getAccountDetails(accountNumber);
    }

    @GetMapping("/dashboard")
    public DashboardResponse getDashboard(
            @RequestParam String accountNumber) {

        return accountService.getDashboard(accountNumber);
    }

    @DeleteMapping("/delete")
    public String deleteAccount(
            @RequestParam String accountNumber) {

        return accountService.deleteAccount(accountNumber);
    }

    @GetMapping("/search")
    public List<Account> searchAccounts(
            @RequestParam String name) {

        return accountService.searchAccounts(name);
    }

    @PutMapping("/update-name")
    public String updateAccountHolderName(
            @RequestParam String accountNumber,
            @RequestParam String newName) {

        return accountService.updateAccountHolderName(
                accountNumber,
                newName);
    }

    @GetMapping("/transactions")
    public List<Transaction> getTransactions(
            @RequestParam String accountNumber) {

        return transactionRepository
                .findByFromAccountOrToAccount(
                        accountNumber,
                        accountNumber);
    }
}