import React from "react";
import PropTypes from "prop-types";

const AuthorInfo = ({ author, resetExpandedBook,error }) => {
    console.log(this.props);
    return (
        <div className="row author-info-container">
            <div className="col-lg-12 previous-btn-wrapper">
                {/* <button className="btn btn-primary" onClick={resetExpandedBook}>
                    <span>&#171;</span> Go Back
        </button> */}
            </div>

            <h3 className="col-lg-12 mb-3 mt-3">{author.name}</h3>
            <div className="col-lg-2 col-sm-4 ">
                <img
                    className="mb-3"
                    src={author.image_url}
                    width="100%"
                    alt="book cover"
                />
            </div>
        </div>
    );
};

AuthorInfo.propTypes = {
    authorDetails: PropTypes.object,

};

export default AuthorInfo