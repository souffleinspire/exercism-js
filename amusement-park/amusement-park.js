/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
export function createVisitor(name, age, ticketId) {
  return {
    name: name,
    age: age,
    ticketId: ticketId
  };
}

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {Visitor} the visitor without a ticket
 */
export function revokeTicket(visitor) {
  visitor.ticketId = null;
  return visitor;
}

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function ticketStatus(tickets, ticketId) {
  for (const string in tickets) {
    if (string === ticketId) {
      if (tickets[string] === null) {
        return 'not sold';
      } else {
        return 'sold to' + ' ' + tickets[string];
      }
    }
  }
  return 'unknown ticket id';
}

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function simpleTicketStatus(tickets, ticketId) {
  let result;
  for (const string in tickets) {
    if (string === ticketId) {
      if (tickets[string] === null) {
        result =  'invalid ticket !!!';
      } else {
        result = tickets[string];
      }
      break;
    } else {
      result =  'invalid ticket !!!';
    }
  }
  return result;
}

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */
export function gtcVersion(visitor) {
  if (visitor.gtc !== undefined) {
    return visitor.gtc.version ?? undefined;
  } 
}
