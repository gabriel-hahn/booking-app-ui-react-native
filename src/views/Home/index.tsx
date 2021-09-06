import React from 'react';

import InputSearch from '../../components/InputSearch';

import * as S from './styles';

const CATEGORIES = ['All', 'Popular', 'Top Rated', 'Featured', 'Luxury'];

const Home = () => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>
          Find your hotel {'\n'}in <S.PlaceTitle>Paris</S.PlaceTitle>
        </S.Title>
        <S.UserIcon />
      </S.Header>

      <S.InputContainer>
        <InputSearch placeholder="Search" />
      </S.InputContainer>
    </S.Container>
  );
};

export default Home;
