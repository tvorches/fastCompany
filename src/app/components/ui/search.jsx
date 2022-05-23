import React from "react";
import PropTypes from "prop-types";

const Search = ({ value, onChange }) => {
    return (
        <input
            type="text"
            className="form-control"
            placeholder="Search..."
            aria-label="Search"
            onChange={onChange}
            value={value}
        />
    );
};
Search.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Search;
