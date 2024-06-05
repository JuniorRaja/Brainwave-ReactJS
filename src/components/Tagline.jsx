import brakets from "../assets/svg/Brackets";

const Tagline = ({ className, children }) => {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      {brakets("left")}
      <div className="mx-3 text-n-3">{children}</div>
      {brakets("right")}
    </div>
  );
};

export default Tagline;
