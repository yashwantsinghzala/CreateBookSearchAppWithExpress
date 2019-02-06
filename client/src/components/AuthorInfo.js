import React from "react";
import PropTypes from "prop-types";

const AuthorInfo = ({ author, resetExpandedBook, error }) => {
      return (
        <div className="row author-info-container">
            <h3 className="col-lg-12 mb-3 mt-3">{author.name}</h3>
            <div className="col-lg-2 col-sm-4 ">
                <img
                    className="mb-3"
                    src={author.image_url}
                    width="100%"
                    alt="book cover"
                />
            </div>
            <div className="col-lg-10 col-sm-8">
                <div>
                    <span className="font-weight-bold">Born: </span>
                    {author.hometown} {author.born_at}
                </div>
                <div className="mb-3">
                    <span className="font-weight-bold">gender: </span>
                    {author.gender}
                </div>
                {(
                    error && (
                        <p className="text-danger">{error}</p>
                    )) || (
                        <p dangerouslySetInnerHTML={{ __html: author.about }} />
                    )}
            </div>
        </div>
    );
};

AuthorInfo.propTypes = {
    authorDetails: PropTypes.object,

};

export default AuthorInfo