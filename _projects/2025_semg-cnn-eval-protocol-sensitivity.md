
**Role:** Independent Side Project
**Status:** Completed

## Evaluation Protocols Matter

**A Controlled Study on Protocol Sensitivity in sEMG CNNs**

---

### **Problem**

* **Who is affected / what decision is blocked?**
  Researchers and system designers working on sEMG-based gesture recognition lack a reliable basis for comparing models and architectures. Decisions about *which model generalizes*, *which architectural component helps*, or *whether a system is deployment-ready* are blocked by inconsistent evaluation practices.

* **What is broken in the state of the art?**
  Subject-dependent and cross-subject evaluation protocols are frequently used interchangeably, despite probing fundamentally different generalization regimes. Because sEMG signals exhibit strong inter-subject variability, this leads to:

  * inflated or incomparable performance numbers,
  * architectural conclusions that are valid only under a single, often implicit, protocol,
  * unclear transferability to real-world, unseen users.

* **Why does this matter now?**
  As sEMG systems move toward wearable, human-facing deployment, *out-of-the-box generalization* and *robust evaluation* become first-order concerns. Without protocol-aware analysis, reported gains risk being scientifically misleading and operationally irrelevant.

---

### **Approach**

* **Problem structuring (MECE):**

  1. **Evaluation protocol** – single-subject, pooled subject-dependent, and cross-subject (LOSO), each isolating a distinct generalization axis.
  2. **Architecture** – baseline spatio-temporal CNN vs. attention-augmented variant with identical backbone and capacity.
  3. **Training & optimization** – fixed optimizer, learning-rate schedule, epoch budget, and no protocol-specific tuning.
  4. **Data handling** – repetition-disjoint splits with strict leakage prevention under heavy window overlap.

* **Focus on dominant uncertainty:**
  Rather than optimizing accuracy, the study isolates **protocol-induced effects** by holding all other degrees of freedom constant. This makes evaluation protocol choice the only explanatory variable for performance changes and ranking flips.

* **Explicit trade-offs:**

  * **Control over optimization** vs. **absolute peak performance**
  * **Diagnostic clarity** vs. **dataset and model breadth**
  * **Single-seed efficiency** vs. **variance estimation**, justified by protocol effects exceeding 50% relative drops

---

### **Impact**

* **Enabled a concrete methodological decision:**
  Demonstrated that **evaluation protocol choice alone can dominate both absolute performance and apparent architectural advantages** in sEMG CNNs.

* **Changed how results should be interpreted:**
  Showed that architectural differences visible under personalized (single-subject) evaluation **collapse under cross-subject evaluation**, where subject shift becomes the dominant failure mode.

* **Delivered measurable insight:**

  * Quantified protocol sensitivity via normalized performance drops (≈ 59% when introducing subject shift).
  * Exposed a large gap between optimistic personalized performance and realistic out-of-the-box deployment behavior.
  * Provided a reproducible, tightly controlled reference setup for protocol-aware benchmarking.

---

### **Takeaway**

This project establishes **protocol sensitivity as a first-order concern** in sEMG research. Architectural improvements that appear meaningful under subject-dependent evaluation do not necessarily translate to unseen users. As a result, **evaluation protocol alignment is a prerequisite for both scientific validity and deployment relevance**.

The study serves as a methodological foundation for future work on representation learning, label-efficient adaptation, and protocol-aware evaluation frameworks in sEMG and other human-centered biosignal domains.
