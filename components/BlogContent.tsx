import React from "react";
import Outline from "./common/button/Outline";
import { IoCalendarClearOutline } from "react-icons/io5";
import { BsArrowUp, BsChatDots } from "react-icons/bs";
import { FaQuoteRight } from "react-icons/fa";
import Image from "next/image";
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import { BiArrowBack } from "react-icons/bi";

const BlogContent = ({ title = "No title", body, author, comments }) => {
  return (
    <section className="flex flex-col space-y-4">
      <h1 className="font-bold text-5xl">{title}</h1>
      <div className="flex flex-row items-center justify-start space-x-3">
        <div className="flex flex-row items-center justify-center space-x-2">
          <Image
            width={1000}
            height={1000}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyzTWQoCUbRNdiyorem5Qp1zYYhpliR9q0Bw&s"
            alt=""
            className="h-10 w-10 rounded-full"
          />
          <p className="text-base">{author}</p>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2">
          <IoCalendarClearOutline />
          <p className="text-sm">Nov 12, 2021</p>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2">
          <BsChatDots />
          <p className="text-sm">25 Comments</p>
        </div>
      </div>
      <Image
        width={1000}
        height={1000}
        src="https://static.vecteezy.com/system/resources/thumbnails/020/933/072/small_2x/abstract-blur-gradient-background-vector.jpg"
        alt=""
        className="w-full rounded-lg object-cover md:h-96"
      />
      <h2 className="font-bold md:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque deserunt
        ea officia quae! Eligendi nemo, at sed tenetur ex sint.
      </h2>
      <p>
        {body}{" "}
        <span className="font-bold text-xl">
          <BsArrowUp />
          This is the body obtained from the api
        </span>
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste accusamus
        ducimus nesciunt doloremque? Cum cupiditate explicabo natus eius
        doloremque fugiat.
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        nostrum excepturi fugiat quod deleniti ab incidunt commodi alias maiores
        blanditiis aliquid libero repellat harum obcaecati aperiam cumque illum
        ullam iure vel asperiores architecto ducimus, esse debitis! Minus, modi
        totam. Veniam odio ipsum harum iste voluptate iure porro explicabo illo.
        Culpa!
      </p>
      <div className="flex flex-row rounded-md bg-blue-400/20 p-5">
        <FaQuoteRight className="w-full text-5xl text-blue-400" />
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, expedita
          rerum eveniet consectetur magni quisquam cum adipisci necessitatibus
          mollitia laboriosam enim quas hic explicabo quidem provident harum
          dolorem unde minima pariatur
        </span>
      </div>
      <h2 className="text-xl font-bold">
        EB Garamond and Relative (free + paid)
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque libero,
        ut cupiditate tempora autem iusto quaerat ipsum, earum eveniet molestias
        numquam eaque porro, eius tempore ducimus aspernatur ad architecto ea.
        Atque neque ipsam dicta itaque, facere ad beatae ducimus nihil labore
        dolor repudiandae ipsa. Ullam necessitatibus amet recusandae tenetur
        consequuntur. <br />
        <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
        officia, inventore ut consequatur vel mollitia, repellat nobis
        repellendus quibusdam corporis nihil quia numquam facilis quod placeat!
        Recusandae, est incidunt. Repellendus ducimus maxime tempora placeat
        nesciunt. Dignissimos minima dolorem, optio ipsa explicabo rem
        consequuntur, nesciunt natus voluptate molestiae tempore a quae?
        <br />
        <br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut quasi
        adipisci magni ad reprehenderit eveniet obcaecati mollitia, id
        blanditiis laudantium at sapiente totam velit! Laudantium cumque quia
        quidem provident harum.
      </p>
      <div className="grid gap-5 md:grid-cols-2">
        {[1, 2, 3, 4].map((value, id) => {
          return (
            <div className="h-60 w-full rounded-md" key={id}>
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLamBZ3O9wE4QhMbgZvyj7ztu42bxSlffdaA&s"
                alt=""
                width={1000}
                height={1000}
                className="h-full w-full rounded-md object-cover"
              />
            </div>
          );
        })}
      </div>
      <div className="flex w-fit flex-row flex-wrap items-center justify-center space-x-4 space-y-4 text-nowrap md:flex-nowrap md:space-y-0">
        <p>Share this post:</p>
        <Outline>
          <CiFacebook />
          <span>Facebook</span>
        </Outline>
        <Outline>
          <CiTwitter />
          <span>Twitter</span>
        </Outline>
        <Outline>
          <CiInstagram />
          <span>Instagram</span>
        </Outline>
      </div>
    </section>
  );
};

export default BlogContent;
