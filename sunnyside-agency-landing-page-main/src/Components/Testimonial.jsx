import React from "react";
import image1 from "../assets/image-emily.jpg";
import image2 from "../assets/image-jennie.jpg"
import image3 from "../assets/image-thomas.jpg"


const data = [
    {
        id: 1,
        image: image1,
        words: "We put our trust in sunnyside and they delivered,making sure our needs were met and deadlines are always hit",
        name: "Emily R",
        job:  "Marketing Director"
    },
    {
        id: 2,
        image: image2,
        words: "Sunnyside's enthusiasm coupled with thier keen intrest in our brand's sucess make it a satisying and enjoyable experience.",
        name:"Thomas S.",
        job: "Chief Operating Officer"
    },
    {
        id: 3,
        image:image3,
        words: "Incredible end result! Our saled increased over 400% when we worked with Sunnyside.Highly recommended!",
        name: "Jennie F.",
        job: "Bussiness Owner"
    }
]



const Card = ({props}) => {
    const {image,words,name,job} = props
  return (
    <div className="p-12 flex flex-col items-center">
      <img src={image} className="h-12 w-12 rounded-full" />
      <p className="text-gray-500 mt-4 text-center">
        {words}
      </p>
      <div className="text-center mt-11">
        <h3 className="font-barlow font-bold">{name}</h3>
        <h4 className="text-base text-gray-600">{job}</h4>
      </div>
    </div>
  );
};

function Testimonial() {
  return (
    <div className="flex flex-col items-center">
      <h3 className="mt-12 uppercase font-barlow tracking-widest text-gray-500 text-xl">
        client testimonial
      </h3>
      <div className="grid gap-3 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mb-3">
        {data.map((value) => (
          <Card key={value.id} props={value} />
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
