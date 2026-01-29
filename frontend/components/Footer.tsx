// frontend/components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  const links = {
    Product: ['Features', 'Security', 'Enterprise', 'Changelog'],
    Company: ['Manifesto', 'Careers', 'Blog', 'Contact'],
    Legal: ['Privacy', 'Terms', 'Cookies']
  };

  return (
    <footer className="bg-[#050505] pt-24 pb-12 px-6 border-t border-white/5 relative z-10">
      <div className="mx-auto max-w-[1400px]">
        
        <div className="grid grid-cols-2 md:grid-cols-12 gap-12 mb-24">
          
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-white mb-6 block">
              LibreMind
            </Link>
            <p className="text-[#888] text-sm leading-relaxed max-w-xs">
              A 3D mental health companion designed for the modern age. 
              Built with privacy, empathy, and silence in mind.
            </p>
          </div>

          {/* Links Grid */}
          <div className="col-span-2 md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(links).map(([category, items]) => (
              <div key={category}>
                <h4 className="text-white font-medium mb-6">{category}</h4>
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li key={item}>
                      <Link 
                        href="#" 
                        // Hover color fixed to explicit Matcha hex
                        className="text-[#888] hover:text-[#dbf26e] text-sm transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-xs text-[#666]">
            © {new Date().getFullYear()} LibreMind Inc. Mumbai.
          </p>
          <div className="flex gap-4">
            {['Twitter', 'Instagram', 'LinkedIn'].map(social => (
              <a 
                key={social} 
                href="#" 
                className="text-xs text-[#666] hover:text-white uppercase tracking-wider transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}