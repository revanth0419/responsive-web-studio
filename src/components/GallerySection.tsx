 import galleryLiving from "@/assets/gallery-living.jpg";
 import galleryLake from "@/assets/gallery-lake.jpg";
 import galleryWoman from "@/assets/gallery-woman.jpg";
 import galleryCoffee from "@/assets/gallery-coffee.jpg";
 
 const GallerySection = () => {
   return (
     <section className="section-padding bg-background">
       <div className="container-wide">
         {/* Section Header */}
         <div className="text-center mb-10">
           <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
             Tempor incididunt
           </h2>
           <p className="text-muted-foreground max-w-lg mx-auto">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
             diam nonumy eirmod tempor invidunt ut labore et dolore magna.
           </p>
         </div>
 
         {/* Image Gallery Collage */}
         <div className="relative max-w-4xl mx-auto">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
             <div className="col-span-1 md:col-span-1">
               <img 
                 src={galleryLiving} 
                 alt="Modern living room" 
                 className="w-full h-40 md:h-52 object-cover rounded-lg shadow-md"
               />
             </div>
             <div className="col-span-1 md:col-span-1">
               <img 
                 src={galleryCoffee} 
                 alt="Morning coffee" 
                 className="w-full h-40 md:h-52 object-cover rounded-lg shadow-md"
               />
             </div>
             <div className="col-span-1 md:col-span-1">
               <img 
                 src={galleryLake} 
                 alt="Lake at sunset" 
                 className="w-full h-40 md:h-52 object-cover rounded-lg shadow-md"
               />
             </div>
             <div className="col-span-1 md:col-span-1">
               <img 
                 src={galleryWoman} 
                 alt="Woman in field" 
                 className="w-full h-40 md:h-52 object-cover rounded-lg shadow-md"
               />
             </div>
           </div>
 
           {/* Overlay Card */}
           <div className="mt-6 bg-sage/60 backdrop-blur-sm rounded-xl p-6 md:p-10 text-center">
             <h3 className="text-lg md:text-xl font-serif text-foreground mb-3">
               Ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
               eirmod tempor invidunt ut.
             </h3>
             <p className="text-muted-foreground text-sm md:text-base mb-6 max-w-2xl mx-auto">
               Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, 
               consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut consetetur sadipscing elitr, sed diam nonumy 
               eirmod tempor invidunt ut consetetur sadipscing elitr, sed diam eirmod tempor invidunt ut.
             </p>
             <button className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gold-hover transition-colors">
               See more
             </button>
           </div>
         </div>
       </div>
     </section>
   );
 };
 
 export default GallerySection;