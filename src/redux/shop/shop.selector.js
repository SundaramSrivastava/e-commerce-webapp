import { createSelector } from 'reselect'
import memoize from 'lodash.memoize';

const selectShop = ( state ) => state.shop

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionForPreview = createSelector(
    [selectShopCollections],
    collections => Object.keys(collections).map( collectionKey => collections[collectionKey] )
)

export const selectCollection = memoize((collectionUrlParam) => (
    createSelector(
        [selectShopCollections],
        collections => collections[collectionUrlParam]
        )
    )
)