export default function PageBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#05090d]" />
      <div className="backdrop-grid absolute inset-0 opacity-50" />
      <div className="absolute left-1/2 top-0 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(119,213,255,0.18),_transparent_64%)] blur-3xl animate-ambient-drift" />
      <div className="absolute right-[-8rem] top-[16rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,_rgba(241,180,106,0.16),_transparent_66%)] blur-3xl" />
      <div className="absolute inset-0 bg-noise opacity-[0.04]" />
      <div className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,rgba(5,9,13,0.95),transparent)]" />
    </div>
  );
}
