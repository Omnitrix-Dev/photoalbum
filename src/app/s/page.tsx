import { AlbumSkeleton } from '~/components/skeletons/AlbumSkeleton'
import { GallerySkeleton } from '~/components/skeletons/GallerySkeleton'

export default function Page() {
  return (
    <section className='flex flex-wrap flex-col sm:flex-row gap-2 border'>
      <AlbumSkeleton />
    </section>
  )
}
