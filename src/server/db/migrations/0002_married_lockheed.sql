ALTER TABLE `users` ADD `emailStreakReminder` integer DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `emailResumeLearning` integer DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `emailWeeklyDigest` integer DEFAULT false NOT NULL;