import React from "react";
import { FaHome } from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi";

// import { Link } from "react-router-dom"; // If you're using a router

// Decorative right-side blueprint SVG (unchanged)
const BlueprintDecor = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none select-none absolute inset-y-0 right-0 w-1/2 max-w-[720px] opacity-[0.07] dark:opacity-10"
  >
    <svg viewBox="0 0 800 600" className="h-full w-full text-gray-900 dark:text-gray-100" fill="none">
      <defs>
        <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M24 0H0V24" stroke="currentColor" strokeWidth="0.75" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
      <g stroke="currentColor" strokeOpacity="0.9" strokeWidth="1">
        <path d="M120 480L380 260l220 120" />
        <rect x="420" y="140" width="160" height="110" rx="4" />
        <circle cx="520" cy="420" r="60" />
        <path d="M210 120h140v80H210z" />
      </g>
      <g fill="currentColor">
        <circle cx="600" cy="220" r="2" />
        <circle cx="460" cy="360" r="2" />
        <circle cx="300" cy="200" r="2" />
      </g>
    </svg>
  </div>
);

function PageHeader({
  title,
  crumbs,
  decor,
  className = "",
  showDivider = false,
}) {
  const defaultCrumbs = [
    { label: "Home", href: "/", icon: <FaHome className="text-primary-600 dark:text-primary-400" /> },
    { label: title },
  ];

  const items = crumbs && crumbs.length ? crumbs : defaultCrumbs;

  // Router agnostic link handler
  const Linkish = ({ to, className, children }) =>
    to ? (
      <a href={to} className={className}>
        {children}
      </a>
    ) : (
      <span className={className}>{children}</span>
    );

  return (
    <header
      className={[
        "relative isolate",
        "bg-gray-50 dark:bg-neutral-900",
        "py-24",
        showDivider ? "border-b border-gray-200 dark:border-neutral-800" : "",
        className,
      ].join(" ")}
    >
      {/* Decorative background on the right */}
      {decor !== undefined ? decor : <BlueprintDecor />}

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h1>

        {/* Breadcrumbs */}
        <nav className="mt-12" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-sm">
            {items.map((c, idx) => {
              const isLast = idx === items.length - 1;

              const base = "inline-flex items-center gap-2 transition-colors font-medium text-sm sm:text-base";
              const linkCls =
                base +
                " text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white";
              const currentCls =
                base + " text-gray-800 dark:text-gray-200 font-medium";

              return (
                <li key={idx} className="flex items-center">
                  <Linkish to={c.href && !isLast ? c.href : null} className={isLast ? currentCls : linkCls}>
                    {c.icon && <span className="text-lg text-orange-500">{c.icon}</span>}
                    <span>{c.label}</span>
                  </Linkish>

                  {!isLast && (
                    <HiChevronRight className="self-end mx-1 text-gray-400 dark:text-gray-500" size={24}/>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </header>
  );
}

export default PageHeader;