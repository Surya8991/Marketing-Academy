CREATE TABLE `adminAuditLog` (
	`id` text PRIMARY KEY NOT NULL,
	`actorUserId` text NOT NULL,
	`actorEmail` text NOT NULL,
	`action` text NOT NULL,
	`targetUserId` text NOT NULL,
	`targetEmail` text NOT NULL,
	`at` integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE `users` ADD `suspended` integer DEFAULT false NOT NULL;