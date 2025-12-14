import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/work/cryptography')({
  component: CryptographyWork,
})

function CryptographyWork() {
  const projects = [
    {
      name: 'Aiken ZK Verifiers',
      description:
        'Onchain ZK verifiers for the Groth16, Plonk and Bulletproofs proving systems implemented in Aiken.',
      technologies: ['Aiken', 'Cardano', 'Groth 16', 'Plonk', 'Bulletproofs'],
      status: 'Open Source',
      github: 'https://github.com/ADAOcommunity/zk',
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
