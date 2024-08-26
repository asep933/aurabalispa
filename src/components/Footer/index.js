import Link from "next/link";
import TentangPerusahaan from "./TentangPerusahaan";

const Footer = () => {
  return (
    <div
      className="bg-[url('/bg-footer.jpg')] bg-no-repeat bg-cover bg-bottom text-primary"
      id="footer"
    >
      <footer className="container mx-auto footer justify-between space-x-4 p-10 text-base-conten">
        <TentangPerusahaan />

        <nav>
          <h6 className="footer-title">Services</h6>

          <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-x-10 md:gap-x-24 lg:gap-x-5 gap-y-2 capitalize whitespace-nowrap">
            <Link
              href={"#customs"}
              className="hover:text-fourth cursor-pointer"
            >
              balinese masas
            </Link>
            <Link
              href={"#customs"}
              className="hover:text-fourth cursor-pointer"
            >
              aromatherapy
            </Link>
            <Link
              href={"#customs"}
              className="hover:text-fourth cursor-pointer"
            >
              hot stone massage
            </Link>
            <Link
              href={"#customs"}
              className="hover:text-fourth cursor-pointer"
            >
              refleksi
            </Link>
            <Link
              href={"#customs"}
              className="hover:text-fourth cursor-pointer"
            >
              foot scrub
            </Link>
            <Link
              href={"#customs"}
              className="hover:text-fourth cursor-pointer"
            >
              medical massage
            </Link>
            <Link
              href={"#customs"}
              className="hover:text-fourth cursor-pointer"
            >
              deep tissue
            </Link>
            <Link
              href={"#customs"}
              className="hover:text-fourth cursor-pointer"
            >
              bamboo massage
            </Link>
            <Link
              href={"#customs"}
              className="hover:text-fourth cursor-pointer"
            >
              facial
            </Link>
          </div>
        </nav>
        <nav>
          <h6 className="footer-title">Contact</h6>
          <p className="hover:text-fourth">+6282340699547</p>
          <a
            href={`mailto:inyomanjaya555@gmail.com`}
            className="hover:text-fourth cursor-pointer"
          >
            inyomanjaya555@gmail.com
          </a>
        </nav>
      </footer>
      <footer className="container mx-auto footer px-10 py-4 border-t text-primary border-base-300 md:pl-20">
        <aside className="items-center grid-flow-col">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          ></svg>
          <p>
            aurabalispa.com <br />
            &copy; Aura Bali Spa
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <Link
              href={"https://web.facebook.com/profile.php?id=100094736253453"}
              target="_blank"
              className="hover:brightness-50 transition duration-300 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
