"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["90723"],
  {
    518756: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      }),
        n(47120);
      var a = n(442837),
        l = n(357156),
        o = n(984933),
        r = n(430824),
        u = n(496675),
        i = n(981631);
      function c(e, t) {
        return (0, a.e7)(
          [r.Z, o.ZP, u.Z],
          () => {
            let n = r.Z.getGuild(e);
            if (
              u.Z.can(i.Plq.ADMINISTRATOR, n) ||
              u.Z.can(i.Plq.CREATE_EVENTS, n)
            )
              return !0;
            for (let { channel: n } of o.ZP.getChannels(e)[o.Zb])
              if (null == t || n.type === t) {
                let [e] = (0, l.Ob)(n);
                if (u.Z.can(e, n)) return !0;
              }
            return !1;
          },
          [e, t],
        );
      }
    },
    334877: function (e, t, n) {
      n.d(t, {
        l: function () {
          return o;
        },
      });
      var a = n(905837),
        l = n(731965);
      let o = (0, a.Ue)((e) => ({
        canCloseModal: !0,
        onUpdateCanCloseModal(t) {
          (0, l.j)(() => e({ canCloseModal: t }));
        },
      }));
    },
    576749: function (e, t, n) {
      var a = n(481060),
        l = n(40851),
        o = n(334877),
        r = n(981631);
      let u = "guild-event-modal";
      t.Z = () => {
        let e =
          (0, l.bp)() === r.IlC.POPOUT
            ? a.POPOUT_MODAL_CONTEXT
            : a.DEFAULT_MODAL_CONTEXT;
        return {
          modalKey: u,
          contextKey: e,
          onCloseRequest: () => {
            o.l.getState().canCloseModal && (0, a.closeModal)(u, e);
          },
        };
      };
    },
    759198: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var a = n(200651);
      n(192379);
      var l = n(120356),
        o = n.n(l),
        r = n(481060),
        u = n(507815);
      function i(e) {
        let { className: t, color: n, ...l } = e;
        return (0, a.jsx)(r.Text, {
          className: o()({ [u.text]: null == n }, t),
          color: n,
          ...l,
        });
      }
    },
    214201: function (e, t, n) {
      e.exports = {};
    },
    745974: function (e, t, n) {
      e.exports = {
        labelWrapper: "labelWrapper_c61a51",
        label: "label_c61a51",
      };
    },
    100210: function (e, t, n) {
      e.exports = {
        rootContainer: "rootContainer_e45ea8",
        headerContainer: "headerContainer_e45ea8",
        text: "text_e45ea8",
        newBadge: "newBadge_e45ea8",
        nitroWheel: "nitroWheel_e45ea8",
        labelContainer: "labelContainer_e45ea8",
        playButton: "playButton_e45ea8",
        mutedLabel: "mutedLabel_e45ea8",
      };
    },
    507815: function (e, t, n) {
      e.exports = { text: "text_b953a6" };
    },
  },
]);
//# sourceMappingURL=119ca17f9440db7bb06d.js.map
