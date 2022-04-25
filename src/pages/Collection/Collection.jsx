import React from "react";
import "./Collection.scss";
import { selectCollection } from "../../Redux/shop/shopSelector";
import { connect } from "react-redux";
import CollectionItem from "../../Component/CollectionItem/CollectionItem";

function Collection(props) {
    const { title, items } = props.collection;
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="collection">
                {items.map((item) => {
                    return <CollectionItem key={item.id} item={item} />;
                })}
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        collection: selectCollection(ownProps.match.params.categoryID)(state),
    };
};
export default connect(mapStateToProps)(Collection);
