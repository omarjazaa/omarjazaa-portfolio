import { ReactNode } from "react";

interface SectionProps {
  id: string;
  number?: string;
  title: ReactNode;
  children: ReactNode;
}

const Section = ({ id, number, title, children }: SectionProps) => {
  return (
    <section 
      id={id} 
      className="scroll-mt-24 py-16 sm:py-20 md:py-24 lg:py-28"
    >
      <div className="container-page">
        <div className="mb-10 sm:mb-12 md:mb-16 flex flex-col md:flex-row md:items-center gap-3 sm:gap-4 md:gap-5">
          {number && (
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-cyan tracking-tight">
              {number}
            </span>
          )}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-cyan via-purple-500 to-cyan bg-clip-text text-transparent leading-tight">
            {title}
          </h2>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
};

export default Section;
