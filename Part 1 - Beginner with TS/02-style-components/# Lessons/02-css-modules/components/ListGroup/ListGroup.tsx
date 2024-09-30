/*
  CSS Modules
  - avoid className collisions
  - change className from 'list-group' to 'listGroup'
    -> because we want to use <styles.listGroup> instead of <styles['list-group']>

  1. change ListGroup.css to ListGroup.module.css


*/

import { useState } from 'react'
import styles from './ListGroup.module.css' // #

interface Props {
  items: string[]
  heading: string
  onSelectItem?: (item: string) => void
}

const ListGroup = ({ items, heading, onSelectItem }: Props) => {
  const [selectedItem, setSelectedItem] = useState(-1)

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}

      {/* # */}
      <ul className={styles.listGroup}>
        {items.length > 0 &&
          items.map((item, index) => (
            <li
              className={`list-group-item ${
                selectedItem === index ? styles.active : '' // #
              }`}
              key={item}
              onClick={() => {
                setSelectedItem(index)
                onSelectItem?.(item)
              }}
            >
              {item}
            </li>
          ))}
      </ul>
    </>
  )
}
export default ListGroup
