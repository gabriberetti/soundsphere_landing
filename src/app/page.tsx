import { ArrowRightIcon, GlobeAltIcon, CurrencyDollarIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen antialiased bg-primary-900">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/studio-bg.jpeg"
            alt="Music studio background"
            fill
            className="object-cover scale-105 transform hover:scale-100 transition-transform duration-[2s]"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-primary-900/70 z-10" />
        </div>
        <div className="container-width relative z-20 text-center text-white px-6 py-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight drop-shadow-lg">
          Turn Your Music Expertise into Income. <br></br>
          Join SoundSphere Today!
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-normal drop-shadow-lg">
            We&apos;re launching soon, and we are offering exclusive early access to list your masterclasses on SoundSphere. For the first 2 months, you keep 100% of the revenue—we won&apos;t take any commissions!
          </p>
          <Link href="/signup" className="btn-primary text-lg min-h-[44px] min-w-[200px] px-8 group inline-flex items-center">
            Sign Up Now
            <ArrowRightIcon className="w-5 h-5 ml-3 inline-block group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="section-padding bg-primary-800">
        <div className="container-width px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
              Your Knowledge, Your Income
            </h2>
            <p className="text-2xl text-primary-100 font-medium mb-4">
              Share your expertise and earn from your skills.
            </p>
            <div className="space-y-6 text-lg text-primary-200 leading-relaxed">
              <p>
                SoundSphere empowers music producers to transform their expertise into income through high-quality online masterclasses. Whether you&apos;re an established artist or a rising star, our platform provides the tools and audience you need to succeed.
              </p>
              <p>
                Our unique marketplace supports both individual course purchases and subscription-based access, helping you reach more students and maximize your earning potential. From mixing and production to mastering, build your brand while teaching the next generation.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <GlobeAltIcon className="w-12 h-12 text-accent-pink" />,
                title: 'Global Reach',
                description: 'Connect with music producers and students worldwide',
              },
              {
                icon: <CurrencyDollarIcon className="w-12 h-12 text-accent-pink" />,
                title: '95% Revenue',
                description: 'Keep more of what you earn with our industry-leading rates',
              },
              {
                icon: <UserGroupIcon className="w-12 h-12 text-accent-pink" />,
                title: 'For Music Professionals',
                description: 'Designed specifically for music producers, mixing engineers, and mastering experts.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-xl bg-primary-700/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-primary-200 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join SoundSphere */}
      <section className="section-padding bg-primary-900">
        <div className="container-width px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 tracking-tight text-white">
            Start Earning in Three Simple Steps
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Create Your Profile',
                description: 'Set up your professional profile and showcase your expertise',
              },
              {
                step: '02',
                title: 'Publish & Sell',
                description: 'Upload your content and reach your target audience',
              },
              {
                step: '03',
                title: 'Earn & Grow',
                description: 'Start earning and expand your teaching business',
              },
            ].map((step, index) => (
              <div key={index} className="relative p-8 bg-primary-800/50 rounded-xl shadow-lg">
                <span className="absolute -top-6 left-8 text-7xl font-bold text-accent-pink/20">
                  {step.step}
                </span>
                <h3 className="text-xl font-semibold mb-3 relative text-white">{step.title}</h3>
                <p className="text-primary-200 leading-normal relative">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-700">
        <div className="container-width px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
              Launching Soon!
            </h2>
            <p className="text-xl mb-2 leading-normal text-primary-200">
              We&apos;re gearing up for our big launch. Join us today and on launch day,
            </p>
            <p className="text-2xl font-semibold mb-8 leading-normal text-white">
              kick off with a 60 day free trial – and you&apos;ll keep 100% of your commissions.
            </p>
            <Link href="/signup" className="btn-primary text-lg min-h-[44px] min-w-[200px] px-8 group inline-flex items-center">
              Join the Waitlist
              <ArrowRightIcon className="w-5 h-5 ml-3 inline-block group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-900 text-primary-200 py-12 border-t border-primary-700">
        <div className="container-width px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link href="/about" className="hover:text-white transition-colors py-2 inline-block min-w-[44px]">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors py-2 inline-block min-w-[44px]">Contact</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors py-2 inline-block min-w-[44px]">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-xl font-semibold mb-4">Legal</h3>
              <ul className="space-y-3">
                <li><Link href="/terms" className="hover:text-white transition-colors py-2 inline-block min-w-[44px]">Terms</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors py-2 inline-block min-w-[44px]">Privacy</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-primary-800 text-center">
            <p className="text-primary-300">&copy; {new Date().getFullYear()} SoundSphere. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
