package com.sharath.ai_banking_backend.controller;

import com.sharath.ai_banking_backend.entity.Transaction;
import com.sharath.ai_banking_backend.repository.TransactionRepository;
import com.sharath.ai_banking_backend.service.PdfService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/transactions")
public class TransactionController {

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private PdfService pdfService;

    @GetMapping
    public List<Transaction> getAllTransactions() {

        return transactionRepository.findAll();
    }

    @GetMapping("/account")
    public List<Transaction> getTransactionsByAccount(
            @RequestParam String accountNumber) {

        return transactionRepository.findByFromAccountOrToAccount(
                accountNumber,
                accountNumber
        );
    }

    @GetMapping("/mini")
    public List<Transaction> getMiniStatement(
            @RequestParam String accountNumber) {

        return transactionRepository
                .findTop5ByFromAccountOrToAccountOrderByIdDesc(
                        accountNumber,
                        accountNumber
                );
    }

    @GetMapping("/pdf")
    public ResponseEntity<byte[]> downloadPdf(
            @RequestParam String accountNumber) {

        byte[] pdf =
                pdfService.generateMiniStatementPdf(
                        accountNumber);

        return ResponseEntity.ok()
                .header(
                        HttpHeaders.CONTENT_DISPOSITION,
                        "attachment; filename=ministatement.pdf"
                )
                .contentType(
                        MediaType.APPLICATION_PDF
                )
                .body(pdf);
    }
}