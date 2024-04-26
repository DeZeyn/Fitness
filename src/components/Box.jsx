function Box({ children, className, ...props }) {
  return (
    <div
      className={`p-4 border rounded-3xl m-4 w-96 h-56 text-3xl font-bold flex items-center overflow-auto text-left mx-auto ${className}`}
      {...props}
    >
      <div className="ml-5">{children}</div>
    </div>
  );
}

export default Box;
