import React from 'react';
import {
  PsychologistListContainer,
  PsychologistCard,
  PsychologistName,
  PsychologistArea,
  PsychologistNumber,
  PsychologistTemp
} from '../styles/ListPsychologist';

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
        </PsychologistCard>
      ))}
    </PsychologistListContainer>
  );
};

export default ListPsychologists;
