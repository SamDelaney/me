import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/work/blockchain')({
  component: BlockchainWork,
})

function BlockchainWork() {
  console.log('BlockchainWork component is rendering!')

  const projects = [
    {
      name: 'DeFi Yield Aggregator',
      description:
        'Built a smart contract system that automatically finds the highest yield opportunities across multiple DeFi protocols.',
      technologies: ['Solidity', 'Hardhat', 'React', 'Web3.js'],
      metrics: '$2.5M TVL, 500+ active users',
      github: 'https://github.com/example/defi-aggregator',
      live: 'https://yield-app.example.com',
    },
    {
      name: 'NFT Marketplace with Royalties',
      description:
        'Created a gas-efficient NFT marketplace with automatic royalty distribution and batch minting capabilities.',
      technologies: ['Solidity', 'IPFS', 'Next.js', 'ethers.js'],
      metrics: '10,000+ NFTs traded, <$5 avg gas cost',
      github: 'https://github.com/example/nft-marketplace',
      live: 'https://nft-market.example.com',
    },
    {
      name: 'Cross-Chain Bridge Protocol',
      description:
        'Implemented a trustless bridge for asset transfers between Ethereum and Polygon using merkle proofs.',
      technologies: ['Solidity', 'Go', 'Merkle Trees', 'Polygon'],
      metrics: '$500K+ bridged assets, 99.9% uptime',
      github: 'https://github.com/example/bridge-protocol',
      live: 'https://bridge.example.com',
    },
    {
      name: 'DAO Governance Framework',
      description:
        'Developed a flexible governance system with delegation, proposal templates, and automated execution.',
      technologies: ['Solidity', 'OpenZeppelin', 'TypeScript', 'Snapshot'],
      metrics: '15+ DAOs using framework, 1000+ proposals',
      github: 'https://github.com/example/dao-framework',
      live: 'https://governance.example.com',
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
          Blockchain Projects
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
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    className="px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4">
                <p className="text-orange-300 font-medium mb-2">Key Metrics:</p>
                <p className="text-gray-400">{project.metrics}</p>
              </div>

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
