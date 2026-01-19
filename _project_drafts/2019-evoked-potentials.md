
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
