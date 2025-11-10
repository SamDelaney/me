import { jsx, jsxs } from "react/jsx-runtime";
function Qualifications() {
  const education = [{
    degree: "Bachelor of Science in Computing Science",
    institution: "Trinity Western University",
    year: "2016-2020"
  }, {
    degree: "Bachelor of Arts in Applied Linguistics",
    institution: "Trinity Western University",
    year: "2016-2020"
  }];
  const certifications = [{
    name: "Certified Blockchain Developer",
    issuer: "Blockchain Training Alliance",
    year: "2023"
  }, {
    name: "AWS Solutions Architect Professional",
    issuer: "Amazon Web Services",
    year: "2022"
  }, {
    name: "Kubernetes Application Developer",
    issuer: "Cloud Native Computing Foundation",
    year: "2021"
  }];
  const skills = [{
    category: "Programming Languages",
    items: ["Rust", "Go", "TypeScript", "Python", "Solidity"]
  }, {
    category: "Blockchain & Web3",
    items: ["Ethereum", "Polkadot", "Cosmos", "IPFS", "Smart Contracts"]
  }, {
    category: "Systems & Infrastructure",
    items: ["Kubernetes", "Docker", "AWS", "Terraform", "gRPC"]
  }, {
    category: "Cryptography",
    items: ["Zero-Knowledge Proofs", "Elliptic Curves", "Hash Functions", "Digital Signatures"]
  }, {
    category: "Databases",
    items: ["PostgreSQL", "Redis", "MongoDB", "ClickHouse", "GraphQL"]
  }];
  return /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center min-h-screen p-4 text-white", style: {
    backgroundColor: "#000",
    backgroundImage: "radial-gradient(ellipse 60% 60% at 0% 100%, #444 0%, #222 60%, #000 100%)"
  }, children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-5xl p-8 rounded-xl backdrop-blur-md bg-black/50 shadow-xl border-8 border-black/10", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold mb-8 text-center bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent", children: "Qualifications & Expertise" }),
    /* @__PURE__ */ jsxs("section", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mb-4 text-cyan-300", children: "Education" }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-4", children: education.map((edu) => /* @__PURE__ */ jsxs("div", { className: "bg-white/10 border border-white/20 rounded-lg p-4 backdrop-blur-sm", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium text-white", children: edu.degree }),
        /* @__PURE__ */ jsx("p", { className: "text-cyan-300", children: edu.institution }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: edu.year })
      ] }, edu.degree)) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mb-4 text-green-300", children: "Certifications" }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-4", children: certifications.map((cert) => /* @__PURE__ */ jsxs("div", { className: "bg-white/10 border border-white/20 rounded-lg p-4 backdrop-blur-sm", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium text-white", children: cert.name }),
        /* @__PURE__ */ jsx("p", { className: "text-green-300", children: cert.issuer }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: cert.year })
      ] }, cert.name)) })
    ] }),
    /* @__PURE__ */ jsxs("section", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mb-4 text-purple-300", children: "Technical Skills" }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4", children: skills.map((skillGroup) => /* @__PURE__ */ jsxs("div", { className: "bg-white/10 border border-white/20 rounded-lg p-4 backdrop-blur-sm", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium text-white mb-3", children: skillGroup.category }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: skillGroup.items.map((skill) => /* @__PURE__ */ jsx("span", { className: "px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-sm border border-purple-400/30", children: skill }, skill)) })
      ] }, skillGroup.category)) })
    ] })
  ] }) });
}
export {
  Qualifications as component
};
