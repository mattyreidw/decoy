import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Image
        src="/decoy_logo.svg"
        alt="Decoy logo"
        className=""
        width={300}
        height={108}
        priority
      />
    </main>
  )
}
