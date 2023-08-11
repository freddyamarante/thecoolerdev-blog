export const Moon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path
        fillRule="evenodd"
        d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export const Sun = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
    </svg>
  )
}

interface ArrowRightProps {
  size: number
}

export const ArrowRight = ({ size = 14 }: ArrowRightProps) => {
  const newSize = size.toString()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19 18"
      fill="none"
      width={newSize}
      height={newSize}
    >
      <path
        d="M14.2696 10.83L9.59046 15.3664C9.44395 15.5084 9.24524 15.5882 9.03805 15.5882C8.83086 15.5882 8.63215 15.5084 8.48565 15.3664C8.33914 15.2244 8.25683 15.0317 8.25683 14.8309C8.25683 14.63 8.33914 14.4373 8.48565 14.2953L11.8332 11.0511H2.27987C2.07303 11.0511 1.87467 10.9715 1.72842 10.8297C1.58216 10.6879 1.5 10.4956 1.5 10.2951C1.5 10.0945 1.58216 9.90223 1.72842 9.76044C1.87467 9.61865 2.07303 9.53899 2.27987 9.53899H11.8332L8.48694 6.29293C8.34044 6.15089 8.25813 5.95825 8.25813 5.75738C8.25813 5.55651 8.34044 5.36387 8.48694 5.22183C8.63345 5.0798 8.83216 5 9.03935 5C9.24654 5 9.44525 5.0798 9.59175 5.22183L14.2709 9.75825C14.3437 9.82859 14.4013 9.91216 14.4406 10.0042C14.4799 10.0962 14.5001 10.1948 14.5 10.2944C14.4999 10.394 14.4795 10.4925 14.4399 10.5845C14.4004 10.6764 14.3425 10.7598 14.2696 10.83Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const Bars3 = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-8 h-8"
    >
      <path
        fillRule="evenodd"
        d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export const XMark = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-8 h-8"
    >
      <path
        fillRule="evenodd"
        d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export const ChevronDown = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  )
}

export const ChevronLeft = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  )
}

export const ChevronUp = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 15.75l7.5-7.5 7.5 7.5"
      />
    </svg>
  )
}

export const Check = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 flex-none"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  )
}

export const Twitter = () => {
  return (
    <svg
      width="43"
      height="42"
      viewBox="0 0 43 42"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className="w-10 h-10"
    >
      <path d="M39.805 10.5C38.4575 11.1125 37.005 11.515 35.5 11.7075C37.04 10.78 38.23 9.31 38.79 7.5425C37.3375 8.4175 35.7275 9.03 34.03 9.38C32.6475 7.875 30.705 7 28.5 7C24.3875 7 21.0275 10.36 21.0275 14.5075C21.0275 15.1025 21.0975 15.68 21.22 16.2225C14.99 15.9075 9.44251 12.915 5.75001 8.3825C5.10251 9.485 4.73501 10.78 4.73501 12.145C4.73501 14.7525 6.04751 17.0625 8.07751 18.375C6.83501 18.375 5.68001 18.025 4.66501 17.5V17.5525C4.66501 21.1925 7.25501 24.2375 10.685 24.92C9.58378 25.2214 8.42767 25.2633 7.30751 25.0425C7.78282 26.5343 8.7137 27.8397 9.96929 28.7751C11.2249 29.7105 12.742 30.229 14.3075 30.2575C11.6539 32.3583 8.3645 33.4938 4.98001 33.4775C4.38501 33.4775 3.79001 33.4425 3.19501 33.3725C6.52001 35.5075 10.475 36.75 14.71 36.75C28.5 36.75 36.0775 25.305 36.0775 15.3825C36.0775 15.05 36.0775 14.735 36.06 14.4025C37.53 13.3525 38.79 12.0225 39.805 10.5Z" />
    </svg>
  )
}

export const LinkedIn = () => {
  return (
    <svg
      width="43"
      height="42"
      viewBox="0 0 43 42"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className="w-10 h-10"
    >
      <path d="M33.75 5.25C34.6783 5.25 35.5685 5.61875 36.2249 6.27513C36.8813 6.9315 37.25 7.82174 37.25 8.75V33.25C37.25 34.1783 36.8813 35.0685 36.2249 35.7249C35.5685 36.3813 34.6783 36.75 33.75 36.75H9.25C8.32174 36.75 7.4315 36.3813 6.77513 35.7249C6.11875 35.0685 5.75 34.1783 5.75 33.25V8.75C5.75 7.82174 6.11875 6.9315 6.77513 6.27513C7.4315 5.61875 8.32174 5.25 9.25 5.25H33.75ZM32.875 32.375V23.1C32.875 21.5869 32.2739 20.1359 31.204 19.066C30.1341 17.9961 28.6831 17.395 27.17 17.395C25.6825 17.395 23.95 18.305 23.11 19.67V17.7275H18.2275V32.375H23.11V23.7475C23.11 22.4 24.195 21.2975 25.5425 21.2975C26.1923 21.2975 26.8154 21.5556 27.2749 22.0151C27.7344 22.4746 27.9925 23.0977 27.9925 23.7475V32.375H32.875ZM12.54 14.98C13.3197 14.98 14.0675 14.6703 14.6189 14.1189C15.1703 13.5675 15.48 12.8197 15.48 12.04C15.48 10.4125 14.1675 9.0825 12.54 9.0825C11.7556 9.0825 11.0034 9.39409 10.4487 9.94873C9.89409 10.5034 9.5825 11.2556 9.5825 12.04C9.5825 13.6675 10.9125 14.98 12.54 14.98ZM14.9725 32.375V17.7275H10.125V32.375H14.9725Z" />
    </svg>
  )
}

export const Github = () => {
  return (
    <svg
      width="43"
      height="42"
      viewBox="0 0 43 42"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className="w-10 h-10"
    >
      <path d="M21.5 3.5C19.2019 3.5 16.9262 3.95265 14.803 4.83211C12.6798 5.71157 10.7507 7.00061 9.12563 8.62563C5.84374 11.9075 4 16.3587 4 21C4 28.735 9.0225 35.2975 15.97 37.625C16.845 37.765 17.125 37.2225 17.125 36.75V33.7925C12.2775 34.8425 11.245 31.4475 11.245 31.4475C10.44 29.4175 9.3025 28.875 9.3025 28.875C7.71 27.79 9.425 27.825 9.425 27.825C11.175 27.9475 12.1025 29.6275 12.1025 29.6275C13.625 32.2875 16.1975 31.5 17.195 31.08C17.3525 29.9425 17.8075 29.1725 18.2975 28.735C14.4125 28.2975 10.335 26.7925 10.335 20.125C10.335 18.1825 11 16.625 12.1375 15.3825C11.9625 14.945 11.35 13.125 12.3125 10.7625C12.3125 10.7625 13.7825 10.29 17.125 12.5475C18.5075 12.1625 20.0125 11.97 21.5 11.97C22.9875 11.97 24.4925 12.1625 25.875 12.5475C29.2175 10.29 30.6875 10.7625 30.6875 10.7625C31.65 13.125 31.0375 14.945 30.8625 15.3825C32 16.625 32.665 18.1825 32.665 20.125C32.665 26.81 28.57 28.28 24.6675 28.7175C25.2975 29.26 25.875 30.3275 25.875 31.955V36.75C25.875 37.2225 26.155 37.7825 27.0475 37.625C33.995 35.28 39 28.735 39 21C39 18.7019 38.5474 16.4262 37.6679 14.303C36.7884 12.1798 35.4994 10.2507 33.8744 8.62563C32.2493 7.00061 30.3202 5.71157 28.197 4.83211C26.0738 3.95265 23.7981 3.5 21.5 3.5Z" />
    </svg>
  )
}

export const CV = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-10 h-10"
    >
      <path
        fillRule="evenodd"
        d="M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zm4.75 6.75a.75.75 0 011.5 0v2.546l.943-1.048a.75.75 0 011.114 1.004l-2.25 2.5a.75.75 0 01-1.114 0l-2.25-2.5a.75.75 0 111.114-1.004l.943 1.048V8.75z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export const Phone = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-10 h-10"
    >
      <path
        fillRule="evenodd"
        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export const Email = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-10 h-10"
    >
      <path
        fillRule="evenodd"
        d="M17.834 6.166a8.25 8.25 0 100 11.668.75.75 0 011.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0121.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 11-.82-6.26V8.25a.75.75 0 011.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 00-2.416-5.834zM15.75 12a3.75 3.75 0 10-7.5 0 3.75 3.75 0 007.5 0z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export const Facebook = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      fill="currentColor"
      className="w-10 h-10"
    >
      <path
        fillRule="evenodd"
        d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"
        fill="evenodd"
      />
    </svg>
  )
}

export const LinkURL = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-10 h-10"
    >
      <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
      <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
    </svg>
  )
}
