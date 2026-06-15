package com.sharath.ai_banking_backend.repository;

import com.sharath.ai_banking_backend.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AccountRepository extends JpaRepository<Account, Long> {

    Account findByAccountNumber(String accountNumber);

    List<Account> findByAccountHolderNameContainingIgnoreCase(
            String accountHolderName
    );
}