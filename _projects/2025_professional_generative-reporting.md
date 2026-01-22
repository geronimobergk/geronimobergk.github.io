---
layout: page
title: Generative AI Reporting System for CFO Decision Support
description: Controlled generation for executive reporting in regulated workflows.
importance: 3
category: professional
---

**Role:** Managing Consultant, Data Science (Horvath)

## Problem

Financial reporting was manual, time-consuming, and difficult to adapt to ad-hoc management questions, limiting the usefulness of available data for decision-making.

## Context

The system had to improve speed and adaptability without compromising correctness, traceability, or existing reporting standards.

## System

<svg width="640" height="120" viewBox="0 0 640 120" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="40" width="140" height="40" fill="none" stroke="#1f3a5f"/>
  <text x="80" y="65" font-size="12" text-anchor="middle">Finance data</text>
  <rect x="170" y="40" width="160" height="40" fill="none" stroke="#1f3a5f"/>
  <text x="250" y="65" font-size="12" text-anchor="middle">Structured prompts</text>
  <rect x="350" y="40" width="140" height="40" fill="none" stroke="#1f3a5f"/>
  <text x="420" y="65" font-size="12" text-anchor="middle">Guardrails</text>
  <rect x="510" y="40" width="120" height="40" fill="none" stroke="#1f3a5f"/>
  <text x="570" y="65" font-size="12" text-anchor="middle">CFO report</text>
  <line x1="150" y1="60" x2="170" y2="60" stroke="#1f3a5f"/>
  <line x1="330" y1="60" x2="350" y2="60" stroke="#1f3a5f"/>
  <line x1="490" y1="60" x2="510" y2="60" stroke="#1f3a5f"/>
</svg>

## Constraints

- High requirements on correctness, traceability, and interpretability
- Existing workflows and reporting standards could not be disrupted
- Output needed to be suitable for executive decision contexts
- Generative models had to be constrained and controlled

## Approach

Designed and implemented a generative reporting system integrated into existing workflows with structured prompts, validation checks, and controlled output formats.

## Outcome

A blueprint for broader rollout that preserves auditability and decision relevance.
