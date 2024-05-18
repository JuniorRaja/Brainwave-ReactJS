import { companyLogos } from "../../constants";

const CompanyLogo = ({ className }) => {
  return (
    <div className={`${className}`}>
      <h5 className="tagline mb-15 text-n-1/50">
        Helping people create beautiful content at
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            key={index}
            className="flex items-center justify-center flex-1 h-[8.rem]"
          >
            <img src={logo} width={135} height={30} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogo;
