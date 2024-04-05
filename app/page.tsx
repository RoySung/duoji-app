import { Link } from '@nextui-org/link'
import { Button } from '@nextui-org/button'
import { button as buttonStyles } from '@nextui-org/theme'
import { title } from '@/components/primitives'
import { FaBeer } from 'react-icons/fa'
import { Calendar } from '@/components/calendar'

export default function Home() {
  return (
    <div id="app">
      <div>
        <h1 className={title()}>Make&nbsp;</h1>
        <Link
          isExternal
          href="/about"
          className={buttonStyles({ color: 'primary', radius: 'full', variant: 'shadow' })}
        >
          Documentation
        </Link>
        <Button isIconOnly color="danger" aria-label="beer">
          <FaBeer />
        </Button>
      </div>
      {/* calendar */}
      <div>
        <Calendar />
      </div>
    </div>
  )
}
