"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["48915"],
  {
    518756: function (e, t, a) {
      a(47120);
      var n = a(470079),
        l = a(442837),
        o = a(357156),
        r = a(984933),
        u = a(430824),
        i = a(496675),
        d = a(981631);
      t.Z = (e, t) => {
        let a = (0, l.e7)([u.Z], () => u.Z.getGuild(e), [e]),
          { canCreateGuildEvent: c } = (0, o.X)(a),
          p = (0, l.e7)([r.ZP], () => r.ZP.getChannels(e)[r.Zb], [e]),
          s = n.useMemo(
            () =>
              null != t
                ? p.filter((e) => {
                    let { channel: a } = e;
                    return a.type === t;
                  })
                : p,
            [p, t],
          );
        return (0, l.e7)(
          [i.Z],
          () => {
            if (i.Z.can(d.Plq.ADMINISTRATOR, a) || c) return !0;
            for (let { channel: e } of s) {
              let { canCreateGuildEvent: t } = (0, o.G)(e);
              if (t) return !0;
            }
            return !1;
          },
          [s, a, c],
        );
      };
    },
    334877: function (e, t, a) {
      a.d(t, {
        l: function () {
          return o;
        },
      });
      var n = a(652874),
        l = a(731965);
      let o = (0, n.Z)((e) => ({
        canCloseModal: !0,
        onUpdateCanCloseModal(t) {
          (0, l.j)(() => e({ canCloseModal: t }));
        },
      }));
    },
    576749: function (e, t, a) {
      var n = a(481060),
        l = a(40851),
        o = a(334877),
        r = a(981631);
      let u = "guild-event-modal";
      t.Z = () => {
        let e =
          (0, l.bp)() === r.IlC.POPOUT
            ? n.POPOUT_MODAL_CONTEXT
            : n.DEFAULT_MODAL_CONTEXT;
        return {
          modalKey: u,
          contextKey: e,
          onCloseRequest: () => {
            o.l.getState().canCloseModal && (0, n.closeModal)(u, e);
          },
        };
      };
    },
    214201: function (e, t, a) {
      e.exports = {};
    },
    745974: function (e, t, a) {
      e.exports = {
        labelWrapper: "labelWrapper_c61a51",
        label: "label_c61a51",
      };
    },
    100210: function (e, t, a) {
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
    507815: function (e, t, a) {
      e.exports = { text: "text_b953a6" };
    },
  },
]);
//# sourceMappingURL=39f8817ff34b1e6be2e5.js.map
