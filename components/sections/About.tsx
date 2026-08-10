"use client";
import { motion } from "motion/react";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-12"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.8,
      }}>
      <div className="max-w-7xl mx-auto px-10 lg:px-20 py-10 bg-white/20 backdrop-blur-md rounded-3xl text-center">
        <h2 className="text-3xl font-bold text-blue-500 text-center mb-8">
          About Me
        </h2>

        <div className="space-y-6 text-lg leading-8 text-gray-200">
          <p>
            I'm an{" "}
            <span className="font-semibold text-blue-300">
              Applied AI Engineer
            </span>{" "}
            passionate about building intelligent systems that solve real-world
            problems. I currently work as a{" "}
            <span className="font-semibold text-blue-300">
              Systems Engineer at Tata Consultancy Services (TCS)
            </span>
            , where I contribute to building AI-driven software solutions.
            Previously, I worked as a{" "}
            <span className="font-semibold text-blue-300">
              Freelance Machine Learning Engineer
            </span>
            {" "}, developing AI applications in computer vision and predictive
            analytics, including an AI-powered Fruit Ripeness Prediction System,
            an Automated Bottle Detection System, and an intelligent Focus
            Assistant that recommends personalized neuro-habits to improve
            productivity.
          </p>

          <p>
            My core tech stack includes{" "}
            <span className="font-semibold text-blue-300">
              Python, PyTorch, TensorFlow, FastAPI, LangChain, Agentic AI, Large
              Language Models (LLMs), Retrieval-Augmented Generation (RAG),
              React, Docker, GitHub Actions and FastAPI.
            </span>{" "}
            I enjoy building complete AI products—from data pipelines and model
            training to scalable APIs, deployment, and MLOps.
          </p>

          <p>
            Some of my notable projects include{" "}
            <span className="font-semibold text-blue-300">LangGenie</span>, a
            RAG-powered research assistant that combines LLMs with knowledge
            retrieved from Wikipedia and arXiv;{" "}
            <span className="font-semibold text-blue-300">Bible Chat</span>, an
            AI assistant that enables semantic Bible search while enriching
            responses using Wikipedia and real-time web search; and the{" "}
            <span className="font-semibold text-blue-300">
              Automated Amazon Stock Prediction System
            </span>
            {" "}, which leverages PyTorch LSTMs, a Feature Store, GitHub Actions,
            and Streamlit to continuously retrain, deploy, and serve next-day
            stock price forecasts.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
