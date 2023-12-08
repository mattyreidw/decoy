import Image from 'next/image'

export default function Home() {
  return (
    <main>
       <Image
          src="/decoy_logo.svg"
          alt="Decoy design logo"
          width={180}
          height={70}
          priority
        />
    </main>
  )
}
