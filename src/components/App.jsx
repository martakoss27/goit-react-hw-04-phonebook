//import { useContacts } from './hooks/ContactsContext';
import Form from './Form';
import Contacts from './Contacts';
import Filter from './Filter';
import { styled } from 'styled-components';

export default function App() {
  //const { contacts } = useContacts();

  return (
    <StyledWrapper>
      <StyledDiv>
        <h1>Phonebook</h1>
        <Form />
        <h2>Contacts list</h2>
        <Filter />
        <Contacts />
      </StyledDiv>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  height: 100vh;
  font-size: 30px;
  padding: 10% 0 10% 0;
`;
const StyledDiv = styled.div`
  width: 720px;
  border-radius: 5px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
