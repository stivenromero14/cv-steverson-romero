// src/components/StackTecnologias.jsx
const tecnologias = ["JavaScript", "React", "Node.js", "HTML", "CSS", "MongoDB", "Express", "TypeScript", "Figma", "Git"];

function getColor(tecnologia) {
  switch (tecnologia) {
    case "JavaScript": return "bg-yellow-300";
    case "React": return "bg-blue-300";
    case "Node.js": return "bg-green-300";
    case "MongoDB": return "bg-green-600";
    case "Figma": return "bg-pink-300";
    default: return "bg-gray-300";
  }
}

export default function StackTecnologias() {
  return (
    <section>
      <h2>Stack de Tecnologías</h2>
      <div className="flex flex-wrap gap-2">
        {tecnologias.map((tec, i) => (
          <span key={i} className={`px-3 py-1 rounded-full text-white ${getColor(tec)}`}>
            {tec}
          </span>
        ))}
      </div>
    </section>
  );
}
