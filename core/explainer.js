/**
 * Explanation Engine (core/explainer.js)
 * Provides reasoning traces for rule evaluations.
 */

const { Trace } = require('./trace');
const { Rule } = require('../rules/rule');

class Explainer {
  /**
   * @param {Rule} rule The evaluated rule.
   * @param {boolean} matched Whether the rule matched or not.
   */
  async explain(rule, matched) {
    const trace = new Trace();
    await this.buildTrace(rule, matched, trace);
    return trace.toString();
  }

  /**
   * Builds a reasoning trace for the given rule and match status.
   *
   * @param {Rule} rule The evaluated rule.
   * @param {boolean} matched Whether the rule matched or not.
   * @param {Trace} trace The trace to build upon.
   */
  async buildTrace(rule, matched, trace) {
    // Add the rule's description as the initial step
    await trace.addStep(`Rule: ${rule.name}`);

    if (matched) {
      // If the rule matched, add steps for each condition
      for (const condition of rule.conditions) {
        await this.buildConditionStep(condition, trace);
      }
    } else {
      // If the rule didn't match, add a step indicating the failure
      await trace.addStep(`Rule did not match: ${rule.name}`);
    }

    // Add a final step summarizing the result
    await trace.addStep(matched ? 'Matched' : 'Did not match');
  }

  /**
   * Builds a step for a given condition.
   *
   * @param {Condition} condition The condition to build a step for.
   * @param {Trace} trace The trace to add the step to.
   */
  async buildConditionStep(condition, trace) {
    await trace.addStep(`Condition: ${condition.name}`);
    if (condition.expression) {
      // If the condition has an expression, add steps for each part
      for (const part of condition.expression.parts) {
        await this.buildExpressionPartStep(part, trace);
      }
    }
  }

  /**
   * Builds a step for a given expression part.
   *
   * @param {ExpressionPart} part The part to build a step for.
   * @param {Trace} trace The trace to add the step to.
   */
  async buildExpressionPartStep(part, trace) {
    await trace.addStep(`Part: ${part.type} - ${part.value}`);
  }
}

module.exports = Explainer;