 import { Facebook, Linkedin, Twitter } from "lucide-react";
 
 const Footer = () => {
   return (
     <footer className="bg-charcoal text-cream-dark">
       {/* Main Footer */}
       <div className="section-padding pb-8">
         <div className="container-wide text-center">
           <h3 className="text-2xl font-serif font-bold tracking-wide mb-4">MAGNA</h3>
            <p className="text-sm text-cream-dark/70 max-w-md mx-auto mb-6">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia eirmod tempor incididunt ut labore et dolore aliqua.
            </p>
           
           {/* Social Links */}
           <div className="flex justify-center gap-6">
             <a 
               href="#" 
               className="text-cream-dark/70 hover:text-cream-dark transition-colors"
               aria-label="Facebook"
             >
               <Facebook className="w-5 h-5" />
             </a>
             <a 
               href="#" 
               className="text-cream-dark/70 hover:text-cream-dark transition-colors"
               aria-label="LinkedIn"
             >
               <Linkedin className="w-5 h-5" />
             </a>
             <a 
               href="#" 
               className="text-cream-dark/70 hover:text-cream-dark transition-colors"
               aria-label="Twitter"
             >
               <Twitter className="w-5 h-5" />
             </a>
           </div>
         </div>
       </div>
 
       {/* Bottom Bar */}
       <div className="border-t border-cream-dark/20">
         <div className="container-wide px-4 md:px-8 py-4">
           <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream-dark/50">
             <span>© 2022 Vitruvio. All rights reserved.</span>
             <div className="flex gap-6">
               <a href="#" className="hover:text-cream-dark transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-cream-dark transition-colors">Terms of Services</a>
             </div>
           </div>
         </div>
       </div>
     </footer>
   );
 };
 
 export default Footer;