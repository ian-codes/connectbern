
// Sample events with dates in August 2025 and beyond
const now = new Date(2025, 7, 8); // August 8, 2025
const today = new Date(now);

export const events = [
    {
        id: 'static-1',
        title: "Speed Friending | Pre-Parade Matching",
        start: new Date(2025, 7, 9, 10, 30), // August 9, 2025, 10:30 AM
        end: new Date(2025, 7, 9, 12, 0),   // 12 PM
        extendedProps: { 
            slug: "speed-friending",
            description: "Meet new people in a fun speed dating style event focused on making friendships!",
            location: "Café Des Amis, Bern",
            category: "social",
            organizerName: "Connect Bern Social"
        }
    },
    {
        id: 'static-2',
        title: "Street Parade 2025",
        start: new Date(2025, 7, 9, 12, 0), // August 9, 2025, 12 PM
        end: new Date(2025, 7, 9, 18, 0),    // 6 PM
        extendedProps: { 
            slug: "street-parade-2025",
            description: "Join the biggest street parade celebration in Bern with music, dancing and great vibes!",
            location: "Bundesplatz, Bern",
            category: "cultural",
            organizerName: "Street Parade Bern"
        }
    },
    {
        id: 'static-3',
        title: "Float & Chill",
        start: new Date(2025, 7, 10, 13, 30),  // August 10, 2025, 1:30 PM
        end: new Date(2025, 7, 10, 17, 0),   // 5 PM
        extendedProps: { 
            slug: "float-and-chill",
            description: "Relax and float down the Aare river with friends. Perfect for hot summer days!",
            location: "Schwellenmätteli, Bern",
            category: "outdoor",
            organizerName: "Aare Floating Club",
            soldOut: true
        }
    },
    {
        id: 'static-4',
        title: "Comedy & Socializing",
        start: new Date(2025, 7, 13, 19, 30), // August 13, 2025, 7:30 PM
        end: new Date(2025, 7, 13, 22, 0),    // 10 PM
        extendedProps: { 
            slug: "comedy-socializing",
            description: "Enjoy stand-up comedy and meet new people in a relaxed social setting.",
            location: "Comedy Club Bern",
            category: "social",
            organizerName: "Bern Comedy Society"
        }
    },
    {
        id: 'static-5',
        title: "Meditation, Ice & Breathwork | 3h Workshop",
        start: new Date(2025, 7, 16, 10, 0), // August 16, 2025, 10 AM
        end: new Date(2025, 7, 16, 13, 0),    // 1 PM
        extendedProps: { 
            slug: "meditation-ice-breathwork",
            description: "Intensive 3-hour workshop combining meditation, ice bath therapy, and breathwork techniques.",
            location: "Wellness Center Bern",
            category: "education",
            organizerName: "Mindful Bern"
        }
    },
    {
        id: 'static-6',
        title: "Mystery Matches - Blindfolded speed dating",
        start: new Date(2025, 7, 20, 19, 30), // August 20, 2025, 7:30 PM
        end: new Date(2025, 7, 20, 22, 30),    // 10:30 PM
        extendedProps: { 
            slug: "mystery-matches-speed-dating",
            description: "Unique speed dating experience where first impressions are based on conversation, not looks!",
            location: "Event Hall Bern",
            category: "social",
            organizerName: "Dating Events Bern"
        }
    },
    {
        id: 'static-5',
        title: "Vegan Food Festival",
        start: new Date(2025, 7, 20, 11, 0),  // August 20, 2025, 11 AM
        end: new Date(2025, 7, 20, 19, 0),    // 7 PM
        extendedProps: { 
            slug: "vegan-food-festival",
            description: "Discover delicious plant-based cuisine from local vendors. Live music, workshops, and family activities.",
            location: "Münsterplatz, Bern",
            category: "food",
            organizerName: "Vegan Bern Association"
        }
    },
    {
        id: 'static-6',
        title: "Art Gallery Opening: Modern Swiss Artists",
        start: new Date(2025, 7, 22, 17, 0),  // August 22, 2025, 5 PM
        end: new Date(2025, 7, 22, 21, 0),    // 9 PM
        extendedProps: { 
            slug: "art-gallery-opening",
            description: "Opening night for our new exhibition featuring contemporary Swiss artists. Wine and appetizers provided.",
            location: "Kunstmuseum Bern",
            category: "art",
            organizerName: "Kunstmuseum Bern",
            website: "https://kunstmuseumbern.ch"
        }
    },
    {
        id: 'static-7',
        title: "Business Networking Breakfast",
        start: new Date(2025, 7, 25, 7, 30),  // August 25, 2025, 7:30 AM
        end: new Date(2025, 7, 25, 9, 30),    // 9:30 AM
        extendedProps: { 
            slug: "business-networking-breakfast",
            description: "Connect with local entrepreneurs and business professionals over breakfast. Great opportunity to expand your network.",
            location: "Hotel Schweizerhof Bern",
            category: "business",
            organizerName: "Bern Business Network",
            contactInfo: "events@bernbusiness.ch"
        }
    },

    {
        id: 'static-9',
        title: "German Language Class",
        start: new Date(2025, 8, 2, 18, 0),   // September 2, 2025, 6 PM
        end: new Date(2025, 8, 2, 20, 0),     // 8 PM
        extendedProps: { 
            slug: "german-language-class",
            description: "Improve your German language skills in a supportive group environment. Beginner to intermediate levels.",
            location: "Autonomous School of Bern",
            category: "education",
            organizerName: "Denk:Mal Language School",
            website: "https://denkmal-bern.ch"
        }
    },
    {
        id: 'static-10',
        title: "Cultural Walking Tour: Old Town Bern",
        start: new Date(2025, 8, 5, 14, 0),   // September 5, 2025, 2 PM
        end: new Date(2025, 8, 5, 16, 30),    // 4:30 PM
        extendedProps: { 
            slug: "cultural-walking-tour",
            description: "Discover the rich history and culture of Bern's UNESCO World Heritage Old Town with our expert guide.",
            location: "Meeting point: Zytglogge",
            category: "cultural",
            organizerName: "Bern Tourism",
            website: "https://bern.com"
        }
    }
];