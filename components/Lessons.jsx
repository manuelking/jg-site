import Image from 'next/image'
import React from 'react'

const Lessons = () => {
  return (
    <section className="flex flex-col">
      <div className="flex sm:flex-row flex-col gap-y-16 sm:justify-start justify-center">
        <div className="flex items-center sm:justify-start justify-center sm:pr-[37px] pr-0">
          <div className="flex items-center justify-center bg-tertiary relative w-[115px] h-[115px] rounded-full">
            <Image
              src="./questionmark.svg"
              alt="question mark"
              width={36}
              height={77}
              className="absolute"
            />
          </div>
        </div>
        <div className="flex items-center sm:justify-start justify-center">
          <h2 className="font-bold text-[36px] leading-[44px] text-white">
            What I Teach
          </h2>
        </div>
      </div>

      <div className="flex flex-col pb-[100px] pt-[52px] md:pl-[150px] pl-0">
        <div className="flex flex-1 flex-col justify-center">
          <div className="justify-start items-start pb-[52px]">
            <h2 className="font-bold text-[32px] leading-[39px] text-white">
              Group & Private Lessons
            </h2>
          </div>

          <div className="flex md:flex-row flex-col gap-y-16 justify-between justify-center items-center pb-[52px]">
            <div className="xs:w-[381px] w-[281px] xs:h-[390px] h-[430px] bg-white rounded-[30px] relative flex justify-center">
              <div className="bg-tertiary xs:w-[303px] w-[203px] h-[37px] absolute rounded-[30px] items-center justify-center flex -top-[15px]">
                <h2 className="font-normal text-[24px] leading-[29px] text-white flex items-center justify-center text-center">
                  Acting
                </h2>
              </div>

              <div className="flex flex-col xs:w-[303px] w-[203px]">
                <div className="flex flex-row justify-between pt-[37px] w-full">
                  <div className="flex">
                    <h2 className="font-semibold text-[18px] leading-[22px] text-[#0047FF] ">
                      Beginner - Expert
                    </h2>
                  </div>
                  <div className="flex">
                    <h2 className="font-semibold text-[18px] leading-[22px] text-[#0047FF] ">
                      Any age
                    </h2>
                  </div>
                </div>

                <div className="flex pt-[19px] pb-[13px]">
                  <hr className="border-[#1C263F] border-[1px] w-full -w-[1029]" />
                </div>

                <div className="flex flex-col text-black">
                  <div className="flex justify-center">
                    <h2 className="font-semibold text-[16px] leading-[19px]">
                      “The first thing you need to become an actor is a pencil”
                      - Michael Caine
                    </h2>
                  </div>

                  <div className="flex pt-[20px]">
                    <ul className="list-disc pl-[19px] font-semibold text-[16px] leading-[19px]">
                      <li>Audition advice</li>
                      <li>Script work and how to approach a scene</li>
                      <li>Monologues</li>
                      <li>Duologue</li>
                      <li>Character work</li>
                      <li>Shakespeare</li>
                      <li>Voice</li>
                      <li>Movement</li>
                      <li>General drama games and fun</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="xs:w-[381px] w-[281px] h-[390px] bg-white rounded-[30px] relative flex justify-center">
              <div className="bg-tertiary xs:w-[303px] w-[203px] h-[37px] absolute rounded-[30px] items-center justify-center flex -top-[15px]">
                <h2 className="font-normal text-[24px] leading-[29px] text-white flex items-center justify-center text-center">
                  Street Dance
                </h2>
              </div>

              <div className="flex flex-col xs:w-[303px] w-[203px]">
                <div className="flex flex-row justify-between pt-[37px] w-full">
                  <div className="flex">
                    <h2 className="font-semibold text-[18px] leading-[22px] text-[#0047FF] ">
                      Beginner - Expert
                    </h2>
                  </div>
                  <div className="flex">
                    <h2 className="font-semibold text-[18px] leading-[22px] text-[#0047FF] ">
                      Any age
                    </h2>
                  </div>
                </div>

                <div className="flex pt-[19px] pb-[13px]">
                  <hr className="border-[#1C263F] border-[1px] w-full -w-[1029]" />
                </div>

                <div className="flex flex-col text-black">
                  <div className="flex justify-center">
                    <h2 className="font-semibold text-[16px] leading-[19px]">
                      I've been dancing from age 10 so I've had my share of
                      falling flat on my face. Let me help you not fall on
                      yours!
                    </h2>
                  </div>

                  <div className="flex pt-[20px]">
                    <ul className="list-disc pl-[19px] font-semibold text-[16px] leading-[19px]">
                      <li>Technique</li>
                      <li>Choreography</li>
                      <li>Popping and locking</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-start items-start pb-[52px]">
            <h2 className="font-bold text-[32px] leading-[39px] text-white">
              Private Lessons
            </h2>
          </div>

          <div className="flex md:flex-row flex-col gap-y-16 justify-between justify-center items-center pb-[52px]">
            <div className="xs:w-[381px] w-[281px] h-[390px] bg-white rounded-[30px] relative flex justify-center">
              <div className="bg-tertiary xs:w-[303px] w-[203px] h-[37px] absolute rounded-[30px] items-center justify-center flex -top-[15px]">
                <h2 className="font-normal text-[24px] leading-[29px] text-white flex items-center justify-center text-center">
                  Singing
                </h2>
              </div>

              <div className="flex flex-col xs:w-[303px] w-[203px]">
                <div className="flex flex-row justify-between pt-[37px] w-full">
                  <div className="flex">
                    <h2 className="font-semibold text-[18px] leading-[22px] text-[#0047FF] ">
                      Beginner - Expert
                    </h2>
                  </div>
                  <div className="flex">
                    <h2 className="font-semibold text-[18px] leading-[22px] text-[#0047FF] ">
                      Any age
                    </h2>
                  </div>
                </div>

                <div className="flex pt-[19px] pb-[13px]">
                  <hr className="border-[#1C263F] border-[1px] w-full -w-[1029]" />
                </div>

                <div className="flex flex-col text-black">
                  <div className="flex justify-center">
                    <h2 className="font-semibold text-[16px] leading-[19px]">
                      Want help becoming the next Beyoncé?
                    </h2>
                  </div>

                  <div className="flex pt-[40px]">
                    <ul className="list-disc pl-[19px] font-semibold text-[16px] leading-[19px]">
                      <li>General singing</li>
                      <li>Singing techniques</li>
                      <li>Acting through song</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="xs:w-[381px] w-[281px] h-[390px] bg-white rounded-[30px] relative flex justify-center">
              <div className="bg-tertiary xs:w-[303px] w-[203px] h-[37px] absolute rounded-[30px] items-center justify-center flex -top-[15px]">
                <h2 className="font-normal text-[24px] leading-[29px] text-white flex items-center justify-center text-center">
                  Public Speaking
                </h2>
              </div>

              <div className="flex flex-col xs:w-[303px] w-[203px]">
                <div className="flex flex-row justify-between pt-[37px] w-full">
                  <div className="flex">
                    <h2 className="font-semibold text-[18px] leading-[22px] text-[#0047FF] ">
                      Beginner - Intermediate
                    </h2>
                  </div>
                  <div className="flex">
                    <h2 className="font-semibold text-[18px] leading-[22px] text-[#0047FF] ">
                      Any age
                    </h2>
                  </div>
                </div>

                <div className="flex pt-[19px] pb-[13px]">
                  <hr className="border-[#1C263F] border-[1px] w-full -w-[1029]" />
                </div>

                <div className="flex flex-col text-black">
                  <div className="flex justify-center">
                    <h2 className="font-semibold text-[16px] leading-[19px]">
                      Whether for business events or family birthdays, speaking
                      in public is scary, but it doesn't have to be.
                    </h2>
                  </div>

                  <div className="flex pt-[40px]">
                    <ul className="list-disc pl-[19px] font-semibold text-[16px] leading-[19px]">
                      <li>General confidence</li>
                      <li>Speech writing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex ss:flex-row flex-col gap-y-10 sm:justify-start justify-center">
        <div className="flex ss:justify-start justify-center items-center ss:pr-[37px] pr-0">
          <div className="flex items-center justify-center bg-tertiary relative w-[115px] h-[115px] rounded-full">
            <Image
              src="./cost.svg"
              alt="cost"
              width={64}
              height={64}
              className="absolute"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center ss:items-start items-center">
          <h2 className="font-semibold text-[36px] leading-[44px] text-white pb-[17px]">
            Cost
          </h2>
          <p className="font-light text-[16px] leading-[20px] text-white ss:text-left text-center">
            Sessions will generally be £15 per hour, but the length of the
            session is completely up to you.
          </p>
        </div>
      </div>

      <div className="flex flex-1 ss:flex-row flex-col gap-y-10 justify-start pt-[72px]">
        <div className="flex ss:justify-start justify-center items-center ss:pr-[37px] pr-0">
          <div className="flex items-center justify-center bg-tertiary relative w-[115px] h-[115px] rounded-full">
            <Image
              src="./ping.svg"
              alt="location"
              width={48}
              height={48}
              className="absolute"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center ss:items-start items-center min-w-[200px] max-w-[796px]">
          <h2 className="font-semibold text-[36px] leading-[44px] text-white pb-[17px]">
            Location
          </h2>
          <p className="font-light text-[16px] leading-[20px] text-white ss:text-left text-center">
            Private session will usually be held on zoom, but depending on your
            location and the session's needs I can come to you.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Lessons
