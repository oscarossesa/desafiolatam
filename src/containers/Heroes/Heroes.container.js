import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onCreateHeroe } from './Heroes.actions'

const Heroes = () => {
  const dispatch = useDispatch()
  const { heroes } = useSelector(state => {
    return { heroes: state.heroesReducer.collection }
  })
  const [inputValue, setInputValue] = useState('')

  const handleOnChangeInputValue = event => (
    setInputValue(event.target.value)
  )

  const handleOnSubmit = event => {
    event.preventDefault()

    dispatch(onCreateHeroe({ value: inputValue }))
    setInputValue('')
  }

  return (
    <>
      <h1>HEROES</h1>
      <section>
        <form onSubmit={handleOnSubmit}>
          <input type='text' value={inputValue} onChange={handleOnChangeInputValue} />
          <button type='submit'>Save</button>
        </form>
      </section>
      <section>
        <table>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {heroes.map((heroe, index) => (
              <tr key={`heroe-${index}`}>
                <td>{heroe.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  )
}

export default Heroes