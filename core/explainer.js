/**
 * Explanation Engine (core/explainer.js)
 * Provides reasoning traces for rule evaluations
 */

const { Trace } = require('./trace');
const { Rule } = require('../rules/rule');

class Explainer {
  /**
   * @param {Rule} rule The evaluated rule
   * @param {boolean} matched Whether the rule matched or not
   */
  async explain(rule, matched) {
    const trace = new Trace();
    await this.buildTrace(rule, matched, trace);
    return trace.toString();
  }

  /**
   * Builds the reasoning trace for the given rule and match status
   *
   * @param {Rule} rule The evaluated rule
   * @param {boolean} matched Whether the rule matched or not
   * @param {Trace} trace The trace to build upon
   */
  async buildTrace(rule, matched, trace) {
    // Add the rule's description as the starting point of the trace
    trace.add(`Rule: ${rule.description}`);

    if (matched) {
      // If the rule matched, add a "Matched" statement and continue building the trace
      trace.add('Matched');
      await this.buildMatchingTrace(rule, trace);
    } else {
      // If the rule did not match, add a "Did Not Match" statement and stop building the trace
      trace.add('Did Not Match');
    }
  }

  /**
   * Builds the reasoning trace for a matched rule
   *
   * @param {Rule} rule The evaluated rule
   * @param {Trace} trace The trace to build upon
   */
  async buildMatchingTrace(rule, trace) {
    // Add the conditions that led to the match
    await this.buildConditionsTrace(rule.conditions, trace);

    // Add a statement indicating the rule was matched
    trace.add('Matched due to the following conditions:');
  }

  /**
   * Builds the reasoning trace for a set of conditions
   *
   * @param {Condition[]} conditions The conditions to build upon
   * @param {Trace} trace The trace to build upon
   */
  async buildConditionsTrace(conditions, trace) {
    // Add each condition as a separate statement in the trace
    for (const condition of conditions) {
      await this.buildConditionTrace(condition, trace);
    }
  }

  /**
   * Builds the reasoning trace for a single condition
   *
   * @param {Condition} condition The condition to build upon
   * @param {Trace} trace The trace to build upon
   */
  async buildConditionTrace(condition, trace) {
    // Add the condition's description as a statement in the trace
    trace.add(`Condition: ${condition.description}`);

    // If the condition has sub-conditions, recursively build their traces
    if (condition.subConditions.length > 0) {
      await this.buildConditionsTrace(condition.subConditions, trace);
    }
  }
}

module.exports = Explainer;