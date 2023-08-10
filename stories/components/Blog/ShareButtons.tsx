'use client'

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from 'react-share'
import { Facebook, LinkURL, LinkedIn, Twitter } from '../resources/Icons'

interface ShareButtonsProps {
  articleTitle: string
  summary?: string
}

const ShareButtons = ({
  articleTitle = 'Article title',
  summary,
}: ShareButtonsProps) => {
  const handleCopyToClipboard = async () => {
    try {
      const currentUrl = window.location.href
      await navigator.clipboard.writeText(currentUrl)
    } catch (error) {
      console.error('Error copying URL to clipboard:', error)
    }
  }

  return (
    <div className="flex flex-row justify-center items-center border-2 border-night-dark divide-night-dark space-x-4 px-2 py-2 rounded-2xl">
      <FacebookShareButton
        url={window.location.href}
        quote={`Read this article by Freddy Amarante: ${articleTitle}`}
        hashtag="#TheCoolerDev"
      >
        <Facebook />
      </FacebookShareButton>
      <TwitterShareButton
        url={window.location.href}
        title={`${articleTitle} by Freddy Amarante`}
        hashtags={['#TheCoolerDev']}
        via="thecoolerdev"
      >
        <Twitter />
      </TwitterShareButton>
      <LinkedinShareButton
        url={window.location.href}
        title={`${articleTitle} by Freddy Amarante`}
        summary={summary ? summary : undefined}
      >
        <LinkedIn />
      </LinkedinShareButton>
      <div onClick={handleCopyToClipboard} className="cursor-pointer">
        <LinkURL />
      </div>
    </div>
  )
}

export default ShareButtons
