import { HistorialCardItem } from "./HistorialCardItem";

export const HistorialList = ({ history, onDelete }) => {
  if (history.length === 0) {
    return <p className="text-center text-white font-mono">No hay tiradas guardadas aún.</p>;
  }

  return (
    <div className="flex flex-col w-full max-w-sm md:max-w-2xl mx-auto px-2 md:px-0">
      {history.map((item) => (
        <HistorialCardItem 
          key={item.id} 
          item={item} 
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};