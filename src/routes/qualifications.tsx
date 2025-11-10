import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/qualifications')({
  component: Qualifications,
})

function Qualifications() {
  const education = [
    {
      degree: 'Bachelor of Science in Computing Science',
      institution: 'Trinity Western University',
      year: '2016-2020',
    },
    {
      degree: 'Bachelor of Arts in Applied Linguistics',
      institution: 'Trinity Western University',
      year: '2016-2020',
    },
  ]

  const certifications = [
    {
      name: 'Certified Blockchain Developer',
      issuer: 'Blockchain Training Alliance',
      year: '2023',
    },
    {
      name: 'AWS Solutions Architect Professional',
      issuer: 'Amazon Web Services',
      year: '2022',
    },
    {
      name: 'Kubernetes Application Developer',
      issuer: 'Cloud Native Computing Foundation',
      year: '2021',
    },
  ]

  const skills = [
    {
      category: 'Programming Languages',
      items: ['Rust', 'Go', 'TypeScript', 'Python', 'Solidity'],
    },
    {
      category: 'Blockchain & Web3',
      items: ['Ethereum', 'Polkadot', 'Cosmos', 'IPFS', 'Smart Contracts'],
    },
    {
      category: 'Systems & Infrastructure',
      items: ['Kubernetes', 'Docker', 'AWS', 'Terraform', 'gRPC'],
    },
    {
      category: 'Cryptography',
      items: [
        'Zero-Knowledge Proofs',
        'Elliptic Curves',
        'Hash Functions',
        'Digital Signatures',
      ],
    },
    {
      category: 'Databases',
      items: ['PostgreSQL', 'Redis', 'MongoDB', 'ClickHouse', 'GraphQL'],
    },
  ]

  return (
    <div
      className="flex items-center justify-center min-h-screen p-4 text-white"
      style={{
        backgroundColor: '#000',
        backgroundImage:
          'radial-gradient(ellipse 60% 60% at 0% 100%, #444 0%, #222 60%, #000 100%)',
      }}
    >
      <div className="w-full max-w-5xl p-8 rounded-xl backdrop-blur-md bg-black/50 shadow-xl border-8 border-black/10">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
          Qualifications & Expertise
        </h1>

        {/* Education Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-cyan-300">
            Education
          </h2>
          <div className="grid gap-4">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="bg-white/10 border border-white/20 rounded-lg p-4 backdrop-blur-sm"
              >
                <h3 className="text-lg font-medium text-white">{edu.degree}</h3>
                <p className="text-cyan-300">{edu.institution}</p>
                <p className="text-gray-400">{edu.year}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-green-300">
            Certifications
          </h2>
          <div className="grid gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="bg-white/10 border border-white/20 rounded-lg p-4 backdrop-blur-sm"
              >
                <h3 className="text-lg font-medium text-white">{cert.name}</h3>
                <p className="text-green-300">{cert.issuer}</p>
                <p className="text-gray-400">{cert.year}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-purple-300">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="bg-white/10 border border-white/20 rounded-lg p-4 backdrop-blur-sm"
              >
                <h3 className="text-lg font-medium text-white mb-3">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-sm border border-purple-400/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
