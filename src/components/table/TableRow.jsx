import React from 'react'
import PropTypes from 'prop-types'

const TableRow = (props) => {
  let rowClass = 'character-row'

  if (props.dead) {
    rowClass = `${rowClass} character-dead`
  }

  return <tr className={rowClass}>{props.children}</tr>
}

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
  dead: PropTypes.bool
}

TableRow.defaultProps = {
  dead: false
}

export default TableRow
