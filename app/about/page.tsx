import { ShaderBackground } from '@/components/shaderBackground'
import { title } from '@/components/primitives'
import styles from './styles.module.css'

export default function AboutPage() {
  const className = `${title()} relative ${styles.textShadow}`

  return (
    <div className="flex h-full w-full items-center justify-center">
      <ShaderBackground />
      <h1 className={className}>Hello</h1>
    </div>
  )
}
