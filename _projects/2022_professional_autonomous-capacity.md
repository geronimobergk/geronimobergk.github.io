---
layout: page
title: ML-Based Traffic Telemetry & Adaptive Capacity Control for Optical Access Networks
description: Real-time telemetry, forecasting, and control for adaptive network margins.
importance: 3
category: work
---

**Role:** Research Associate, Fraunhofer HHI

### Problem

Optical access and enterprise networks are characterized by **highly volatile and bursty traffic profiles**. Conventional monitoring and capacity planning approaches rely on coarsely aggregated measurements and static safety margins. This leads to **systematic overprovisioning**, inefficient resource utilization, and limited responsiveness to short-term traffic spikes.

### Solution / Approach

In this project, I developed the **telemetry and machine learning components** for a data-driven, adaptive capacity control system.

Specifically, my work included:

- the design and implementation of a **fine-grained telemetry pipeline** for acquiring, preprocessing, and structuring real traffic data from optical access networks,
- the development of an **LSTM-based forecasting model** to predict future traffic maxima on an hourly basis (rather than mean traffic values),
- and the algorithmic integration of the forecasts into a **dynamic margin allocation logic** that explicitly accounts for prediction uncertainty and short-term traffic variability.

The developed ML and telemetry building blocks were deployed in an experimental system context and were later scientifically evaluated and published as part of a full demonstrator.

### Outcome

- **>75% average capacity savings per hour** compared to static capacity provisioning on real traffic data
- Demonstration that **ML-based, dynamic safety margins** significantly reduce overprovisioning while simultaneously improving robustness to traffic spikes
- Validation of a **practically deployable telemetry-and-ML pipeline** as a building block for autonomous, data-driven network control in F5G/6G access networks

**Focus of my work:** Telemetry architecture, data pipeline, and ML-based traffic forecasting.
