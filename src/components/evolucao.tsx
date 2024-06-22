// components/EvolucoesSquirtle.js
import Link from 'next/link';

const EvolucoesSquirtle = () => {
  const evolucoes = ['wartortle', 'blastoise'];

  return (
    <div>
      {evolucoes.map((evolucao) => (
        <Link key={evolucao} href={`/evolucoes?evolucao=${evolucao}`}>
          <a>
            <img src={`/images/${evolucao}.png`} alt={evolucao} />
          </a>
        </Link>
      ))}
    </div>
  );
};

export default EvolucoesSquirtle;
