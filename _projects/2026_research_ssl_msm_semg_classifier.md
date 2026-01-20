---
layout: project
title: Self-Supervised Temporal Representation Learning for Energy-Efficient sEMG Gesture Decoding
description: Resource-Constrained Machine Learning
importance: 1
img: assets/img/thumbnail/project/2026_ssl_msm_semg_gesture_decoding.jpeg
category: research
related_publications: false
github: https://github.com/geronimobergk/tiny-ssl-semg
---

<section class="project-summary">
  <h2>Summary</h2>
  <p>This project investigates whether self-supervised learning can improve representation quality in wearable sEMG gesture recognition under strict energy and compute constraints.</p>
  <p>Rather than increasing model size or training complexity, the study isolates self-supervised pretraining as a single intervention in a tightly controlled system setting. The goal is to understand when and why representation learning improves robustness and label efficiency within fixed deployment budgets, as required by real-world wearable and edge AI systems.</p>
</section>

## Problem

Wearable sEMG gesture recognition systems often underperform in real-world deployment — not because models are too small, but because learned representations degrade under strong inter-subject variability, scarce personalization data, and strict energy and compute constraints.

In embedded systems, increasing model capacity or training complexity is rarely feasible. Performance is therefore limited by how much transferable structure a model can extract from limited data under a fixed inference budget.

While self-supervised learning (SSL) has shown promise for biosignal modeling, many existing studies rely on increased model capacity, relaxed compute budgets, or large-scale pretraining.

This makes it unclear whether SSL itself improves representation quality under realistic deployment constraints.

## Research Question

Can self-supervised pretraining improve the representation quality learned by very small sEMG encoders, such that cross-subject generalization and label-efficient user adaptation improve without increasing inference cost or model capacity?

## Hypothesis

For a fixed tiny encoder architecture and a fixed inference budget, introducing self-supervised learning during pretraining improves:

<ol class="roman-list">
  <li>Cross-subject representation quality.</li>
  <li>Label-efficient user adaptation.</li>
</ol>

compared to purely supervised training, while leaving deployment cost unchanged.

Any observed differences are expected to arise from improved representations rather than increased model expressiveness.

<div class="about-columns project-columns">
  <section class="info-box">
    <h3>Method</h3>
    <p>The project is designed as a causally controlled study that isolates the role of representation learning.</p>
    <p>Encoder architecture, optimization budget, and inference cost are held constant across all experimental variants. Self-supervised learning is introduced as a single, explicit intervention via masked signal modeling during pretraining.</p>
    <p>Contrastive SSL is deliberately excluded due to its additional training dependencies, which could confound causal interpretation in resource-constrained settings.</p>
    <p>Representation quality is evaluated using frozen encoders with linear probes and low-data adaptation scenarios, decoupling representational effects from classifier capacity or fine-tuning flexibility.</p>
  </section>
  <section class="info-box">
    <h3>Evaluation</h3>
    <p>Evaluation emphasizes deployment realism over benchmark maximization:</p>
    <ul>
      <li>Leave-one-subject-out generalization to unseen users</li>
      <li>Post-deployment adaptation using only 5–30 seconds of labeled calibration data</li>
      <li>Explicit control of normalization, data splits, and temporal leakage</li>
      <li>Reporting of system metrics (parameter count, MACs, batch-1 latency) alongside task performance</li>
    </ul>
    <p>The objective is to assess whether SSL meaningfully alters representation behavior under constraints typical of wearable and embedded systems.</p>
  </section>
</div>

## Implications

If the hypothesis holds, the implication is not that model capacity becomes irrelevant, but that representation learning can be made more efficient within a fixed system envelope.

While grounded in wearable sEMG gesture decoding (NinaPro DB2), the underlying question and methodology are relevant to a broader class of resource-constrained edge AI systems with:

- temporal sensor data
- strong domain or subject variability
- limited labeled data
- fixed inference budgets

These include wearable health monitoring, inertial sensing, bioacoustics, environmental monitoring, neurotechnology, and TinyML systems.

Any transfer beyond sEMG and NinaPro DB2 requires independent empirical verification.

## Artifacts

Planned outputs emphasize auditability and system relevance:

- Reproducible experimental codebase with leakage-safe evaluation protocols
- Concise technical report documenting design decisions and observed trends
- Explicit reporting of system metrics alongside task performance
- ONNX export and post-training INT8 quantization analysis

All components are designed with fully embedded deployment constraints in mind.

<section class="project-takeaway">
  <h2>Key Takeaway</h2>
  <p>In resource-constrained edge and wearable systems, performance improvements do not necessarily require larger models.</p>
  <p>This project explores whether self-supervised learning can improve representation quality within fixed system budgets, offering a principled path toward more robust and label-efficient embedded AI systems.</p>
</section>
