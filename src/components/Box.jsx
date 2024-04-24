function Box({ children, className, ...props }) {
  return (
    <div
      className={`p-4 border rounded-3xl m-4 w-96 h-56 overflow-auto ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Box;
