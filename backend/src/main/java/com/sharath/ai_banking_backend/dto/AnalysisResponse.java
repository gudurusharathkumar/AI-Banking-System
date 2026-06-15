package com.sharath.ai_banking_backend.dto;

public class AnalysisResponse {

    private String analysis;

    public AnalysisResponse() {
    }

    public AnalysisResponse(String analysis) {
        this.analysis = analysis;
    }

    public String getAnalysis() {
        return analysis;
    }

    public void setAnalysis(String analysis) {
        this.analysis = analysis;
    }
}