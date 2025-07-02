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

  class navigateToEditEmployeeChain extends ActionChain {

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {string} params.employeeId
     */
    async run(context, { employeeId }) {
      const { $page, $flow, $application, $constants, $variables } = context;
      const navigateToPageEmployeesEditEmployeeResult = await Actions.navigateToPage(context, {
        page: 'employees-edit-employee',
        params: {
          employeeId: employeeId,
        },
      });
    }
  }

  return navigateToEditEmployeeChain;
});
