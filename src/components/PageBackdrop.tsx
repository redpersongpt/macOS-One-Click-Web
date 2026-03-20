export default function PageBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#030405]" />
      <div className="backdrop-grid absolute inset-0 opacity-35" />
      <div className="absolute left-1/2 top-[-4rem] h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(125,211,252,0.14),_transparent_66%)] blur-3xl animate-ambient-drift" />
      <div className="absolute inset-0 bg-noise opacity-[0.03]" />
      <div className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,rgba(3,4,5,0.96),transparent)]" />
    </div>
  );
}
