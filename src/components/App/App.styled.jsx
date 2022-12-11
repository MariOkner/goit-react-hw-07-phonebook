import styled from '@emotion/styled';
import { RiContactsBook2Fill } from 'react-icons/ri';

export const Container = styled.div`
  margin: 0 auto;
  padding: 20px;
`;

export const PhonebookIcon = styled(RiContactsBook2Fill)`
  width: 32px;
  height: 32px;

  margin-right: 10px;
  vertical-align: top;

  color: #0b2349;
`;

export const TitlePhonebook = styled.h1`
  display: table;

  background: linear-gradient(45deg, #0b2349 33%, #0d61bc 66%, #8aa9d6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #0b2349;

  margin-bottom: 30px;
  font-size: 30px;
  font-weight: 900;
`;

export const TitleContacts = styled.h2`
  font-size: 25px;
  font-weight: 700;
`;
