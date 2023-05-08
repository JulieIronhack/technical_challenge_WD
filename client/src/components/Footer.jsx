const Footer = () => {
  return (
    <footer className="border border-t-orange-500 w-screen px-8 py-4">
      <h1 className="font-extrabold text-orange-500 ">The Phone Cave …</h1>
      <p className="text-sm">
        … is an optional solution by{" "}
        <a
          className="text-orange-500 underline-offset-2"
          href="https://github.com/PDXIII"
        >
          Peter Sekan
        </a>{" "}
        of a tech challenge given by Ironhack.
      </p>
    </footer>
  );
};

export default Footer;
