---
layout: project
title: Public Dataset Collection for ML-Based Quality-of-Transmission Estimation
description: Data-Centric Benchmarking for Optical-Network Machine Learning
importance: 2
category: professional
related_publications: true
website: https://www.hhi.fraunhofer.de/en/pn-software/qot-dataset-collection.html
paper: https://opg.optica.org/jocn/abstract.cfm?uri=jocn-14-3-43
---

<section class="project-summary">
  <h2>Summary</h2>
  <p>
    This project establishes a publicly available, large-scale dataset collection for machine-learning-based Quality-of-Transmission (QoT) estimation in elastic optical networks.
    Generated from physically grounded, event-driven network simulations, the datasets enable reproducible benchmarking of QoT classification and regression models across heterogeneous network scenarios.
    Beyond data release, the project introduces feature-wise and multi-categorical dataset visualizations that make dataset structure, bias, and coverage explicit.
    A central result is that dataset design choices such as topology, traffic profile, and provisioning assumptions can dominate both apparent model performance and cross-dataset generalization, making data-centric evaluation a first-order concern in optical-network ML.
  </p>
</section>

<div class="section-divider"></div>

## Problem

Research on ML-based Quality-of-Transmission estimation has been fundamentally limited by the absence of shared, transparent benchmark datasets. Most prior work relies on proprietary or sparsely documented simulation data, preventing reproducibility, obscuring dataset bias, and making reported performance figures difficult to compare across studies.

<div class="section-divider"></div>

## Context

Within the BMBF-funded project AI-NET-PROTECT, this work addressed the dataset bottleneck by creating a public QoT dataset collection designed explicitly for benchmarking, comparison, and error analysis of ML-based QoT estimators under controlled yet realistic operating assumptions.

<div class="section-divider"></div>

## System

The project delivers a QoT dataset collection comprising four large-scale datasets, each generated from dynamic optical-network simulations using Fraunhofer HHI’s planning tool _PLATON_ .

Each dataset contains >1.2 million labeled samples and supports both classification and regression tasks with targets including BER, OSNR, and SNR. Two complementary data representations are provided:

- Lightpath-level datasets for classical and deep ML models
- Network-state datasets enabling network-wide QoT estimation

The datasets systematically vary network topology, traffic profile, and transceiver operation mode, while maintaining a consistent schema and comprehensive datasheets.

<div class="section-divider"></div>

## Constraints

- Physically grounded QoT labels via nonlinear channel modeling (Gaussian Noise (GN) model approximation)
- Controlled variation of simulation assumptions to isolate dataset effects
- Scalability to multi-million-sample datasets without manual labeling
- Support for both lightpath-based and network-wide learning paradigms
- Dataset transparency beyond aggregate performance metrics

<div class="section-divider"></div>

## Approach

An end-to-end data generation pipeline was designed and implemented, covering dynamic network simulation, service provisioning, and transformation into ML-ready dataset representations.

A central methodological element is the use of multi-categorical, feature-wise dataset visualizations, which enable qualitative assessment of dataset balance, coverage, and bias prior to model training.
These visual analyses reveal how even minor changes in network assumptions can induce substantial shifts in data distributions—shifts that directly affect model behavior and cross-scenario generalization.

Together, these methods shift QoT model evaluation from a purely model-centric perspective toward a data-aware benchmarking process.

<div class="section-divider"></div>

## Outcome

The result is a public QoT benchmark dataset collection that has since been reused in multiple studies on network-wide QoT estimation, privacy-preserving learning, and cross-domain model transfer.

The project establishes that:

- dataset choice alone can dominate reported ML performance,
- models trained on narrowly distributed datasets fail to generalize across scenarios,
- transparent dataset analysis is essential for interpretable and deployable optical-network ML.

By combining open data, structured documentation, and visualization-driven analysis, this work enables reliable, comparable, and explainable ML research for optical network design and operation.

<div class="section-divider"></div>

{% quote bergk2021mlassisted %}{% endquote %}
