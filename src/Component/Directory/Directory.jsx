import React from "react";
import "./Directory.scss";
import MenuItem from "../MenuItem/MenuItem";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSections } from "../../Redux/directory/directorySelector";

function Directory({ sections }) {
    return (
        <div className="directory-menu">
            {sections.map(({ id, ...otherSectionprops }) => {
                return <MenuItem key={id} {...otherSectionprops} />;
            })}
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    sections: selectSections,
});
export default connect(mapStateToProps)(Directory);
