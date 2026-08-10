import {Project} from "@/types/projects";

export const projects: Project[] = [
    {
        name: "VerseChat",
        description:
            "An AI-powered Bible Agent that combines semantic search, web search, and Wikipedia retrieval to deliver context-aware answers with persistent conversational history.",
        github: "https://github.com/amulyaprasanth/bible_chatbot",
        live: "https://versechat.up.railway.app/",
        technologies: [
            "React.js",
            "FastAPI",
            "LangChain",
            "Groq",
            "Google OAuth",
            "PostgreSQL",
            "pgvector",
        ],
        highlights: [
            "Built an AI-powered Bible assistant using semantic search with PostgreSQL and pgvector for context-aware retrieval.",
            "Integrated Wikipedia and web search tools to enrich responses with external knowledge.",
            "Implemented Google Authentication and persistent conversational history for personalized interactions.",
            "Developed a full-stack application with a React.js frontend and FastAPI backend using LangChain orchestration.",
        ],
        thumbnail: "/versechat.png"
    },
    {
        name: "LangGenie",
        description:
            "A full-stack AI assistant that combines Retrieval-Augmented Generation (RAG), external knowledge retrieval, and AI-powered content generation for research and writing tasks.",

        github: "https://github.com/amulyaprasanth/LangGenie/",
        live: "https://langgenie.netlify.app/",

        technologies: [
            "React.js",
            "FastAPI",
            "LangChain",
            "PostgreSQL",
            "pgvector",
            "Groq",
            "Docker",
        ],

        highlights: [
            "Implemented Retrieval-Augmented Generation (RAG) using LangChain, pgvector and HuggingFaceEmbeddings for context-aware responses.",
            "Integrated Wikipedia and ArXiv tools to enhance answers with external knowledge retrieval.",
            "Built AI-powered writing tools capable of generating essays, blogs, speeches, and other long-form content.",
            "Developed a full-stack application with a React.js frontend and FastAPI backend, containerized using Docker.",
        ],
        thumbnail: "/LangGenie.png"
    },
    {
        name: "Hourly Amazon Stock Prediction",

        description:
            "An end-to-end MLOps pipeline for hourly Amazon stock price prediction, automating data ingestion, feature engineering, model training, deployment, and continuous retraining.",
        github: "https://github.com/amulyaprasanth/hourly_amazon_stock_prediction",
        live: "https://hourlyamazonstockprediction.streamlit.app/",

        technologies: [
            "PyTorch",
            "Hopsworks",
            "GitHub Actions",
            "Streamlit",
            "Docker",
            "yfinance",
            "Pandas",
        ],

        highlights: [
            "Designed and implemented an end-to-end machine learning pipeline covering data ingestion, feature engineering, training, inference, deployment, and monitoring.",
            "Built an LSTM-based forecasting model in PyTorch using technical indicators such as RSI and CCI for time-series prediction.",
            "Automated daily feature engineering and inference pipelines with scheduled GitHub Actions workflows, alongside weekly model retraining.",
            "Leveraged Hopsworks Feature Store for versioned feature management, reproducible training, and consistent online/offline feature serving.",
            "Deployed an interactive Streamlit dashboard for real-time prediction visualization and model inference.",
        ],
        thumbnail: "/amazon_stock_prediction.png"
    },
];
