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
            className="object-cover object-center scale-105 transform hover:scale-100 transition-transform duration-[2s]"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-primary-900/80 z-10" />
        </div>
        <div className="container-width relative z-20 text-center text-white px-6 py-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight leading-tight drop-shadow-lg max-w-4xl mx-auto">
            Join SoundSphere Today!<br />
            Turn Your Music Expertise into Income.
          </h1>
          <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 md:p-10 shadow-xl border border-white/20 max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl mb-10 leading-relaxed drop-shadow-lg font-normal">
              We&apos;re launching soon, and we are offering exclusive early access to list your masterclasses on SoundSphere. For the first 2 months, you keep 100% of the revenue—we won&apos;t take any commissions!
            </p>
            <Link 
              href="/signup" 
              className="btn-primary text-lg min-h-[44px] min-w-[200px] px-8 py-4 group inline-flex items-center justify-center hover:scale-105 transition-all duration-300 font-medium"
              role="button"
              aria-label="Sign up for early access"
            >
              Sign Up Now
              <ArrowRightIcon className="w-5 h-5 ml-3 inline-block group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="section-padding bg-primary-800 py-20">
        <div className="container-width px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 tracking-tight text-white">
              Your Knowledge, Your Income
            </h2>
            <p className="text-xl md:text-2xl text-primary-100 font-medium mb-6 tracking-normal">
              Share your expertise and earn from your skills.
            </p>
            <div className="space-y-6 text-lg text-primary-200 leading-relaxed font-normal">
              <p className="max-w-3xl mx-auto">
                SoundSphere empowers music producers to transform their expertise into income through high-quality online masterclasses. Whether you&apos;re an established artist or a rising star, our platform provides the tools and audience you need to succeed.
              </p>
              <p className="max-w-3xl mx-auto">
                Our unique marketplace supports both individual course purchases and subscription-based access, helping you reach more students and maximize your earning potential. From mixing and production to mastering, build your brand while teaching the next generation.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
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
                className="text-center p-8 rounded-2xl bg-primary-700/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-center mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-white tracking-normal">{feature.title}</h3>
                <p className="text-lg text-primary-200 leading-relaxed font-normal">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join SoundSphere */}
      <section className="section-padding bg-primary-900 py-20">
        <div className="container-width px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 tracking-tight text-white">
            Start Earning in Three Simple Steps
          </h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                step: '01',
                title: 'Create Your Profile',
                description: 'Sign up for free, set up your course and offer your classes to our global audience.',
              },
              {
                step: '02',
                title: 'Publish & Sell',
                description: 'Upload your content and reach your target audience',
              },
              {
                step: '03',
                title: 'Earn & Grow',
                description: 'Start earning and expand your business',
              },
            ].map((step, index) => (
              <div key={index} className="relative p-8 bg-primary-800/50 rounded-2xl shadow-lg">
                <span className="absolute -top-6 left-8 text-7xl font-bold text-accent-pink/20">
                  {step.step}
                </span>
                <h3 className="text-xl font-semibold mb-4 relative text-white tracking-normal">{step.title}</h3>
                <p className="text-lg text-primary-200 leading-relaxed relative font-normal">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-700 py-20">
        <div className="container-width px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-white">
              Launching Soon!
            </h2>
            <p className="text-xl mb-4 leading-relaxed text-primary-200 font-normal">
              We&apos;re gearing up for our big launch. Join us today and on launch day,
            </p>
            <p className="text-2xl font-semibold mb-10 leading-relaxed text-white tracking-normal">
              kick off with a 60 day free trial – and you&apos;ll keep 100% of your commissions.
            </p>
            <Link 
              href="/signup" 
              className="btn-primary text-lg min-h-[44px] min-w-[200px] px-8 py-4 group inline-flex items-center justify-center hover:scale-105 transition-all duration-300"
              role="button"
              aria-label="Join the waitlist"
            >
              Join the Waitlist
              <ArrowRightIcon className="w-5 h-5 ml-3 inline-block group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-900 text-primary-200 py-12 border-t border-primary-700">
        <div className="container-width px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-24 max-w-4xl mx-auto">
            <div>
              <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
              <nav>
                <ul className="space-y-4">
                  <li>
                    <Link 
                      href="/about" 
                      className="hover:text-white transition-colors py-2 px-4 -ml-4 inline-flex items-center min-w-[44px] min-h-[44px] rounded hover:bg-white/5 w-full"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/contact" 
                      className="hover:text-white transition-colors py-2 px-4 -ml-4 inline-flex items-center min-w-[44px] min-h-[44px] rounded hover:bg-white/5 w-full"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/faq" 
                      className="hover:text-white transition-colors py-2 px-4 -ml-4 inline-flex items-center min-w-[44px] min-h-[44px] rounded hover:bg-white/5 w-full"
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-6">Legal</h3>
              <nav>
                <ul className="space-y-4">
                  <li>
                    <Link 
                      href="/terms" 
                      className="hover:text-white transition-colors py-2 px-4 -ml-4 inline-flex items-center min-w-[44px] min-h-[44px] rounded hover:bg-white/5 w-full"
                    >
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/privacy" 
                      className="hover:text-white transition-colors py-2 px-4 -ml-4 inline-flex items-center min-w-[44px] min-h-[44px] rounded hover:bg-white/5 w-full"
                    >
                      Privacy
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-primary-800 text-center">
            <p className="text-sm text-primary-300">&copy; {new Date().getFullYear()} SoundSphere. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
