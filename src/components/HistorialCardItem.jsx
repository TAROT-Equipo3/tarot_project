import { useState } from "react";
import { DeleteButton } from "./DeleteButton.jsx";
import editIcon from "../assets/img/edit.svg";
import saveIcon from "../assets/img/save.svg";

export const HistorialCardItem = ({ item, onDelete, onEdit }) => {
  // 1. Creamos dos estados locales: uno para saber si estamos editando, y otro para guardar lo que el usuario escribe.
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(item.userName);

  // 2. Esta función se ejecuta al hacer clic en el botón de Guardar
  const handleSave = () => {
    onEdit(item.id, newName); // Le enviamos el ID y el nombre nuevo a Historial.jsx
    setIsEditing(false); // Apagamos el modo edición para volver a ver el texto normal
  };

  return (
    <div className="bg-white rounded-xl p-5 flex justify-between items-center shadow-solid-gold mb-6 border border-goldDark">
      {/* La tirada */}
      <div className="flex flex-col gap-1 font-mono text-primary font-bold text-xs tracking-wide">
        <div className="flex items-center gap-2">
          <p>USUARIO: </p>

          {/* 3. RENDERIZADO CONDICIONAL: Si isEditing es true, mostramos un input. Si es false, mostramos el párrafo */}
          {isEditing ? (
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="border-b-2 border-accent bg-transparent outline-none text-[#483375] px-1 py-0.5"
              autoFocus // Hace que el cursor se ponga automáticamente en el input
            />
          ) : (
            <p>{item.userName}</p>
          )}
        </div>
        <p>FECHA: {item.date}</p>
      </div>

      {/* Acciones */}
      <div className="flex items-center gap-3">
        {/* 4. Cambiamos el botón dependiendo del modo */}
        {isEditing ? (
          <button
            onClick={handleSave}
            className="text-green-600 hover:text-green-800 text-lg"
            title="Guardar"
          >
            <img
              src={saveIcon}
              alt="Icono de guardar"
              className="w-6 h-6 object-contain"
            />
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="text-[#483375] hover:text-accent"
            title="Editar nombre"
          >
            <img
              src={editIcon}
              alt="Icono de editar"
              className="w-6 h-6 object-contain"
            />
          </button>
        )}

        <DeleteButton onClick={() => onDelete(item.id)} />
      </div>
    </div>
  );
};
