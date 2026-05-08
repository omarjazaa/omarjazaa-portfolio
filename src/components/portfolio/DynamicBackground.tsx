import { useTheme } from "@/hooks/useTheme";

const DynamicBackground = () => {
  const { theme } = useTheme();
  
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Background base */}
      <div className="absolute inset-0 bg-background transition-colors duration-500" />
      
      {theme === 'dark' ? (
        <>
          {/* Night Theme: Deep glowing floating orbs and subtle cosmic vibe */}
          <div className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-cyan/10 blur-[120px] mix-blend-screen animate-blob" />
          <div className="absolute top-[20%] -right-[10%] w-[45vw] h-[45vw] rounded-full bg-purple-500/10 blur-[130px] mix-blend-screen animate-blob animation-delay-2000" />
          <div className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-blue-500/10 blur-[140px] mix-blend-screen animate-blob animation-delay-4000" />
        </>
      ) : (
        <>
          {/* Light Theme: Soft bright moving gradients and glowing light blobs */}
          <div className="absolute -top-[10%] -left-[5%] w-[60vw] h-[60vw] rounded-full bg-cyan/20 blur-[100px] mix-blend-multiply animate-blob" />
          <div className="absolute top-[15%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-pink-400/20 blur-[120px] mix-blend-multiply animate-blob animation-delay-2000" />
          <div className="absolute -bottom-[10%] left-[15%] w-[60vw] h-[60vw] rounded-full bg-purple-400/20 blur-[130px] mix-blend-multiply animate-blob animation-delay-4000" />
        </>
      )}

      {/* Grid overlay for cyberpunk / tech feel */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
};

export default DynamicBackground;
