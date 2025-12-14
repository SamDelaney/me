import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/work/blockchain')({
  component: BlockchainWork,
})

function BlockchainWork() {
  const projects = [
    {
      name: 'Grabbit',
      description:
        'A decentralized auction platform leveraging UTXO-parallelized smart contracts for secure, deterministic, scalable bidding.',
      technologies: ['SvelteKit', 'Plutarch', 'Haskell', 'Cardano', 'Vercel', 'Supabase'],
      github: 'https://github.com/ikigai-github/grabbit-smart-contracts',
      live: 'https://grabbit.market',
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
        <h1 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
          Work in Blockchain
        </h1>
        <p className="text-lg text-center text-gray-300 mb-8">
          Decentralized applications and smart contract systems
        </p>

        <div className="grid gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-white/5 border border-white/20 rounded-xl p-6 backdrop-blur-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-white">
                  {project.name}
                </h2>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source
                  </a>
                  <a
                    href={project.live}
                    className="px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Try it
                  </a>
                </div>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm border border-orange-400/30"
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
