---
layout: project
title: ML-Based Traffic Telemetry & Adaptive Capacity Control for Optical Access Networks
description: Telemetry-Driven, Uncertainty-Aware Network Control
# img: assets/img/8.jpg
importance: 1
category: professional
related_publications: true
paper: https://opg.optica.org/abstract.cfm?uri=OFC-2024-M1H.2
---

<section class="project-summary">
  <h2>Summary</h2>
  <p>
    This project demonstrates that real-time traffic telemetry and uncertainty-aware ML forecasting can directly drive deployable capacity control in optical access networks. By predicting traffic maxima rather than averages and integrating forecasts into a closed-loop control system, the work achieves more than 75% capacity savings while keeping under-provisioning risk explicit and bounded. The result is a practically deployable telemetry–ML–control pipeline that replaces static safety margins with data-driven, adaptive decisions for F5G/6G networks.
  </p>
</section>

<div class="section-divider"></div>

## Problem

Optical access and enterprise networks operate under highly volatile and bursty traffic conditions, yet capacity provisioning decisions are still largely based on coarse, aggregated measurements and static safety margins.
This creates a fundamental dilemma for network operators:

- Static overprovisioning wastes capacity and energy.
- Aggressive downsizing risks service level agreement (SLA) violations during short-term traffic spikes.
- Existing machine-learning-based traffic prediction approaches often target mean traffic and rely on synthetic or weakly bursty traces, making them poorly aligned with real capacity allocation decisions.

As traffic volatility and energy costs increase, future F5G/6G access networks require autonomous, ML-assisted capacity control — but only if it is grounded in realistic telemetry and uncertainty-aware decision logic.

<div class="section-divider"></div>

## Approach

This project addressed adaptive capacity control as a closed-loop system problem, spanning telemetry, forecasting, and control integration.

### 1. Fine-grained telemetry

- Designed and implemented a telemetry pipeline for real optical access and enterprise traffic.
- Processed minute-scale measurements into structured features suitable for ML, preserving burstiness and short-term variability.
- Moved beyond hourly averages to expose the traffic characteristics that actually determine required capacity.

### 2. Forecasting traffic maxima (not means)

- Developed an LSTM-based forecasting model to predict hourly traffic maxima, rather than average load.
- Complemented peak forecasting with variability-aware features derived from short-term traffic dynamics.
- Trained and evaluated the models on real, highly bursty traffic traces, avoiding synthetic smoothing effects.

### 3. Uncertainty-aware capacity control

- Integrated traffic forecasts into a Dynamic Capacity Margin Allocation (DCMA) mechanism.
- Translated predicted traffic maxima and variability into step-wise, deployable capacity decisions, aligned with hardware reconfiguration constraints.
- Explicitly traded off utilization gains against a controlled, quantifiable residual risk of under-provisioning.

The resulting system operates in an hourly closed-loop adjustment cycle, combining telemetry, ML inference, and adaptive margin logic in a form suitable for real-world deployment.

<div class="section-divider"></div>

## Outcome & Impact

- \>75% average hourly capacity savings compared to static provisioning on real enterprise traffic traces.
- Demonstrated that dynamic, ML-based safety margins can substantially reduce overprovisioning while maintaining robustness to short-term traffic spikes.
- Quantified the residual risk of under-provisioning (~0.45%), attributable to extreme, unpredictable traffic outliers.
- Validated a practically deployable telemetry–ML–control pipeline as a building block for autonomous optical access networks.

This work shifted capacity control from static planning toward telemetry-driven, uncertainty-aware adaptation, and provided experimental evidence that ML-based forecasting can inform operational network decisions, not just offline analysis.

<div class="section-divider"></div>

{% quote balanici2024capacity %}{% endquote %}
{% quote Balanici:22 %}{% endquote %}
{% quote shariati2022trafficmonitoring %}{% endquote %}
