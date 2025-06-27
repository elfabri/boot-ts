/* The Never Type
 * Represents values that can't occur.
 *
 * Assignment
 * Support.ai's chatbot supports slash commands.
 * When a developer adds a new slash command
 * (the slashCommands union), we want TypeScript
 * to ensure that the handleSlashCommand accounts for it.
 *
 * Run the code as-is, and notice the compile-time errors.
 *
 * Fix the error by ensuring the handleSlashCommand
 * handles all types of slash commands.
 */

type slashCommands = "greet" | "info" | "help";

const greetMessage = "Hello! How can I assist you?";
const infoMessage = "Sure! Here’s a list of things I can do...";
const helpMessage = "I can help you with that!";

// don't touch above this lines

export function handleSlashCommand(command: slashCommands) {
  switch (command) {
    case "greet":
      return greetMessage;
    case "info":
      return infoMessage;
    case "help":
      return helpMessage;
    default:
      const err: never = command;
      return `Not a command: ${err}`;
  }
}
