---
layout: page
title: Discriminatory Analysis of Source Dipoles in Somatosensory Evoked Potentials (EEG)
description: Reliability of EEG source localization for early somatosensory processing
img: assets/img/1.jpg
importance: 3
category: research
---

**Role:** Master’s Student
**Status:** Completed

## Overview

This project investigates how reliably early somatosensory evoked potentials (SSEPs) can be spatially localized using standard EEG source localization methods under realistic experimental conditions.

While early SSEP components such as the N20 and P37 are temporally well characterized, the study examines whether their cortical generators can be **robustly and discriminably localized across different stimulus locations** using conventional EEG setups and generic head models.

---

## Motivation

SSEPs are widely used in clinical neurophysiology and brain–computer interfacing to probe early cortical processing following peripheral nerve stimulation. Standard protocols assume that early components—most prominently the N20 (median nerve) and P37 (tibial nerve)—originate from distinct and localizable regions of the somatosensory cortex.

However, it remains unclear whether **standard EEG source localization pipelines can reliably distinguish first cortical processing across different limb and finger stimulations**, especially under realistic constraints such as limited electrode density, noise, and inter-subject variability. This uncertainty limits the interpretability of spatial EEG analyses in both research and clinical applications.

---

## Study Design (High Level)

EEG data were recorded from **8 healthy participants** using a **64-channel EEG system** during controlled electrical stimulation of multiple peripheral sites, including the wrist, fingers, and foot.

After preprocessing, artifact rejection, and trial averaging, spatial scalp patterns at the **N20 and P37 peaks** were extracted. Cortical sources were estimated using **dipole fitting with a boundary element head model (BEM)** combined with the **MUSIC algorithm**. The analysis focused on **temporal consistency, spatial variability, and anatomical plausibility** of the reconstructed dipoles across stimulus locations and subjects.

The study deliberately favored **methodological transparency and minimal manual intervention**, accepting reduced localization accuracy in order to expose real-world limitations of standard approaches.

---

## Evaluation Philosophy

Evaluation emphasized **robustness and discriminability rather than optimal localization**:

- Comparison of source estimates across different stimulation sites
- Analysis of inter-subject variability and timing differences
- Assessment of deviations from expected somatosensory cortex locations
- Identification of failure modes under non-canonical stimulation conditions

The objective was to clarify **when EEG source localization is trustworthy—and when it is not**.

---

## Key Findings

The study demonstrates a clear gap between **robust temporal detection** and **reliable spatial localization** of early SSEPs:

- Early SSEP components can be detected reliably with simple EEG setups, particularly for median and tibial nerve stimulation at canonical sites.
- Source localization results show high inter-subject variability, with frequent deviations from expected cortical regions—especially for finger (ulnar nerve) stimulation.
- Standard clinical recommendations and generic head models are insufficient for precise discrimination of first cortical processing across stimulus locations.

---

## Broader Implications

The findings highlight fundamental limitations of dipole-based EEG source localization under realistic conditions. They underscore the need for improved experimental control, subject-specific or constrained head models, and more cautious interpretation of spatial EEG results in both clinical neurophysiology and BCI research.

By explicitly identifying where standard methods fail, the project provides a grounded baseline for future work aiming at **spatially resolved and individualized neurotechnology applications**.

---

## Key Takeaway

Early somatosensory responses are temporally robust but **spatially fragile** when analyzed with standard EEG source localization methods. Reliable interpretation of cortical generators requires stronger modeling assumptions and experimental constraints than are often acknowledged in practice.
