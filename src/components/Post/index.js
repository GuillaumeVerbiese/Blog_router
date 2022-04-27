/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */

import DOMPurify from 'dompurify';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.scss';

const Post = ({
  title, category, excerpt, slug,
}) => {
  const cleanExcerpt = DOMPurify.sanitize(excerpt, { ALLOWED_TAGS: ['strong', 'em'] });

  function createMarkup() {
    return { __html: cleanExcerpt };
  }

  return (
    <Link to={`/post/${slug}`} className="post">
      <h2 className="post-title">{title}</h2>
      <div className="post-category">{category}</div>
      <p className="post-excerpt" dangerouslySetInnerHTML={createMarkup()} />
    </Link>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default Post;
