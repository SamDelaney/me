import { createFileRoute } from '@tanstack/react-router'
import InfiniteMenu from '@/components/InfiniteMenu'

export const Route = createFileRoute('/')({ component: App })

function App() {
  // Use a function to get the correct image path based on environment
  const getImagePath = (imageName: string) => {
    // For local development, use without base path
    // For production (GitHub Pages), use with base path
    const basePath = '/me';
    return `${basePath}/${imageName}`;
  };

const items = [
  {
    image: getImagePath('sundial-logo.svg'),
    link: 'https://sundialprotocol.com/',
    title: 'Sundial',
    description: 'Core Tech Lead'
  },
  {
    image: getImagePath('ascent-logo.png'),
    link: 'https://ascentrivals.com/',
    title: 'Ascent Rivals',
    description: 'Web & Smart Contract Engineer'
  },
  {
    image: getImagePath('grabbit-logo.svg'),
    link: 'https://grabbit.market',
    title: 'Grabbit Market',
    description: 'Founder & Principal Engineer'
  },
  {
    image: getImagePath('sundial-logo.svg'),
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
