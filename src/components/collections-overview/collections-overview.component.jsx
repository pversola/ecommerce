import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CollectionPreview from '../collection-preview/collection-preview.component'
import { selectCollectionsForOreview } from '../../redux/shop/shop.selectors'

import { CollectionsOverviewContainer } from './collections-overview.styles'

const CollectionOverview = ({ collections }) => (
    <CollectionsOverviewContainer>
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </CollectionsOverviewContainer>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForOreview
})

export default connect(mapStateToProps)(CollectionOverview)