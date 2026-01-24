---
layout: project
title: Generative AI Reporting System for CFO Decision Support
description: Auditable generative AI Systems
importance: 3
category: consulting
---

<section class="project-summary">
  <h2>Summary</h2>
  <p>
    This project developed a controlled generative AI reporting system to support monthly financial reporting for executive decision-making.
    The system integrates large language models into established finance workflows while preserving numerical correctness, traceability, and governance, demonstrating how generative models can be safely deployed in regulated reporting contexts.
  </p>
</section>

<div class="section-divider"></div>

## Problem

Financial reporting for management was highly manual, time-consuming, and rigid, limiting the ability of controlling teams to respond to ad-hoc management questions during the monthly close.
While data were available in structured form, transforming figures into coherent, decision-ready narratives required substantial expert effort and repeated iterations.

At the same time, introducing generative AI into finance reporting posed strict requirements: outputs had to remain auditable, numerically consistent, and aligned with existing reporting standards, ruling out unconstrained text generation.

<div class="section-divider"></div>

## System Design

The system was implemented as a multi-step, tool-augmented LLM agent pipeline embedded into the SAP Analytics Cloud (SAC) reporting environment.

Financial data were provided as static, fully tabular snapshots (Excel extracts originating from SAP) and made accessible through a SQL layer. A LangChain-based SQL agent was used to generate and execute queries, ensuring all numerical statements were grounded in explicit data retrieval.

The agent workflow consisted of four explicit stages:

1. Planning – decomposing reporting requests into required KPIs and comparisons
2. SQL analysis – tool-assisted query generation and deterministic aggregation
3. Narrative generation – template-bound textual commentary derived strictly from retrieved values
4. Validation – numerical consistency checks (e.g., totals, percentages, cross-figure reconciliation)

Outputs were rendered as SAC dashboards, supporting both standardized monthly management reports and ad-hoc queries via an integrated chatbot interface.

<div class="section-divider"></div>

## Constraints

The system was designed under strict operational constraints:

- Correctness over fluency: all outputs had to reconcile with source tables; stylistic freedom was intentionally limited
- Controlled generation: templates, rule-based guards, and tool usage replaced open-ended prompting
- Human-in-the-loop governance: the system produced _drafts only_; final release required human review and approval
- Scope restriction: the agent was not allowed to introduce new KPIs, forecasts, or recommendations

These choices reduced generative flexibility but ensured trustworthiness, interpretability, and compliance with existing finance workflows.

<div class="section-divider"></div>

## Validation

The system was validated through dry-runs over multiple monthly close scenarios and a live SAC demonstration dashboard.
Validation logic explicitly checked for failure modes such as:

- mismatched totals and subtotals,
- inconsistent percentages,
- discrepancies between narrative statements and source figures.

When validation failed, the system attempted automatic correction where possible or otherwise flagged outputs for human intervention.
Empirical comparison against manually prepared reports demonstrated equivalent numerical accuracy with substantially reduced preparation effort, building stakeholder confidence despite the absence of formal quantitative KPIs.

<div class="section-divider"></div>

## Outcome

The project delivered a deployable architectural blueprint for integrating generative AI into regulated financial reporting workflows.
It showed that LLMs can act as controlled analytical components, augmenting expert teams without undermining auditability or decision relevance.

Beyond the proof-of-concept, the system established design principles for reliable GenAI deployment in executive decision-support settings, balancing automation benefits with governance, transparency, and human accountability.
