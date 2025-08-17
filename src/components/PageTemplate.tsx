import Link from "next/link";

/**
 * Consistent page layout template for workshop content
 * Features:
 * - Standardized spacing and typography
 * - Previous/Next navigation
 * - Responsive design
 * - Content structure consistency across all workshop pages
 */
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
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
          >
            ← Back to {previousPage.title}
          </Link>
        </div>
      )}

      <div className="prose prose-lg max-w-none dark:prose-invert">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">{title}</h1>
        
        {children}

        <div className="flex justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-700">
          {previousPage ? (
            <Link
              href={previousPage.href}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white font-medium"
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