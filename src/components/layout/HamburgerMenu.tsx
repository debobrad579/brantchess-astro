import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { LinksDropdownMobile } from "./LinksDropdown"
import { ThemeToggleMobile } from "./ThemeToggle"

export function HamburgerMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={null} size={null} className="hover:bg-navbar-muted">
          <Menu size={64} />
          <span className="sr-only">Hamburger menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <a href="/schedule">Schedule & Games</a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a href="/champions">Brantford Chess Champions</a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a href="/harmony-square">Harmony Square</a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a href="/learning-resources">Learning Resources</a>
        </DropdownMenuItem>
        <LinksDropdownMobile />
        <ThemeToggleMobile />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
