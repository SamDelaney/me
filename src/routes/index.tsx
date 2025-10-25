import { createFileRoute } from '@tanstack/react-router'
import InfiniteMenu from '@/components/InfiniteMenu'

export const Route = createFileRoute('/')({ component: App })

function App() {

const items = [
  {
    image: 'https://picsum.photos/300/300',
    link: 'https://google.com/',
    title: 'Item 1',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/400/400',
    link: 'https://google.com/',
    title: 'Item 2',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/500/500',
    link: 'https://google.com/',
    title: 'Item 3',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/600/600',
    link: 'https://google.com/',
    title: 'Item 4',
    description: 'This is pretty cool, right?'
  }
];

return (<div className="h-[calc(100vh-80px)]">
  <InfiniteMenu items={items}/>
</div>
  )
}
