---
layout: page
title: When Evaluation Protocols Change the Story
description: Protocol-aware sEMG evaluation showing ranking reversals under subject shift.
importance: 5
category: fun
---

## Problem

In sEMG-based gesture recognition, model performance varies widely across publications because evaluation protocols are often treated as interchangeable, even though they measure different kinds of generalization. Subject-dependent evaluation can substantially overestimate performance when models must generalize to new users out of the box, creating a gap between benchmark results and deployment reality.

## Approach

Designed a controlled evaluation study that isolates the effect of the evaluation protocol itself using two compact spatio-temporal CNNs: a baseline and an attention-augmented variant.

### Protocols

- Single-user repetition-disjoint evaluation (personalization ceiling)
- Pooled repetition-disjoint evaluation across users
- Cross-subject leave-one-subject-out (LOSO) evaluation

### Controls

- Identical architectures and parameter counts
- Identical training budgets and optimization settings
- Repetition-level splitting to avoid temporal leakage
- Explicit accounting of model efficiency (parameters, MACs, latency)

## Findings

Evaluation protocol choice alone changes both absolute performance and model ranking. The attention model wins under repetition-based evaluation, but the advantage disappears and reverses under LOSO, where the simpler CNN generalizes more robustly to unseen users. This implies that architectural gains validated under subject-dependent benchmarks may not translate to deployment.

## Engineering Perspective

The work emphasizes deployment-oriented experimental discipline: protocol-aware data splitting, fixed compute budgets for fair comparison, reproducible experiment orchestration, and explicit separation between modeling, evaluation, and interpretation. The framework is lightweight and extensible for follow-on work in label-efficient adaptation, representation learning, and hardware-aware deployment.

## Key Takeaway

_In applied wearable ML, evaluation protocol choice is a design decision that can fundamentally change which models appear deployable._
