const Container = ({ children, className }) => {
  return (
    <div className={`${className} max-w-7xl  mx-auto px-3`}>{children}</div>
  );
};

export default Container;
