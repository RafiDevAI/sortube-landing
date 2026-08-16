# YT Sorter Landing Page

## Product

YT Sorter is an open-source, locally hosted web app created on 2026-08-02. It uses Google Gemini (`gemini-flash-latest`) to analyze video titles and channel metadata, group saves into focused playlists, and safely merge into categories that already exist on the user’s YouTube channel.

## Audience and positioning

- Intended for YouTube power users, learners, and researchers with large, disorganized playlists.
- Position as a privacy-friendly automated librarian for a user’s YouTube channel.
- Primary landing-page CTA: **View on GitHub**. The repository URL has not yet been provided, so the CTA needs a placeholder.

## Capabilities

- AI categorization based on video titles and channel metadata.
- Optional micro-niche categories, such as “Sleep Optimization” or “Diet & Nutrition” rather than “Health.”
- Custom instructions that constrain categories, such as Python, React, and DevOps.
- Real-time duplicate prevention: existing categories are marked with `⚡ merge` and receive new videos instead of creating duplicate playlists.
- Live video lists with expandable/collapsible views inside the app.
- Granular video deletion from the Original playlist, New playlist, or Both.
- Live detection for playlists manually deleted on YouTube.
- Draft-based batch execution for YouTube’s daily playlist-creation limits.
- Intelligent rollback that removes empty interrupted playlists.
- Safe undo that deletes newly generated playlists while preserving pre-existing merged playlists.
- Automatic OAuth re-authentication when tokens expire or are revoked.

## Technical and setup context

- Python 3.10+ backend using FastAPI/Uvicorn and Google API libraries.
- React/Vite frontend requiring Node.js 18+ and npm.
- Requires a Gemini API key and a Google Cloud project with YouTube Data API v3 enabled.
- Uses YouTube OAuth desktop-app credentials stored locally as `client_secret.json`.
- Supports Windows startup through `start.bat`; manual startup uses Uvicorn and serves locally.

## Landing-page status

- Built and verified in site source; ready to publish but not yet reported live.
- Selected direction: bold lavender, mint, and peach waves with oversized type and reference-matched core sections.
- Navigation is integrated into the continuous lavender hero; there should be no separate top strip or sidebar-like region.
- Additional local/open-source and setup content is retained below the reference-matched sections.