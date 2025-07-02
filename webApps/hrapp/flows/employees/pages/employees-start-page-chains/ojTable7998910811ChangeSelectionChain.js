define([
  'vb/action/actionChain',
  'vb/action/actions',
  'vb/action/actionUtils',
], (
  ActionChain,
  Actions,
  ActionUtils
) => {
  'use strict';

  class ojTable7998910811ChangeSelectionChain extends ActionChain {

    /**
     * Sets the page variable to the selected item ID.
     * @param {Object} context
     * @param {Object} params
     * @param {string} params.employeeId
     */
    async run(context, { employeeId }) {
      const { $page, $flow, $application, $constants, $variables } = context;
      $page.variables.oj_table_799891081_1SelectedId = employeeId;
    }
  }

  return ojTable7998910811ChangeSelectionChain;
});
