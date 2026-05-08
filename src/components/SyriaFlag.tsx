const SyriaFlag = ({ className = "inline-block w-[1em] h-[1em] align-middle" }: { className?: string }) => (
  <svg
    viewBox="0 0 450 300"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Syria flag"
  >
    {/* Green stripe */}
    <rect width="450" height="100" fill="#007A3D" />
    {/* White stripe */}
    <rect y="100" width="450" height="100" fill="#FFFFFF" />
    {/* Black stripe */}
    <rect y="200" width="450" height="100" fill="#000000" />
    {/* Three red stars */}
    <g fill="#CE1126">
      <polygon points="150,117 154,130 167,130 157,138 161,151 150,143 139,151 143,138 133,130 146,130" />
      <polygon points="225,117 229,130 242,130 232,138 236,151 225,143 214,151 218,138 208,130 221,130" />
      <polygon points="300,117 304,130 317,130 307,138 311,151 300,143 289,151 293,138 283,130 296,130" />
    </g>
  </svg>
);

export default SyriaFlag;

