import { skillCategory } from "@/types/skill";

export const skills: skillCategory[] = [
  {
    title: "Languages",
    items: [
      { name: "Python", icon: "/skills/python.png" },
      { name: "JavaScript", icon: "/skills/javascript.png" },
      { name: "TypeScript", icon: "/skills/typescript.png" },
    ],
  },
  {
    title: "Machine Learning",
    items: [
      { name: "Supervised Learning", icon: "/skills/machine-learning.png" },
      { name: "Neural Networks", icon: "/skills/neural-network.png" },
      { name: "Transfer Learning", icon: "/skills/transfer-learning.png" },
      { name: "TensorFlow", icon: "/skills/tensorflow.png" },
      { name: "PyTorch", icon: "/skills/pytorch.png" },
      { name: "Keras", icon: "/skills/keras.png" },
    ],
  },
  {
    title: "Generative AI",
    items: [
      { name: "LangChain", icon: "/skills/langchain.png" },
      { name: "LangGraph", icon: "/skills/langgraph.png" },
      { name: "Agentic AI", icon: "/skills/ai-agents.png" },
      { name: "Retrieval-Augmented Generation", icon: "/skills/rag.png" },
    ],
  },
  {
    title: "Backend",
    items: [{ name: "FastAPI", icon: "/skills/fastapi.png" }],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", icon: "/skills/react.png" },
      { name: "Next.js", icon: "/skills/nextjs.png" },
      { name: "Tailwind CSS", icon: "/skills/tailwind.png" },
      { name: "HTML", icon: "/skills/html.png" },
      { name: "CSS", icon: "/skills/css.png" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Docker", icon: "/skills/docker.png" },
      { name: "Git", icon: "/skills/git.png" },
      { name: "Postman", icon: "/skills/postman.png" },
    ],
  },
];
