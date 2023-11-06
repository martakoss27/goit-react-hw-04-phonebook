import { styled } from 'styled-components';
//import { nanoid } from 'nanoid';

import { useContacts } from './hooks/ContactsContext';

export default function Contacts({ children }) {
  const { filteredContacts, handleDelete } = useContacts();
  return (
    <div>
      {children}
      <StyledList>
        {filteredContacts.map(contact => {
          return (
            <StyledLi key={contact.id}>
              {contact.name}: {contact.number}
              <StyledButton
                type="button"
                onClick={handleDelete}
                value={contact.id}
              >
                REMOVE
              </StyledButton>
            </StyledLi>
          );
        })}
      </StyledList>
    </div>
  );
}

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
