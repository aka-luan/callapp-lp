export default function Button({ isNav = false, type, children }) {
  return (
    <button
      className={`hover:scale-90 px-7 ${
        isNav ? 'py-[10px]' : 'py-3'
      } border-lightgreen border-2 ${
        type === 'primary'
          ? 'bg-lightgreen text-green'
          : 'bg-transparent text-lightgreen'
      }`}>
      {children}
    </button>
  );
}
