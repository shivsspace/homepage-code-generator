
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const flowers = containerRef.current.getElementsByClassName("flower");
      const { clientX, clientY } = e;
      
      Array.from(flowers).forEach((flower, index) => {
        const htmlFlower = flower as HTMLElement;
        const speed = (index + 1) * 0.01;
        const x = (clientX - window.innerWidth / 2) * speed;
        const y = (clientY - window.innerHeight / 2) * speed;
        htmlFlower.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen relative overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-semibold nav-link">
            ZenTask
          </a>
          <div className="flex gap-6">
            <a href="/" className="glass-button">
              Home
            </a>
            <a href="/signin" className="glass-button">
              Sign in
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-4 pt-32 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            ZenTask
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto">
            productivity and mental wellness for students
          </p>
        </motion.div>
      </main>

      {/* Decorative Flowers */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.img
            key={i}
            src="/lovable-uploads/30826455-5eb9-47e4-8fd4-a69d6d12b40e.png"
            alt=""
            className={`flower flower-${i} w-16 md:w-24`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: i * 0.2,
              type: "spring",
              stiffness: 100
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
