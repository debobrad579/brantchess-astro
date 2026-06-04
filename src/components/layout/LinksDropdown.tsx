import {
  DropdownMenuContent,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

const externalLinks = [
  { href: "https://www.chess.ca", label: "CFC" },
  { href: "https://www.fide.com", label: "FIDE" },
  { href: "https://www.chess.com", label: "Chess.com" },
  { href: "https://lichess.org/", label: "Lichess" },
  { href: "https://en.chessbase.com/", label: "Chessbase" },
  { href: "https://forum.chesstalk.com/", label: "Chess Talk" },
  { href: "https://theweekinchess.com/", label: "The Week in Chess" },
  { href: "https://chesscafe.com/", label: "Chess Cafe" },
  { href: "https://www.chesspublishing.com/", label: "Chess Publishing" },
]

export function LinksDropdownDesktop() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={null} className="hover:bg-navbar-muted">
          Links
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        {externalLinks.map(({ href, label }) => (
          <DropdownMenuItem key={href} asChild>
            <a href={href} target="_blank" rel="noreferrer">
              {label}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function LinksDropdownMobile() {
  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>Links</DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          {externalLinks.map(({ href, label }) => (
            <DropdownMenuItem key={href} asChild>
              <a href={href} target="_blank" rel="noreferrer">
                {label}
              </a>
            </DropdownMenuItem>
          ))}
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  )
}
