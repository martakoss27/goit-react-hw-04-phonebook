import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styled-components';

export const Filter = ({ onChange, filter }) => {
  return (
    <StyledLabel style={{ color: 'black' }}>
      Find contacts by name
      <StyledInput
        name="filter"
        type="text"
        placeholder="Search by name"
        filter={filter}
        onChange={onChange}
      />
    </StyledLabel>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

const StyledInput = styled.input`
  border: 0;
  font-size: 17px;
  height: 30px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 5px;
  margin-top: 5px;
  &::placeholder {
    color: #bf4f74;
  }
`;
const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 25px;
`;
