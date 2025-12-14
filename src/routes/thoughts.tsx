import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/thoughts')({
  component: Thoughts,
})

type ArticleSource = 'internal' | 'external'

function Thoughts() {
  const thoughts = [
    {
      title: 'The Impact of Hydra - Fireside Chat at Rare Evo 2024',
      date: '2024-8-17',
      excerpt:
        'Speaking about the work we\'ve done with Hydra and its implications for the Cardano ecosystem and beyond.',
      tags: ['Cardano', 'Sidechains', 'Hydra', 'State Channels', 'Blockchain Scalability'],
      link: 'https://www.youtube.com/watch?v=Rj4QAGLSMxs',
      type: 'external' as ArticleSource
    },
    {
      title: 'Grabbit Contracts - Technical Deep Dive',
      date: '2023-11-17',
      excerpt:
        'Breaking down the UTXO design challenges and solutions that inspired grabbit.market\'s innovative auction contracts.',
      tags: ['Blockchain', 'UTXO Protocol Design', 'Smart Contracts'],
      link: 'https://medium.com/@ikigaitech/technical-deep-dive-into-auction-contracts-09881eb05bc9',
      type: 'external' as ArticleSource
    }
  ]

  const handleArticleClick = (article: typeof thoughts[0]) => {
    if (article.type === 'external' && article.link) {
      window.open(article.link, '_blank', 'noopener,noreferrer')
    }
    // Internal links will be handled by the Link component
  }

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gradient-to-br from-zinc-800 to-black p-4 text-white"
      style={{
        backgroundImage:
          'radial-gradient(50% 50% at 20% 60%, #23272a 0%, #18181b 50%, #000000 100%)',
      }}
    >
      <div className="w-full max-w-4xl p-8 rounded-xl backdrop-blur-md bg-black/50 shadow-xl border-8 border-black/10">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Writings & Other Thoughts
        </h1>
        <p className="text-lg mb-8 text-center text-gray-300">
          Thoughts on technology, cryptography, and the future of computing
        </p>

        <div className="grid gap-6">
          {thoughts.map((article) => {
            const ArticleComponent = article.type === 'internal' ? Link : 'article'
            const articleProps = article.type === 'internal' 
              ? { to: article.link, className: "block" }
              : { onClick: () => handleArticleClick(article) }

            return (
              <ArticleComponent
                key={article.title}
                {...articleProps}
                className="bg-white/10 border border-white/20 rounded-xl p-6 backdrop-blur-sm shadow-lg hover:bg-white/15 transition-all cursor-pointer block"
              >
                <div className="flex justify-between items-start mb-3">
                  <h2 className="text-xl font-semibold text-white">
                    {article.title}
                  </h2>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400">
                      {new Date(article.date).toLocaleDateString()}
                    </span>
                    {article.type === 'external' && (
                      <svg 
                        className="w-4 h-4 text-gray-400" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                        />
                      </svg>
                    )}
                  </div>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-400/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </ArticleComponent>
            )
          })}
        </div>
      </div>
    </div>
  )
}
