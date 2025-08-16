import Link from "next/link";

interface PageTemplateProps {
  title: string;
  previousPage?: { href: string; title: string };
  nextPage?: { href: string; title: string };
  children: React.ReactNode;
}

export default function PageTemplate({ title, previousPage, nextPage, children }: PageTemplateProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {previousPage && (
        <div className="mb-8">
          <Link 
            href={previousPage.href}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to {previousPage.title}
          </Link>
        </div>
      )}

      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">{title}</h1>
        
        {children}

        <div className="flex justify-between items-center pt-8 border-t">
          {previousPage ? (
            <Link 
              href={previousPage.href}
              className="text-gray-600 hover:text-gray-800 font-medium"
            >
              ← Previous: {previousPage.title}
            </Link>
          ) : <div></div>}
          
          {nextPage && (
            <Link 
              href={nextPage.href}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Next: {nextPage.title} →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}