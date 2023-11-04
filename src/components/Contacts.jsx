import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styled-components';

export const Contacts = ({ contacts, removeContact }) => {
  return (
    <StyledList>
      {contacts.map(contact => (
        <StyledLi key={contact.id}>
          {contact.name}: {contact.number}
          <StyledButton type="button" onClick={() => removeContact(contact.id)}>
            REMOVE
          </StyledButton>
        </StyledLi>
      ))}
    </StyledList>
  );
};
Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
const StyledList = styled.ul`
  padding: 0;
`;
const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  width: 500px;
  margin-bottom: 5px;
  font-size: 25px;
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
