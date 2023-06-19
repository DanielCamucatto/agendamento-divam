import React from 'react';
import Link from 'next/link';

import {
  PsychologistListContainer,
  PsychologistCard,
  PsychologistName,
  PsychologistArea,
  PsychologistNumber,
  PsychologistTemp, 
  PsychologistAbout
} from '../styles/ListPsychologist';

import CustomButton from './button';

interface Psychologist {
  nome: string;
  sobrenome: string;
  areaAtuacao: string;
  numeroRF: string;
  tempoAtuacao?: string;
  about?: string
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
          <Link href={{pathname: 'pages/agendamento', query:{name: psicologo.nome, lastName: psicologo.sobrenome, atuacao:psicologo.areaAtuacao, tempo: psicologo.tempoAtuacao, about: psicologo.about}} }>
            <CustomButton>Agendar atendimento</CustomButton>
          </Link>
        </PsychologistCard>
      ))}
    </PsychologistListContainer>
  );
};

export default ListPsychologists;

