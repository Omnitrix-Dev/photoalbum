import cloudinary from 'cloudinary'

import { UploadButton } from './_components/UploadButton'
import { SearchForm } from './_components/SearchForm'
import { GalleryGrid } from './_components/GalleryGrid'
import { Suspense } from 'react'
import { GallerySkeleton } from '~/components/skeletons/GallerySkeleton'

export type SearchResult = {
  public_id: string
  tags: string[]
}

async function GalleryWithData({ searchTerm }: { searchTerm: string }) {
  console.log('searchTerm', searchTerm)
  const results = (await cloudinary.v2.search
    .expression(
      `resource_type:image${searchTerm ? ` AND tags=${searchTerm}` : ''}`,
    )
    .sort_by('created_at', 'desc')
    .with_field('tags')
    .max_results(30)
    .execute()) as { resources: SearchResult[] }

  return <GalleryGrid images={results.resources} />
}

export default async function GalleryPage({
  searchParams,
}: {
  searchParams: Promise<{
    search: string
  }>
}) {
  const search = (await searchParams).search
  console.log('search', search)
  return (
    <section>
      <div className='flex flex-col gap-8'>
        <div className='flex justify-between'>
          <h1 className='text-4xl font-bold'>Gallery</h1>
          <UploadButton />
        </div>
        <SearchForm initialSearch={search} />
        <Suspense fallback={<GallerySkeleton />}>
          <GalleryWithData searchTerm={search} />
        </Suspense>
      </div>
    </section>
  )
}
