🃏 Contemporary Goddesses Tarot
Aplicación web interactiva de lectura de tarot digital que combina simbolismo esotérico con un homenaje a mujeres referentes del ámbito STEM, asociando una diosa a cada carta.

🟡 Estado: En desarrollo · 📄 Proyecto educativo – Bootcamp FemCoders

---
🚀 Instalación
`bash
git clone https://github.com/fabileoruf/tarot-repo.git
cd tarot_project
npm install
npm run dev
`

`bash
# Backend local
npm run server
`
---
🧠 Funcionalidades
Lectura de Tarot
Visualización de 22 cartas desde la API
Selección de 3 cartas (pasado, presente, futuro) Aleatoreamente
Significado e imagen de la diosa STEM asociada y Arcano

Historial (CRUD)
Create: Guardar la fecha y nombre de usuario por cada lectura realizada
Read: Mostrar el significado de cada carta / Mostrar la diosa contemporánea asociada a la carta elegida
Update : Actualizar la información de nombre de usuario de las lecturas guardadas
Delete: Eliminar la lectura guardada seleccionada / vaciar el historial de lecturas guardadas

---

⚙️ Stack Tecnológico
| Área | Tecnologías |
|------|------------|
| Frontend | React.js, Vite, Tailwind CSS |
| Datos | Axios, json-server |
| Testing | Vitest |
| Diseño | Figma, Stitch |
| Gestión | Jira, Confluence, Git & GitHub |
🔗 API
`
GET  https://6872278c76a5723aacd3cbb3.mockapi.io/api/v1/tarot
GET  https://6872278c76a5723aacd3cbb3.mockapi.io/api/v1/tarot/:id


---

## 🏗️ Estructura

````
public/
src/
├── assets/
├── components/
├── config/
│   └── router.jsx
├── context/
├── data/
├── pages/
├── services/
├── App.jsx
├── index.css
├── main.jsx
````

---

## 🔄 Flujo de Usuario

1. Accede a la app
2. Visualiza 22 cartas boca abajo
3. Selecciona 3 cartas (pasado · presente · futuro)
4. Ve la interpretación + diosa STEM asociada
5. Guarda la lectura
6. Consulta el historial
↺ Nueva lectura → vuelve al inicio

---

## 🔀 Git Workflow

| Rama | Uso |
|------|-----|
| main | Producción |
| dev | Integración |
| feature/* | Desarrollo |

Commits: feat: · fix: · refactor: · test:`
Pull Requests obligatorios con code review.

---
👥 Equipo
Fabiana Leonardo · Andrea Tapia · Johanna Monroy · Nayeli C M · Siuzanna Vachaganian

---
🔮 Próximamente
Animaciones de cartas · Backend real · Internacionalización · Mejoras de accesibilidad