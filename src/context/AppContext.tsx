import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ConsultationDraft } from '../types';

interface GrowthCalculatorState {
  monthlyBudget: number;
  primaryGoal: 'awareness' | 'pipeline' | 'ecommerce' | 'rebrand';
  industry: string;
}

interface AppContextType {
  savedCaseStudySlugs: string[];
  toggleBookmark: (slug: string) => void;
  isBookmarked: (slug: string) => boolean;
  newsletterSubscribed: boolean;
  subscribeNewsletter: (email: string) => void;
  inquiryDraft: ConsultationDraft;
  updateInquiryDraft: (partial: Partial<ConsultationDraft>) => void;
  clearInquiryDraft: () => void;
  growthCalculator: GrowthCalculatorState;
  setGrowthCalculator: React.Dispatch<React.SetStateAction<GrowthCalculatorState>>;
  searchHistory: string[];
  addSearchQuery: (q: string) => void;
  clearSearchHistory: () => void;
  isAdDismissed: boolean;
  dismissAd: () => void;
  restoreAd: () => void;
}

const STORAGE_KEYS = {
  BOOKMARKS: 'standmaker_saved_case_studies_v1',
  NEWSLETTER: 'standmaker_newsletter_subscribed_v1',
  INQUIRY_DRAFT: 'standmaker_inquiry_draft_v1',
  GROWTH_CALC: 'standmaker_growth_calculator_v1',
  SEARCH_HISTORY: 'standmaker_search_history_v1',
  AD_DISMISSED: 'standmaker_ad_dismissed_v1',
};

const initialInquiry: ConsultationDraft = {
  name: '',
  email: '',
  company: '',
  phone: '',
  services: ['brands'],
  budget: '$15k - $30k / month',
  timeline: 'Immediate (Next 30 Days)',
  projectBrief: '',
};

const defaultCalculator: GrowthCalculatorState = {
  monthlyBudget: 25000,
  primaryGoal: 'pipeline',
  industry: 'B2B & Enterprise Technology',
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // 1. Saved Bookmarks
  const [savedCaseStudySlugs, setSavedCaseStudySlugs] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
      return stored ? JSON.parse(stored) : ['nordusk-lighting-brand-transformation'];
    } catch {
      return ['nordusk-lighting-brand-transformation'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(savedCaseStudySlugs));
    } catch {
      // storage unavailable
    }
  }, [savedCaseStudySlugs]);

  const toggleBookmark = (slug: string) => {
    setSavedCaseStudySlugs((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };

  const isBookmarked = (slug: string) => savedCaseStudySlugs.includes(slug);

  // 2. Newsletter Subscription
  const [newsletterSubscribed, setNewsletterSubscribed] = useState<boolean>(() => {
    try {
      return localStorage.getItem(STORAGE_KEYS.NEWSLETTER) === 'true';
    } catch {
      return false;
    }
  });

  const subscribeNewsletter = (email: string) => {
    try {
      localStorage.setItem(STORAGE_KEYS.NEWSLETTER, 'true');
      localStorage.setItem('standmaker_subscriber_email', email);
    } catch {
      // ignore
    }
    setNewsletterSubscribed(true);
  };

  // 3. Inquiry Draft
  const [inquiryDraft, setInquiryDraft] = useState<ConsultationDraft>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.INQUIRY_DRAFT);
      return stored ? JSON.parse(stored) : initialInquiry;
    } catch {
      return initialInquiry;
    }
  });

  const updateInquiryDraft = (partial: Partial<ConsultationDraft>) => {
    setInquiryDraft((prev) => {
      const updated = { ...prev, ...partial };
      try {
        localStorage.setItem(STORAGE_KEYS.INQUIRY_DRAFT, JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const clearInquiryDraft = () => {
    setInquiryDraft(initialInquiry);
    try {
      localStorage.removeItem(STORAGE_KEYS.INQUIRY_DRAFT);
    } catch {
      // ignore
    }
  };

  // 4. Growth Calculator State
  const [growthCalculator, setGrowthCalculator] = useState<GrowthCalculatorState>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.GROWTH_CALC);
      return stored ? JSON.parse(stored) : defaultCalculator;
    } catch {
      return defaultCalculator;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.GROWTH_CALC, JSON.stringify(growthCalculator));
    } catch {
      // ignore
    }
  }, [growthCalculator]);

  // 5. Search History
  const [searchHistory, setSearchHistory] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.SEARCH_HISTORY);
      return stored ? JSON.parse(stored) : ['D2C Luxury', 'B2B Positioning', 'Full-Funnel'];
    } catch {
      return ['D2C Luxury', 'B2B Positioning', 'Full-Funnel'];
    }
  });

  const addSearchQuery = (q: string) => {
    const trimmed = q.trim();
    if (!trimmed) return;
    setSearchHistory((prev) => {
      const filtered = prev.filter((item) => item.toLowerCase() !== trimmed.toLowerCase());
      const next = [trimmed, ...filtered].slice(0, 6);
      try {
        localStorage.setItem(STORAGE_KEYS.SEARCH_HISTORY, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const clearSearchHistory = () => {
    setSearchHistory([]);
    try {
      localStorage.removeItem(STORAGE_KEYS.SEARCH_HISTORY);
    } catch {
      // ignore
    }
  };

  // 6. Ad Slot Dismissal State
  const [isAdDismissed, setIsAdDismissed] = useState<boolean>(() => {
    try {
      return localStorage.getItem(STORAGE_KEYS.AD_DISMISSED) === 'true';
    } catch {
      return false;
    }
  });

  const dismissAd = () => {
    setIsAdDismissed(true);
    try {
      localStorage.setItem(STORAGE_KEYS.AD_DISMISSED, 'true');
    } catch {
      // ignore
    }
  };

  const restoreAd = () => {
    setIsAdDismissed(false);
    try {
      localStorage.removeItem(STORAGE_KEYS.AD_DISMISSED);
    } catch {
      // ignore
    }
  };

  return (
    <AppContext.Provider
      value={{
        savedCaseStudySlugs,
        toggleBookmark,
        isBookmarked,
        newsletterSubscribed,
        subscribeNewsletter,
        inquiryDraft,
        updateInquiryDraft,
        clearInquiryDraft,
        growthCalculator,
        setGrowthCalculator,
        searchHistory,
        addSearchQuery,
        clearSearchHistory,
        isAdDismissed,
        dismissAd,
        restoreAd,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
