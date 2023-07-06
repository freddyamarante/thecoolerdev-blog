export type LandingPage = {
  _id: string
  status: {
    name: string
    active: boolean
  }
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
    services: {
      title: string
      description: string
      body: string
    }[]
    skills: string[]
  }
  process: {
    title: string
    body: string
    subtitle: string
    subBody: string
    button: string
    steps: {
      title: string
      description: string
      image: string
    }[]
  }
  pricing: {
    title: string
    prices: {
      title: string
      description: string
      price: string
      included: string[]
      highlight: boolean
    }[]
    disclaimer: string
  }
  projects: {
    title: string
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
