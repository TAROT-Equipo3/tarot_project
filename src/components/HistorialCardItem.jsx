import { DeleteButton } from "./DeleteButton.jsx";

export const HistorialCardItem = ({ item, onDelete }) => {
  return (
    <div className="bg-white rounded-xl p-5 flex justify-between items-center shadow-solid-gold mb-6 border border-goldDark">
      
      {/* La tirada */}
      <div className="flex flex-col gap-1 font-mono text-primary font-bold text-xs tracking-wide">
        <div className="flex items-center gap-2">
          <p>USUARIO: {item.userName}</p>
        </div>
        <p>FECHA: {item.date}</p>
      </div>

      <DeleteButton onClick={() => onDelete(item.id)} />

    </div>
  );
};