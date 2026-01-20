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



Brain–Computer Interfacing
Discriminatory Analysis of Source Dipoles of Somatosensory Evoked Potentials
Research Project Module (M.Sc.) · Technische Universität Berlin · Prof. Benjamin Blankertz’ Lab
Problem
Who is affected / what decision is blocked?
Researchers and clinicians relying on EEG-based Brain–Computer Interfaces and neurophysiological diagnostics lack clarity on whether standard EEG source localization methods can reliably discriminate cortical processing locations for different somatosensory stimuli.
What limitation exists in the state of the art?
Prior work on somatosensory evoked potentials (SSEPs) largely focuses on median and tibial nerve stimulation at canonical locations (wrist, ankle), often assuming that early cortical sources (e.g., N20, P37) can be localized and distinguished with standard EEG setups. The robustness and discriminability of these source estimates across different stimulus locations and subjects remains insufficiently validated.
Why does this matter now?
EEG-based BCIs and clinical evoked-potential protocols increasingly aim for finer spatial interpretation and individualized analysis. Understanding where standard methods fail is essential before extending them to higher-resolution or adaptive BCI applications.
Approach
Structured the problem into four MECE dimensions:
Experimental design: Controlled electrical stimulation of median, ulnar, and tibial nerves at multiple limb locations (wrist, fingers, foot) in 8 healthy subjects using a 64-channel EEG setup.
Signal extraction: Identification of early SSEP components (N20, P37) through rigorous preprocessing, artifact rejection, and trial averaging.
Source modeling: Dipole fitting using a Boundary Element Model (BEM) head model combined with the MUSIC algorithm to estimate cortical source locations.
Discriminability analysis: Comparison of source locations, temporal delays, and variability across stimulus locations and subjects.
Focused on dominant uncertainties:
High inter-subject variability, sensitivity to electrode placement and noise, and the reliability of dipole localization when scalp patterns deviate from ideal dipolar fields.
Explicit trade-offs:
Favored methodological transparency and controlled analysis over aggressive constraints or manual intervention in source selection, accepting reduced localization accuracy to expose real-world limitations.
Impact
Enabled a concrete research insight:
Demonstrated that while early SSEP components can be detected reliably with simple EEG setups, source localization and discrimination across stimulus locations is far less robust than commonly assumed.
Changed how methods are assessed:
Showed that standard clinical measurement recommendations and generic head models are insufficient for precise localization of first cortical processing, especially for non-canonical stimulation sites.
Delivered measurable insight and risk reduction:
Quantified latency differences, variability, and localization failures across stimulus locations, clarifying when EEG source localization is trustworthy—and when it is not. This provides a grounded baseline for future BCI and neurotechnology studies aiming at spatially resolved inference.
