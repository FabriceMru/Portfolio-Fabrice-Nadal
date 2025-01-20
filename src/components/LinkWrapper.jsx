const LinkWrapper = ({ href, children }) => {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        {children}
      </a>
    );
  }
  return children;
};

export default LinkWrapper;
