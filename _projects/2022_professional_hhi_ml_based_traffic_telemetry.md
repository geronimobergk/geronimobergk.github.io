---
layout: page
title: ML-Based Traffic Telemetry & Adaptive Capacity Control for Optical Access Networks
description: "Real-time telemetry, forecasting, and adaptive margin control for optical access and enterprise networks."
img: assets/img/8.jpg
importance: 2
category: work
---

---

<p class="post-description">
  <strong>Role:</strong> Research Associate, Fraunhofer HHI<br>
  <strong>Focus of my contribution:</strong>Telemetry & data pipeline implementation, ML-based traffic forecasting model desgin, and integration into adaptive capacity control logic.<br>
  <strong>Status:</strong> Published ECOC 2023 demonstrator on ML-based link-capacity adjustment<br>
</p>

---

## Problem

**Who is affected & what decision is blocked**
Network operators of optical access and enterprise networks lack a reliable basis to decide **how much link capacity to provision dynamically** without risking under-provisioning during traffic bursts.

**What is broken in the state of the art**

- Monitoring relies on **coarse, hourly-aggregated averages**, which smooth out peaks that actually determine required capacity.
- Capacity planning uses **static safety margins**, leading to systematic overprovisioning.
- Existing ML traffic prediction work often assumes **synthetic or weakly bursty traffic**, limiting transferability to real networks.
- Forecasts typically target **mean traffic**, which is misaligned with capacity allocation that must absorb **short-term maxima**.

**Why this matters now**
With increasing traffic volatility and energy costs, static provisioning leads to wasted capacity and OPEX, while overly aggressive reductions risk SLA violations. Autonomous, ML-assisted control is required for future **F5G/6G access networks**, but only if it is grounded in realistic telemetry and uncertainty-aware decision logic.

---

## Approach

**Problem structuring (MECE dimensions)**

1. **Telemetry fidelity** – fine-grained, real traffic measurements vs. aggregated statistics
2. **Forecast target** – predicting _traffic maxima_ rather than means
3. **Uncertainty handling** – explicit modeling of short-term variability and burstiness
4. **Control integration** – translating forecasts into deployable, step-wise capacity decisions

**Key technical contributions**

- Designed and implemented a **fine-grained telemetry pipeline** for real optical access traffic, including preprocessing and structuring for ML consumption.
- Developed an **LSTM-based forecasting model** trained on historical _hourly maximum traffic values_ to predict future maxima one hour ahead.
- Designed a **Dynamic Capacity Margin Allocation (DCMA)** mechanism that adds adaptive safety margins based on predicted variability (σ-, μ-, and δ-based schemes).
- Integrated forecasting and margin logic into a **closed-loop, hourly capacity adjustment cycle**, aligned with realistic hardware reconfiguration constraints.

**Explicit trade-offs**

- Chose **forecasting maxima over mean accuracy** to improve decision relevance for capacity control.
- Accepted step-wise capacity adjustments (hardware-driven) instead of continuous control to ensure deployability.
- Prioritized robustness to bursty real traffic over idealized performance on synthetic traces.

---

## Impact

**Enabled concrete decisions**

- Demonstrated when and how **dynamic, ML-based safety margins** can safely replace static overprovisioning in operational networks.

**Changed system design & evaluation**

- Shifted capacity control from static planning to **telemetry-driven, uncertainty-aware adaptation**.
- Established a **deployable telemetry-ML-control pipeline** evaluated on real enterprise network traffic, not synthetic data.

<section class="about-highlights">
  <article class="highlight-card">
    <p class="highlight-label">Capacity savings</p>
    <p>&gt;75% average hourly savings versus static provisioning on real traffic traces.</p>
  </article>
  <article class="highlight-card">
    <p class="highlight-label">Robustness</p>
    <p>Reduced over-provisioning while maintaining resilience to short-term spikes.</p>
  </article>
  <article class="highlight-card">
    <p class="highlight-label">Residual risk</p>
    <p>~0.45% under-provisioning attributable to extreme, unpredictable outliers.</p>
  </article>
</section>
