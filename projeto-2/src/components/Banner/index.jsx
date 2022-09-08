export function Banner() {
  return (
    <>
      <article className="relative bg-bannerImg bg-no-repeat bg-cover h-96 flex justify-center items-center ">
        <div className="absolute z-10 w-full md:container px-4 text-white text- center leading-9 ">
          <h2 className="text-3xl font-bold">A melhor loja de Jordan</h2>
          <p className="leading-[180%]">
            O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e
            o jogador Michael Jordan.
          </p>
        </div>
      </article>
    </>
  )
}
