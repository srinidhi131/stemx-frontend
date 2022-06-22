import styled from 'styled-components';

export const Container = styled.div`
  padding: 5% 1%;
  background: rgb(0,0,0);
  background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%);
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Wrapper = styled.div`
    justify-content: center;
    margin-left: 25%;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 10%;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 2%;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  &:hover {
      color: #A0CED9;
      transition: 200ms ease-in;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  color: #A0CED9;
  text-decoration: underline;
  margin-bottom: 40px;
  font-weight: bold;
`;

export const Text = styled.p`
  font-size: 18px;
  color: #fff;
  margin-bottom: 40px;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  color: #fff;
  text-align: center;
`;