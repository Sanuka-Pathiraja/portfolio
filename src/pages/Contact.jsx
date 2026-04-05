import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, MapPin, Send } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { PROFILE } from '../data/info'
import SEO from '../components/seo/SEO'
import { trackEvent } from '../utils/analytics'

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  })
}

export default function Contact() {
  const formRef = useRef(null)
  const [isSending, setIsSending] = useState(false)
  const [submitState, setSubmitState] = useState({ type: '', message: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formRef.current || isSending) return

    const formData = new FormData(e.currentTarget)
    const fullName = String(formData.get('user_name') || '').trim()
    const email = String(formData.get('user_email') || '').trim()
    const message = String(formData.get('message') || '').trim()

    if (!fullName || !email || !message) {
      setSubmitState({ type: 'error', message: 'Please complete all fields before sending.' })
      return
    }

    const SERVICE_ID = 'service_y53oie6'
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_prx500c'
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

    if (!TEMPLATE_ID || PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      setSubmitState({
        type: 'error',
        message: 'Configure EmailJS template and public key in VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY.'
      })
      return
    }

    trackEvent('contact_intent_submit', { source: 'contact_form' })

    try {
      setIsSending(true)
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      setSubmitState({ type: 'success', message: "Message sent. I'll get back to you soon." })
      e.currentTarget.reset()
    } catch (error) {
      setSubmitState({ type: 'error', message: 'Failed to send message. Please try again later.' })
      trackEvent('contact_submit_error', {
        source: 'contact_form',
        message: error instanceof Error ? error.message : 'emailjs_error'
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <motion.div initial="hidden" animate="show" exit={{ opacity: 0 }}>
      <SEO
        title="Contact"
        description="Start a conversation about internship opportunities, projects, and engineering collaboration."
        path="/contact"
      />

      <section className="section-max pt-8 sm:pt-12 md:pt-20 pb-16 sm:pb-24 md:pb-40">

        <motion.div variants={fade} custom={0} className="text-center mb-10 sm:mb-14 md:mb-20">
          <p className="font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-white/15 mb-5">// Get In Touch</p>
          <h1 className="font-display text-[clamp(2.25rem,10vw,4.5rem)] font-bold text-white tracking-[-0.03em] leading-none mb-6">
            Let's Start a <span className="text-gradient">Conversation</span>
          </h1>
          <p className="text-[15px] sm:text-[17px] text-white/30 max-w-xl mx-auto font-light leading-relaxed">
            I'm currently seeking internships and am always open to discussing full-stack projects, DevOps, or system architectures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6 items-stretch">

          {/* ── Contact Form ── */}
          <motion.div variants={fade} custom={1} className="lg:col-span-3 glass-content p-6 sm:p-8 md:p-10 relative overflow-hidden group flex flex-col h-full">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <form ref={formRef} className="space-y-6 flex-1 flex flex-col" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="contact-full-name" className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-white/15 ml-1">Full Name</label>
                <input
                  id="contact-full-name"
                  type="text"
                  name="user_name"
                  placeholder="John Doe"
                  className="w-full px-6 py-4 rounded-[16px] glass-sm bg-transparent text-white/80 text-[15px] font-light border-white/[0.04] focus:border-white/[0.12] focus:shadow-[0_0_0_3px_rgba(255,255,255,0.03)] outline-none transition-all duration-300 placeholder:text-white/10"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-email" className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-white/15 ml-1">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  name="user_email"
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 rounded-[16px] glass-sm bg-transparent text-white/80 text-[15px] font-light border-white/[0.04] focus:border-white/[0.12] focus:shadow-[0_0_0_3px_rgba(255,255,255,0.03)] outline-none transition-all duration-300 placeholder:text-white/10"
                  required
                />
              </div>
              <div className="space-y-2 flex-1 flex flex-col min-h-[160px]">
                <label htmlFor="contact-message" className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-white/15 ml-1">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Hi, I'd like to talk about..."
                  className="flex-1 w-full px-6 py-4 rounded-[20px] glass-sm bg-transparent text-white/80 text-[15px] font-light border-white/[0.04] focus:border-white/[0.12] focus:shadow-[0_0_0_3px_rgba(255,255,255,0.03)] outline-none transition-all duration-300 resize-none placeholder:text-white/10"
                  required
                ></textarea>
              </div>
              {submitState.message ? (
                <p aria-live="polite" className={`text-[13px] ${submitState.type === 'success' ? 'text-emerald-300' : 'text-rose-300'}`}>
                  {submitState.message}
                </p>
              ) : null}
              <div className="pt-2 mt-auto">
                <button type="submit" disabled={isSending} className="w-full py-4 rounded-full bg-white text-black text-[15px] font-semibold hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-500 flex items-center justify-center gap-2.5 group disabled:opacity-70 disabled:cursor-not-allowed">
                  {isSending ? 'Sending...' : 'Send Message'} <Send size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>

          {/* ── Right Column ── */}
          <div className="lg:col-span-2 flex flex-col gap-6 h-full">

            {/* Direct Information */}
            <motion.div variants={fade} custom={2} className="glass-content p-6 sm:p-8 md:p-10 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h2 className="font-display text-lg font-bold text-white/60 mb-8 tracking-tight">Direct Info</h2>
              <div className="space-y-6">
                {[
                  { icon: Mail, label: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}` },
                  { icon: Phone, label: 'Phone', value: PROFILE.phone, href: `tel:${PROFILE.phone}` },
                  { icon: MapPin, label: 'Location', value: 'Colombo, Sri Lanka' },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4 group/item">
                    <div className="w-9 h-9 rounded-[12px] glass-sm flex items-center justify-center text-white/15 group-hover/item:text-[var(--accent)]/50 border-white/[0.04] transition-all flex-shrink-0">
                      <Icon size={15} />
                    </div>
                    <div className="min-w-0">
                      <p className="font-mono text-[9px] font-bold tracking-[0.2em] uppercase text-white/15">{label}</p>
                      {href ? (
                        <a href={href} className="text-[14px] text-white/50 hover:text-white/80 no-underline transition-colors font-medium break-all block" onClick={() => trackEvent('contact_detail_click', { label })}>{value}</a>
                      ) : (
                        <span className="text-[14px] text-white/50 font-medium break-words block">{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Professional Links */}
            <motion.div variants={fade} custom={3} className="flex-1 flex flex-col glass-content p-6 sm:p-8 md:p-10 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h2 className="font-display text-lg font-bold text-white/60 mb-6 tracking-tight">Links</h2>
              <div className="flex flex-col gap-3 flex-1">
                <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2.5 py-3 rounded-[14px] glass-sm text-white/30 hover:text-white/60 text-[13px] font-medium no-underline border-white/[0.04] hover:border-white/[0.08] transition-all duration-300" onClick={() => trackEvent('social_click', { placement: 'contact', network: 'GitHub' })}>
                  <Github size={15} /> GitHub
                </a>
                <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2.5 py-3 rounded-[14px] glass-sm text-white/30 hover:text-white/60 text-[13px] font-medium no-underline border-white/[0.04] hover:border-white/[0.08] transition-all duration-300" onClick={() => trackEvent('social_click', { placement: 'contact', network: 'LinkedIn' })}>
                  <Linkedin size={15} /> LinkedIn
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </motion.div>
  )
}
