import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/work/language-software')({
  component: LanguageSoftware,
})

function LanguageSoftware() {
  const projects = [
    {
      name: 'Paratext',
      description:
        'The premier tool for Bible translation, used by thousands of translators worldwide to create and manage scriptural texts.',
      technologies: ['C#', 'HTML', 'XSLT'],
      role: 'Language Software Developer',
      dates: '2020 - 2021',
      site: 'https://paratext.org',
    },
    {
      name: 'TheCombine',
      description:
        'A web-based platform for collaborative RWC (rapid word collection), enhancing teamwork among translators & facilitating fast data cleanup.',
      technologies: ['TypeScript', 'React', 'Node.js', 'MongoDB'],
      role: 'Project Manager & Lead Developer',
      dates: '2019',
      site: 'https://software.sil.org/thecombine/',
    },
    {
      name: 'FieldWorks',
      description:
        'A comprehensive suite of tools for linguistic analysis, supporting complex writing systems and linguistic data management.',
      technologies: ['C#', 'HTML', 'XSLT'],
      role: 'Software Developer',
      dates: '2018',
      site: 'https://software.sil.org/fieldworks/',
    }
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
        <h1 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Work in Language Software
        </h1>
        <p className="text-lg text-center text-gray-300 mb-8">
          Tools I have developed as part of SIL or my own work to support language
          documentation and Bible translation efforts.
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
                <a
                  href={project.site}
                  className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check it out
                </a>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-purple-300 font-medium mb-1">Title:</p>
                  <p className="text-gray-400">{project.role}</p>
                </div>
                <div>
                  <p className="text-purple-300 font-medium mb-1">When:</p>
                  <p className="text-gray-400">{project.dates}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-400/30"
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
