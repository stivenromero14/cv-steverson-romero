// src/components/Educacion.jsx
const formacion = [
  { institucion: "SENA", curso: "Tecnólogo en Análisis y Desarrollo de Software", año: 2023 },
  { institucion: "Platzi", curso: "Curso de React", año: 2022 },
  { institucion: "Coursera", curso: "Fundamentos de JavaScript", año: 2021 },
  { institucion: "Udemy", curso: "Node.js y Express", año: 2023 },
  { institucion: "Universidad Libre", curso: "Seminario de Tecnologías Web", año: 2020 },
  { institucion: "Google Activate", curso: "Curso de Desarrollo Web", año: 2021 }
];

export default function Educacion() {
  return (
    <section>
      <h2>Educación</h2>
      <ul>
        {formacion.map((edu, i) => (
          <li key={i}>
            <strong>{edu.curso}</strong> - {edu.institucion} ({edu.año})
          </li>
        ))}
      </ul>
    </section>
  );
}
