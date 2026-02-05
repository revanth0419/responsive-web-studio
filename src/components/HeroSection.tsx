 import { Button } from "@/components/ui/button";
 
 const HeroSection = () => {
   return (
     <section className="section-padding bg-card text-center">
       <div className="container-narrow">
         <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6 animate-fade-in">
           Sed do eiusmod tempor incididunt
         </h1>
        <p className="text-muted-foreground text-base md:text-lg max-w-lg mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
         <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
           <Button variant="primary" size="lg">
             Learn more
           </Button>
           <Button variant="outline" size="lg">
             Get started
           </Button>
         </div>
       </div>
     </section>
   );
 };
 
 export default HeroSection;