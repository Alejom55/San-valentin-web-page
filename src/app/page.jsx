
import LoadingHeart from "@/components/loading/loading";
import Link from "next/link";
import Image from "next/image";
export default function Home() {

  return (
    <main >
      <div className="container">
        <div className="cats-container">
          <Image src='/img/gato-uwu.jpg' width={200} height={200} alt="foto de gatito con otra rosa" priority />
          <Image src='/img/gato-chambelan.jpg' width={200} height={200} alt="foto de gatito chambelan" priority />
          <Image src='/img/gato-con-una-rosa.jpg' width={200} height={200} alt="foto de gatito con rosa" priority />
        </div>
        <div className="text-container">
          <h1>❤Hola Hermosa!</h1>
          <h2>¿Quieres ser mi San Valentín? ヾ(•ω•`)o</h2>
        </div>
        <div className="button-container">
          <Link href={'/accept'} style={{ textDecoration: 'none' }}>
            <button className="accept-button">
              <span className="box">
                Por su pollo que si!!
              </span>

              <div className="star-1">
                <svg height="25" width="25" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M427.313,88.686c-47.803-47.803-125.213-47.803-173.016,0l-17.087,17.087l-17.087-17.087
    c-47.803-47.803-125.213-47.803-173.016,0c-47.803,47.803-47.803,125.213,0,173.016l190.103,190.103
    c4.88,4.88,11.316,7.322,17.752,7.322c6.435,0,13.871-2.442,18.751-7.322l190.103-190.103
    C475.116,213.899,475.116,136.489,427.313,88.686z" fill="#fd1853"></path>
                </svg>


              </div>
              <div className="star-2">
                <svg height="20" width="20" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M427.313,88.686c-47.803-47.803-125.213-47.803-173.016,0l-17.087,17.087l-17.087-17.087
    c-47.803-47.803-125.213-47.803-173.016,0c-47.803,47.803-47.803,125.213,0,173.016l190.103,190.103
    c4.88,4.88,11.316,7.322,17.752,7.322c6.435,0,13.871-2.442,18.751-7.322l190.103-190.103
    C475.116,213.899,475.116,136.489,427.313,88.686z" fill="#fd1853"></path>
                </svg>

              </div>
              <div className="star-3">
                <svg height="9" width="9" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M427.313,88.686c-47.803-47.803-125.213-47.803-173.016,0l-17.087,17.087l-17.087-17.087
    c-47.803-47.803-125.213-47.803-173.016,0c-47.803,47.803-47.803,125.213,0,173.016l190.103,190.103
    c4.88,4.88,11.316,7.322,17.752,7.322c6.435,0,13.871-2.442,18.751-7.322l190.103-190.103
    C475.116,213.899,475.116,136.489,427.313,88.686z" fill="#fd1853"></path>
                </svg>

              </div>
              <div className="star-4">
                <svg height="10" width="10" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M427.313,88.686c-47.803-47.803-125.213-47.803-173.016,0l-17.087,17.087l-17.087-17.087
    c-47.803-47.803-125.213-47.803-173.016,0c-47.803,47.803-47.803,125.213,0,173.016l190.103,190.103
    c4.88,4.88,11.316,7.322,17.752,7.322c6.435,0,13.871-2.442,18.751-7.322l190.103-190.103
    C475.116,213.899,475.116,136.489,427.313,88.686z" fill="#fd1853"></path>
                </svg>

              </div>
              <div className="star-5">
                <svg height="20" width="20" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M427.313,88.686c-47.803-47.803-125.213-47.803-173.016,0l-17.087,17.087l-17.087-17.087
    c-47.803-47.803-125.213-47.803-173.016,0c-47.803,47.803-47.803,125.213,0,173.016l190.103,190.103
    c4.88,4.88,11.316,7.322,17.752,7.322c6.435,0,13.871-2.442,18.751-7.322l190.103-190.103
    C475.116,213.899,475.116,136.489,427.313,88.686z" fill="#fd1853"></path>
                </svg>

              </div>
              <div className="star-6">
                <svg height="7" width="7" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M427.313,88.686c-47.803-47.803-125.213-47.803-173.016,0l-17.087,17.087l-17.087-17.087
    c-47.803-47.803-125.213-47.803-173.016,0c-47.803,47.803-47.803,125.213,0,173.016l190.103,190.103
    c4.88,4.88,11.316,7.322,17.752,7.322c6.435,0,13.871-2.442,18.751-7.322l190.103-190.103
    C475.116,213.899,475.116,136.489,427.313,88.686z" fill="#fd1853"></path>
                </svg>

              </div>

            </button>
          </Link>
          <Link
            href={'/decline'}
            style={{ textDecoration: 'none' }}>
            <button

              className="decline-button">NO! (si le das a este lloro 😿)
            </button>
          </Link>

        </div>
      </div>

    </main >
  )
}
