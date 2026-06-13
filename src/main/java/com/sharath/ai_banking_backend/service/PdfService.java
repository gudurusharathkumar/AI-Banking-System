package com.sharath.ai_banking_backend.service;

import com.lowagie.text.Document;
import com.lowagie.text.Paragraph;
import com.lowagie.text.pdf.PdfWriter;
import com.sharath.ai_banking_backend.entity.Transaction;
import com.sharath.ai_banking_backend.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.util.List;

@Service
public class PdfService {

    @Autowired
    private TransactionRepository transactionRepository;

    public byte[] generateMiniStatementPdf(String accountNumber) {

        try {

            List<Transaction> transactions =
                    transactionRepository
                            .findTop5ByFromAccountOrToAccountOrderByIdDesc(
                                    accountNumber,
                                    accountNumber
                            );

            Document document = new Document();

            ByteArrayOutputStream out =
                    new ByteArrayOutputStream();

            PdfWriter.getInstance(document, out);

            document.open();

            document.add(
                    new Paragraph("Mini Statement")
            );

            document.add(
                    new Paragraph("Account Number : "
                            + accountNumber)
            );

            document.add(
                    new Paragraph(" ")
            );

            for (Transaction transaction : transactions) {

                document.add(
                        new Paragraph(
                                transaction.getTransactionType()
                                        + " | Amount : "
                                        + transaction.getAmount()
                        )
                );
            }

            document.close();

            return out.toByteArray();

        } catch (Exception e) {

            e.printStackTrace();

            return null;
        }
    }
}