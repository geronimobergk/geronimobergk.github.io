---
layout: project
title: Evaluation Protocols Matter - Protocol Sensitivity in sEMG CNN Evaluation
description: Methodologically Grounded Machine Learning
importance: 2
category: research
img: assets/img/thumbnail/project/2025_semg-cnn-eval-protocol-sensitivity.png
related_publications: false
github: https://github.com/geronimobergk/semg-protocol-sensitivity
---

<section class="project-summary">
  <h2>Summary</h2>
  <p>
    Evaluation protocol choice fundamentally determines both reported performance and apparent architectural advantages in sEMG gesture recognition. When architectures, training budgets, and optimization are held constant, switching the evaluation protocol alone induces performance drops exceeding 50% and can reverse model rankings. Protocol alignment is therefore a prerequisite for scientific validity, meaningful comparison, and deployment-relevant interpretation in wearable and human-centered ML systems.
  </p>
</section>

<div class="section-divider"></div>

## Motivation

Performance comparisons in sEMG-based gesture recognition are difficult to interpret because evaluation protocols probe fundamentally different generalization regimes.

Subject-dependent and cross-subject protocols are frequently used interchangeably, despite sEMG signals exhibiting strong inter-subject variability. As a result, reported accuracies are often inflated, architectural conclusions become protocol-specific without being stated explicitly, and transferability to unseen users remains unclear.

As sEMG systems move toward wearable, human-facing deployment, this mismatch between evaluation practice and deployment reality becomes a critical methodological issue.

<div class="section-divider"></div>

## Research Question

How sensitive are CNN-based sEMG gesture recognition results to evaluation protocol choice, and to what extent can protocol-induced effects dominate absolute performance and apparent architectural improvements?

<div class="section-divider"></div>

## Hypothesis

For fixed architectures, training budgets, and optimization settings, evaluation protocol choice alone accounts for the majority of observed performance differences, including:

<ol class="roman-list">
  <li>Large absolute performance drops when introducing subject shift.</li>
  <li>Architectural advantages that disappear under cross-subject evaluation.</li>
</ol>

Observed ranking changes are therefore attributable to protocol-induced generalization effects rather than model expressiveness.

<div class="section-divider"></div>

<div class="about-columns project-columns">
  <section class="info-box">
    <h2>Method</h2>
    <p>The project is designed as a controlled diagnostic study that isolates evaluation protocol as the sole explanatory variable. Two spatio-temporal CNN architectures (a baseline model and an attention-augmented variant) are evaluated under identical capacity, training budgets, optimization schedules, and preprocessing. No protocol-specific hyperparameter tuning is performed.
    Three supervised evaluation protocols are considered:
    </p>
    <ul>
      <li>Single-subject, repetition-disjoint (personalization ceiling)</li>
      <li>Pooled subject-dependent, repetition-disjoint (seen users)</li>
      <li>Cross-subject leave-one-subject-out (LOSO) (unseen users)</li>
    </ul>
    <p>All data splits are repetition-disjoint with strict leakage prevention, despite heavy temporal window overlap. Validation data are drawn exclusively from the training partition, and test subjects are never used for model selection in the LOSO setting.</p>
  </section>

  <section class="info-box">
    <h2>Evaluation</h2>
    <p>Evaluation emphasizes diagnostic clarity and deployment realism rather than benchmark maximization:</p>
    <ul>
      <li>Direct comparison of subject-dependent and cross-subject generalization</li>
      <li>Quantification of protocol-induced performance drops</li>
      <li>Stability analysis of architectural rankings across protocols</li>
      <li>Balanced Accuracy and Macro-F1 as primary metrics</li>
    </ul>
    <p>Variance estimation is deliberately deprioritized, as protocol-induced effects exceed 50–60% relative performance drops, dominating stochastic training variance.</p>
  </section>
</div>

<div class="section-divider"></div>

## Key Findings

- Protocol choice dominates absolute performance:
  Introducing subject shift (pooled → LOSO) induces a relative performance drop of approximately 59%, independent of architecture.

- Architectural advantages are protocol-dependent:
  Differences visible under single-subject evaluation collapse under pooled and cross-subject evaluation, where models become statistically indistinguishable.

- The deployment gap is substantial:
  Relative drops of ≈ 58–64% quantify the discrepancy between optimistic personalized performance and realistic out-of-the-box deployment behavior.

These effects arise despite identical architectures, training budgets, and optimization, confirming protocol sensitivity as a first-order determinant of reported results.

<div class="section-divider"></div>

## Implications

This study establishes protocol sensitivity as a prerequisite consideration for scientific validity and deployment relevance in sEMG research.

Architectural improvements observed under subject-dependent protocols do not reliably translate to unseen users. Without explicit protocol alignment, reported gains risk being scientifically misleading and operationally irrelevant.

While grounded in sEMG gesture recognition (NinaPro DB2), the findings generalize to other biosignal and wearable sensing domains characterized by strong inter-user variability, including EMG, EEG, and physiological monitoring.

<div class="section-divider"></div>

## Artifacts

The project provides a reproducible, protocol-aware reference setup:

- Leakage-safe benchmarking codebase with fixed architectures
- Quantified protocol sensitivity metrics and normalized performance drops
- Clear documentation of evaluation logic and design trade-offs

The artifacts serve as a methodological foundation for subsequent work on representation learning, label-efficient adaptation, and protocol-aware evaluation.
