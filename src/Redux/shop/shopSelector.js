import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector([selectShop], (shop) => {
    return shop.collections;
});

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    (collections) => {
        return collections
            ? Object.keys(collections).map(
                  (collection) => collections[collection]
              )
            : [];
    }
);
export const selectCollection = (collectionUrlParam) =>
    createSelector([selectCollections], (collections) => {
        return collections ? collections[collectionUrlParam] : null;
    });

export const selectIsFetching = createSelector(
    [selectShop],
    (shop) => shop.isFetching
);

export const selectIsCollectionsIsLoaded = createSelector(
    [selectShop],
    (shop) => !!shop.collections
);
