import React from 'react';
import styled from 'styled-components';

export const ContainerDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content;
`;

const Header = styled.h1`
    font-size: 30px;
    color: white;
    text-shadow: 2px 2px 8px DarkGreen;
`;

const CharacterP = styled.p`
    color: navy;
    text-shadow: .5px .5px 1px lightgrey;
`;

const CharacterDiv = styled.div` 
    background: WhiteSmoke;
    width: 40%;
    padding: 10px;
    margin: 40px auto;
    text-align: center;
    border: solid 2px MidnightBlue;
    border-radius: 10px;
`;

export default function CharacterComponent(props) {
    return (
        <CharacterDiv>
            <Header>{props.character.name}</Header>
            <CharacterP>Eye Color: {props.character.eye_color}</CharacterP>
            <CharacterP>Birth Year: {props.character.birth_year}</CharacterP>
            <CharacterP>Hair Color: {props.character.hair_color}</CharacterP>
            <CharacterP>Mass: {props.character.mass}</CharacterP>
        </CharacterDiv>
    )
}


