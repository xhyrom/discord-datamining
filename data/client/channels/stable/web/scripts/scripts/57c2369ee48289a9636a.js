"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18137"],
  {
    547280: function (e, n, t) {
      t.d(n, {
        b: function () {
          return l;
        },
        o: function () {
          return p;
        },
      });
      var o = t(570140),
        c = t(605236),
        i = t(626135),
        a = t(445507),
        r = t(981631),
        f = t(921944);
      function p(e) {
        let { targetKey: n, dismissibleContent: t, data: p, completed: l } = e;
        null != p.selectedOptionKey &&
          (!(0, c.un)(t) &&
            i.default.track(r.rMx.SIGNUP_COMPLETED, {
              target_key: n,
              selected_option_key: p.selectedOptionKey,
              email: p.email,
              guild_id: p.guildId,
              metadata: (0, a.mU)(p),
              completed: l,
            }),
          (0, c.EW)(t, { dismissAction: f.L.PRIMARY, forceTrack: !0 }),
          o.Z.dispatch({
            type: "COMPLETE_SIGN_UP",
            email: p.email,
            targetKey: n,
            selectedOptionKey: p.selectedOptionKey,
          }));
      }
      function l(e, n) {
        (0, c.EW)(n, { dismissAction: f.L.DISMISS, forceTrack: !0 }),
          o.Z.dispatch({ type: "DISMISS_SIGN_UP", targetKey: e });
      }
    },
    470597: function (e, n, t) {
      e.exports = {
        content: "content_c86bf3",
        contentInner: "contentInner_c86bf3",
        modal: "modal_c86bf3",
        header: "header_c86bf3",
        question: "question_c86bf3",
        options: "options_c86bf3",
        option: "option_c86bf3",
        optionContent: "optionContent_c86bf3",
        selectedOption: "selectedOption_c86bf3",
        iconContainer: "iconContainer_c86bf3",
        icon: "icon_c86bf3",
        emailContainer: "emailContainer_c86bf3",
        emailForm: "emailForm_c86bf3",
        emailInput: "emailInput_c86bf3",
        completedContainer: "completedContainer_c86bf3",
        closeButtonContainer: "closeButtonContainer_c86bf3",
        form: "form_c86bf3",
        formGroup: "formGroup_c86bf3",
        acknowledgements: "acknowledgements_c86bf3",
        acknowledgement: "acknowledgement_c86bf3",
        checkboxWrapper: "checkboxWrapper_c86bf3",
        eyebrow: "eyebrow_c86bf3",
      };
    },
  },
]);
//# sourceMappingURL=57c2369ee48289a9636a.js.map
