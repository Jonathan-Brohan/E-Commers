import Link from "@/components/ui/link"
import ShoppingCart from "../shopping-cart"

export default function Header() {
  return (
    <div className="w-full p-4 bg-slate-100 flex items-center justify-between sticky top-0 left-0 z-50">
      <div className="flex flex-shrink-0 items-center">
          <img
            className="h-9 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          />
      </div>

      <Link className="font-bold text-base !text-slate-900 text-decoration-style: wavy;" href="/">
        B-savings
      </Link>

      <div className="flex items-center gap-4">
        <Link href="/">Products</Link>
        <ShoppingCart />
      </div>
    </div>
  )
}
