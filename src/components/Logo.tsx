/** The iOffice wordmark: rose "i" + indigo "Office", matching the app. */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`font-headline font-black tracking-tighter ${className}`}>
      <span className="text-rose-500">i</span>
      <span className="text-indigo-600">Office</span>
    </span>
  );
}
