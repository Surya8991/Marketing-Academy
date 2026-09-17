import { PROGRESS_CHANGED_EVENT, STORAGE_WRITE_FAILED } from "@/lib/events";

/**
 * Persona fields captured on first visit (onboarding) or edited later in
 * Settings. Kept separate from cert-name.ts's `ma_cert_name` (Rule 18: one
 * key, one owner), profile.ts never duplicates the name field, it only
 * references it via getCertName() where a display name is needed.
 */
export type ExperienceLevel = "beginner" | "intermediate" | "advanced";

export type Profile = {
  role: string;
  experienceLevel: ExperienceLevel | "";
  primaryGoal: string;
};

export const PROFILE_KEY = "ma_profile";

const DEFAULT_PROFILE: Profile = { role: "", experienceLevel: "", primaryGoal: "" };

export function getProfile(): Profile {
  try {
    const raw = localStorage.getItem(PROFILE_KEY);
    if (!raw) return DEFAULT_PROFILE;
    return { ...DEFAULT_PROFILE, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_PROFILE;
  }
}

export function saveProfile(profile: Profile): void {
  try {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
    window.dispatchEvent(new CustomEvent(PROGRESS_CHANGED_EVENT));
  } catch {
    window.dispatchEvent(new CustomEvent(STORAGE_WRITE_FAILED, { detail: { key: PROFILE_KEY } }));
  }
}

/** True once the learner has provided at least one persona field. */
export function hasProfile(profile: Profile): boolean {
  return Boolean(profile.role || profile.experienceLevel || profile.primaryGoal);
}
