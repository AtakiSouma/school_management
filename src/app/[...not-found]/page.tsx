import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen overflow-hidden flex flex-col justify-center items-center bg-white">
      <Link href={"/"}>Back to home</Link>
    </div>
  );
}
