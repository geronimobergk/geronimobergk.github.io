---
layout: page
title: Self-Supervised Temporal Representation Learning for Energy-Efficient sEMG Gesture Decoding
description: Independent Research Project | Proof-of-Thinking | Edge AI • Neuroengineering • Wearable Computing
importance: 1
img: assets/img/12.jpg
category: fun
related_publications: false
---

**Status:** Ongoing

---

## Problem

Wearable sEMG gesture recognition systems often underperform in real-world deployment; not because model capacity is insufficient but because learned representations degrade under **strong inter-subject variability**, **severely limited personalization data**, and **hard energy and compute constraints**.
In embedded wearable systems, increasing model size is not a viable solution; instead, **representation quality under fixed system budgets** becomes the primary bottleneck.

---

## Research Question

Can **self-supervised pretraining** improve the quality of temporal representations learned by **very small sEMG encoders**, such that cross-subject generalization and user adaptation improve **without increasing inference cost**?

## Hypothesis

For a fixed tiny encoder architecture and a fixed inference budget, self-supervised learning improves

**(a)** cross-subject representation quality and
**(b)** label-efficient user adaptation,

while leaving deployment cost unchanged.

---

## Method

The project is designed as a **causally controlled study**.
Encoder architecture, optimization budget, and inference cost are held constant across supervised and self-supervised variants.

Self-supervised learning is introduced as a single intervention via **masked signal modeling**, and representations are evaluated using **frozen encoders and linear probes** to isolate representation quality from classifier capacity.

---

## Evaluation

Evaluation emphasizes **leakage-safe protocols** and **deployment realism**:

* Leave-one-subject-out generalization to unseen users
* Post-deployment adaptation with only 5–30 seconds of labeled calibration data
* Explicit control of normalization, splits, and temporal leakage
* Reporting of system metrics (MACs, latency) alongside performance

The emphasis is deliberately on **explainability and system realism**, not benchmark optimization.

---

## Implications

This project is designed to test whether self-supervised pretraining can improve temporal representation quality in very small sEMG encoders under fixed deployment constraints.
By holding architecture, inference cost, and optimization budget constant, the study isolates whether observed gains in cross-subject generalization or user adaptation can be attributed to representation learning itself, rather than increased model capacity or compute.

If the hypothesis holds, it would imply that, in wearable sEMG systems, representation quality—not model size—is the dominant limiting factor under strong inter-subject variability and scarce personalization data. More broadly, the project aims to clarify whether self-supervised learning can be used as a system-compatible tool to improve robustness and label efficiency without violating energy or latency budgets, rather than as a means of chasing benchmark performance.

The expected outcome is evidence that **SSL shifts the bottleneck from representation learning to classification**:

* **Higher performance with very few labels** (≤30 s of user data) compared to purely supervised training
* **More stable user adaptation** at identical computational cost
* **No increase in inference cost**—fully embedded-ready

## Artifacts

The project aims to produce auditable, deployment-relevant artifacts rather than benchmark-optimized models:

* Reproducible codebase with fixed architectures and leakage-safe evaluation protocols
* Concise technical report covering representation, adaptation, and efficiency analyses
* Explicit system metrics (parameter count, MACs/sec, batch-1 latency) reported alongside performance
* ONNX export and INT8 post-training quantization with embedded footprint analysis

All models operate under fixed compute budgets and are designed to be compatible with fully embedded deployment pipelines.

## Key Takeaway

In resource-constrained wearable systems, progress is driven not by larger models, but by **better representations learned under realistic system constraints**.
