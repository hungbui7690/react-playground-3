/*
  Separation of Concerns
  - pic 


*/

import { useState } from 'react'
import styled from 'styled-components'

interface Props {
  items: string[]
  heading: string
  onSelectItem?: (item: string) => void
}

// 1a.
const List = styled.ul`
  list-style: none;

  .active {
    background-color: lightblue;
  }
`

// 4a.
interface ListItemProps {
  active: boolean
}

// 1b.
// 4b.
const ListItem = styled.li<ListItemProps>`
  padding: 0.5rem 0;

  background-color: ${(props) => (props.active ? 'lightblue' : 'white')};
`

const ListGroup = ({ items, heading, onSelectItem }: Props) => {
  const [selectedItem, setSelectedItem] = useState(-1)

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}

      {/* 2a. change from <ul> to <List> */}
      <List className='list-group'>
        {items.length > 0 &&
          items.map((item, index) => (
            // 2b.
            <ListItem
              className='list-group-item'
              active={selectedItem === index || false} // 3a.
              key={item}
              onClick={() => {
                setSelectedItem(index)
                onSelectItem?.(item)
              }}
            >
              {item}
            </ListItem>
          ))}
      </List>
    </>
  )
}

export default ListGroup
