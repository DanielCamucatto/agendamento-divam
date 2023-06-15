import styled from 'styled-components';

export const PsychologistListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 30px;
`;

export const PsychologistCard = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.1);
    box-shadow: 10px 10px 20px #000;
  }
`;

export const PsychologistName = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const PsychologistArea = styled.p`
  font-size: 14px;
  color: #888;
`;

export const PsychologistNumber = styled.p`
  font-size: 14px;
  color: #888;
`;

export const PsychologistTemp = styled.p`
  font-size: 14px;
  color: #888;
`;
