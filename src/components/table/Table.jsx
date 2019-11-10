import React from 'react'
import PropTypes from 'prop-types'

const Table = (props) => {

  const { withHeader, children } = props

  if (withHeader) {
    return (
      <table className='table table-sm'>
        <thead>{children}</thead>
        <tbody>{children}</tbody>
      </table>
    )
  }

  return (
    <table className='table table-sm'>
      <tbody>{children}</tbody>
    </table>
  )
}

Table.propTypes = {
  children: PropTypes.node.isRequired,
  withHeader: PropTypes.bool
}

Table.defaultProps = {
  withHeader: false
}

export default Table
