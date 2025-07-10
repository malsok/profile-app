import Link from 'next/link'

export default function page() {
  return (
    <div className='w-md mx-auto space-y-8'>
      {/* section 1 */}
      <div className='grid grid-cols-12 mt-12'>
        {/* INFO */}
        <div className='col-span-10'>
          <div className='font-bold text-2xl'>Hi, I'm Ryan Hermawan 👋</div>
          <div className='text-sm font-normal'>
            Software Engineer. I love building things and helping people. Very
            active on Instagram.
          </div>
        </div>

        {/* Profile PICTURE */}
        <div className='col-span-2'>
          <img
            className='rounded-full'
            src='https://portfolio-magicui.vercel.app/me.png'
          />
        </div>
      </div>

      {/* section 2 */}
      <div>
        <div className='font-bold'>About</div>
        <div className='text-xs text-gray-600'>
          At the end of 2022, I quit my job as a software engineer to go
          fulltime into building and scaling my own SaaS businesses. In the
          past,{' '}
          <span className='text-black underline'>
            I pursued a double degree in computer science and business, interned
            at big tech companies in Silicon Valley
          </span>
          , and{' '}
          <span className='text-black underline'>
            competed in over 21 hackathons for fun
          </span>
          . I also had the pleasure of being a part of the first ever in-person
          cohort of buildspace called{' '}
          <span className='text-black underline'>buildspace sf1</span>.
        </div>
      </div>

      {/* Section 3 */}
      <div>
        <div className='font-bold'>Social Media</div>
        <Link
          href='https://www.instagram.com/heryanwan'
          className='text-xs underline text-blue-500'
        >
          Instagram
        </Link>
      </div>
    </div>
  )
}
