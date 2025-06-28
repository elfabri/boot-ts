/* Overriding Interfaces Properties
 * You can override properties from the base interface,
 * but the new type must be compatible with the original.
 * From an original interface with a property that is a union of types,
 * the new interface can override said property, narrowing it's type.
 *
 * You can't change to an incompatible type.
 *
 * Assignment
 * The company uses a shared SystemEvent interface
 * to represent internal system events.
 * We need more specific system event interfaces
 * for handling errors and outages as well as a way
 * to filter for the high-priority events.
 *
 * Create and export an interface called ErrorEvent
 * that extends SystemEvent and overrides the following properties:
 *  * type: "error"
 *  * payload: string
 *
 * add a new property: code with a number type
 *
 * Create and export an interface called OutageEvent
 * that extends SystemEvent and overrides the following properties:
 *  * type: "outage"
 *  * severity: "critical" (all outages are considered critical)
 *
 * add a new property: durationSeconds with a number type
 *
 * Complete the function getHighPriorityEvents function.
 * Fix its signature, it expects an array of SystemEvent objects.
 * Fix its implementation, it should return a new array
 * of SystemEvent objects, filtering for events
 * with a severity of "high" or "critical" (maintain order).
 */

export interface SystemEvent {
  type: string;
  timestamp: number;
  payload: string | object;
  affectedService: string;
  severity: "low" | "medium" | "high" | "critical";
}

// don't touch above this line

export interface ErrorEvent extends SystemEvent {
  type: "error";
  payload: string;
  code: number;
}

export interface OutageEvent extends SystemEvent {
  type: "outage";
  severity: "critical";
  durationSeconds: number;
}

export function getHighPriorityEvents(events: SystemEvent[]) {
  let highPriorityEvents: SystemEvent[] = [];

  for (const e of events) {
    switch (e.severity) {
      case "critical":
      case "high":
        highPriorityEvents.push(e);
    }
  }

  return highPriorityEvents;
}
