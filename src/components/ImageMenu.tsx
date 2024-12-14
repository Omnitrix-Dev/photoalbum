import { Link } from 'next-view-transitions'
import { SearchResult } from '~/app/gallery/page'
import { Menu } from './icons'
import { AddToAlbumDialog } from './AddToAlbumDialog'
import { useState } from 'react'
import { Pencil } from 'lucide-react'
import { Button } from '~/components/ui/button'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu'

export function ImageMenu({ image }: { image: SearchResult }) {
  const [open, setOpen] = useState(false)

  return (
    <div className='absolute top-2 right-2'>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant='secondary' className='w-8 h-8 p-0'>
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-40'>
          <DropdownMenuItem asChild>
            <AddToAlbumDialog image={image} onClose={() => setOpen(false)} />
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link
              href={`/edit?publicId=${encodeURIComponent(image.public_id)}`}
              className='pl-4 flex gap-4'
            >
              <Pencil className='w-4 h-4' />
              Edit
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
