import Image from 'next/image'
import React from 'react'

const Lessons = () => {
  return (
    <section className='flex flex-col'>
        
        <div className='flex flex-row justify-start'>
            <div className='flex items-center pr-[37px]'>
                <div className='flex items-center justify-center bg-tertiary relative w-[115px] h-[115px] rounded-full'>
                    <Image src='./questionmark.svg' alt='question mark' width={36} height={77} className='absolute' />
                </div>
            </div>
            <div className='flex items-center'>
                <h2 className='font-bold text-[36px] leading-[44px] text-white'>
                    What I Teach
                </h2>
            </div>
        </div>

        <div className='pb-[100px] pt-[52px] pl-[150px]'>
            <div className='flex flex-col justify-center'>
                <div className='flex justify-start items-start pb-[52px]'>
                    <h2 className='font-bold text-[32px] leading-[39px] text-white'>
                        Group & Private Lessons
                    </h2>
                </div>

                <div className='flex justify-between justify-center items-center pb-[52px]'>

                    <div className='w-[381px] h-[390px] bg-white rounded-[30px] relative flex justify-center'>
                        <div className='bg-tertiary w-[303px] h-[37px] absolute rounded-[30px] items-center justify-center flex -top-[15px]'>
                            <h2 className='font-normal text-[24px] leading-[29px] text-white flex items-center justify-center text-center'>
                                Acting
                            </h2>
                        </div>

                        <div className='flex flex-col w-[303px]'>
                            <div className='flex flex-row justify-between pt-[37px] w-full'>
                                <div className='flex'>
                                    <h2 className='font-semibold text-[18px] leading-[22px] text-[#0047FF] '>
                                    Beginner - Expert
                                    </h2>
                                </div>
                                <div className='flex'>
                                    <h2 className='font-semibold text-[18px] leading-[22px] text-[#0047FF] '>
                                    Any age
                                    </h2>
                                </div>
                            </div>

                            <div className='flex pt-[19px] pb-[13px]'>
                                <hr className='border-[#1C263F] border-[1px] w-full -w-[1029]'/>
                            </div>

                            <div className='flex flex-col text-black'>
                                <div className='flex justify-center'>
                                    <h2 className='font-semibold text-[16px] leading-[19px]'>
                                        “The first thing you need to become an actor is a pencil” - Michael Caine
                                    </h2>
                                </div>

                                <div className='flex pt-[20px]'>
                                    <ul className='list-disc pl-[19px] font-semibold text-[16px] leading-[19px]'>
                                        <li>
                                            Audition advice
                                        </li>
                                        <li>
                                            Script work and how to approach a scene
                                        </li>
                                        <li>
                                            Monologues
                                        </li>
                                        <li>
                                            Duologue
                                        </li>
                                        <li>
                                            Character work
                                        </li>
                                        <li>
                                            Shakespeare
                                        </li>
                                        <li>
                                            Voice
                                        </li>
                                        <li>
                                            Movement
                                        </li>
                                        <li>
                                            General drama games and fun
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                    

                   
                    <div className='w-[381px] h-[390px] bg-white rounded-[30px] relative flex justify-center'>
                        <div className='bg-tertiary w-[303px] h-[37px] absolute rounded-[30px] items-center justify-center flex -top-[15px]'>
                            <h2 className='font-normal text-[24px] leading-[29px] text-white flex items-center justify-center text-center'>
                                Street Dance
                            </h2>
                        </div>

                        <div className='flex flex-col w-[303px]'>
                            <div className='flex flex-row justify-between pt-[37px] w-full'>
                                <div className='flex'>
                                    <h2 className='font-semibold text-[18px] leading-[22px] text-[#0047FF] '>
                                    Beginner - Expert
                                    </h2>
                                </div>
                                <div className='flex'>
                                    <h2 className='font-semibold text-[18px] leading-[22px] text-[#0047FF] '>
                                    Any age
                                    </h2>
                                </div>
                            </div>

                            <div className='flex pt-[19px] pb-[13px]'>
                                <hr className='border-[#1C263F] border-[1px] w-full -w-[1029]'/>
                            </div>

                            <div className='flex flex-col text-black'>
                                <div className='flex justify-center'>
                                    <h2 className='font-semibold text-[16px] leading-[19px]'>
                                        I've been dancing from age 10 so I've had my share of falling flat on my face. Let me help you not fall on yours!
                                    </h2>
                                </div>

                                <div className='flex pt-[20px]'>
                                    <ul className='list-disc pl-[19px] font-semibold text-[16px] leading-[19px]'>
                                        <li>
                                            Technique
                                        </li>
                                        <li>
                                            Choreography
                                        </li>
                                        <li>
                                            Popping and locking
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            
            <div>
                <div className='flex justify-start items-start pb-[52px]'>
                    <h2 className='font-bold text-[32px] leading-[39px] text-white'>
                        Private Lessons
                    </h2>
                </div>

                <div className='flex justify-between justify-center items-center pb-[52px]'>

                    <div className='w-[381px] h-[390px] bg-white rounded-[30px] relative flex justify-center'>
                        <div className='bg-tertiary w-[303px] h-[37px] absolute rounded-[30px] items-center justify-center flex -top-[15px]'>
                            <h2 className='font-normal text-[24px] leading-[29px] text-white flex items-center justify-center text-center'>
                                Singing
                            </h2>
                        </div>

                        <div className='flex flex-col w-[303px]'>
                            <div className='flex flex-row justify-between pt-[37px] w-full'>
                                <div className='flex'>
                                    <h2 className='font-semibold text-[18px] leading-[22px] text-[#0047FF] '>
                                    Beginner - Expert
                                    </h2>
                                </div>
                                <div className='flex'>
                                    <h2 className='font-semibold text-[18px] leading-[22px] text-[#0047FF] '>
                                    Any age
                                    </h2>
                                </div>
                            </div>

                            <div className='flex pt-[19px] pb-[13px]'>
                                <hr className='border-[#1C263F] border-[1px] w-full -w-[1029]'/>
                            </div>

                            <div className='flex flex-col text-black'>
                                <div className='flex justify-center'>
                                    <h2 className='font-semibold text-[16px] leading-[19px]'>
                                        Want help becoming the next Beyoncé?
                                    </h2>
                                </div>

                                <div className='flex pt-[40px]'>
                                    <ul className='list-disc pl-[19px] font-semibold text-[16px] leading-[19px]'>
                                        <li>
                                            General singing
                                        </li>
                                        <li>
                                            Singing techniques
                                        </li>
                                        <li>
                                            Acting through song
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                    

                   
                    <div className='w-[381px] h-[390px] bg-white rounded-[30px] relative flex justify-center'>
                        <div className='bg-tertiary w-[303px] h-[37px] absolute rounded-[30px] items-center justify-center flex -top-[15px]'>
                            <h2 className='font-normal text-[24px] leading-[29px] text-white flex items-center justify-center text-center'>
                                Public Speaking
                            </h2>
                        </div>

                        <div className='flex flex-col w-[303px]'>
                            <div className='flex flex-row justify-between pt-[37px] w-full'>
                                <div className='flex'>
                                    <h2 className='font-semibold text-[18px] leading-[22px] text-[#0047FF] '>
                                    Beginner - Intermediate
                                    </h2>
                                </div>
                                <div className='flex'>
                                    <h2 className='font-semibold text-[18px] leading-[22px] text-[#0047FF] '>
                                    Any age
                                    </h2>
                                </div>
                            </div>

                            <div className='flex pt-[19px] pb-[13px]'>
                                <hr className='border-[#1C263F] border-[1px] w-full -w-[1029]'/>
                            </div>

                            <div className='flex flex-col text-black'>
                                <div className='flex justify-center'>
                                    <h2 className='font-semibold text-[16px] leading-[19px]'>
                                        Whether for business events or family birthdays, speaking in public is scary, but it doesn’t have to be.
                                    </h2>
                                </div>

                                <div className='flex pt-[40px]'>
                                    <ul className='list-disc pl-[19px] font-semibold text-[16px] leading-[19px]'>
                                        <li>
                                            General confidence
                                        </li>
                                        <li>
                                            Speech writing
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex flex-row justify-start'>
            <div className='flex items-center pr-[37px]'>
                <div className='flex items-center justify-center bg-tertiary relative w-[115px] h-[115px] rounded-full'>
                    <Image src='./cost.svg' alt='cost' width={64} height={64} className='absolute' />
                </div>
            </div>
            <div className='flex flex-col justify-center'>
                <h2 className='font-semibold text-[36px] leading-[44px] text-white pb-[17px]'>
                    Cost
                </h2>
                <p className='font-light text-[16px] leading-[20px] text-white'>
                    Sessions will generally be £15 per hour, but the length of the session is completely up to you.
                </p>
            </div>
        </div>

        <div className='flex flex-row justify-start pt-[72px] pb-[151px]'>
            <div className='flex items-center pr-[37px]'>
                <div className='flex items-center justify-center bg-tertiary relative w-[115px] h-[115px] rounded-full'>
                    <Image src='./ping.svg' alt='location' width={48} height={48} className='absolute' />
                </div>
            </div>
            <div className='flex flex-col justify-center'>
                <h2 className='font-semibold text-[36px] leading-[44px] text-white pb-[17px]'>
                    Location
                </h2>
                <p className='font-light text-[16px] leading-[20px] text-white'>
                    Private session will usually be held on zoom, but depending on your location and the session's needs I can come to you.
                </p>
            </div>
        </div>

        <div className='flex flex-col justify-center items-center pb-[194px]'>
            <p className='font-light text-[32px] leading-[40px] text-white text-center pb-[31px]'>
                Bookings/ Inquiries: 
            </p>
            <h2 className='font-semibold text-[48px] leading-[58px] text-white text-center underline'>
                joe@joegater.com
            </h2>
        </div>

    </section>
  )
}

export default Lessons