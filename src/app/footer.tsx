import Link from "next/link"

const Footer = () => (
 <div className="h-40 bg-gray-100 mt-12 flex items-center">
  <div className="container mx-auto flex justify-between items-center">
   <div>File Drive</div>
   <Link href="/privacy" className="text-blue-900 hover:text-blue-500">Privacy Policy</Link>
   <Link href="/terms-of-service" className="text-blue-900 hover:text-blue-500">Terms of Service</Link>
   <Link href="/about" className="text-blue-900 hover:text-blue-500">About</Link>
  </div>
 </div>
)

export default Footer