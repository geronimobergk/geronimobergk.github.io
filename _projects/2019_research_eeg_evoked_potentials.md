---
layout: project
title: Discriminatory Analysis of Source Dipoles in Somatosensory Evoked Potentials (EEG)
description: EEG Source Localization Reliability
# img: assets/img/thumbnail/project/2019_eeg_project.png
importance: 3
category: foundational
paper: https://drive.google.com/file/d/1MpHq6x37TToGyEHhvd8BrqYUVHEGyJJ9/view?usp=sharing
---

<section class="project-summary">
    <h2>Summary</h2>
    <p>
    This project shows that early somatosensory evoked potentials are temporally robust but spatially unreliable under standard EEG source localization.
    While N20 and P37 components are detected consistently, their cortical source estimates vary widely across subjects and stimulation sites, especially for non-canonical finger stimulation.
    These results demonstrate that commonly used EEG pipelines overstate spatial interpretability unless stronger modeling assumptions and experimental constraints are applied.
    </p>
</section>

<div class="section-divider"></div>

## Motivation

Early SSEPs are widely used to probe first cortical processing in clinical neurophysiology and brain–computer interfacing. Components such as the N20 (median nerve) and P37 (tibial nerve) are often interpreted as originating from distinct and localizable regions of the primary somatosensory cortex.

However, it is unclear whether standard EEG source localization pipelines can robustly discriminate cortical generators across different peripheral stimulation sites, especially under realistic constraints such as limited electrode density, generic head models, noise, and inter-subject variability. This uncertainty directly affects the validity of spatial interpretations commonly made in EEG-based research and clinical practice.

<div class="section-divider"></div>

## Approach

EEG data were recorded from 8 healthy participants using a 64-channel system during controlled electrical stimulation of multiple peripheral sites (wrist, fingers, foot).
After preprocessing, artifact rejection, and trial averaging, scalp topographies at the N20 and P37 peaks were extracted.

Cortical sources were estimated using dipole fitting with a boundary element head model (BEM) combined with the MUSIC algorithm. The analysis deliberately prioritized:

- minimal manual tuning,
- generic (non-individualized) head models,
- and reproducible, transparent processing steps.

This design intentionally accepts reduced localization accuracy in order to expose the real-world limitations of standard EEG source localization workflows.

<div class="section-divider"></div>

## Key Findings

- Early SSEP components can be detected reliably in time using simple EEG setups, particularly for median and tibial nerve stimulation.
- Spatial source estimates exhibit high inter-subject variability, even for canonical stimulation sites.
- For finger (ulnar nerve) stimulation, reconstructed dipoles frequently deviate from expected somatosensory cortex locations.
- Generic head models and standard clinical recommendations are insufficient for robust spatial discrimination of first cortical processing across stimulation sites.

<div class="section-divider"></div>

## Implications & Limitations

These findings highlight a fundamental mismatch between temporal robustness and spatial reliability in EEG-based SSEP analysis. While early components are suitable for timing-based interpretations, their cortical generators cannot be assumed to be spatially precise without stronger modeling assumptions.

The study is limited by its use of generic head models and moderate sample size, but these constraints reflect typical experimental practice. As such, the results provide a realistic baseline and motivate the use of subject-specific modeling, constrained source priors, or complementary imaging modalities when spatial interpretation is critical.

<div class="section-divider"></div>

## Key Takeaway

Early somatosensory responses are temporally robust but spatially fragile when analyzed with standard EEG source localization methods.
Reliable interpretation of cortical generators requires substantially stronger experimental and modeling constraints than are commonly acknowledged.
