import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Mail, ArrowRight } from "lucide-react";
import logo from "@/assets/match-mentor-logo.png";

export const Route = createFileRoute("/blog/$slug")({
  head: () => ({
    meta: [
      { title: "Blog Post — Match Mentor" },
      { name: "description", content: "Read our latest insights and resources for your Match journey." },
    ],
  }),
  component: BlogPost,
});

function BlogPost() {
  const { slug } = Route.useParams();

  // Mock blog data - in a real app, you'd fetch this based on the slug
  const blogPosts: Record<string, any> = {
    "eras-guide": {
      title: "USMLE to ERAS Migration Guide",
      tag: "ERAS Guide",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      author: "Dr. Sarah Johnson",
      date: "March 15, 2026",
      readTime: "8 min read",
      content: `
        <p>Transitioning from Step exams to ERAS can be overwhelming. This comprehensive guide will walk you through every step of the process.</p>
        <h2>Understanding ERAS</h2>
        <p>ERAS (Electronic Residency Application Service) is the system used for residency applications in the United States. It allows you to submit your application to multiple programs simultaneously.</p>
        <h2>Key Components</h2>
        <p>Your ERAS application includes several critical components: personal statement, CV, medical school transcript, and letters of recommendation.</p>
        <h2>Timeline</h2>
        <p>Start preparing your ERAS application early. The submission window typically opens in May for the Match cycle.</p>
      `,
    },
    "swipe-file": {
      title: "Top 200 Personal Statements",
      tag: "Swipe File",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop",
      author: "Dr. Michael Chen",
      date: "March 10, 2026",
      readTime: "12 min read",
      content: `
        <p>Personal statements are a crucial part of your residency application. Here are the top 200 personal statements that matched at top programs.</p>
        <h2>What Makes a Great Personal Statement?</h2>
        <p>A great personal statement tells your unique story, demonstrates your passion for medicine, and shows why you're a perfect fit for the program.</p>
      `,
    },
    "template": {
      title: "Residency CV Examples + Templates",
      tag: "Template",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop",
      author: "Dr. Emily Rodriguez",
      date: "March 5, 2026",
      readTime: "10 min read",
      content: `
        <p>Your CV is often the first thing program directors see. Make it count with these proven templates and examples.</p>
        <h2>CV Structure</h2>
        <p>A well-structured CV should include: education, clinical experience, research, publications, and leadership activities.</p>
      `,
    },
    "linkedin": {
      title: "Physician Personal Branding Playbook",
      tag: "LinkedIn",
      image: "https://images.unsplash.com/photo-1611944213489-0b0b2c2b7b3f?w=800&h=600&fit=crop",
      author: "Dr. James Wilson",
      date: "February 28, 2026",
      readTime: "15 min read",
      content: `
        <p>Build a strong professional brand on LinkedIn to stand out from the competition and connect with residency programs.</p>
        <h2>Optimizing Your Profile</h2>
        <p>Your LinkedIn profile should complement your ERAS application and showcase your professional journey.</p>
      `,
    },
    "guide": {
      title: "The Ultimate Guide to Mentor Collaboration",
      tag: "Guide",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop",
      author: "Dr. Lisa Park",
      date: "February 20, 2026",
      readTime: "20 min read",
      content: `
        <p>Learn how to make the most of every mentorship call and build lasting professional relationships.</p>
        <h2>Before the Call</h2>
        <p>Prepare by researching your mentor, setting clear goals, and preparing thoughtful questions.</p>
      `,
    },
  };

  const post = blogPosts[slug] || {
    title: "Blog Post Not Found",
    tag: "Unknown",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
    author: "Match Mentor Team",
    date: "N/A",
    readTime: "N/A",
    content: "<p>Sorry, this blog post doesn't exist.</p>",
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] p-3 md:p-5">
      <div className="mx-auto max-w-7xl rounded-2xl bg-[#fdfcf8] px-6 md:px-14 py-6 md:py-8 overflow-hidden">
        {/* Nav */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center gap-2">
            <img src={logo} alt="Match Mentor" className="h-10 w-auto" />
            <span className="text-xl font-extrabold tracking-tight">Match Mentor</span>
          </div>
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-neutral-800 hover:text-[#5a4af4] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </motion.nav>

        {/* Blog Post Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-white rounded-3xl overflow-hidden shadow-lg"
          >
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8 md:p-12">
              <span className="inline-block text-xs font-semibold tracking-wide text-[#5a4af4] border border-[#5a4af4]/40 rounded-full px-3 py-1 mb-4">
                {post.tag}
              </span>

              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05] text-neutral-900 mb-6">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 mb-8 pb-8 border-b border-neutral-200">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

            <div 
              className="prose prose-lg max-w-none text-neutral-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Subscribe Card at end of blog post */}
            <div className="mt-12 p-8 bg-gradient-to-br from-[#5a4af4] to-[#4a3ad4] rounded-3xl text-white">
              <h3 className="text-2xl font-bold mb-3">Enjoyed This Article?</h3>
              <p className="text-white/90 mb-6">
                Subscribe to get more residency tips, guides, and resources delivered straight to your inbox.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3 rounded-full bg-white/15 border border-white/20 text-white placeholder-white/70 text-sm focus:outline-none focus:ring-2 focus:ring-white/40"
                />
                <button
                  type="submit"
                  className="rounded-full bg-white text-[#5a4af4] px-6 py-3 text-sm font-bold hover:bg-neutral-100 transition-colors whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </form>
            </div>

            <div className="mt-12 pt-8 border-t border-neutral-200">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full bg-[#5a4af4] text-white px-6 py-3 text-sm font-medium hover:bg-[#4a3ad4] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to All Posts
              </Link>
            </div>
            </div>
          </motion.article>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Related Posts */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl p-6 shadow-lg"
            >
              <h3 className="text-lg font-bold text-neutral-900 mb-4">Related Posts</h3>
              <div className="space-y-4">
                {Object.entries(blogPosts)
                  .filter(([key]) => key !== slug)
                  .slice(0, 3)
                  .map(([key, relatedPost]: [string, any]) => (
                    <Link
                      key={key}
                      to={`/blog/${key}` as any}
                      className="block group"
                    >
                      <div className="flex gap-3">
                        <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                          <img
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-semibold text-neutral-900 group-hover:text-[#5a4af4] transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h4>
                          <p className="text-xs text-neutral-500 mt-1">{relatedPost.readTime}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </motion.div>

            {/* Subscribe Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-[#5a4af4] to-[#4a3ad4] rounded-3xl p-6 text-white shadow-lg"
            >
              <h3 className="text-xl font-bold mb-3">Subscribe to Our Newsletter</h3>
              <p className="text-sm text-white/90 mb-4">
                Get the latest residency tips and resources delivered to your inbox every week.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-2.5 rounded-full bg-white/15 border border-white/20 text-white placeholder-white/70 text-sm focus:outline-none focus:ring-2 focus:ring-white/40"
                />
                <button
                  type="submit"
                  className="w-full rounded-full bg-white text-[#5a4af4] px-5 py-2.5 text-sm font-bold hover:bg-neutral-100 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}