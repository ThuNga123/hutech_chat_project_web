import styled from 'styled-components'
export const Tabs = styled.div`
  overflow: hidden;
  background: #fff;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  height: 3em;
`

export const Tab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: 15%;
  position: relative;

  margin-right: 0.1em;
  font-size: 1em;
  border: ${(props) => (props.active ? '1px solid #34d1be' : '')};
  border-bottom: ${(props) => (props.active ? 'none' : '')};
  background-color: ${(props) => (props.active ? 'white' : '#eeeeee')};
  height: ${(props) => (props.active ? '3em' : '2.6em; top:.4em')};
  transition: background-color 0.5s ease-in-out;

  :hover {
    background-color: #34d1be;
  }
`
export const Content = styled.div`
  ${(props) => (props.active ? '' : 'display:none')}
`
