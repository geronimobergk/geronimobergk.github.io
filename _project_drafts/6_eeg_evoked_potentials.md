---
layout: page
title: Discriminatory Analysis of Source Dipoles in Somatosensory Evoked Potentials (EEG)
description: Investigating the reliability of EEG source localization for early somatosensory processing.
img: assets/img/1.jpg
importance: 3
category: fun
---

**Role:** Master's Student
**Status:** Completed

### Problem

Somatosensory evoked potentials (SSEPs) are a well-established tool for probing early cortical processing following peripheral nerve stimulation and are widely used in clinical neurophysiology. While the temporal characteristics of prominent components such as the **N20** (median nerve) and **P37** (tibial nerve) are well understood, the **reliability and discriminability of their cortical source localization across different stimulus locations** remains insufficiently characterized. In particular, it is unclear to what extent standard EEG setups and established dipole localization methods can robustly distinguish first cortical processing for different limb and finger stimulations under realistic experimental constraints.

### Approach

In this study, EEG data were recorded from **8 healthy participants** using a **64-channel EEG system** during controlled electrical stimulation of multiple peripheral sites (left/right wrist, index finger, auricular finger, and foot). Each location was stimulated 1200 times to elicit SSEPs.
After artifact rejection and trial averaging, the spatial scalp patterns at the **N20 and P37 peaks** were extracted. These patterns were then analyzed using **dipole source localization with a boundary element head model (BEM)** and the **MUSIC algorithm** to estimate the cortical sources underlying the observed EEG signals. The analysis focused on the **timing variability, spatial consistency, and anatomical plausibility** of the reconstructed dipoles across subjects and stimulus locations.

### Outcome

The results show that **SSEP peaks can be detected reliably** with a relatively simple EEG setup, particularly for **median nerve stimulation at the wrist** and **tibial nerve stimulation at the ankle**, in line with clinical recommendations. However, source localization results exhibited **high inter-subject variability**, and estimated dipole locations often deviated from the expected somatosensory cortex, especially for finger (ulnar nerve) stimulation.
Overall, the study highlights a critical gap between **robust temporal detection** of SSEPs and **reliable spatial localization** of their cortical generators using standard EEG and generic head models. The findings underline the importance of improved experimental control, subject-specific or generalized head models, and constrained localization strategies when interpreting dipole-based EEG source estimates in both research and clinical contexts.
