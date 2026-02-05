 import { FileText, ClipboardList, Pencil, CalendarDays } from "lucide-react";
 
 const features = [
   { icon: FileText, label: "Ipsum" },
   { icon: ClipboardList, label: "Sit amet" },
   { icon: Pencil, label: "Invidunt" },
   { icon: CalendarDays, label: "Lorem" },
 ];
 
 const FeaturesSection = () => {
   return (
     <section className="section-padding bg-card">
       <div className="container-wide">
         <h2 className="text-2xl md:text-3xl font-serif text-foreground text-center mb-12">
           Consetetur sadipscing
         </h2>
 
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
           {features.map((feature, index) => (
             <div
               key={feature.label}
               className="flex flex-col items-center p-6 bg-background rounded-xl border border-border hover:shadow-lg transition-shadow animate-fade-in"
               style={{ animationDelay: `${index * 0.1}s` }}
             >
               <div className="w-14 h-14 flex items-center justify-center mb-4">
                 <feature.icon className="w-8 h-8 text-foreground" strokeWidth={1.5} />
               </div>
               <span className="text-sm font-medium text-foreground">{feature.label}</span>
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default FeaturesSection;