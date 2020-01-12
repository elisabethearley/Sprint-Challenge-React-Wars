import React from 'react';
//import styled from 'styled-components';

function CharacterComponent(props) {
    return (
        <div>
            <h2>Character Name: {props.character.name}</h2>
            <p>Eye Color: {props.character.eye_color}</p>
        </div>
    )
}

export default CharacterComponent;
