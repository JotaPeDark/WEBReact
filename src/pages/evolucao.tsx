// pages/evolucoes.js
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import CardSection from '../components/CardSection';

const Evolucoes = () => {
  const searchParams = useSearchParams();
  const evolucao = searchParams.get('evolucao');
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${evolucao}`);
      const data = await response.json();
      setPokemonData(data);
    };

    if (evolucao) {
      fetchPokemonData();
    }
  }, [evolucao]);

  return (
    <div>
      {pokemonData ? (
        <CardSection title={evolucao}>
          <img src={pokemonData.sprites.front_default} alt={evolucao} />
        </CardSection>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Evolucoes;
