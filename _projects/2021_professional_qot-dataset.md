---
layout: page
title: Public Dataset Collection for ML-Based Quality-of-Transmission Estimation
description: Reproducible QoT dataset for optical network research at scale.
importance: 1
img: assets/img/12.jpg
category: professional
related_publications: true
---

**Role:** Research Assistant, Fraunhofer HHI

### Problem

Research on ML-based Quality of Transmission (QoT) estimation in optical networks was hindered by the absence of **shared, well-structured benchmark datasets**. Most published results relied on proprietary or insufficiently documented simulation data, making findings difficult to reproduce, compare, or validate across studies.

### Context

Within the BMBF-funded project **AI-NET-PROTECT**, I addressed this bottleneck by creating a **public dataset foundation** for ML-assisted QoT estimation in elastic optical networks, enabling reproducible research and fair comparison of models across different assumptions and scenarios.

### System

A **large-scale QoT dataset collection** generated from realistic, event-driven optical network simulations using Fraunhofer HHI’s planning tool PLATON.
Each dataset contains **more than 1.2 million labeled samples**, includes both classification and regression targets (BER, OSNR, SNR), and provides **two complementary data views**:

- lightpath-level representations for classical ML models
- network-state representations for network-wide learning approaches

The datasets cover multiple network topologies, traffic profiles, and transceiver operation modes, while maintaining a consistent structure across scenarios.

### Constraints

- Physical-layer realism via nonlinear channel modeling
- Controlled variation of network scenarios to isolate dataset effects
- Scalability to millions of samples without manual curation
- Applicability to both lightpath-based and network-wide ML models
- Dataset transparency and explainability beyond aggregate metrics

### Approach

I designed and implemented the **full data generation and transformation pipeline**, from dynamic network simulation to ML-ready datasets. Beyond data generation, I introduced **visual, feature-wise dataset analysis methods** that expose class imbalance, feature bias, and dataset coverage—making dataset quality and limitations explicit before model training. This shifts evaluation from “model-centric” accuracy reporting to **data-aware benchmarking**.

### Outcome

A **publicly available QoT benchmark dataset collection** that is now used to evaluate ML models for QoT classification and regression under realistic operating conditions. The work establishes:

- reproducible baselines for ML-assisted QoT estimation
- tools to assess dataset quality and comparability
- evidence that dataset choice alone can dominate reported ML performance

By enabling transparent dataset analysis and cross-dataset evaluation, this project helps the community move from isolated results toward **reliable, comparable, and explainable ML research in optical networking**.
