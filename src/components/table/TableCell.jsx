import React from 'react'
import PropTypes from 'prop-types'

const TableCell = props => {
  if (props.isHeader) {
    return <th>{props.children}</th>
  }

  return <td>{props.children}</td>
};

TableCell.propTypes = {
  children: PropTypes.node,
  isHeader: PropTypes.bool
}

TableCell.defaultProps = {
  children: '',
  isHeader: false
}

export default TableCell