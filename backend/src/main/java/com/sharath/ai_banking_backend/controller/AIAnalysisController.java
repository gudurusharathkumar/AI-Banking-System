package com.sharath.ai_banking_backend.controller;

import com.sharath.ai_banking_backend.dto.AnalysisResponse;
import com.sharath.ai_banking_backend.service.AIAnalysisService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AIAnalysisController {

    private final AIAnalysisService aiAnalysisService;

    public AIAnalysisController(AIAnalysisService aiAnalysisService) {
        this.aiAnalysisService = aiAnalysisService;
    }

    @GetMapping("/api/analysis")
    public AnalysisResponse getAnalysis() {

        String result = aiAnalysisService.analyzeTransactions();

        return new AnalysisResponse(result);
    }
}