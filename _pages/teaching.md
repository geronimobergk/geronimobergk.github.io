---
layout: page
permalink: /teaching/
title: Teaching
description: A collection of tutorials.
nav: true
nav_order: 6
---


## Tutorial: sEMG Signal Processing & Movement Classification with NinaPro DB1

**Format:** Notebook-first, hands-on tutorial series (00–06)
**Level:** Beginner → intermediate (signal processing + classic ML pipeline)
**Topics:** Wearable biosignals · sEMG · feature extraction · classification · evaluation · real-world constraints
**Materials:** GitHub repository + Jupyter notebooks

This tutorial walks through a **classic sEMG machine learning pipeline** using **NinaPro DB1**, reproducing core steps inspired by Atzori et al. The focus is on *learning-by-doing*: data loading, exploration, windowing, feature engineering, model training, evaluation, and a discussion of practical constraints. ([GitHub][1])

**Repository:** `semg-ninapro-db1-tutorial` (GitHub) ([GitHub][1])

### What you’ll learn

* How to go from raw NinaPro `.mat` files to a model-ready dataset
* Practical preprocessing: segmentation via sliding windows + classical features
* Training a baseline gesture classifier and interpreting results beyond accuracy
* How real-world constraints (data, compute, robustness) shape modeling choices ([GitHub][1])

### Who this is for

* Students and engineers who want a **practical entry point into biosignal ML**
* Anyone exploring **wearable computing / neuroengineering** with realistic constraints

[1]: https://github.com/geronimobergk/semg-ninapro-db1-tutorial "GitHub - geronimobergk/semg-ninapro-db1-tutorial: An Introduction to sEMG Signal Processing and Movement Classification with NinaPro DB1"
