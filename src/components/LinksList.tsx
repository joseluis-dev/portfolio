const linkList = [
  { id: 1, name: 'Acerca de', path: '#about' },
  { id: 2, name: 'Experiencia', path: '#experience' },
  { id: 3, name: 'Trabajo', path: '#job' },
  { id: 4, name: 'Contacto', path: '#contact' }
]

export const LinksList = () => {
  return (
    <ul className="flex gap-6">
      {linkList.map(link => (
        <li key={link.id}>
          <a href={link.path} className="p-2 border border-transparent hover:border hover:border-[var(--sky-blue)] hover:text-[var(--sky-blue)] rounded-md transition-all duration-200">{link.name}</a>
        </li>
      ))}
    </ul>
  )
}
