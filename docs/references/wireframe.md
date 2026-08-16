# YT Sorter — Text Wireframe (exact copy)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  NAV                                                                         │
│  YT Sorter        Features   How it works   Documentation   Community   GitHub   [⌥ View on GitHub] │
├─────────────────────────────────────────────────────────────────────────────┤
│  HERO (bg: purple)                                                          │
│                                                                              │
│   Your saved                          ┌──────────────────┐    AFTER        │
│   videos,                             │ BEFORE            │    Focused playlists │
│   sorted.                             │ Watch Later    ≡▷ │                 │
│                                        │ 42 mixed videos   │  ┌──────────────────────┐ │
│   An open-source, locally hosted      │────────────────────│  │ ▷ AI & Tech   [New playlist] │ │
│   tool that uses Gemini AI to         │ ▶ Python tutorial  │  │   12 videos           │ │
│   categorize saved videos and         │ ▶ Tokyo travel vlog│  └──────────────────────┘ │
│   merge them into playlists you       │ ▶ Easy pasta recipe│  ┌──────────────────────┐ │
│   already have.                       │────────────────────│  │ ▷ Travel      [New playlist] │ │
│                                        │ Different topics   │  │   8 videos            │ │
│   Turn one overloaded YouTube         │ in one long list    │  └──────────────────────┘ │
│   playlist into focused micro-        └──────────────────────┘  ┌──────────────────────┐ │
│   niche playlists.                          (→)  YT SORTER      │ ▷ Cooking     [⚡ merged] │ │
│                                                                   │   6 videos            │ │
│   [⌥ View on GitHub]  [See how it works →]                       └──────────────────────┘ │
│                                              [ Same videos. Now organized by topic. ]       │
│                                                                              │
╰─────────────────────────  ᨓᨓᨓᨓᨓᨓᨓᨓᨓᨓᨓᨓᨓᨓᨓᨓᨓᨓᨓᨓᨓᨓᨓᨓᨓᨓᨓᨓᨓᨓᨓᨓᨓᨓᨓᨓᨓ  scalloped divider ────────────╯
├─────────────────────────────────────────────────────────────────────────────┤
│  FEATURES SECTION (bg: mint)                                                │
│                                                                              │
│              Everything you need to sort your                              │
│                       YouTube life.                                        │
│                                                                              │
│  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐│
│  │ [icon]         │  │ [icon]         │  │ [icon]         │  │ [icon]         ││
│  │ AI-powered     │  │ Local          │  │ Batch          │  │ Rollback &     ││
│  │ categorization │  │ processing     │  │ execution      │  │ history        ││
│  │                │  │                │  │                │  │                ││
│  │ Gemini reads   │  │ Run the        │  │ Save the full  │  │ Remove         ││
│  │ video titles   │  │ FastAPI and    │  │ AI analysis as │  │ interrupted    ││
│  │ and groups     │  │ React app on   │  │ a draft and    │  │ playlists,     ││
│  │ related saves  │  │ your own       │  │ create a       │  │ preserve       ││
│  │ into focused   │  │ machine with   │  │ manageable     │  │ pending work,  ││
│  │ topic          │  │ credentials    │  │ group of       │  │ and review or  ││
│  │ playlists.     │  │ you control.   │  │ playlists      │  │ undo earlier   ││
│  │                │  │                │  │ each day.      │  │ runs.          ││
│  │                │  │                │  │                │  │                ││
│  │ Custom prompts │  │ Local-first    │  │ Quota-aware    │  │ History and    ││
│  │ Learn more →   │  │ setup          │  │ workflow       │  │ undo           ││
│  │                │  │ Learn more →   │  │ Learn more →   │  │ Learn more →   ││
│  └───────────────┘  └───────────────┘  └───────────────┘  └───────────────┘│
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐ │
│  │  (bg: peach panel)                                                     │ │
│  │                                                                          │ │
│  │  How it works                        ┌─────────────────────────────┐  │ │
│  │  From playlist                        │ STEP 1                    🔑│  │ │
│  │  chaos to                             │ Paste your playlist ID      │  │ │
│  │  organized bliss in                   │ Add the playlist you want   │  │ │
│  │  3 steps.                             │ to organize and your        │  │ │
│  │                                        │ Gemini API key.              │  │ │
│  │                                        └─────────────────────────────┘  │ │
│  │                                                    ↓                   │ │
│  │  Setup guide →                        ┌─────────────────────────────┐  │ │
│  │                                        │ STEP 2                       │  │ │
│  │                                        │ Gemini builds a category    │  │ │
│  │                                        │ draft          [Python][Sleep]│ │
│  │                                        │ Video titles are grouped    │  │ │
│  │                                        │ using micro-niche mode or   │  │ │
│  │                                        │ your custom category rules. │  │ │
│  │                                        └─────────────────────────────┘  │ │
│  │                                                    ↓                   │ │
│  │                                        ┌─────────────────────────────┐  │ │
│  │                                        │ STEP 3                       │  │ │
│  │                                        │ Review, create, and resume   │ │
│  │                                        │                 [✓ Create batch]│ │
│  │                                        │ Choose today's playlists.    │ │
│  │                                        │ The remaining categories     │ │
│  │                                        │ stay in the draft for the    │ │
│  │                                        │ next batch.                  │ │
│  │                                        └─────────────────────────────┘  │ │
│  └──────────────────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────────────────────┤
│  CLOSING SPLIT SECTION                                                      │
│                                                                              │
│  ┌────────────────────────────────┐   ┌─────────────────────────────────┐ │
│  │ (bg: purple)                    │   │ (bg: white)                      │ │
│  │                                  │   │ What you'll need                 │ │
│  │ Built to run locally.           │   │                                   │ │
│  │ Open for everyone.              │   │ 💻  Python 3.10+ and Node.js 18+ │ │
│  │                                  │   │ 🔑  Gemini API key               │ │
│  │ YT Sorter runs on your own      │   │ </>  YouTube Data API v3 OAuth    │ │
│  │ machine and uses credentials    │   │      credentials                  │ │
│  │ you configure locally. The      │   │ ─────────────────────────────    │ │
│  │ source will be open for         │   │ Setup instructions cover the     │ │
│  │ inspection, modification, and   │   │ FastAPI backend, React/Vite      │ │
│  │ contribution.                   │   │ frontend, Gemini key, and        │ │
│  │                                  │   │ Google OAuth desktop             │ │
│  │ [⌥ Repository link coming soon] │   │ credentials.                     │ │
│  └────────────────────────────────┘   └─────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────────────────────┤
│  FOOTER (bg: cream)                                                         │
│                                                                              │
│  YT Sorter                          Features  How it works  Setup   © 2026 YT Sorter │
│  An open-source librarian for                                              │
│  saved YouTube videos.                                                     │
└─────────────────────────────────────────────────────────────────────────────┘
```
