"use client";

import { useEffect, useRef, type RefObject } from "react";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Traps Tab/Shift+Tab focus within `containerRef` while `active` is true, focuses the
 * first focusable element on activation, and restores focus to whatever was focused
 * before the dialog opened once it closes/unmounts. Shared by every modal/dialog
 * (CommandPalette, OnboardingModal, Mermaid fullscreen) so the behavior stays
 * consistent and isn't duplicated three times (see AGENTS.md Rule 18).
 */
export function useFocusTrap(containerRef: RefObject<HTMLElement | null>, active: boolean) {
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!active) return;
    previouslyFocused.current = document.activeElement as HTMLElement | null;

    const container = containerRef.current;
    const getFocusables = () =>
      container
        ? Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
            (el) => el.offsetParent !== null
          )
        : [];

    // Defer one tick so the dialog has painted before we try to focus into it.
    const focusId = setTimeout(() => {
      const focusables = getFocusables();
      focusables[0]?.focus();
    }, 10);

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key !== "Tab") return;
      const focusables = getFocusables();
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      clearTimeout(focusId);
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused.current?.focus?.();
    };
  }, [active, containerRef]);
}
