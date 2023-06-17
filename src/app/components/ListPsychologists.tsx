// import React from 'react';
// import Link from 'next/link';

// import {
//   PsychologistListContainer,
//   PsychologistCard,
//   PsychologistName,
//   PsychologistArea,
//   PsychologistNumber,
//   PsychologistTemp
// } from '../styles/ListPsychologist';
// import CustomButton from './button';

// interface Psychologist {
//   nome: string;
//   sobrenome: string;
//   areaAtuacao: string;
//   numeroRF: string;
//   tempoAtuacao?: string;
// }

// interface ListPsychologistProps {
//   filteredPsychologists: Psychologist[];
// }

// const handleButtonClick = () => {
//   console.log('fui clicado');

// }

// const ListPsychologists: React.FC<ListPsychologistProps> = ({ filteredPsychologists }) => {
//   return (
//     <PsychologistListContainer>
//       {filteredPsychologists.map((psicologo, index) => (
//         <PsychologistCard key={index}>
//           <PsychologistName>Nome: {psicologo.nome}</PsychologistName>
//           <p>Sobrenome: {psicologo.sobrenome}</p>
//           <PsychologistArea>Área de Atuação: {psicologo.areaAtuacao}</PsychologistArea>
//           <PsychologistNumber>Número RF: {psicologo.numeroRF}</PsychologistNumber>
//           <PsychologistTemp>Tempo de Atuação: {psicologo.tempoAtuacao || 'Não especificado'}</PsychologistTemp>
//           <Link href={`/agendamento-psicologo?nomePsicologo=${encodeURIComponent(psicologo.nome)}`}>
//             <CustomButton onClick={handleButtonClick}>Agendar atendimento</CustomButton>
//           </Link>
//         </PsychologistCard>
//       ))}
//     </PsychologistListContainer>
//   );
// };

// export default ListPsychologists;




import React from 'react';
import Link from 'next/link';

import {
  PsychologistListContainer,
  PsychologistCard,
  PsychologistName,
  PsychologistArea,
  PsychologistNumber,
  PsychologistTemp
} from '../styles/ListPsychologist';

import CustomButton from './button';

interface Psychologist {
  nome: string;
  sobrenome: string;
  areaAtuacao: string;
  numeroRF: string;
  tempoAtuacao?: string;
}

interface ListPsychologistProps {
  filteredPsychologists: Psychologist[];
}

const ListPsychologists: React.FC<ListPsychologistProps> = ({ filteredPsychologists }) => {
  return (
    <PsychologistListContainer>
      {filteredPsychologists.map((psicologo, index) => (
        <PsychologistCard key={index}>
          <PsychologistName>Nome: {psicologo.nome}</PsychologistName>
          <p>Sobrenome: {psicologo.sobrenome}</p>
          <PsychologistArea>Área de Atuação: {psicologo.areaAtuacao}</PsychologistArea>
          <PsychologistNumber>Número RF: {psicologo.numeroRF}</PsychologistNumber>
          <PsychologistTemp>Tempo de Atuação: {psicologo.tempoAtuacao || 'Não especificado'}</PsychologistTemp>
          <Link href={{pathname: 'pages/agendamento', query:{name: psicologo.nome, lastName: psicologo.sobrenome, atuacao:psicologo.areaAtuacao, number: psicologo.numeroRF, tempo: psicologo.tempoAtuacao}} }>
            <CustomButton>Agendar atendimento</CustomButton>
          </Link>
        </PsychologistCard>
      ))}
    </PsychologistListContainer>
  );
};

export default ListPsychologists;

