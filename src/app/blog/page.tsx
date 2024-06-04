import HeroBlog from "@/components/Blog/HeroBlog";
import Contato from "@/components/layout/Contato";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {

  const cards = [
    {
      title: 'Um titulo de um post',
      caption: 'Um breve resumo do que se trata esse post :)',
      img: '/about.jpg',
      date: 'August 13, 2021 '
    },
    {
      title: 'Um titulo de um post',
      caption: 'Um breve resumo do que se trata esse post :)',
      img: '/about.jpg',
      date: 'August 13, 2021 '
    },
    {
      title: 'Um titulo de um post',
      caption: 'Um breve resumo do que se trata esse post :)',
      body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32',
      date: 'August 13, 2021 ',
      img: '/about.jpg',
    },
    {
      title: 'Um titulo de um post maior que todos ',
      caption: 'Um breve resumo do que se trata esse post :)',
      img: '/about.jpg',
      date: 'August 13, 2021 '
    },
  ]

  return (
    <>
      <Navbar />
      <main className="mt-20 md:mt-32 bg-subtle-gray">
        <HeroBlog />
        <div className="p-5">
          {
            cards.map((post, i) => (
              <Link key={i} href={'#'}>
                <section className="flex max-w-[800px] mx-auto gap-10 justify-between my-5 border border-ash-brown/10 rounded-md overflow-hidden bg-white/20 hover:bg-white cursor-pointer">
                  <div className="p-2 flex flex-col">
                    <p className="p-1 text-xs font-bold self-start bg-white-mist w-fit rounded text-blue-black">
                      {post.date}
                    </p>
                    <h1 className="font-bold mt-2 text-xl md:text-3xl">
                      {post.title}
                    </h1>
                    <h2 className="font-extralight leading-4">
                      {post.caption}
                    </h2>
                  </div>
                  <div className="max-h-full object-cover">
                    <Image src={post.img} width={100} height={100} alt=""
                      className=""
                    />
                  </div>
                </section>
              </Link>
            ))
          }
        </div>
        <Contato />
      </main>
      <Footer />
    </>
  );
}
