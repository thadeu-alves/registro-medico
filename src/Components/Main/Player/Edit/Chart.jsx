export function Grafico({ data }) {
  return (
    <div className="bg-gray-100 p-4 px-12 gap-8 h-96 flex justify-around items-end border border-gray-300 rounded-lg shadow-lg w-full">
      {data.map(e => (
        <GraficoItem key={e.value} qtd={e.qtd} />
      ))}
    </div>
  );
}

export function GraficoItem({ qtd }) {
  return (
    <div
      className="w-full bg-blue-500 rounded-t-lg flex items-end justify-center text-white"
      style={{ height: qtd * 2 + 'em' }}
    >
      <span className="text-xs mt-1">{qtd}</span>
    </div>
  );
}
