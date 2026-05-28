import React, { useState } from "react"; //
// Importa los componentes y assets necesarios
import { DeleteButton } from "./DeleteButton.jsx"; //
import editIcon from "../assets/img/edit.svg"; //
import saveIcon from "../assets/img/save.svg"; //

export const HistorialCardItem = ({ item, onDelete, onEdit, onViewDetails }) => {
  // Inicializamos los estados locales
  const [isEditing, setIsEditing] = useState(false); //
  const [newName, setNewName] = useState(item.userName); //

  const handleSave = () => {
    onEdit(item.id, newName); //
    setIsEditing(false); //
  };

  return (
    <div className="bg-white rounded-xl p-5 flex justify-between items-center shadow-solid-gold mb-6 border border-goldDark">
      
      {/* Contenedor clicable: abre el modal si NO se está editando */}
      <div 
        onClick={() => !isEditing && onViewDetails(item)} 
        className="flex flex-col gap-1 font-mono text-primary font-bold text-xs tracking-wide cursor-pointer hover:opacity-80 transition-opacity flex-1"
      >
        <div className="flex items-center gap-2">
          <p>USUARIO: </p>
          {isEditing ? (
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="border-b-2 border-accent bg-transparent outline-none text-[#483375] px-1 py-0.5"
              autoFocus
              onClick={(e) => e.stopPropagation()} // Evita que al clickar el input se abra el modal
            />
          ) : (
            <p>{item.userName}</p>
          )}
        </div>
        <p>FECHA: {item.date}</p>
      </div>

      {/* Botones de acción */}
      <div className="flex items-center gap-3">
        {isEditing ? (
          <button onClick={handleSave} className="text-green-600 hover:text-green-800 text-lg" title="Guardar">
            <img src={saveIcon} alt="Icono de guardar" className="w-6 h-6 object-contain" />
          </button>
        ) : (
          <button 
            onClick={(e) => {
              e.stopPropagation(); // Evita abrir el modal al clickar en editar
              setIsEditing(true);
            }} 
            className="text-[#483375] hover:text-accent" 
            title="Editar nombre"
          >
            <img src={editIcon} alt="Icono de editar" className="w-6 h-6 object-contain" />
          </button>
        )}
        {/* Envolvemos el DeleteButton para evitar que el clic se propague al modal */}
        <div onClick={(e) => e.stopPropagation()}>
          <DeleteButton onClick={() => onDelete(item.id)} />
        </div>
      </div>
    </div>
  );
};