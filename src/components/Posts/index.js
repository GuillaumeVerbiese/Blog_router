/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */

import PropTypes from 'prop-types';

import Post from 'src/components/Post';

import './styles.scss';

const Posts = ({ posts, zenMode }) => {
  // On se base sur la valeur de notre variable d'état
  // pour construire la classe CSS de notre composant
  let cssClass = 'posts';
  if (zenMode) {
    cssClass += ' posts--zen';
  }

  return (
    <main className={cssClass}>
      <h1 className="posts-title">Dev Of Thrones</h1>
      <div className="posts-list">
        {
          posts.map((post) => <Post key={post.id} {...post} />)
        }
      </div>
    </main>
  );
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  zenMode: PropTypes.bool.isRequired,
};

export default Posts;
