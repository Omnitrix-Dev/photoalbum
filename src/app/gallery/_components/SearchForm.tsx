'use client'

import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useQueryState } from 'nuqs'

export function SearchForm({ initialSearch }: { initialSearch: string }) {
  const router = useRouter()

  const [tagName, setTagName] = useState(initialSearch ?? '')
  const [search, setSearch] = useQueryState('q', { defaultValue: '' })

  useEffect(() => {
    setTagName(initialSearch)
  }, [initialSearch])

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        router.replace(`/gallery?search=${encodeURIComponent(search)}`)
        router.refresh()
      }}
    >
      <Label htmlFor='tag-name' className='text-right'>
        Search By Tag
      </Label>
      <div className='flex gap-2'>
        <Input
          onChange={e => setSearch(e.target.value)}
          id='tag-name'
          value={search as string}
        />
        <Button type='submit'>Search</Button>
      </div>
    </form>
  )
}
