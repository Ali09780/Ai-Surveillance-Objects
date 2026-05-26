import ObjectDetection from "@/components/object-detection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      
      <h1 className="font-extrabold text-3xl md:text-6xl lg:text-7xl tracking-tighter text-center">
        Thief Detection Alarm{" "}
        
        <span className="block text-sm md:text-xl lg:text-2xl bg-gradient-to-b from-white via-gray-300 to-gray-600 text-transparent bg-clip-text mt-2">
           Ali Nawaz
        </span>
      </h1>

      <ObjectDetection />
      
    </main>
  );
}