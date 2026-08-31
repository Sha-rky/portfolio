"use client";

import React from "react";

/**
 * Legacy hero heading style.
 *
 * Copied (not extracted) from `legacy.tsx`'s `.hero h1` rule — that file is
 * being kept in full for now, so this duplicates rather than removes
 * anything from it. Scoped under `.legacy-heading-specimen` so the VT323
 * import and rule don't leak onto the rest of the Candidate Components page.
 */
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
  .legacy-heading-specimen h1 {
    font-family: 'VT323', monospace;
    font-size: 5rem;
    color: #ff85c2;
    text-shadow: 2px 2px 0px #b388ff, 0 0 20px rgba(255, 133, 194, 0.6);
    margin-bottom: 20px;
    letter-spacing: 3px;
  }
`;

export function LegacyHeading() {
	return (
		<div className="legacy-heading-specimen">
			<style dangerouslySetInnerHTML={{ __html: styles }} />
			<h1>K.T. STUDIO</h1>
		</div>
	);
}

export default LegacyHeading;
