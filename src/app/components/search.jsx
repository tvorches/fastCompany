import React from "react";
import PropTypes from "prop-types";

const Search = ({ value, onChange }) => {
    return (
        <form className="w-100 me-3">
            <input
                type="text"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
                onChange={onChange}
                value={value}
            />
        </form>
    );
};
Search.propTypes = {
    value: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Search;
