 import blogChurch from "@/assets/blog-church.jpg";
 import blogRoad from "@/assets/blog-road.jpg";
 import blogFrames from "@/assets/blog-frames.jpg";
 
 const blogPosts = [
   {
     image: blogFrames,
     date: "20-08-2022",
     excerpt: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.",
   },
   {
     image: blogChurch,
     date: "25-08-2022",
     excerpt: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.",
   },
   {
     image: blogRoad,
     date: "30-08-2022",
     excerpt: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.",
   },
 ];
 
 const BlogSection = () => {
   return (
     <section className="section-padding bg-sand">
       <div className="container-wide">
         {/* Section Header */}
         <div className="text-center mb-4">
           <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-3">
             Invidunt ut
           </h2>
           <p className="text-muted-foreground text-sm max-w-md mx-auto">
             Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed 
             diam nonumy eirmod tempor invidunt ut labore et dolore magna.
           </p>
         </div>
 
         {/* Blog Grid */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10 max-w-5xl mx-auto">
           {blogPosts.map((post, index) => (
             <article
               key={index}
               className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow animate-fade-in"
               style={{ animationDelay: `${index * 0.1}s` }}
             >
               <div className="aspect-[4/5] overflow-hidden">
                 <img
                   src={post.image}
                   alt="Blog post"
                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                 />
               </div>
               <div className="p-4">
                 <span className="text-xs text-muted-foreground">{post.date}</span>
                 <p className="text-sm text-foreground mt-2 line-clamp-3">
                   {post.excerpt}
                 </p>
               </div>
             </article>
           ))}
         </div>
 
         {/* See More Button */}
         <div className="text-center mt-10">
           <button className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gold-hover transition-colors">
             See more
           </button>
         </div>
       </div>
     </section>
   );
 };
 
 export default BlogSection;