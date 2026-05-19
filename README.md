# 🃏 Contemporary Goddesses Tarot

## 📌 Descripción del Proyecto

Contemporary Goddesses Tarot es una aplicación web interactiva que permite al usuario realizar una lectura de tarot digital basada en tres fases: pasado, presente y futuro.

El proyecto combina el simbolismo del tarot con un enfoque contemporáneo, mostrando mujeres referentes del ámbito STEM asociadas a cada carta, como homenaje a su impacto en un sector tradicionalmente masculinizado.

## 👥 Enlace presentación

## 👥 Proceso de instalación
- Paso 1 
    Git clone del repo
- Paso 2 
 npm install
 npm run dev (visualizar)
 npm run server 

---

## 👥 Equipo

- Fabiana Leonardo  
- Andrea Tapia  
- Johanna Monroy  
- Nayeli C M  
- Siuzanna Vachaganian  

---

## 🎯 Objetivos

- Crear una experiencia de usuario interactiva y fluida  
- Consumir datos dinámicos desde una API  
- Implementar lógica de selección de cartas  
- Gestionar un historial persistente de lecturas  
- Aplicar buenas prácticas de desarrollo frontend  

---
## 🌐  Lenguaje

- Pagina en castellano
- Desarrollo en inglés

---

## 🧠 Funcionalidades

### 🎴 Lectura de Tarot
- Mostrar 22 cartas desde la API  
- Selección de máximo 3 cartas:
  - Pasado  
  - Presente  
  - Futuro  
- Visualización del significado  
- Mostrar la diosa STEM asociada  
- Evitar cartas duplicadas  

### 🗂️ Gestión de Historial (CRUD)
- Guardar lectura  
- Editar nombre del usuario  
- Eliminar lectura individual  
- Eliminar todo el historial  

---

## ⚙️ Stack Tecnológico

### Frontend
- React.js  
- Vite  
- Tailwind CSS  

### Gestión de datos
- Axios  
- json-server  

### Testing
- Vitest  

---

## 🛠 Herramientas de Trabajo

- 🎨 Figma → diseño UI (wireframes y prototipos)  
- 🎨 Stitch → generación de diseño visual  
- 📋 Jira → gestión de tareas y sprints  
- 📚 Confluence → documentación del proyecto  
- 💻 VS Code → desarrollo  
- 🔀 Git & GitHub → control de versiones  

---

## 🔗 API

- https://6872278c76a5723aacd3cbb3.mockapi.io/api/v1/tarot  
- https://6872278c76a5723aacd3cbb3.mockapi.io/api/v1/tarot/:id  

---

## 🏗️ Estructura del Proyecto


src/
├──assets/
├── img/ 
├── components/  
├── data/  
├── pages/  
├── services/  
├── hooks/  
├── utils/  
├── styles/  
├── tests/  
├── Apps.jsx/  
└── main.jsx  


---

## 🎨 Diseño (UI/UX)

- Wireframes en Figma (Mobile + Desktop)  
- Diseño generado con Stitch  
- Enfoque responsive (Mobile First)  

---

## 🔄 Flujo de Usuario

1. Usuario accede a la aplicación  
2. Visualiza 22 cartas boca abajo  
3. Selecciona 3 cartas  
4. Visualiza interpretación  
5. Guarda la lectura  
6. Consulta historial  

---

## 📊 Metodología

### Scrum
- Trabajo por sprints  
- Gestión en Jira  
- Seguimiento con Kanban  

### Flujo de trabajo
- Branches feature/*  
- Pull Requests obligatorios  
- Code Review entre compañeros  

---

## 🔀 Git Workflow

- main → producción  
- dev → integración  
- feature/* → desarrollo  

### Commits
- feat:  
- fix:  
- refactor:  
- test:  

---

## 🧪 Testing

- Tests unitarios con Vitest  
- Validación de lógica de cartas y CRUD  

---

## 💾 Persistencia

- json-server como backend local  
- Guarda nombre, fecha y cartas seleccionadas  

---

## 🔧 Instalación

```bash
git clone https://github.com/fabileoruf/tarot-repo.git
cd tarot-repo
npm install
npm run dev
```

### Backend local

```bash
npx json-server --watch db.json --port 3001
```

---

## 📦 Buenas Prácticas

- Uso de Tailwind sin CSS innecesario  
- Manejo de errores con Axios  
- Código modular y limpio  
- Revisión antes de merge  

---

## 🚀 Estado

🟡 En desarrollo  

---

## 🔮 Futuro

- Animaciones de cartas  
- Backend real  
- Internacionalización  
- Mejoras de accesibilidad  

---

## 📄 Licencia

Proyecto educativo – Bootcamp FemCoders