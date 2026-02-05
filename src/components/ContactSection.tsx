 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 
 const ContactSection = () => {
   return (
     <section className="section-padding bg-card">
       <div className="container-narrow">
         <div className="bg-background rounded-2xl p-8 md:p-12 text-center max-w-2xl mx-auto border border-border">
           <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
             Nonumy eirmod
           </h2>
            <p className="text-muted-foreground text-sm mb-8 max-w-md mx-auto">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.
            </p>
           
           <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
             <Input 
               type="email" 
               placeholder="Enter your email"
               className="flex-1 bg-card border-border"
             />
             <Button variant="primary">
               Send
             </Button>
           </form>
         </div>
       </div>
     </section>
   );
 };
 
 export default ContactSection;