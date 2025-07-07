import React from 'react';

const Experiencia = () => {
  const experiencias = [
    {
      id: 1,
      cargo: "Desarrollador Frontend",
      empresa: "TechCorp Solutions",
      año: "2023-2024",
      descripcion: "Desarrollo de interfaces web responsivas con React y TypeScript. Implementación de componentes reutilizables y optimización de rendimiento."
    },
    {
      id: 2,
      cargo: "Desarrollador Full Stack",
      empresa: "InnovateTech",
      año: "2022-2023",
      descripcion: "Creación de aplicaciones web completas usando MERN Stack. Diseño de APIs RESTful y gestión de bases de datos MongoDB."
    },
    {
      id: 3,
      cargo: "Desarrollador Backend",
      empresa: "DataFlow Systems",
      año: "2021-2022",
      descripcion: "Desarrollo de microservicios con Node.js y Express. Implementación de sistemas de autenticación y autorización con JWT."
    },
    {
      id: 4,
      cargo: "Analista de Sistemas",
      empresa: "Business Solutions",
      año: "2020-2021",
      descripcion: "Análisis y documentación de requerimientos de software. Diseño de arquitecturas de sistemas y bases de datos relacionales."
    },
    {
      id: 5,
      cargo: "Desarrollador Junior",
      empresa: "StartupTech",
      año: "2019-2020",
      descripcion: "Desarrollo de aplicaciones móviles con React Native. Colaboración en proyectos de e-commerce y aplicaciones de gestión."
    },
    {
      id: 6,
      cargo: "Proyecto E-commerce",
      empresa: "Freelance",
      año: "2023",
      descripcion: "Desarrollo completo de tienda online con carrito de compras, pasarela de pagos y panel administrativo usando React y Node.js."
    },
    {
      id: 7,
      cargo: "Proyecto Sistema de Inventario",
      empresa: "Freelance",
      año: "2022",
      descripcion: "Creación de sistema de gestión de inventario con reportes dinámicos, control de stock y alertas automáticas."
    },
    {
      id: 8,
      cargo: "Proyecto App de Delivery",
      empresa: "Freelance",
      año: "2022",
      descripcion: "Desarrollo de aplicación móvil para delivery con geolocalización, tracking en tiempo real y sistema de calificaciones."
    },
    {
      id: 9,
      cargo: "Proyecto CRM Empresarial",
      empresa: "Freelance",
      año: "2024",
      descripcion: "Sistema de gestión de relaciones con clientes, automatización de procesos de venta y dashboard de métricas."
    },
    {
      id: 10,
      cargo: "Proyecto Blog Corporativo",
      empresa: "Freelance",
      año: "2023",
      descripcion: "Desarrollo de blog corporativo con CMS personalizado, SEO optimizado y sistema de comentarios moderados."
    }
  ];

  return (
    <section className="mb-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2">
        💼 Experiencia Laboral y Proyectos
      </h2>
      <div className="space-y-4">
        {experiencias.map((exp) => (
          <div key={exp.id} className="border-l-4 border-blue-400 pl-4 py-2 hover:bg-gray-50 transition-colors">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">{exp.cargo}</h3>
                <p className="text-blue-600 font-medium">{exp.empresa}</p>
                <p className="text-sm text-gray-600 mt-1">{exp.descripcion}</p>
              </div>
              <div className="mt-2 md:mt-0 md:ml-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                  {exp.año}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiencia;
