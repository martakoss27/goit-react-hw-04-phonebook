import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styled-components';

export const Form = ({ onSubmit }) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledLabel>
        Name
        <StyledInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
          required
          placeholder="Enter name"
        />
        Number
        <StyledInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter phone number"
        />
      </StyledLabel>
      <StyledButton type="submit">Add contact</StyledButton>
    </StyledForm>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 250px;
`;
const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  margin-bottom: 10px;
`;
const StyledButton = styled.button`
  font-size: 13px;

  padding: 5px 10px;
  border: 2px solid #bf4f74;
  border-radius: 3px;
  color: #bf4f74;

  &:hover {
    cursor: pointer;
  }
`;
const StyledInput = styled.input`
  border: 0;
  height: 30px;
  font-size: 17px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 5px;
  margin-top: 5px;
  &::placeholder {
    color: #bf4f74;
  }
`;
