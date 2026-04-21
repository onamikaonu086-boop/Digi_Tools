import { SocialIcon } from "react-social-icons";

export function Footer() {
  const footerSections = {
    product: {
      title: "Product",
      links: ["Features", "Pricing", "Templates", "Integrations"],
    },
    company: {
      title: "Company",
      links: ["About", "Blog", "Careers", "Press"],
    },
    resources: {
      title: "Resources",
      links: ["Documentation", "Help Center", "Community", "Contact"],
    },
  };

  const socialLinks = [
    { url: "https://youtube.com", label: "YouTube" },
    { url: "https://facebook.com", label: "Facebook" },
    { url: "https://twitter.com", label: "Twitter" },
  ];

  const bottomLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookies", href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-white text-2xl font-bold mb-4">DigiTools</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite
              of powerful tools.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{footerSections.product.title}</h4>
            <ul className="space-y-3">
              {footerSections.product.links.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{footerSections.company.title}</h4>
            <ul className="space-y-3">
              {footerSections.company.links.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{footerSections.resources.title}</h4>
            <ul className="space-y-3">
              {footerSections.resources.links.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Social Links</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <SocialIcon
                  key={index}
                  url={social.url}
                  bgColor="#374151"
                  fgColor="#ffffff"
                  className="hover:bg-primary transition-all"
                  style={{ height: 40, width: 40 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-gray-400 text-sm">© 2026 DigiTools. All rights reserved.</p>

          {/* Bottom Links */}
          <div className="flex gap-6">
            {bottomLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
