import React, { Component } from 'react'
import TableFilter from './TableFilter'
import HeroTable from './HeroTable'
import characters from './../api/characters'

class HeroTableContainer extends Component {
    render () {
        return (
            <div>
                <TableFilter></TableFilter>
                <HeroTable characters={characters}></HeroTable>     
            </div>
        )
    }
}

export default HeroTableContainer