import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectDirectorySelections } from '../../redux/directory/directory.selectors'

import MenuItem from '../menu-item/menu-item.component'

import { DirectoryMenuContainer } from './directory.styles'

const Directory = ({ sections }) => (
    <DirectoryMenuContainer>
        {sections.map(({ id, ...otherSelectProps }) => (
            <MenuItem key={id} {...otherSelectProps} />
        ))}
    </DirectoryMenuContainer>
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySelections
})

export default connect(mapStateToProps)(Directory)