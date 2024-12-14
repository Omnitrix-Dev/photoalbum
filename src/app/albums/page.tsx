import cloudinary from 'cloudinary'

import { Suspense } from 'react'
import { AlbumCard } from './_components/AlbumCard'
import { AlbumSkeleton } from '~/components/skeletons/AlbumSkeleton'

export type Folder = { name: string; path: string }

async function AlbumWithData() {
  const { folders } = (await cloudinary.v2.api.root_folders()) as {
    folders: Folder[]
  }
  return folders.map(folder => <AlbumCard key={folder.path} folder={folder} />)
}

export default async function AlbumsPage() {
  return (
    <section>
      <div className='flex flex-col gap-8'>
        <div className='flex justify-between'>
          <h1 className='text-4xl font-bold'>Albums</h1>
        </div>

        <div className='grid grid-cols-3 gap-4'>
          <Suspense
            fallback={
              <section className='flex flex-wrap flex-col sm:flex-row gap-2 border'>
                <AlbumSkeleton />
              </section>
            }
          >
            <AlbumWithData />
          </Suspense>
        </div>
      </div>
    </section>
  )
}
