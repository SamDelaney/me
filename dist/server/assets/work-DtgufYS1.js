import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
function MyWork() {
  const projects = [{
    name: "Decentralized Storage Protocol",
    description: "Built a distributed storage system using IPFS and blockchain technology, handling 100TB+ of data with 99.9% uptime.",
    technologies: ["Rust", "IPFS", "Ethereum", "WebAssembly"],
    category: "blockchain",
    status: "Production",
    link: "/demo/start/ssr/spa-mode"
  }, {
    name: "Multi-Language Code Compiler",
    description: "Developed a cloud-native compiler service supporting 15+ programming languages with advanced optimization algorithms.",
    technologies: ["Go", "LLVM", "Kubernetes", "gRPC"],
    category: "language-software",
    status: "Active Development",
    link: "/demo/start/ssr/full-ssr"
  }, {
    name: "Zero-Knowledge Authentication System",
    description: "Implemented a privacy-preserving authentication protocol using zk-SNARKs, enabling anonymous verification.",
    technologies: ["Circom", "Solidity", "TypeScript", "Node.js"],
    category: "cryptography",
    status: "Research",
    link: "/demo/start/ssr/data-only"
  }];
  return /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center min-h-screen bg-gradient-to-br from-zinc-900 to-black p-4 text-white", style: {
    backgroundImage: "radial-gradient(50% 50% at 20% 60%, #1a1a1a 0%, #0a0a0a 50%, #000000 100%)"
  }, children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-5xl p-8 rounded-xl backdrop-blur-md bg-black/50 shadow-xl border-8 border-black/10", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold mb-4 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-green-400 bg-clip-text text-transparent", children: "My Work" }),
    /* @__PURE__ */ jsx("p", { className: "text-lg text-center text-gray-300 mb-8", children: "Innovative projects spanning blockchain, language software, and cryptography" }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-6", children: projects.map((project) => /* @__PURE__ */ jsxs(Link, { to: project.link, className: "group block p-6 rounded-xl bg-white/5 border border-white/20 hover:bg-white/10 transition-all hover:scale-[1.02] hover:shadow-xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start mb-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors", children: project.name }),
        /* @__PURE__ */ jsx("span", { className: `px-3 py-1 rounded-full text-sm font-medium ${project.status === "Production" ? "bg-green-500/20 text-green-300 border border-green-400/30" : project.status === "Active Development" ? "bg-blue-500/20 text-blue-300 border border-blue-400/30" : "bg-purple-500/20 text-purple-300 border border-purple-400/30"}`, children: project.status })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-4 leading-relaxed", children: project.description }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: project.technologies.map((tech) => /* @__PURE__ */ jsx("span", { className: "px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600/50", children: tech }, tech)) })
    ] }, project.name)) }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 text-center", children: /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "Click on any project to explore detailed case studies" }) })
  ] }) });
}
export {
  MyWork as component
};
