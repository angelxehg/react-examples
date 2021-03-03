import React from "react";
import PropTypes from "prop-types"

const Box = ({ children }) => {
  return (
    <div style={{ border: '1px solid #09f', margin: 5, padding: 5 }}>
      {children}
    </div>
  )
}

Box.propTypes = {
  children: PropTypes.node
}

const Article = ({ title, author, date, children }) => {
  return (
    <section className="mt-3">
      <h3>{title}</h3>
      <p><em>Escrito por {author}</em></p>
      <Box>{date}</Box>
      <article>
        {children}
      </article>
    </section>
  )
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

const Components = () => {
  return <div className="mt-5">
    <h2>Componentes</h2>
    <Article
      title="Nuevo artículo"
      author="Angel Hurtado"
      date={new Date().toLocaleString()}
    >
      <p>Este es el contenido de mi articulo</p>
    </Article>
    <Article
      title="Anterior artículo"
      author="Angel Hurtado"
      date={new Date().toLocaleString()}
    >
      <p>Este es el contenido de otro articulo</p>
    </Article>
  </div>
};

export default Components;
