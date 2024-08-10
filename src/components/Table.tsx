import { SerializedPokemon } from '@/types';
import { tableHeadings } from '@/utils/constants';

interface props {
  data: SerializedPokemon[];
  onSort: (column: string) => void;
}

export const Table = ({ data, onSort }: props) => {
  const handleSortClick = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target.tagName === 'BUTTON') {
      const sortKey = target.textContent || '';
      onSort(sortKey);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr onClick={(event) => handleSortClick(event)}>
            <th className="px-4 pt-2 pb-6 "></th>
            <th className="px-4 pt-2 pb-6 "></th>
            {tableHeadings.map((item: string) => (
              <th key={item} className="px-4 pt-2 pb-6 text-left text-xl font-bold text-gray-900">
                <button>{item}</button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((pokemon: SerializedPokemon) => {
            return (
              <tr key={pokemon.name}>
                <td className="px-4 py-2 text-xl font-bold text-gray-900">{pokemon?.name}</td>
                <td className="px-4 py-2">
                  <img
                    src={pokemon?.image}
                    alt={pokemon.name}
                    className="w-20 h-20 object-contain border rounded-lg border-2 p-2"
                  />
                </td>
                {tableHeadings.map((heading) => (
                  <td key={heading} className="px-4 py-2 text-lg font-medium text-gray-900">
                    {pokemon.stats[heading]}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
