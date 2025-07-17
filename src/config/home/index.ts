import { BlogsSection, ResearchSection } from '@/app/home';

export interface Blog {
  title: string;
  abstract: string;
  date: string;
  category: string;
  link: string;
}
export interface Publication {
  title: string;
  abstract: string;
  date: string;
  authors: string[];
  type: string;
  link: string;
  paperLink?: string;
}

export interface Collaborator {
  image: string;
  name: string;
}

export interface HomeConfig {
  researchSection: ResearchSection;
  blogsSection: BlogsSection;
  collaboratorsTitle: string;
  blogs: Blog[];
  publications: Publication[];
  collaborators: Collaborator[];
}

export const getHomeConfig = (): HomeConfig => ({
  researchSection: {
    base: '/docs/research',
    title: 'Recent Research',
    description: 'Description about the research we do',
    viewAll: 'View All',
  },
  blogsSection: {
    base: '/docs/blog',
    title: 'Recent Blogs',
    description: 'Description about the blogs we posts',
    viewAll: 'View All',
  },
  collaboratorsTitle: 'Our Collaborators',
  // TODO: we need dynamically read from the directory to get the blogs and sort them by date
  blogs: [
    {
      title: 'Agent Scaffold Blog',
      abstract:
        'Introducing SWE-Lens, a new leaderboard evaluating AI Software Engineering agents under resource constraints.',
      date: 'Jul 16, 2025',
      category: 'LLM',
      link: 'https://github.com/Center-for-Software-Excellence/SWE-Lens',
    },
    {
      title: 'placeholder blog',
      abstract: 'placeholder blog description',
      date: 'Mar 26, 2025',
      category: 'placeholder',
      link: '/docs/blog/placeholder-blog',
    },
    {
      title: 'blog 2',
      abstract: 'This is the second blog post.',
      date: 'Mar 26, 2025',
      category: 'placeholder',
      link: '/docs/blog/blog-2',
    },
    {
      title: 'blog 3',
      abstract: 'This is the thrid blog post.',
      date: 'Mar 26, 2025',
      category: 'placeholder',
      link: '/docs/blog/blog-3',
    },
  ],
  // for now, we just mannually defined here
  // TODO: later might need to move to public to fetch
  publications: [
    {
      title:
        'Towards Conversational Development Environments: Using Theory-of-Mind and Multi-Agent Architectures for Requirements Refinement',
      abstract:
        'Foundation Models (FMs) have shown remarkable capabilities in various natural language tasks. However, their ability to accurately capture stakeholder requirements remains a significant challenge for using FMs for software development. This paper introduces a novel approach that leverages an FM-powered multi-agent system called AlignMind to address this issue. By having a cognitive architecture that enhances FMs with Theory-of-Mind capabilities, our approach considers the mental states and perspectives of software makers. This allows our solution to iteratively clarify the beliefs, desires, and intentions of stakeholders, translating these into a set of refined requirements and a corresponding actionable natural language workflow in the often-overlooked requirements refinement phase of software engineering, which is crucial after initial elicitation. Through a multifaceted evaluation covering 150 diverse use cases, we demonstrate that our approach can accurately capture the intents and requirements of stakeholders, articulating them as both specifications and a step-by-step plan of action. Our findings suggest that the potential for significant improvements in the software development process justifies these investments. Our work lays the groundwork for future innovation in building intent-first development environments, where software makers can seamlessly collaborate with AIs to create software that truly meets their needs.',
      date: '2025/05/27',
      authors: [
        'Keheliya Gallaba',
        'Ali Arabat',
        'Dayi Lin',
        'Mohammed Sayagh',
        'Ahmed E Hassan',
      ],
      type: 'Preprint',
      link: '/docs/research/towards-conversational-development-environments-using-theoryofmind-and-multiagent-architectures-for-requirements-refinement',
      paperLink: 'https://arxiv.org/pdf/2505.20973',
    },
    {
      title:
        'Model Performance-Guided Evaluation Data Selection for Effective Prompt Optimization',
      abstract:
        'Optimizing Large Language Model (LLM) performance requires well-crafted prompts, but manual prompt engineering is labor-intensive and often ineffective. Automated prompt optimization techniques address this challenge but the majority of them rely on randomly selected evaluation subsets, which fail to represent the full dataset, leading to unreliable evaluations and suboptimal prompts. Existing coreset selection methods, designed for LLM benchmarking, are unsuitable for prompt optimization due to challenges in clustering similar samples, high data collection costs, and the unavailability of performance data for new or private datasets. To overcome these issues, we propose IPOMP, an Iterative evaluation data selection for effective Prompt Optimization using real-time Model Performance. IPOMP is a two-stage approach that selects representative and diverse samples using semantic clustering and boundary analysis, followed by iterative refinement with real-time model performance data to replace redundant samples. Evaluations on the BIG-bench dataset show that IPOMP improves effectiveness by 1.6% to 5.3% and stability by at least 57% compared with SOTA baselines, with minimal computational overhead below 1%. Furthermore, the results demonstrate that our real-time performance-guided refinement approach can be universally applied to enhance existing coreset selection methods.',
      date: '2025/05/15',
      authors: ['Ximing Dong', 'Shaowei Wang', 'Dayi Lin', 'Ahmed E Hassan'],
      type: 'Preprint',
      link: '/docs/research/model-performanceguided-evaluation-data-selection-for-effective-prompt-optimization',
      paperLink: 'https://arxiv.org/abs/2505.10736',
    },
    {
      title:
        'The Hitchhikers Guide to Production-ready Trustworthy Foundation Model powered Software (FMware)',
      abstract:
        'Foundation Models (FMs) such as Large Language Models (LLMs) are reshaping the software industry by enabling FMware, systems that integrate these FMs as core components. In this KDD 2025 tutorial, we present a comprehensive exploration of FMware that combines a curated catalogue of challenges with real-world production concerns. We first discuss the state of research and practice in building FMware. We further examine the difficulties in selecting suitable models, aligning high-quality domain-specific data, engineering robust prompts, and orchestrating autonomous agents. We then address the complex journey from impressive demos to production-ready systems by outlining issues in system testing, optimization, deployment, and integration with legacy software. Drawing on our industrial experience and recent research in the area, we provide actionable insights and a technology roadmap for overcoming these challenges. Attendees will gain practical strategies to enable the creation of trustworthy FMware in the evolving technology landscape.',
      date: '2025/05/15',
      authors: [
        'Kirill Vasilevski',
        'Benjamin Rombaut',
        'Gopi Krishnan Rajbahadur',
        'Gustavo A Oliva',
        'Keheliya Gallaba',
        'Filipe R Cogo',
        'Jiahuei Lin',
        'Dayi Lin',
        'Haoxiang Zhang',
        'Bouyan Chen',
        'Kishanthan Thangarajah',
        'Ahmed E Hassan',
        'Zhen Ming Jiang',
      ],
      type: 'Preprint',
      link: '/docs/research/the-hitchhikers-guide-to-productionready-trustworthy-foundation-model-powered-software-fmware',
      paperLink: 'https://arxiv.org/pdf/2505.10640',
    },
    {
      title: 'MetaSel: A Test Selection Approach for Fine-tuned DNN Models',
      abstract:
        "Deep Neural Networks (DNNs) face challenges during deployment due to data distribution shifts. Fine-tuning adapts pre-trained models to new contexts requiring smaller labeled sets. However, testing fine-tuned models under constrained labeling budgets remains a critical challenge. This paper introduces MetaSel, a new approach, tailored for fine-tuned DNN models, to select tests from unlabeled inputs. MetaSel assumes that fine-tuned and pre-trained models share related data distributions and exhibit similar behaviors for many inputs. However, their behaviors diverge within the input subspace where fine-tuning alters decision boundaries, making those inputs more prone to misclassification. Unlike general approaches that rely solely on the DNN model and its input set, MetaSel leverages information from both the fine-tuned and pre-trained models and their behavioral differences to estimate misclassification probability for unlabeled test inputs, enabling more effective test selection. Our extensive empirical evaluation, comparing MetaSel against 10 state-of-the-art approaches and involving 68 fine-tuned models across weak, medium, and strong distribution shifts, demonstrates that MetaSel consistently delivers significant improvements in Test Relative Coverage (TRC) over existing baselines, particularly under highly constrained labeling budgets. MetaSel shows average TRC improvements of 28.46% to 56.18% over the most frequent second-best baselines while maintaining a high TRC median and low variability. Our results confirm MetaSel's practicality, robustness, and cost-effectiveness for test selection in the context of fine-tuned models.",
      date: '2025/03/21',
      authors: [
        'Amin Abbasishahkoo',
        'Mahboubeh Dadkhah',
        'Lionel Briand',
        'Dayi Lin',
      ],
      type: 'Preprint',
      link: '/docs/research/metasel-a-test-selection-approach-for-finetuned-dnn-models',
      paperLink: 'https://arxiv.org/pdf/2503.17534',
    },
    {
      title: 'Simclone: detecting tabular data clones using value similarity',
      abstract:
        'Data clones are defined as multiple copies of the same data among datasets. The presence of data clones between datasets can cause issues such as difficulties in managing data assets and data license violations when using datasets with clones to build AI software. However, detecting data clones is not trivial. The majority of the prior studies in this area rely on structural information to detect data clones (e.g., font size, column header). However, tabular datasets used to build AI software are typically stored without any structural information. In this article, we propose a novel method called SimClone for data clone detection in tabular datasets without relying on structural information. SimClone method utilizes value similarities for data clone detection. We also propose a visualization approach as a part of our SimClone method to help locate the exact position of the cloned data between a dataset pair. Our results …',
      date: '2025/01/21',
      authors: [
        'Xu Yang',
        'Gopi Krishnan Rajbahadur',
        'Dayi Lin',
        'Shaowei Wang',
        'Zhen Ming Jiang',
      ],
      type: 'Journal',
      link: '/docs/research/simclone-detecting-tabular-data-clones-using-value-similarity',
      paperLink: 'https://arxiv.org/pdf/2407.12802',
    },
    {
      title:
        'A Framework and Taxonomy for Characterizing the Applicability of Software Architecture Recovery Approaches: A Tertiary‐Mapping Study',
      abstract:
        'Software architecture assists developers in addressing non-functional requirements and in maintaining, debugging, and upgrading their software systems. Consequently, consistency between the designed architecture and the implemented software system itself is important; without this consistency the non-functional requirements targeted may not be addressed and architectural documentation may mis-direct maintenance efforts that target the associated code-base. But often, when software is initially implemented or subsequently evolved, the designed architecture and software architecture become inconsistent, with the implemented structure degraded due to issues like developer time-pressures, or ambiguous communication of the designed architecture. In such cases, Software Architecture Recovery (SAR) or consistency approaches can be applied to reconstruct the architecture of the software system and possibly to compare it to/re-align it with the designed architecture. Many SAR approaches have been proposed in the research. However, choosing an appropriate architecture recovery approach for software systems is still an open issue. Consequently, this research aims to conduct a tertiary-mapping study based on available secondary studies of architecture recovery approaches, to uncover important characteristics, towards the selection of appropriate SAR approaches. This research has aggregated 13 secondary studies and 10 primary studies beyond 2020 from 5 databases and, in doing so, identified 111 architecture recovery approaches. Based on these approaches, a taxonomy, containing nine main SAR-selection categories is proposed and a framework (in the form of a supporting tool to help developers select an appropriate SAR approach) has been developed. Finally, this research identifies six potential open research gaps related to the underlying research that could be helpful for guiding research in the future.',
      date: '2025',
      authors: [
        'Abdul Qayum',
        'Mengqi Zhang',
        'Simon Colreavy',
        'Muslim Chochlov',
        'Jim Buckley',
        'Dayi Lin',
        'Ashish Rajendra Sai',
      ],
      type: 'Journal',
      link: '/docs/research/a-framework-and-taxonomy-for-characterizing-the-applicability-of-software-architecture-recovery-approaches-a-tertiarymapping-study',
      paperLink: 'https://onlinelibrary.wiley.com/doi/pdf/10.1002/spe.3364',
    },
    {
      title: 'Engineering AI Judge Systems',
      abstract:
        'AI judge systems are designed to automatically evaluate Foundation Model-powered software (i.e., FMware). Due to the intrinsic dynamic and stochastic nature of FMware, the development of AI judge systems requires a unique engineering life cycle and presents new challenges. In this paper, we discuss the challenges based on our industrial experiences in developing AI judge systems for FMware. These challenges lead to substantial time consumption, cost and inaccurate judgments. We propose a framework that tackles the challenges with the goal of improving the productivity of developing high-quality AI judge systems. Finally, we evaluate our framework with a case study on judging a commit message generation FMware. The accuracy of the judgments made by the AI judge system developed with our framework outperforms those made by the AI judge system that is developed without our framework by up to 6.2%, with a significant reduction in development effort.',
      date: '2024/11/26',
      authors: ['Jiahuei Lin', 'Dayi Lin', 'Sky Zhang', 'Ahmed E Hassan'],
      type: 'Preprint',
      link: '/docs/research/engineering-ai-judge-systems',
      paperLink: 'https://arxiv.org/pdf/2411.17793?',
    },
    {
      title:
        'Real-time Adapting Routing (RAR): Improving Efficiency Through Continuous Learning in Software Powered by Layered Foundation Models',
      abstract:
        'To balance the quality and inference cost of a Foundation Model (FM, such as large language models (LLMs)) powered software, people often opt to train a routing model that routes requests to FMs with different sizes and capabilities. Existing routing models rely on learning the optimal routing decision from carefully curated data, require complex computations to be updated, and do not consider the potential evolution of weaker FMs. In this paper, we propose Real-time Adaptive Routing (RAR), an approach to continuously adapt FM routing decisions while using guided in-context learning to enhance the capabilities of weaker FM. The goal is to reduce reliance on stronger, more expensive FMs. We evaluate our approach on different subsets of the popular MMLU benchmark. Over time, our approach routes 50.2% fewer requests to computationally expensive models while maintaining around 90.5% of the general response quality. In addition, the guides generated from stronger models have shown intra-domain generalization and led to a better quality of responses compared to an equivalent approach with a standalone weaker FM.',
      date: '2024/11/14',
      authors: ['Kirill Vasilevski', 'Dayi Lin', 'Ahmed E Hassan'],
      type: 'Preprint',
      link: '/docs/research/realtime-adapting-routing-rar-improving-efficiency-through-continuous-learning-in-software-powered-by-layered-foundation-models',
      paperLink: 'https://arxiv.org/pdf/2411.09837',
    },
    {
      title:
        'Watson: A Cognitive Observability Framework for the Reasoning of LLM-Powered Agents',
      abstract:
        'As foundation models (FMs) play an increasingly prominent role in complex software systems, such as agentic software, they introduce significant observability and debuggability challenges. Although recent Large Reasoning Models (LRMs) generate their thought processes as part of the output, in many scenarios fast-thinking Large Language Models (LLMs) are still preferred due to latency constraints. LLM-powered agents operate autonomously with opaque implicit reasoning, making it difficult to debug their unexpected behaviors or errors. In this paper, we introduce Watson, a novel framework that provides reasoning observability into the implicit reasoning processes of agents driven by fast-thinking LLMs, allowing the identification and localization of errors and guidance for corrections. We demonstrate the accuracy of the recovered implicit reasoning trace by Watson and its usefulness through debugging and improving the performance of LLM-powered agents in two scenarios: Massive Multitask Language Understanding (MMLU) benchmark and SWE-bench-lite. Using Watson, we were able to observe and identify the implicit reasoning errors, and automatically provide targeted corrections at runtime that improve the Pass@1 of agents on MMLU and SWE-bench-lite by 7.58 (13.45% relative improvement) and 7.76 (12.31% relative improvement) percentage points, respectively, without updates to models or the cognitive architecture of the agents.',
      date: '2024/11/5',
      authors: [
        'Benjamin Rombaut',
        'Sogol Masoumzadeh',
        'Kirill Vasilevski',
        'Dayi Lin',
        'Ahmed E Hassan',
      ],
      type: 'Preprint',
      link: '/docs/research/watson-a-cognitive-observability-framework-for-the-reasoning-of-llmpowered-agents',
      paperLink: 'https://arxiv.org/pdf/2411.03455',
    },
    {
      title:
        'From Cool Demos to Production-Ready FMware: Core Challenges and a Technology Roadmap',
      abstract:
        'The rapid expansion of foundation models (FMs), such as large language models (LLMs), has given rise to FMware--software systems that integrate FMs as core components. While building demonstration-level FMware is relatively straightforward, transitioning to production-ready systems presents numerous challenges, including reliability, high implementation costs, scalability, and compliance with privacy regulations. Our paper conducts a semi-structured thematic synthesis to identify the key challenges in productionizing FMware across diverse data sources including our own industry experience in developing FMArts--a FMware lifecycle engineering platform and integrating it into Huawei cloud, grey literature, academic publications, hands-on involvement in the Open Platform for Enterprise AI (OPEA), organizing the AIware conference and Bootcamp, and co-leading the ISO SPDX SBOM working group on AI and datasets. We identify critical issues in FM selection, data and model alignment, prompt engineering, agent orchestration, system testing, and deployment, alongside cross-cutting concerns such as memory management, observability, and feedback integration. We discuss needed technologies and strategies to address these challenges and offer guidance on how to enable the transition from demonstration systems to scalable, production-ready FMware solutions. Our findings underscore the importance of continued research and multi-industry collaboration to advance the development of production-ready FMware.',
      date: '2024/10/28',
      authors: [
        'Gopi Krishnan Rajbahadur',
        'Gustavo A Oliva',
        'Dayi Lin',
        'Ahmed E Hassan',
      ],
      type: 'Preprint',
      link: '/docs/research/from-cool-demos-to-productionready-fmware-core-challenges-and-a-technology-roadmap',
      paperLink: 'https://arxiv.org/pdf/2410.20791?',
    },
    {
      title:
        'Teasma: A practical methodology for test adequacy assessment of deep neural networks',
      abstract:
        "Successful deployment of Deep Neural Networks (DNNs), particularly in safety-critical systems, requires their validation with an adequate test set to ensure a sufficient degree of confidence in test outcomes. Although well-established test adequacy assessment techniques from traditional software, such as mutation analysis and coverage criteria, have been adapted to DNNs in recent years, we still need to investigate their application within a comprehensive methodology for accurately predicting the fault detection ability of test sets and thus assessing their adequacy. In this paper, we propose and evaluate TEASMA, a comprehensive and practical methodology designed to accurately assess the adequacy of test sets for DNNs. In practice, TEASMA allows engineers to decide whether they can trust high-accuracy test results and thus validate the DNN before its deployment. Based on a DNN model's training set, TEASMA provides a procedure to build accurate DNN-specific prediction models of the Fault Detection Rate (FDR) of a test set using an existing adequacy metric, thus enabling its assessment. We evaluated TEASMA with four state-of-the-art test adequacy metrics: Distance-based Surprise Coverage (DSC), Likelihood-based Surprise Coverage (LSC), Input Distribution Coverage (IDC), and Mutation Score (MS). We calculated MS based on mutation operators that directly modify the trained DNN model (i.e., post-training operators) due to their significant computational advantage compared to the operators that modify the DNN's training set or program (i.e., pre-training operators). Our extensive empirical evaluation, conducted across multiple DNN models and input sets, including large input sets such as ImageNet, reveals a strong linear correlation between the predicted and actual FDR values derived from MS, DSC, and IDC, with minimum R\u00B2 values of 0.94 for MS and 0.90 for DSC and IDC. Furthermore, a low average Root Mean Square Error (RMSE) of 9% between actual and predicted FDR val...",
      date: '2024/10/17',
      authors: [
        'Amin Abbasishahkoo',
        'Mahboubeh Dadkhah',
        'Lionel Briand',
        'Dayi Lin',
      ],
      type: 'Journal',
      link: '/docs/research/teasma-a-practical-methodology-for-test-adequacy-assessment-of-deep-neural-networks',
      paperLink:
        'https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10720834',
    },
    {
      title:
        'Promptexp: Multi-granularity prompt explanation of large language models',
      abstract:
        "Large Language Models excel in tasks like natural language understanding and text generation. Prompt engineering plays a critical role in leveraging LLM effectively. However, LLMs black-box nature hinders its interpretability and effective prompting engineering. A wide range of model explanation approaches have been developed for deep learning models, However, these local explanations are designed for single-output tasks like classification and regression,and cannot be directly applied to LLMs, which generate sequences of tokens. Recent efforts in LLM explanation focus on natural language explanations, but they are prone to hallucinations and inaccuracies. To address this, we introduce PromptExp , a framework for multi-granularity prompt explanations by aggregating token-level insights. PromptExp introduces two token-level explanation approaches: 1. an aggregation-based approach combining local explanation techniques, and 2. a perturbation-based approach with novel techniques to evaluate token masking impact. PromptExp supports both white-box and black-box explanations and extends explanations to higher granularity levels, enabling flexible analysis. We evaluate PromptExp in case studies such as sentiment analysis, showing the perturbation-based approach performs best using semantic similarity to assess perturbation impact. Furthermore, we conducted a user study to confirm PromptExp's accuracy and practical value, and demonstrate its potential to enhance LLM interpretability.",
      date: '2024/10/16',
      authors: [
        'Ximing Dong',
        'Shaowei Wang',
        'Dayi Lin',
        'Gopi Krishnan Rajbahadur',
        'Boquan Zhou',
        'Shichao Liu',
        'Ahmed E Hassan',
      ],
      type: 'Preprint',
      link: '/docs/research/promptexp-multigranularity-prompt-explanation-of-large-language-models',
      paperLink: 'https://arxiv.org/pdf/2410.13073?',
    },
    {
      title:
        'Towards AI-native software engineering (SE 3.0): A vision and a challenge roadmap',
      abstract:
        'The rise of AI-assisted software engineering (SE 2.0), powered by Foundation Models (FMs) and FM-powered copilots, has shown promise in improving developer productivity. However, it has also exposed inherent limitations, such as cognitive overload on developers and inefficiencies. We propose a shift towards Software Engineering 3.0 (SE 3.0), an AI-native approach characterized by intent-first, conversation-oriented development between human developers and AI teammates. SE 3.0 envisions AI systems evolving beyond task-driven copilots into intelligent collaborators, capable of deeply understanding and reasoning about software engineering principles and intents. We outline the key components of the SE 3.0 technology stack, which includes Teammate.next for adaptive and personalized AI partnership, IDE.next for intent-first conversation-oriented development, Compiler.next for multi-objective code synthesis, and Runtime.next for SLA-aware execution with edge-computing support. Our vision addresses the inefficiencies and cognitive strain of SE 2.0 by fostering a symbiotic relationship between human developers and AI, maximizing their complementary strengths. We also present a roadmap of challenges that must be overcome to realize our vision of SE 3.0. This paper lays the foundation for future discussions on the role of AI in the next era of software engineering.',
      date: '2024/10/8',
      authors: [
        'Ahmed E Hassan',
        'Gustavo A Oliva',
        'Dayi Lin',
        'Boyuan Chen',
        'Zhen Ming',
      ],
      type: 'Preprint',
      link: '/docs/research/towards-ainative-software-engineering-se-30-a-vision-and-a-challenge-roadmap',
      paperLink: 'https://arxiv.org/pdf/2410.06107?',
    },
    {
      title: 'Data quality antipatterns for software analytics',
      abstract:
        "Background: Data quality is vital in software analytics, particularly for machine learning (ML) applications like software defect prediction (SDP). Despite the widespread use of ML in software engineering, the effect of data quality antipatterns on these models remains underexplored. Objective: This study develops a taxonomy of ML-specific data quality antipatterns and assesses their impact on software analytics models' performance and interpretation. Methods: We identified eight types and 14 sub-types of ML-specific data quality antipatterns through a literature review. We conducted experiments to determine the prevalence of these antipatterns in SDP data (RQ1), assess how cleaning order affects model performance (RQ2), evaluate the impact of antipattern removal on performance (RQ3), and examine the consistency of interpretation from models built with different antipatterns (RQ4). Results: In our SDP case study, we identified nine antipatterns. Over 90% of these overlapped at both row and column levels, complicating cleaning prioritization and risking excessive data removal. The order of cleaning significantly impacts ML model performance, with neural networks being more resilient to cleaning order changes than simpler models like logistic regression. Antipatterns such as Tailed Distributions and Class Overlap show a statistically significant correlation with performance metrics when other antipatterns are cleaned. Models built with different antipatterns showed moderate consistency in interpretation results. Conclusion: The cleaning order of different antipatterns impacts ML model performance. Five antipatterns have a statistically significant correlation with model performance when others are cleaned. Additionally, model interpretation is moderately affected by different data quality antipatterns.",
      date: '2024/8/22',
      authors: [
        'Aaditya Bhatia',
        'Dayi Lin',
        'Gopi Krishnan Rajbahadur',
        'Bram Adams',
        'Ahmed E Hassan',
      ],
      type: 'Preprint',
      link: '/docs/research/data-quality-antipatterns-for-software-analytics',
      paperLink: 'https://arxiv.org/pdf/2408.12560',
    },
    {
      title: 'A Tutorial on Software Engineering for FMware',
      abstract:
        "Foundation Models (FMs) like GPT-4 have given rise to FMware, FM-powered applications representing a new generation of software that is developed with new roles, assets, and paradigms. FMware has been widely adopted in both software engineering (SE) research (e.g., test generation) and industrial products (e.g., GitHub copilot), despite the numerous challenges introduced by the stochastic nature of FMs. In our tutorial, we will present the latest research and industrial practices in engineering FMware, along with a hands-on session to acquaint attendees with core tools and techniques to build FMware. Our tutorial's perspective is firmly rooted in SE rather than artificial intelligence (AI), ensuring that participants are spared from delving into mathematical and AI-related intricacies unless they are crucial for introducing SE challenges and opportunities.",
      date: '2024/07/10',
      authors: [
        'Filipe Roseiro Cogo',
        'Gopi Krishnan Rajbahadur',
        'Dayi Lin',
        'Ahmed E Hassan',
      ],
      type: 'Conference',
      link: '/docs/research/a-tutorial-on-software-engineering-for-fmware',
      paperLink: 'https://dl.acm.org/doi/pdf/10.1145/3663529.3663820',
    },
    {
      title:
        'Rethinking software engineering in the era of foundation models: A curated catalogue of challenges in the development of trustworthy fmware',
      abstract:
        'Foundation models (FMs), such as Large Language Models (LLMs), have revolutionized software development by enabling new use cases and business models. We refer to software built using FMs as FMware. The unique properties of FMware (e.g., prompts, agents and the need for orchestration), coupled with the intrinsic limitations of FMs (e.g., hallucination) lead to a completely new set of software engineering challenges. Based on our industrial experience, we identified ten key SE4FMware challenges that have caused enterprise FMware development to be unproductive, costly, and risky. For each of those challenges, we state the path for innovation that we envision. We hope that the disclosure of the challenges will not only raise awareness but also promote deeper and further discussions, knowledge sharing, and innovative solutions.',
      date: '2024/07/10',
      authors: [
        'Ahmed E Hassan',
        'Dayi Lin',
        'Gopi Krishnan Rajbahadur',
        'Keheliya Gallaba',
        'Filipe Roseiro Cogo',
        'Boyuan Chen',
        'Haoxiang Zhang',
        'Kishanthan Thangarajah',
        'Gustavo Oliva',
        'Jiahuei Lin',
        'Wali Mohammad Abdullah',
        'Zhen Ming Jiang',
      ],
      type: 'Conference',
      link: '/docs/research/rethinking-software-engineering-in-the-era-of-foundation-models-a-curated-catalogue-of-challenges-in-the-development-of-trustworthy-fmware',
      paperLink: 'https://dl.acm.org/doi/pdf/10.1145/3663529.3663849',
    },
    {
      title:
        'Keeping deep learning models in check: A history-based approach to mitigate overfitting',
      abstract:
        'In software engineering, deep learning models are increasingly deployed for critical tasks such as bug detection and code review. However, overfitting remains a challenge that affects the quality, reliability, and trustworthiness of software systems that utilize deep learning models. Overfitting can be (1) prevented (e.g., using dropout or early stopping) or (2) detected in a trained model (e.g., using correlation-based approaches). Both overfitting detection and prevention approaches that are currently used have constraints (e.g., requiring modification of the model structure, and high computing resources). In this paper, we propose a simple, yet powerful approach that can both detect and prevent overfitting based on the training history (i.e., validation losses). Our approach first trains a time series classifier on training histories of overfit models. This classifier is then used to detect if a trained model is overfit. In addition, our trained classifier can be used to prevent overfitting by identifying the optimal point to stop a model’s training. We evaluate our approach on its ability to identify and prevent overfitting in real-world samples. We compare our approach against correlation-based detection approaches and the most commonly used prevention approach (i.e., early stopping). Our approach achieves an F1 score of 0.91 which is at least 5% higher than the current bestperforming non-intrusive overfitting detection approach. Furthermore, our approach can stop training to avoid overfitting at least 32% of the times earlier than early stopping and has the same or a better rate of returning the best model.',
      date: '2024/05/17',
      authors: [
        'Hao Li',
        'Gopi Krishnan Rajbahadur',
        'Dayi Lin',
        'Cor-Paul Bezemer',
        'Zhen Ming Jiang',
      ],
      type: 'Conference',
      link: '/docs/research/keeping-deep-learning-models-in-check-a-historybased-approach-to-mitigate-overfitting',
      paperLink:
        'https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10533733',
    },
    {
      title:
        'Systems, methods, and non-transitory computer-readable storage devices for detecting and analyzing data clones in tabular datasets',
      abstract:
        'A computerized method for detecting and analyzing data clones in one or more dataset pairs has the steps of: obtaining one or more similarity matrices and one or more sets of readout values of the one or more similarity matrices from the dataset pairs using a data-clone detection method, each set of readout values corresponding to a similarity matrix; obtaining one or more importance values for the one or more similarity matrices by processing the one or more sets of readout values using an interpretation method, each importance value corresponding to a similarity matrix; obtaining one or more weighted similarity matrices by weighting each similarity matrix using the corresponding importance value; and obtaining one or more summed similarity matrices by grouping and summing the weighted similarity matrices according to one or more categories for providing a result with indications of locations of the data clones in the dataset pairs.',
      date: '2024/05/09',
      authors: ['Xu Yang', 'Gopi Krishnan RAJBAHADUR', 'Dayi Lin'],
      type: 'Patent',
      link: '/docs/research/systems-methods-and-nontransitory-computerreadable-storage-devices-for-detecting-and-analyzing-data-clones-in-tabular-datasets',
      paperLink:
        'https://patentimages.storage.googleapis.com/22/01/b9/3637dd26320e1f/US20240152578A1.pdf',
    },
    {
      title:
        'Systems, methods, and non-transitory computer-readable storage devices for training deep learning and neural network models using overfitting detection and prevention',
      abstract: '2024/05/09',
      date: '2024',
      authors: [
        'Hao Li',
        'Gopi Krishnan RAJBAHADUR',
        'Dayi Lin',
        'Zhenming Jiang',
      ],
      type: 'Patent',
      link: '/docs/research/systems-methods-and-nontransitory-computerreadable-storage-devices-for-training-deep-learning-and-neural-network-models-using-overfitting-detection-and-prevention',
      paperLink:
        'https://patentimages.storage.googleapis.com/b4/93/d7/8259f2f4d693d6/US20240152805A1.pdf',
    },
    {
      title:
        'A Framework for Real-time Safeguarding the Text Generation of Large Language Model',
      abstract:
        'Large Language Models (LLMs) have significantly advanced natural language processing (NLP) tasks but also pose ethical and societal risks due to their propensity to generate harmful content. Existing methods have limitations, including the need for training specific control models and proactive intervention during text generation, that lead to quality degradation and increased computational overhead. To mitigate those limitations, we propose LLMSafeGuard, a lightweight real-time framework that integrates an external validator into decoding, rejecting unsafe outputs while allowing valid ones. We introduce a similarity-based validation approach, simplifying constraint introduction and eliminating the need for control model training. Additionally, LLMSafeGuard employs a context-wise timing selection strategy, intervening LLMs only when necessary. We evaluate LLMSafeGuard on detoxification and copyright safeguarding, demonstrating its superiority over SOTA baselines. In detoxification, LLMSafeGuard reduces toxic output by at least 38.6% while preserving linguistic quality. Additionally, its context-wise timing selection cuts inference time by at least 24.2% without compromising effectiveness.',
      date: '2024/04/29',
      authors: ['Ximing Dong', 'Dayi Lin', 'Shaowei Wang', 'Ahmed E Hassan'],
      type: 'Preprint',
      link: '/docs/research/a-framework-for-realtime-safeguarding-the-text-generation-of-large-language-model',
      paperLink: 'https://arxiv.org/pdf/2404.19048?',
    },
    {
      title:
        'Rethinking software engineering in the foundation model era: From task-driven ai copilots to goal-driven ai pair programmers',
      abstract:
        'The advent of Foundation Models (FMs) and AI-powered copilots has transformed the landscape of software development, offering unprecedented code completion capabilities and enhancing developer productivity. However, the current task-driven nature of these copilots falls short in addressing the broader goals and complexities inherent in software engineering (SE). In this paper, we propose a paradigm shift towards goal-driven AI-powered pair programmers that collaborate with human developers in a more holistic and context-aware manner. We envision AI pair programmers that are goal-driven, human partners, SE-aware, and self-learning. These AI partners engage in iterative, conversation-driven development processes, aligning closely with human goals and facilitating informed decision-making. We discuss the desired attributes of such AI pair programmers and outline key challenges that must be addressed to realize this vision. Ultimately, our work represents a shift from AI-augmented SE to AI-transformed SE by replacing code completion with a collaborative partnership between humans and AI that enhances both productivity and software quality.',
      date: '2024/04/16',
      authors: [
        'Ahmed E Hassan',
        'Gustavo A Oliva',
        'Dayi Lin',
        'Boyuan Chen',
        'Zhen Ming',
      ],
      type: 'Preprint',
      link: '/docs/research/rethinking-software-engineering-in-the-foundation-model-era-from-taskdriven-ai-copilots-to-goaldriven-ai-pair-programmers',
      paperLink: 'https://arxiv.org/pdf/2404.10225?',
    },
    {
      title:
        'Foreword to the 8th International Workshop on Games and Software Engineering (GAS 2024)',
      abstract:
        'The evolving expectations within gaming communities drive ongoing research and development efforts to devise innovative methods for constructing intricate gameful systems. These methods incorporate cutting-edge technologies like AI, AR/VR, and biometrics, to meet the needs of gaming communities. Gameful systems encompass three main categories: entertainment games, which offers captivating user experiences aimed at immersing and retaining players; serious games, which combines the entertainment aspect of gaming with specific goals in domains such as education, training, and healthcare; and gamified applications, which augments non-entertainment applications, like learning management systems, by integrating game elements.',
      date: '2024/04/14',
      authors: [
        'Joan Arnedo-Moreno',
        'Kendra ML Cooper',
        'Thorsten Händler',
        'Dayi Lin',
      ],
      type: 'Conference',
      link: '/docs/research/foreword-to-the-8th-international-workshop-on-games-and-software-engineering-gas-2024',
      paperLink:
        'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10647187',
    },
    {
      title: 'Technical Brief on Software Engineering for FMware',
      abstract:
        'Foundation Models (FM) like GPT-4 have given rise to FMware, FM-powered applications, which represent a new generation of software that is developed with new roles, assets, and paradigms. FMware has been widely adopted in both software engineering (SE) research (e.g., test generation) and industrial products (e.g., GitHub copilot), despite the numerous challenges introduced by the stochastic nature of FMs. Such challenges jeopardize the quality and trustworthiness of FMware. In our technical brief, we will present the latest research and industrial practices in engineering FMware, and discuss the SE challenges and opportunities facing both researchers and practitioners in the FMware era. The brief is unique in that it is presented from an SE point of view, not an AI point-of-view ensuring that attendees are not bogged into complex mathematical and AI details unless they are essential for contextualizing the SE challenges and opportunities.',
      date: '2024/04/14',
      authors: [
        'Dayi Lin',
        'Filipe Roseiro Cogo',
        'Gopi Krishnan Rajbahadur',
        'Ahmed E Hassan',
      ],
      type: 'Conference',
      link: '/docs/research/technical-brief-on-software-engineering-for-fmware',
      paperLink: 'https://dl.acm.org/doi/pdf/10.1145/3639478.3643062',
    },
    {
      title:
        'Fostering Collaboration and Advancing Research in Software Engineering and Game Development for Serious Contexts',
      abstract:
        'The potential benefits of using the engaging and interactive nature of games to achieve specific objectives have been recognized by researchers and professionals from numerous domains. Serious games have been developed to impart knowledge, skills, and awareness in areas such as education, healthcare and the environment, while gamification has been applied to enhance the engagement, motivation, and participation of users in non-game activities such as sustainability and learning. As a result, the fields of game engineering, software engineering, and user experience are increasingly converging to create innovative solutions that blend the strengths of games with real-world applications.',
      date: '2023/10/17',
      authors: [
        'Antonio Bucchiarone',
        'Kendra ML Cooper',
        'Dayi Lin',
        'Adam Smith',
        'Vanissa Wanick',
      ],
      type: 'Journal',
      link: '/docs/research/fostering-collaboration-and-advancing-research-in-software-engineering-and-game-development-for-serious-contexts',
      paperLink: 'https://dl.acm.org/doi/pdf/10.1145/3617946.3617955',
    },
    {
      title: 'Message from the GAS 2023 Organizers',
      abstract:
        'Welcome to the 6th International Workshop on Games and Software Engineering (GAS 2022), held in conjunction with the 44th ACM/IEEE International Conference on Software Engineering (ICSE 2022). GAS is an annual event gathering researchers and practitioners interested in sharing and advancing game engineering and software engineering techniques.',
      date: '2023',
      authors: [
        'Antonio Bucchiarone',
        'Kendra Cooper',
        'Dayi Lin',
        'Adam Smith',
        'Vanissa Wanick',
      ],
      type: 'Conference',
      link: '/docs/research/message-from-the-gas-2023-organizers',
      paperLink:
        'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9826203',
    },
    {
      title: 'Towards training reproducible deep learning models',
      abstract:
        'Reproducibility is an increasing concern in Artificial Intelligence (AI), particularly in the area of Deep Learning (DL). Being able to reproduce DL models is crucial for AI-based systems, as it is closely tied to various tasks like training, testing, debugging, and auditing. However, DL models are challenging to be reproduced due to issues like randomness in the software (e.g., DL algorithms) and non-determinism in the hardware (e.g., GPU). There are various practices to mitigate some of the aforementioned issues. However, many of them are either too intrusive or can only work for a specific usage context. In this paper, we propose a systematic approach to training reproducible DL models. Our approach includes three main parts: (1) a set of general criteria to thoroughly evaluate the reproducibility of DL models for two different domains, (2) a unified framework which leverages a record-and-replay technique to mitigate software-related randomness and a profile-and-patch technique to control hardware-related non-determinism, and (3) a reproducibility guideline which explains the rationales and the mitigation strategies on conducting a reproducible training process for DL models. Case study results show our approach can successfully reproduce six open source and one commercial DL models.',
      date: '2022/05/21',
      authors: [
        'Boyuan Chen',
        'Mingzhi Wen',
        'Yong Shi',
        'Dayi Lin',
        'Gopi Krishnan Rajbahadur',
        'Zhen Ming Jiang',
      ],
      type: 'Conference',
      link: '/docs/research/towards-training-reproducible-deep-learning-models',
      paperLink: 'https://dl.acm.org/doi/pdf/10.1145/3510003.3510163',
    },
    {
      title:
        'Can I use this publicly available dataset to build commercial AI software?--A Case Study on Publicly Available Image Datasets',
      abstract:
        'Publicly available datasets are one of the key drivers for commercial AI software. The use of publicly available datasets is governed by dataset licenses. These dataset licenses outline the rights one is entitled to on a given dataset and the obligations that one must fulfil to enjoy such rights without any license compliance violations. Unlike standardized Open Source Software (OSS) licenses, existing dataset licenses are defined in an ad-hoc manner and do not clearly outline the rights and obligations associated with their usage. Further, a public dataset may be hosted in multiple locations and created from multiple data sources each of which may have different licenses. Hence, existing approaches on checking OSS license compliance cannot be used. In this paper, we propose a new approach to assessing the potential license compliance violations if a given publicly available dataset were to be used for building commercial AI software. We conduct a case study with our approach on 6 commonly used publicly available image datasets. Our results show that there exists potential risks of license violations associated with all of the studied datasets if they were used for commercial purposes.',
      date: '2021/11/03',
      authors: [
        'Gopi Krishnan Rajbahadur',
        'Erika Tuck',
        'Li Zi',
        'Dayi Lin',
        'Boyuan Chen',
        'Zhen Ming',
        'Daniel M German',
      ],
      type: 'Preprint',
      link: '/docs/research/can-i-use-this-publicly-available-dataset-to-build-commercial-ai-softwarea-case-study-on-publicly-available-image-datasets',
      paperLink: 'https://arxiv.org/pdf/2111.02374',
    },
    {
      title:
        'The Impact of Data Merging on the Interpretation of Cross-Project Just-In-Time Defect Models',
      abstract:
        'Just-In-Time (JIT) defect models are classification models that identify the code commits that are likely to introduce defects. Cross-project JIT models have been introduced to address the suboptimal performance of JIT models when historical data is limited. However, many studies built cross-project JIT models using a pool of mixed data from multiple projects (i.e., data merging)—assuming that the properties of defect-introducing commits of a project are similar to that of the other projects, which is likely not true. In this paper, we set out to investigate the interpretation of JIT defect models that are built from individual project data and a pool of mixed project data with and without consideration of project-level variances. Through a case study of 20 datasets of open source projects, we found that (1) the interpretation of JIT models that are built from individual projects varies among projects; and (2) the project-level variances cannot be captured by a JIT model that is trained from a pool of mixed data from multiple projects without considering project-level variances (i.e., a global JIT model). On the other hand, a mixed-effect JIT model that considers project-level variances represents the different interpretations better, without sacrificing performance, especially when the contexts of projects are considered. The results hold for different mixed-effect learning algorithms. When the goal is to derive sound interpretation of cross-project JIT models, we suggest that practitioners and researchers should opt to use a mixed-effect modelling approach that considers individual projects and contexts.',
      date: '2021/04',
      authors: [
        'Dayi Lin',
        'Chakkrit (Kla) Tantithamthavorn',
        'Ahmed E. Hassan',
      ],
      type: 'Journal',
      link: '/docs/research/the-impact-of-data-merging-on-the-interpretation-of-crossproject-justintime-defect-models',
      paperLink:
        'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9408228',
    },
    {
      title: 'Towards a consistent interpretation of AIOps models',
      abstract:
        'Artificial Intelligence for IT Operations (AIOps) has been adopted in organizations in various tasks, including interpreting models to identify indicators of service failures. To avoid misleading practitioners, AIOps model interpretations should be consistent (i.e., different AIOps models on the same task agree with one another on feature importance). However, many AIOps studies violate established practices in the machine learning community when deriving interpretations, such as interpreting models with suboptimal performance, though the impact of such violations on the interpretation consistency has not been studied. In this article, we investigate the consistency of AIOps model interpretation along three dimensions: internal consistency, external consistency, and time consistency. We conduct a case study on two AIOps tasks: predicting Google cluster job failures and Backblaze hard drive failures. We find that the randomness from learners, hyperparameter tuning, and data sampling should be controlled to generate consistent interpretations. AIOps models with AUCs greater than 0.75 yield more consistent interpretation compared to low-performing models. Finally, AIOps models that are constructed with the Sliding Window or Full History approaches have the most consistent interpretation with the trends presented in the entire datasets. Our study provides valuable guidelines for practitioners to derive consistent AIOps model interpretation.',
      date: '2021',
      authors: [
        'YINGZHE LYU',
        'GOPI KRISHNAN RAJBAHADUR',
        'DAYI LIN',
        'BOYUAN CHEN',
        'ZHEN MING JACK JIANG',
      ],
      type: 'Journal',
      link: '/docs/research/towards-a-consistent-interpretation-of-aiops-models',
      paperLink: 'https://dl.acm.org/doi/pdf/10.1145/3488269',
    },
  ],
  collaborators: [
    {
      image: '/logos/Huawei-logo.svg?height=120&width=120',
      name: 'Huawei',
    },
    {
      image: '/logos/CUHK-logo.svg?height=120&width=120',
      name: 'The Chinese University of Hong Kong',
    },
    {
      image: '/logos/KCL-logo.svg?height=120&width=120',
      name: 'King’s College London',
    },
  ],
});
