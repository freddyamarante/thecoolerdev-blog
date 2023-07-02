import '@/styles/globals.css'

const GrainOverlay = () => {
  return (
    <div
      className={`grain-background fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden`}
    ></div>
  )
}

export default GrainOverlay
