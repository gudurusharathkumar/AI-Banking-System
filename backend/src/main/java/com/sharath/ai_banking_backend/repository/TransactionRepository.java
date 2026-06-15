package com.sharath.ai_banking_backend.repository;

import com.sharath.ai_banking_backend.entity.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TransactionRepository
        extends JpaRepository<Transaction, Long> {

    List<Transaction> findByFromAccountOrToAccount(
            String fromAccount,
            String toAccount
    );

    List<Transaction> findTop5ByFromAccountOrToAccountOrderByIdDesc(
            String fromAccount,
            String toAccount
    );

    Long countByFromAccountOrToAccount(
            String fromAccount,
            String toAccount
    );

    List<Transaction> findByToAccountAndTransactionType(
            String toAccount,
            String transactionType
    );

    List<Transaction> findByFromAccountAndTransactionType(
            String fromAccount,
            String transactionType
    );
}