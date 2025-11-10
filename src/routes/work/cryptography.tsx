import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/work/cryptography')({
  component: CryptographyWork,
})

function CryptographyWork() {
  const projects = [
    {
      name: 'Zero-Knowledge Voting System',
      description:
        'Anonymous voting platform using zk-SNARKs that ensures ballot privacy while maintaining verifiable vote counting.',
      technologies: ['Circom', 'Solidity', 'JavaScript', 'Merkle Trees'],
      achievements: '100% voter privacy, publicly verifiable results',
      impact: 'Used in 5+ DAO elections',
      status: 'Production',
      github: 'https://github.com/example/zk-voting',
    },
    {
      name: 'Homomorphic Encryption Library',
      description:
        'High-performance library for fully homomorphic encryption enabling computation on encrypted data.',
      technologies: ['Rust', 'SEAL', 'Lattice Cryptography', 'SIMD'],
      achievements: '10x performance improvement over existing solutions',
      impact: '500+ developers using the library',
      status: 'Open Source',
      github: 'https://github.com/example/fhe-lib',
    },
    {
      name: 'Multi-Party Computation Protocol',
      description:
        'Secure MPC implementation for private set intersection and collaborative computation without revealing inputs.',
      technologies: ['Go', 'Garbled Circuits', 'Oblivious Transfer', 'TLS'],
      achievements: 'Handles 1M+ element sets, sub-second computation',
      impact: 'Deployed in financial institutions',
      status: 'Enterprise',
      github: 'https://github.com/example/mpc-protocol',
    },
    {
      name: 'Threshold Signature Scheme',
      description:
        "Distributed key generation and signing system using Shamir's secret sharing for enhanced security.",
      technologies: ['elliptic-curves', 'BLS Signatures', 'Rust', 'Network'],
      achievements: 'Byzantine fault tolerance, 99.99% uptime',
      impact: 'Securing $10M+ in digital assets',
      status: 'Production',
      github: 'https://github.com/example/threshold-sigs',
    },
  ]

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gradient-to-br from-zinc-800 to-black p-4 text-white"
      style={{
        backgroundImage:
          'radial-gradient(50% 50% at 20% 60%, #1a1a1a 0%, #0a0a0a 50%, #000000 100%)',
      }}
    >
      <div className="w-full max-w-5xl p-8 rounded-xl backdrop-blur-md bg-black/50 shadow-xl border-8 border-black/10">
        <h1 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
          Cryptography Projects
        </h1>
        <p className="text-lg text-center text-gray-300 mb-8">
          Advanced cryptographic protocols and privacy-preserving systems
        </p>

        <div className="grid gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-white/5 border border-white/20 rounded-xl p-6 backdrop-blur-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    {project.name}
                  </h2>
                  <span
                    className={`inline-block px-2 py-1 mt-2 rounded text-xs font-medium ${
                      project.status === 'Production'
                        ? 'bg-green-500/20 text-green-300'
                        : project.status === 'Open Source'
                          ? 'bg-blue-500/20 text-blue-300'
                          : project.status === 'Enterprise'
                            ? 'bg-purple-500/20 text-purple-300'
                            : 'bg-gray-500/20 text-gray-300'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <a
                  href={project.github}
                  className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Code
                </a>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-pink-300 font-medium mb-1">
                    Key Achievement:
                  </p>
                  <p className="text-gray-400">{project.achievements}</p>
                </div>
                <div>
                  <p className="text-red-300 font-medium mb-1">
                    Real-world Impact:
                  </p>
                  <p className="text-gray-400">{project.impact}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm border border-pink-400/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
