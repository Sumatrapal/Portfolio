const Footer = () => {
  return (
    <footer className="px-6 pb-8">
      <div className="max-w-6xl mx-auto">

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            {/* Logo / Name */}
            <p className="font-[Syne] font-bold text-lg">
              SP.
            </p>

            {/* Copyright */}
            <p className="text-sm text-gray-500 text-center">
              © {new Date().getFullYear()} Sumatra Pal. Built with React.
            </p>

            {/* Back to Top */}
            <a
              href="#home"
              className="text-sm font-medium hover:text-purple-500 transition-colors"
            >
              Back to top ↑
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;