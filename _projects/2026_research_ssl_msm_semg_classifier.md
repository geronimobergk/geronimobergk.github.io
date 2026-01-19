---
layout: page
title: Self-Supervised Temporal Representation Learning for Energy-Efficient sEMG Gesture Decoding
description: Resource-Constrained Machine Learning
importance: 1
img: assets/img/thumbnail/project/2026_ssl_msm_semg_gesture_decoding.jpeg
category: research
related_publications: false
---

**Role:** Independent

**Status:** Ongoing (implementation in progress)

---

## Problem

Wearable sEMG gesture recognition systems often underperform in real-world deployment — not because model capacity is inherently insufficient, but because learned representations degrade under strong inter-subject variability, scarce personalization data, and hard energy and compute constraints.

In embedded wearable systems, increasing model size or training complexity is rarely a viable option.
Instead, performance is constrained by how much useful, transferable structure a model can extract from limited data under a fixed inference budget.
While self-supervised learning (SSL) has shown promise for biosignal modeling, many existing studies implicitly rely on increased model capacity, relaxed compute budgets, or extensive pretraining—making it unclear whether SSL itself improves representation quality under realistic deployment constraints.

This creates a gap between algorithmic advances and deployable wearable systems, where representation learning must improve without changing the system envelope.

---

## Research Question

Can self-supervised pretraining improve the quality of temporal representations learned by very small sEMG encoders, such that cross-subject generalization and label-efficient user adaptation improve without increasing inference cost or model capacity?

---

## Hypothesis

For a fixed tiny encoder architecture and a fixed inference budget, introducing self-supervised learning during pretraining improves:

**(a)** cross-subject representation quality

**(b)** label-efficient user adaptation

compared to purely supervised training, while leaving deployment cost unchanged.

Any observed differences are expected to arise from improved representations rather than increased model expressiveness.

---

## Method

The project is designed as a causally controlled study intended to isolate the role of representation learning.

Encoder architecture, optimization budget, and inference cost are held constant across all experimental variants.
Self-supervised learning is introduced as a single, explicit intervention via masked signal modeling during pretraining.
Masked signal modeling is used as a lightweight self-supervised pretraining strategy to isolate the effect of representation learning under fixed system budgets, whereas contrastive SSL is deliberately excluded due to its additional training dependencies that could confound causal interpretation in resource-constrained settings.

Representation quality is evaluated using frozen encoders and linear probes, as well as low-data adaptation scenarios, to decouple representational effects from classifier capacity or fine-tuning flexibility.
This design explicitly avoids confounding improvements in representation learning with changes in model size, training compute, or inference complexity.

---

## Evaluation

Evaluation is structured to reflect deployment realism and methodological rigor, rather than benchmark maximization:

* Leave-one-subject-out generalization to unseen users
* Post-deployment adaptation with only 5 – 30 seconds of labeled calibration data
* Explicit control of normalization, data splits, and temporal leakage
* Reporting of system metrics (parameter count, MACs, batch-1 latency) alongside task performance

The goal is to assess whether SSL meaningfully alters representation behavior under constraints typical of wearable and embedded systems.

---

## Implications

This project is intended to clarify whether and how self-supervised learning can be leveraged as a system-compatible tool for improving representation learning in resource-constrained settings.

If the hypothesis holds, the implication is not that model capacity becomes irrelevant, but that representation learning can be made more efficient within a fixed system envelope.
In practice, this would position self-supervised pretraining as a system-compatible tool for improving robustness and label efficiency in settings where increasing model size, latency, or energy consumption is not feasible.

While the study is grounded in wearable sEMG gesture decoding (NinaPro DB2), the underlying question and methodology are relevant to a broader class of resource-constrained edge AI applications that share similar structural properties:

* temporal sensor data,
* strong domain or subject variability,
* limited labeled data,
* and fixed inference budgets.

These include, but are not limited to:

* wearable health monitoring
* inertial and motion sensing
* embedded bioacoustics
* structural and environmental sensor networks
* neurotechnology
* and other TinyML or always-on edge sensing systems.

At the same time, it is important to emphasize that signal characteristics, data distributions, and deployment contexts differ substantially across applications.
Any transfer of insights beyond sEMG—and beyond the specific properties of NinaPro DB2—requires independent empirical verification.
The expected outcome of this project is therefore not a general-purpose solution, but a principled indication of when and why self-supervised learning may improve representations under fixed deployment constraints.

More broadly, the project aims to position self-supervised learning as a representation efficiency mechanism, rather than a capacity-increasing strategy, within realistic embedded ML pipelines.

---

## Artifacts

The planned outputs emphasize auditability and system relevance rather than polished benchmarks:

* A reproducible experimental codebase with fixed architectures and leakage-safe evaluation protocols
* A concise technical report documenting design decisions, evaluation logic, and observed trends
* Explicit reporting of system metrics (parameters, MACs, latency) alongside task performance
* Optional ONNX export and post-training INT8 quantization analysis to assess embedded feasibility

All components are designed with fixed compute budgets in mind and aligned with fully embedded deployment constraints.

---

## Key Takeaway

In resource-constrained edge and wearable systems, performance improvements do not always require larger models.
This project explores whether self-supervised learning can improve representation quality within fixed system budgets, offering a potentially powerful lever for robustness and label efficiency in real-world edge AI applications.
