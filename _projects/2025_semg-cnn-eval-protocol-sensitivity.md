---
layout: page
title: Evaluation Protocols Matter - Protocol Sensitivity in sEMG CNN Evaluation
description: Methodologically Grounded Machine Learning
importance: 2
category: research
related_publications: true
---

**Role**: Independent Research Project

**Status**: Completed

---

## Summary

This project shows that evaluation protocol choice can dominate both absolute performance and apparent architectural advantages in sEMG gesture recognition.

Under tightly controlled conditions, the study demonstrates that changing the evaluation protocol alone—without modifying architecture, training budget, or optimization—can induce performance drops exceeding 50% and reverse model rankings. These results establish protocol sensitivity as a first-order methodological concern for scientific validity and deployment relevance in wearable and human-centered ML systems.

---

## Problem

Performance comparisons in sEMG-based gesture recognition are difficult to interpret—not because models are poorly designed, but because evaluation protocols probe fundamentally different generalization regimes.

Subject-dependent and cross-subject protocols are frequently used interchangeably, despite sEMG signals exhibiting strong inter-subject variability. As a result, reported accuracies are often inflated, architectural conclusions become protocol-specific without being stated explicitly, and transferability to unseen users remains unclear.

As sEMG systems move toward wearable, human-facing deployment, this mismatch between evaluation practice and deployment reality becomes a critical methodological issue.

---

## Research Question

How sensitive are CNN-based sEMG gesture recognition results to evaluation protocol choice, and to what extent can protocol-induced effects dominate absolute performance and apparent architectural improvements?

---

## Hypothesis

For fixed architectures, training budgets, and optimization settings, evaluation protocol choice alone accounts for the majority of observed performance differences, including:

**(a)** large absolute performance drops when introducing subject shift

**(b)** architectural advantages that disappear under cross-subject evaluation

Observed ranking changes are therefore attributable to protocol-induced generalization effects rather than model expressiveness.

---

## Method

The project is designed as a controlled diagnostic study that isolates evaluation protocol as the sole explanatory variable.

Two spatio-temporal CNN architectures—a baseline model and an attention-augmented variant—are evaluated under identical capacity, training budgets, optimization schedules, and preprocessing. No protocol-specific hyperparameter tuning is performed.

Three supervised evaluation protocols are considered:

- Single-subject, repetition-disjoint (personalization ceiling)
- Pooled subject-dependent, repetition-disjoint (seen users)
- Cross-subject leave-one-subject-out (LOSO) (unseen users)

All data splits are repetition-disjoint with strict leakage prevention, despite heavy temporal window overlap. Validation data are drawn exclusively from the training partition, and test subjects are never used for model selection in the LOSO setting.

---

## Evaluation

Evaluation emphasizes diagnostic clarity and deployment realism rather than benchmark maximization:

- Direct comparison of subject-dependent and cross-subject generalization
- Quantification of protocol-induced performance drops
- Stability analysis of architectural rankings across protocols
- Balanced Accuracy and Macro-F1 as primary metrics

Variance estimation is deliberately deprioritized, as protocol-induced effects exceed 50–60% relative performance drops, dominating stochastic training variance.

---

## Key Findings

The results reveal three decisive effects:

- Protocol choice dominates absolute performance
  Introducing subject shift (pooled → LOSO) induces a relative performance drop of approximately 59%, independent of architecture.

- Architectural advantages are protocol-dependent
  Differences visible under single-subject evaluation collapse under pooled and cross-subject evaluation, where models become statistically indistinguishable.

- The deployment gap is substantial
  Relative drops of ≈ 58–64% quantify the discrepancy between optimistic personalized performance and realistic out-of-the-box deployment behavior.

These effects arise despite identical architectures, training budgets, and optimization, confirming protocol sensitivity as a first-order determinant of reported results.

---

## Implications

This study establishes protocol sensitivity as a prerequisite consideration for scientific validity and deployment relevance in sEMG research.

Architectural improvements observed under subject-dependent protocols do not reliably translate to unseen users. Without explicit protocol alignment, reported gains risk being scientifically misleading and operationally irrelevant.

While grounded in sEMG gesture recognition (NinaPro DB2), the findings generalize to other biosignal and wearable sensing domains characterized by strong inter-user variability, including EMG, EEG, and physiological monitoring.

---

## Artifacts

The project provides a reproducible, protocol-aware reference setup:

- Leakage-safe benchmarking codebase with fixed architectures
- Quantified protocol sensitivity metrics and normalized performance drops
- Clear documentation of evaluation logic and design trade-offs

The artifacts serve as a methodological foundation for subsequent work on representation learning, label-efficient adaptation, and protocol-aware evaluation.

---

## Key Takeaway

In sEMG gesture recognition, evaluation protocol choice is not a technical detail—it fundamentally determines what a model appears to learn.

Protocol alignment is therefore a prerequisite for comparability, scientific interpretation, and real-world deployment of wearable and human-centered ML systems.
