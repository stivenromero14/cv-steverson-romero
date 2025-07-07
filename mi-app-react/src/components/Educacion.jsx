// src/components/Educacion.jsx
const formacion = [
  { institucion: "SENA", curso: "Tecnólogo en Análisis y Desarrollo de Software", año: 2023 },
  { institucion: "Platzi", curso: "Curso de React", año: 2022 },
  { institucion: "Coursera", curso: "Fundamentos de JavaScript", año: 2021 },
  { institucion: "Udemy", curso: "Node.js y Express", año: 2023 },
  { institucion: "Universidad Libre", curso: "Seminario de Tecnologías Web", año: 2020 },
  { institucion: "Google Activate", curso: "Curso de Desarrollo Web", año: 2021 }
];

export default function Educacion({ estudios }) {
  const educacion = [
    { id: 1, titulo: "Ingeniería en Sistemas", universidad: "Universidad Nacional", periodo: "2020-2024" }
  ];

  return (
    <section>
      <h3>Educación</h3>
      <ul>
        {educacion.map((edu) => (
          <li key={edu.id}>
            <strong>{edu.titulo}</strong> - {edu.universidad} ({edu.periodo})
          </li>
        ))}
      </ul>
    </section>
  );
}
