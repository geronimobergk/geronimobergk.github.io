// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Peer-reviewed scholarly work",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Selected research and system-oriented projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-discriminatory-analysis-of-source-dipoles-in-somatosensory-evoked-potentials-eeg",
          title: 'Discriminatory Analysis of Source Dipoles in Somatosensory Evoked Potentials (EEG)',
          description: "EEG Source Localization Reliability",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2019_research_eeg_evoked_potentials/";
            },},{id: "projects-public-dataset-collection-for-ml-based-quality-of-transmission-estimation",
          title: 'Public Dataset Collection for ML-Based Quality-of-Transmission Estimation',
          description: "Data-Centric Benchmarking for Optical-Network Machine Learning",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2021_professional_qot-dataset/";
            },},{id: "projects-ml-based-traffic-telemetry-amp-adaptive-capacity-control-for-optical-access-networks",
          title: 'ML-Based Traffic Telemetry &amp;amp; Adaptive Capacity Control for Optical Access Networks',
          description: "Telemetry-Driven, Uncertainty-Aware Network Control",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2022_professional_autonomous-capacity/";
            },},{id: "projects-generative-ai-reporting-system-for-cfo-decision-support",
          title: 'Generative AI Reporting System for CFO Decision Support',
          description: "Auditable generative AI Systems",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2025_professional_generative-reporting/";
            },},{id: "projects-evaluation-protocols-matter-protocol-sensitivity-in-semg-cnn-evaluation",
          title: 'Evaluation Protocols Matter - Protocol Sensitivity in sEMG CNN Evaluation',
          description: "Methodologically Grounded Machine Learning",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2025_research_semg-cnn-eval-protocol-sensitivity/";
            },},{id: "projects-self-supervised-temporal-representation-learning-for-energy-efficient-semg-gesture-decoding",
          title: 'Self-Supervised Temporal Representation Learning for Energy-Efficient sEMG Gesture Decoding',
          description: "Resource-Constrained Machine Learning",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2026_research_ssl_msm_semg_classifier/";
            },},];
