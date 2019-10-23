import React, { Component } from 'react'
import TableFilter from './TableFilter'
import HeroTable from './HeroTable'

class HeroTableContainer extends Component {
    render() {
        return (
            <div>
                <TableFilter></TableFilter>
                <HeroTable></HeroTable>     
            </div>
        )
    }
}

export default HeroTableContainer