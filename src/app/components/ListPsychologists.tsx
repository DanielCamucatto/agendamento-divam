import React from 'react';
import psicologosData from '../../data/psychologists.json';

function ListPsychologists() {
  return (
    <div>
      <h1>Lista de Psicólogos</h1>
      <ul>
        {psicologosData.map((psicologo, index) => (
          <li key={index}>
            <strong>Nome:</strong> {psicologo.nome} {psicologo.sobrenome}<br />
            <strong>Área de Atuação:</strong> {psicologo.areaAtuacao}<br />
            <strong>Número RF:</strong> {psicologo.numeroRF}<br />
            <strong>Tempo de Atuação:</strong> {psicologo.tempoAtuacao}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListPsychologists;
