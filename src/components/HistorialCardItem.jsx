import React, { useState } from "react";
import { DeleteButton } from "./DeleteButton.jsx";

// Assets
import editIcon from "../assets/img/edit.svg";
import saveIcon from "../assets/img/save.svg";

export const HistorialCardItem = ({ item, onDelete, onEdit, onViewDetails }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(item.userName);

  const handleSave = (e) => {
    e.stopPropagation();
    onEdit(item.id, newName);
    setIsEditing(false);
  };

  return (
    <div className="bg-white rounded-xl p-5 flex justify-between items-center shadow-solid-gold mb-6 border border-card-inner">
      
      {/* Contenedor de Información (Clicable para ver detalles) */}
      <div 
        onClick={() => !isEditing && onViewDetails(item)} 
        className="flex-1 flex flex-col gap-1 font-mono text-primary font-bold text-xs tracking-wide cursor-pointer hover:opacity-80 transition-opacity"
      >
        <div className="flex items-center gap-2">
          <span>USUARIO:</span>
          {isEditing ? (
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="border-b-2 border-accent bg-transparent outline-none text-primary px-1 py-0.5"
              autoFocus
              onClick={(e) => e.stopPropagation()} 
            />
          ) : (
            <span>{item.userName}</span>
          )}
        </div>
        <p className="opacity-70">FECHA: {item.date}</p>
      </div>

      {/* Acciones: Editar, Guardar y Borrar */}
      <div className="flex items-center gap-3">
        {isEditing ? (
          <button 
            onClick={handleSave} 
            className="hover:scale-110 transition-transform" 
            title="Guardar cambios"
          >
            <img src={saveIcon} alt="Icono de guardar" className="w-6 h-6 object-contain" />
          </button>
        ) : (
          <button 
            onClick={(e) => {
              e.stopPropagation(); 
              setIsEditing(true);
            }} 
            className="hover:scale-110 transition-transform" 
            title="Editar nombre"
          >
            <img src={editIcon} alt="Icono de editar" className="w-6 h-6 object-contain" />
          </button>
        )}

        {/* Contenedor de borrado con propagación detenida */}
        <div onClick={(e) => e.stopPropagation()}>
          <DeleteButton onClick={() => onDelete(item.id)} />
        </div>
      </div>
    </div>
  );
};