import { socials } from "../constants/index.jsx";

const Footer = () => {
  return (
    <footer>
      <div className="container py-10">
        <div className="flex w-full max-md:flex-col">
          <div className="small-compact flex flex-1 flex-wrap items-center justify-center gap-5">
            <p className="opacity-20">
              Copyright© 2025 Kōbō Kitsune <br />{" "}
              <i>
                „Verantwortlich für den Inhalt dieser Website: Fabrice Nadal.
                <br />
                Kōbō Kitsune ist geplante Marke und derzeit in Entwicklung.“
              </i>
            </p>
          </div>
          <div className="flex items-center justify-center sm:ml-auto"></div>

          <ul className="flex flex-1 justify-center gap-3 max-md:mt-10 md:justify-end">
            {socials.map(({ id, url, icon, title }) => (
              <li key={id}>
                <a href={url} className="social-icon">
                  <img
                    src={icon}
                    alt={title}
                    className="w-7 h-7 object-contain"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
