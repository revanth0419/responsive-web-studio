 import { useState } from "react";
 import { Menu, X } from "lucide-react";
 
 const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
 
   const navLinks = ["Lorem", "Ipsum", "Amet", "Elit", "Magna"];
 
   return (
     <header className="bg-card sticky top-0 z-50 border-b border-border">
       <div className="container-wide px-4 md:px-8">
         <div className="flex items-center justify-between h-16 md:h-20">
           {/* Logo */}
           <a href="#" className="text-xl md:text-2xl font-serif font-bold text-foreground tracking-wide">
             MAGNA
           </a>
 
           {/* Desktop Navigation */}
           <nav className="hidden md:flex items-center gap-8">
             {navLinks.map((link, index) => (
               <a
                 key={link}
                 href={`#${link.toLowerCase()}`}
                 className={`text-sm font-medium transition-colors hover:text-primary ${
                   index === 0 ? "text-primary border-b-2 border-primary pb-1" : "text-muted-foreground"
                 }`}
               >
                 {link}
               </a>
             ))}
           </nav>
 
           {/* Mobile Menu Button */}
           <button
             className="md:hidden p-2 text-foreground"
             onClick={() => setIsMenuOpen(!isMenuOpen)}
             aria-label="Toggle menu"
           >
             {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
           </button>
         </div>
 
         {/* Mobile Navigation */}
         {isMenuOpen && (
           <nav className="md:hidden py-4 border-t border-border animate-fade-in">
             <div className="flex flex-col gap-4">
               {navLinks.map((link, index) => (
                 <a
                   key={link}
                   href={`#${link.toLowerCase()}`}
                   className={`text-base font-medium transition-colors hover:text-primary ${
                     index === 0 ? "text-primary" : "text-muted-foreground"
                   }`}
                   onClick={() => setIsMenuOpen(false)}
                 >
                   {link}
                 </a>
               ))}
             </div>
           </nav>
         )}
       </div>
     </header>
   );
 };
 
 export default Header;