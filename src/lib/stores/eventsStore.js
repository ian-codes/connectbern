import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Initialize events from localStorage or default data
function createEventsStore() {
    let initialEvents = [];
    
    // Load events from localStorage if in browser
    if (browser) {
        const stored = localStorage.getItem('connectbern-events');
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                initialEvents = parsed.map(event => ({
                    ...event,
                    start: new Date(event.start),
                    end: new Date(event.end),
                    createdAt: event.createdAt ? new Date(event.createdAt) : new Date()
                }));
            } catch (e) {
                console.error('Error parsing stored events:', e);
            }
        }
    }

    const { subscribe, set, update } = writable(initialEvents);

    return {
        subscribe,
        set,
        update,
        addEvent: (eventData) => {
            const newEvent = {
                id: Date.now().toString(),
                ...eventData,
                createdAt: new Date(),
                status: 'pending', // pending, approved, rejected
                likes: 0,
                views: 0
            };
            
            update(events => {
                const updated = [...events, newEvent];
                if (browser) {
                    localStorage.setItem('connectbern-events', JSON.stringify(updated));
                }
                return updated;
            });
        },
        updateEvent: (id, updates) => {
            update(events => {
                const updated = events.map(event => 
                    event.id === id ? { ...event, ...updates } : event
                );
                if (browser) {
                    localStorage.setItem('connectbern-events', JSON.stringify(updated));
                }
                return updated;
            });
        },
        deleteEvent: (id) => {
            update(events => {
                const updated = events.filter(event => event.id !== id);
                if (browser) {
                    localStorage.setItem('connectbern-events', JSON.stringify(updated));
                }
                return updated;
            });
        },
        approveEvent: (id) => {
            update(events => {
                const updated = events.map(event => 
                    event.id === id ? { ...event, status: 'approved' } : event
                );
                if (browser) {
                    localStorage.setItem('connectbern-events', JSON.stringify(updated));
                }
                return updated;
            });
        },
        rejectEvent: (id) => {
            update(events => {
                const updated = events.map(event => 
                    event.id === id ? { ...event, status: 'rejected' } : event
                );
                if (browser) {
                    localStorage.setItem('connectbern-events', JSON.stringify(updated));
                }
                return updated;
            });
        },
        incrementViews: (id) => {
            update(events => {
                const updated = events.map(event => 
                    event.id === id ? { ...event, views: (event.views || 0) + 1 } : event
                );
                if (browser) {
                    localStorage.setItem('connectbern-events', JSON.stringify(updated));
                }
                return updated;
            });
        },
        toggleLike: (id) => {
            update(events => {
                const updated = events.map(event => 
                    event.id === id ? { ...event, likes: (event.likes || 0) + 1 } : event
                );
                if (browser) {
                    localStorage.setItem('connectbern-events', JSON.stringify(updated));
                }
                return updated;
            });
        }
    };
}

export const eventsStore = createEventsStore();

// Store for managing approval workflow
export const needsApproval = writable(true); // Set to false for free-for-all mode
