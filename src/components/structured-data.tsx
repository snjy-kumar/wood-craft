export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ganesh Thakur Woodcraft",
    "image": "https://ganeshthakur-woodcraft.com/images/image.avif",
    "@id": "https://ganeshthakur-woodcraft.com",
    "url": "https://ganeshthakur-woodcraft.com",
    "telephone": "+91 8969892003",
    "email": "ganeshthakur@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Pune",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 18.5204,
      "longitude": 73.8567
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "priceRange": "₹₹₹",
    "description": "Master carpenter with over 20 years of experience in custom furniture, renovations, and fine woodworking in Pune, Maharashtra. Led by Ganesh Thakur with a team of 5 skilled craftsmen.",
    "founder": {
      "@type": "Person",
      "name": "Ganesh Thakur",
      "jobTitle": "Master Carpenter",
      "worksFor": {
        "@type": "LocalBusiness",
        "name": "Ganesh Thakur Woodcraft"
      }
    },
    "employee": {
      "@type": "Person",
      "name": "Ganesh Thakur"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Priya Sharma"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Ganesh ji transformed our living room with a beautiful custom entertainment unit. The attention to detail and quality of work is exceptional."
      }
    ],
    "serviceArea": {
      "@type": "City",
      "name": "Pune"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Woodworking Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Furniture",
            "description": "Handcrafted furniture designed specifically for your space and needs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Home Renovations",
            "description": "Transform your living spaces with custom woodwork and cabinetry"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Outdoor Structures",
            "description": "Extend your living space with beautiful outdoor woodwork"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
