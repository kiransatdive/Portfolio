import React from 'react'
import Marquee from 'react-fast-marquee'
import { SectionHeading } from './section-heading'

const Testimonials = () => {
    const data = [
        {
            quote: "Kiran is amazing with his expertise. He helped us resolve a production issue in just a few hours. Highly recommended!",
            name: "Maria Rodriguez",
            avatar: "https://i.pravatar.cc/150?img=1",

        },
        {
            quote: "Kiran is a life-saver. He helped us debug a complex issue in just a few minutes. Highly recommended!",
            name: "Alex Johnson",
            avatar: "https://i.pravatar.cc/150?img=2",
        },
        {
            quote: "Kiran is a true professional. He's always available to help and his knowledge is unmatched. Highly recommended!",
            name: "Emily Chen",
            avatar: "https://i.pravatar.cc/150?img=3",
        },
        {
            quote: "Kiran is a rockstar. He saved us a lot of time and effort with his expert problem-solving skills. Highly recommended!",
            name: "David Lee",
            avatar: "https://i.pravatar.cc/150?img=4",
        },
        {
            quote: "Kiran is a genius. He helped us launch our product in just a few weeks. Highly recommended!",
            name: "Sarah Patel",
            avatar: "https://i.pravatar.cc/150?img=5",
        },

    ]
    return (
        <div className='py-4'>
            <SectionHeading delay={0.4} className="mb-4">
                People Love my work!
            </SectionHeading>
            <div className='flex [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)] '>
                <Marquee speed={20} pauseOnHover className='py-4'>

                    {data.map((item, index) => (
                        <TestimonialCard key={index} quote={item.quote} name={item.name} avatar={item.avatar} />
                    ))}

                </Marquee>
            </div>
        </div>
    )
}

const TestimonialCard = ({
    quote, name, avatar
}: {
    quote: string;
    name: string;
    avatar: string;
}) => {
    return (
        <div className='shadow-input mx-4 h-50 w-full max-w-60 flex flex-col gap-4 rounded-xl p-4 justify-between transition duration-300 hover:shadow-md'>
            <p className='text-sm text-neutral-700'>{quote}</p>
            <div className='flex item-center gap-4'>
                <img src={avatar} alt={name} className='size-4 rounded-full' />

                <p className='text-sm text-neutral-500 object-cover'>{name}</p>

            </div>
        </div>
    )
}

export default Testimonials