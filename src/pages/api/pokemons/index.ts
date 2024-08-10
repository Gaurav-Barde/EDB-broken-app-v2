import { NextApiRequest, NextApiResponse } from 'next';

import pokemonData from '@/pokemon.json';
import { filterPokemons } from '@/utils/apiHelpers';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const filterQueryName = req.query.name ? new RegExp(String(req.query.name), 'i') : /.*/;
  const sortColumn = req.query.sortColumn as string;
  const sortOrder = req.query.sortOrder === 'desc' ? -1 : 1;

  let filteredPokemons = filterPokemons(pokemonData, filterQueryName);

  if (sortColumn) {
    filteredPokemons = filteredPokemons.sort((a: any, b: any) => {
      const aValue = Number(a.stats[sortColumn]);
      const bValue = Number(b.stats[sortColumn]);

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortOrder * (Number(aValue) - Number(bValue));
      }
      return 0;
    });
  }

  res.status(200).json(filteredPokemons);
};
