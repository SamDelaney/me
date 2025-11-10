import { jsx, jsxs } from "react/jsx-runtime";
function Writings() {
  const writings = [{
    title: "The Future of Decentralized Computing",
    date: "2024-11-01",
    excerpt: "Exploring how blockchain technology is reshaping distributed systems and creating new paradigms for trustless computation.",
    tags: ["Blockchain", "Distributed Systems", "Web3"]
  }, {
    title: "Building Language Models from Scratch",
    date: "2024-10-15",
    excerpt: "A deep dive into transformer architectures and the mathematical foundations behind modern language models.",
    tags: ["AI", "NLP", "Machine Learning"]
  }, {
    title: "Cryptographic Protocols in Practice",
    date: "2024-09-22",
    excerpt: "Real-world applications of zero-knowledge proofs and their implications for privacy-preserving systems.",
    tags: ["Cryptography", "Privacy", "Security"]
  }, {
    title: "The Art of System Design",
    date: "2024-08-30",
    excerpt: "Lessons learned from building scalable distributed systems that handle millions of users.",
    tags: ["System Design", "Architecture", "Scalability"]
  }];
  return /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center min-h-screen bg-gradient-to-br from-zinc-800 to-black p-4 text-white", style: {
    backgroundImage: "radial-gradient(50% 50% at 20% 60%, #23272a 0%, #18181b 50%, #000000 100%)"
  }, children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-4xl p-8 rounded-xl backdrop-blur-md bg-black/50 shadow-xl border-8 border-black/10", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent", children: "Writings & Articles" }),
    /* @__PURE__ */ jsx("p", { className: "text-lg mb-8 text-center text-gray-300", children: "Thoughts on technology, cryptography, and the future of computing" }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-6", children: writings.map((article) => /* @__PURE__ */ jsxs("article", { className: "bg-white/10 border border-white/20 rounded-xl p-6 backdrop-blur-sm shadow-lg hover:bg-white/15 transition-all cursor-pointer", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start mb-3", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-white", children: article.title }),
        /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-400", children: new Date(article.date).toLocaleDateString() })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-4 leading-relaxed", children: article.excerpt }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: article.tags.map((tag) => /* @__PURE__ */ jsx("span", { className: "px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-400/30", children: tag }, tag)) })
    ] }, article.title)) })
  ] }) });
}
export {
  Writings as component
};
