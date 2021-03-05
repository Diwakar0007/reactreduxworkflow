import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getApiData } from "../actions/postAction";
import Paginations from "./Paginations";

const PostData = ({ postReducer: { posts, loading }, getApiData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerpage] = useState(5);
  useEffect(() => {
    getApiData();
    // eslint-disable-next-line
  }, []);

  const indexOfLastPost = currentPage * postPerpage;
  const indexOfFirstPost = indexOfLastPost - postPerpage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3"> My Blog {currentPage}</h1>
      <ul className="list-group mb-4">
        {currentPosts.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
      <Paginations
        postPerPage={postPerpage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

PostData.propTypes = {
  getApiData: PropTypes.func.isRequired,
  postReducer: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  postReducer: state.postReducer,
});

export default connect(mapStateToProps, { getApiData })(PostData);
