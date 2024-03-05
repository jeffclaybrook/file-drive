import Link from "next/link"
import Image from "next/image"
import { OrganizationSwitcher, SignInButton, SignedIn, SignedOut, UserButton, useSession } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"

const Header = () => (
 <div className="relative z-10 border-b py-4 bg-gray-50">
  <div className="items-center container mx-auto justify-between flex">
   <Link href="/" className="flex gap-2 items-center text-xl text-black">
    <Image
     src="/logo.png"
     alt="File drive logo"
     width={50}
     height={50}
    />
   </Link>
   <SignedIn>
    <Button variant={"outline"}>
     <Link href="/dashboard/files">Your Files</Link>
    </Button>
   </SignedIn>
   <div className="flex gap-2">
    <OrganizationSwitcher />
    <UserButton />
    <SignedOut>
     <SignInButton>
      <Button>Sign In</Button>
     </SignInButton>
    </SignedOut>
   </div>
  </div>
 </div>
)

export default Header