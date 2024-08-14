import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 70rem;
  height: calc(100vh - 5rem);
  margin: 2.5rem auto;
  padding-top: 2rem;
  border: 1px solid var(--green-600);
  box-shadow: 1px 2px 11px 0px black;

  background: var(--gray-700);
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`