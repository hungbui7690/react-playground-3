import { useState } from 'react'
import styled from 'styled-components'
import { AiFillBuild } from 'react-icons/ai'

interface Props {
  items: string[]
  heading: string
  onSelectItem?: (item: string) => void
}

const List = styled.ul`
  list-style: none;

  .active {
    background-color: lightblue;
  }
`

interface ListItemProps {
  active: boolean
}

const ListItem = styled.li<ListItemProps>`
  padding: 0.5rem 0;
  background-color: ${(props) => (props.active ? 'lightblue' : 'white')};
`

const ListGroup = ({ items, heading, onSelectItem }: Props) => {
  const [selectedItem, setSelectedItem] = useState(-1)

  return (
    <>
      <h1>
        {heading} <AiFillBuild color='lightpink' size={40} />
      </h1>
      {items.length === 0 && <p>No items found</p>}

      <List className='list-group'>
        {items.length > 0 &&
          items.map((item, index) => (
            <ListItem
              className='list-group-item'
              style={{ cursor: 'pointer' }}
              active={selectedItem === index || false}
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
