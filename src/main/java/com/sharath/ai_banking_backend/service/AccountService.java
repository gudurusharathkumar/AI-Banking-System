package com.sharath.ai_banking_backend.service;
import com.sharath.ai_banking_backend.dto.DashboardResponse;
import com.sharath.ai_banking_backend.dto.DepositRequest;
import com.sharath.ai_banking_backend.dto.WithdrawRequest;
import com.sharath.ai_banking_backend.entity.Account;
import com.sharath.ai_banking_backend.entity.Transaction;
import com.sharath.ai_banking_backend.repository.AccountRepository;
import com.sharath.ai_banking_backend.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountService {

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private TransactionRepository transactionRepository;

    public String createAccount(String accountHolderName) {

        Account account = new Account();

        account.setAccountHolderName(accountHolderName);
        account.setAccountNumber("ACC" + System.currentTimeMillis());
        account.setBalance(0.0);

        accountRepository.save(account);

        return "Account Created Successfully";
    }

    public String deposit(DepositRequest request) {

        Account account =
                accountRepository.findByAccountNumber(
                        request.getAccountNumber());

        if (account == null) {
            return "Account Not Found";
        }

        account.setBalance(
                account.getBalance() + request.getAmount());

        accountRepository.save(account);

        Transaction transaction = new Transaction();
        transaction.setTransactionType("DEPOSIT");
        transaction.setFromAccount(account.getAccountNumber());
        transaction.setToAccount(account.getAccountNumber());
        transaction.setAmount(request.getAmount());

        transactionRepository.save(transaction);

        return "Amount Deposited Successfully";
    }

    public String withdraw(WithdrawRequest request) {

        Account account =
                accountRepository.findByAccountNumber(
                        request.getAccountNumber());

        if (account == null) {
            return "Account Not Found";
        }

        if (account.getBalance() < request.getAmount()) {
            return "Insufficient Balance";
        }

        account.setBalance(
                account.getBalance() - request.getAmount());

        accountRepository.save(account);

        Transaction transaction = new Transaction();
        transaction.setTransactionType("WITHDRAW");
        transaction.setFromAccount(account.getAccountNumber());
        transaction.setToAccount(account.getAccountNumber());
        transaction.setAmount(request.getAmount());

        transactionRepository.save(transaction);

        return "Amount Withdrawn Successfully";
    }

    public Double checkBalance(String accountNumber) {

        Account account =
                accountRepository.findByAccountNumber(accountNumber);

        if (account == null) {
            return -1.0;
        }

        return account.getBalance();
    }

    public String transferMoney(
            String fromAccountNumber,
            String toAccountNumber,
            double amount) {

        Account sender =
                accountRepository.findByAccountNumber(
                        fromAccountNumber);

        if (sender == null) {
            return "Sender Account Not Found";
        }

        Account receiver =
                accountRepository.findByAccountNumber(
                        toAccountNumber);

        if (receiver == null) {
            return "Receiver Account Not Found";
        }

        if (sender.getBalance() < amount) {
            return "Insufficient Balance";
        }

        sender.setBalance(sender.getBalance() - amount);
        receiver.setBalance(receiver.getBalance() + amount);

        accountRepository.save(sender);
        accountRepository.save(receiver);

        Transaction transaction = new Transaction();
        transaction.setTransactionType("TRANSFER");
        transaction.setFromAccount(fromAccountNumber);
        transaction.setToAccount(toAccountNumber);
        transaction.setAmount(amount);

        transactionRepository.save(transaction);

        return "Money Transferred Successfully";
    }

    public Account getAccountDetails(String accountNumber) {

        return accountRepository.findByAccountNumber(accountNumber);
    }
    public DashboardResponse getDashboard(String accountNumber) {

        Account account =
                accountRepository.findByAccountNumber(accountNumber);

        if (account == null) {
            return null;
        }

        DashboardResponse response =
                new DashboardResponse();

        response.setAccountHolderName(
                account.getAccountHolderName());

        response.setAccountNumber(
                account.getAccountNumber());

        response.setBalance(
                account.getBalance());

        response.setTotalTransactions(
                transactionRepository.countByFromAccountOrToAccount(
                        accountNumber,
                        accountNumber
                ));

        return response;
    }
    public String deleteAccount(String accountNumber) {

        Account account =
                accountRepository.findByAccountNumber(accountNumber);

        if (account == null) {
            return "Account Not Found";
        }

        accountRepository.delete(account);

        return "Account Deleted Successfully";
    }
    public java.util.List<Account> searchAccounts(String name) {

        return accountRepository
                .findByAccountHolderNameContainingIgnoreCase(name);
    }
    public String updateAccountHolderName(
            String accountNumber,
            String newName) {

        Account account =
                accountRepository.findByAccountNumber(accountNumber);

        if (account == null) {
            return "Account Not Found";
        }

        account.setAccountHolderName(newName);

        accountRepository.save(account);

        return "Account Holder Name Updated Successfully";
    }
    public com.sharath.ai_banking_backend.dto.ReportResponse
    getTransactionReport(String accountNumber) {

        Account account =
                accountRepository.findByAccountNumber(accountNumber);

        if (account == null) {
            return null;
        }

        double deposits =
                transactionRepository
                        .findByToAccountAndTransactionType(
                                accountNumber,
                                "DEPOSIT")
                        .stream()
                        .mapToDouble(Transaction::getAmount)
                        .sum();

        double withdrawals =
                transactionRepository
                        .findByFromAccountAndTransactionType(
                                accountNumber,
                                "WITHDRAW")
                        .stream()
                        .mapToDouble(Transaction::getAmount)
                        .sum();

        double transfers =
                transactionRepository
                        .findByFromAccountAndTransactionType(
                                accountNumber,
                                "TRANSFER")
                        .stream()
                        .mapToDouble(Transaction::getAmount)
                        .sum();

        com.sharath.ai_banking_backend.dto.ReportResponse
                response =
                new com.sharath.ai_banking_backend.dto.ReportResponse();

        response.setAccountNumber(accountNumber);
        response.setTotalDeposits(deposits);
        response.setTotalWithdrawals(withdrawals);
        response.setTotalTransfers(transfers);
        response.setCurrentBalance(account.getBalance());

        return response;
    }
}