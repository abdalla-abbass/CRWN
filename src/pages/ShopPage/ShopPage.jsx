import React, { useEffect } from "react";
import "./ShopPage.scss";
import CollectionsOverview from "../../Component/CollectionsOverview/CollectionsOverview";
import { Route } from "react-router-dom";
import Collection from "../Collection/Collection";
import { createStructuredSelector } from "reselect";

import { fetchCollectionsStartAsync } from "../../Redux/shop/shopActions";

import {
    selectIsFetching,
    selectIsCollectionsIsLoaded,
} from "../../Redux/shop/shopSelector";
import { connect } from "react-redux";
import withSpinner from "../../Component/withSpinner/withSpinner";

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionWithSpinner = withSpinner(Collection);

const ShopPage = ({
    fetchCollectionsStartAsync,
    match,
    fetching,
    collectionIsLoaded,
}) => {
    useEffect(() => {
        fetchCollectionsStartAsync();
    }, []);

    return (
        <div className="shopPage">
            <Route
                exact
                path={`${match.path}`}
                render={(props) => (
                    <CollectionsOverviewWithSpinner
                        isLoading={!collectionIsLoaded}
                        {...props}
                    />
                )}
            />
            <Route
                path={`${match.path}/:categoryID`}
                render={(props) => (
                    <CollectionWithSpinner
                        isLoading={!collectionIsLoaded}
                        {...props}
                    />
                )}
            />
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    fetching: selectIsFetching,
    collectionIsLoaded: selectIsCollectionsIsLoaded,
});
const mapDispatchToProps = (dispatch) => {
    return {
        fetchCollectionsStartAsync: () =>
            dispatch(fetchCollectionsStartAsync()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
