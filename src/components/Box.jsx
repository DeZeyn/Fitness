const colorClasses = ["bg-rose", "bg-green", "bg-blue"];

function Box({ children, className, ...props }) {
  // Select a random color class
  const colorClass =
    colorClasses[Math.floor(Math.random() * colorClasses.length)];

  return (
    <div
      className={`p-4 border rounded-3xl m-4 w-96 h-56 text-lg font-bold flex items-center overflow-auto text-left mx-auto ${colorClass} ${className}`}
      {...props}
    >
      <div className="ml-5">{children}</div>
    </div>
  );
}

export default Box;
