export type LandingPage = {
  _id: string
  hero: {
    title: string
    highlight: string
    subtitle: string
    callToAction: string
    secondButton: string
    dividerText: string
  }
  aboutMe: {
    title: string
    body: string
    image: string
    services: {
      title: string
      description: string
      body: string
    }[]
    skills: string[]
    calibration: number
  }
  toolkit: {
    title: string
    body: string
    subtitle: string
    subBody: string
    button: string
    tools: {
      title: string
      description: string
      image: string
    }[]
  }
  process: {
    title: string
    body: string
    button: string
    steps: {
      title: string
      description: string
    }[]
  }
  pricing: {
    title: string
    prices: {
      title: string
      description: string
      price: number
      included: string[]
      highlight: boolean
    }[]
    disclaimer: string
  }
  projects: {
    title: string
    description: string
    project: {
      title: string
      image: string
      description: string
      url: string
      github: string
    }[]
  }
  blog: {
    title: string
    description: string
  }
  contact: {
    title: string
  }
}
