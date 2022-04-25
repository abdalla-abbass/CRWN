import React from "react";
import "./CollectionsOverview.scss";
import { connect } from "react-redux";
import { selectCollectionsForPreview } from "../../Redux/shop/shopSelector";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../Collection-Preview/CollectionPreview";
function CollectionsOverview({ collections }) {
    return (
        <div className="collections-overview">
            {collections.map(({ id, ...elseProps }) => {
                return <CollectionPreview key={id} {...elseProps} />;
            })}
        </div>
    );
}
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
