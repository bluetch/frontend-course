// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const visual = [
    {
      name: "Visual 01",
      img: "/images/visual/01.jpg",
      desc: "visual description visual description visual description",
    },
    {
      name: "Visual 02",
      img: "/images/visual/02.jpg",
      desc: "visual description visual description visual description",
    },
    {
      name: "Visual 03",
      img: "/images/visual/03.jpg",
      desc: "visual description visual description visual description",
    },
    {
      name: "Visual 04",
      img: "/images/visual/04.jpg",
      desc: "visual description visual description visual description",
    },
    {
      name: "Visual 05",
      img: "/images/visual/05.jpg",
      desc: "visual description visual description visual description",
    },
    {
      name: "Visual 06",
      img: "/images/visual/06.jpg",
      desc: "visual description visual description visual description",
    },
    {
      name: "Visual 07",
      img: "/images/visual/07.jpg",
      desc: "visual description visual description visual description",
    },
    {
      name: "Visual 08",
      img: "/images/visual/08.jpg",
      desc: "visual description visual description visual description",
    },
  ];
  res.status(200).json(visual)
}
