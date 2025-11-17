
import React, { useState } from 'react';
import { blogPosts } from '../data/blogs';
import type { BlogPost } from '../types';
import { ArrowRightIcon } from '../components/icons/Icons';

const BlogPage: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  if (selectedPost) {
    return (
      <div className="animate-fade-in pt-24 bg-brand-bg">
        <div className="container mx-auto px-6 py-16 max-w-4xl">
          <button onClick={() => setSelectedPost(null)} className="text-brand-accent font-semibold mb-8 flex items-center group">
            <ArrowRightIcon className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1 transform rotate-180" />
            Back to All Articles
          </button>
          <h1 className="text-4xl md:text-5xl font-serif text-brand-primary mb-4">{selectedPost.title}</h1>
          <p className="text-brand-text-muted mb-6">By {selectedPost.author} on {selectedPost.date}</p>
          <img src={selectedPost.imageUrl} alt={selectedPost.title} className="w-full h-auto max-h-[500px] object-cover rounded-sm mb-8" />
          <div className="prose lg:prose-xl max-w-none text-brand-text" dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in pt-24 bg-brand-bg min-h-screen">
      {/* Page Header */}
      <section className="py-16 text-center bg-gray-50">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-primary">Design Journal</h1>
          <p className="text-lg text-brand-text-muted mt-4 max-w-3xl mx-auto">
            Insights, inspiration, and stories from the world of interior design by Artisan Space Studio.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogPosts.map(post => (
              <div key={post.id} className="group">
                <div className="overflow-hidden rounded-sm">
                  <img src={post.imageUrl} alt={post.title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="pt-5">
                  <p className="text-sm text-brand-text-muted mb-2">{post.date}</p>
                  <h2 className="text-2xl font-serif text-brand-primary mb-3 leading-tight group-hover:text-brand-accent transition-colors">{post.title}</h2>
                  {post.preview && <p className="text-brand-text-muted mb-4">{post.preview}</p>}
                  {post.content ? (
                     <button onClick={() => setSelectedPost(post)} className="text-brand-accent font-semibold flex items-center">
                        Read More
                        <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  ) : (
                    <p className="text-brand-text-muted italic">Coming Soon</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
