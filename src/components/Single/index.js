// == Import
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import NotFound from '../NotFound';
import './single.scss';

// == Composant
function Single({ posts }) {
  // Le hook useParams est fournit par la lib react-router-dom
  // => permet de recup les params d'URL dans un objet :
  // {
  //   slug: 'slug-du-post
  // }
  const params = useParams();
  const { slug } = params;

  // console.log(slug);
  // console.log(posts);

  // On recup le post dans le tableau d'articles reçu en prop
  // en fonction du slug recup en param d'URL
  const singlePost = posts.find((post) => post.slug === slug);

  // Si on ne trouve pas d'article correspondant au slug on rend le composant 404
  if (!singlePost) {
    return <NotFound />;
  }

  // console.log(singlePost);

  // On extrait les données de l'artcile et on affiche !
  const { title, content, category } = singlePost;

  return (
    <article className="single">
      <h2 className="single-title">{title}</h2>
      <div className="single-category">{category}</div>
      <p className="single-content">{content}</p>
    </article>
  );
}

Single.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default Single;
