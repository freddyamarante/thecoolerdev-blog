import '@/styles/globals.css'

type GrainOverlayProps = {
  zIndex?: string
}

const GrainOverlay = ({ zIndex }: GrainOverlayProps) => {
  return (
    <div
      className={`grain-background fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden ${zIndex}`}
    ></div>
  )
}

export default GrainOverlay
