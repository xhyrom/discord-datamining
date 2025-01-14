"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["91852"],
  {
    276022: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return b;
        },
      }),
        t(653041);
      var i = t(200651),
        o = t(192379),
        c = t(442837),
        a = t(481060),
        r = t(139387),
        l = t(230711),
        u = t(213459),
        d = t(434404),
        s = t(795594),
        p = t(430824),
        f = t(496675),
        _ = t(981631),
        v = t(388032);
      function b(e) {
        var n;
        let {
            user: b,
            application: m,
            guildId: I,
            context: g,
            onItemClick: h,
          } = e,
          x =
            null !== (n = null == m ? void 0 : m.id) && void 0 !== n
              ? n
              : null == b
                ? void 0
                : b.id,
          C = p.Z.getGuild(I),
          T = (0, c.e7)([f.Z], () =>
            null != C ? f.Z.can(_.Plq.MANAGE_GUILD, C) : null,
          ),
          A = (0, u.LD)(I, !0),
          j = (0, u.PL)(!0, !0),
          { isUserApp: P, isGuildApp: Z } = o.useMemo(() => {
            var e, n, t, i;
            if (null == x) return { isGuildApp: !1, isUserApp: !1 };
            let o = Object.values(
                null !==
                  (t =
                    null === (e = A.result) || void 0 === e
                      ? void 0
                      : e.sections) && void 0 !== t
                  ? t
                  : {},
              ),
              c = Object.values(
                null !==
                  (i =
                    null === (n = j.result) || void 0 === n
                      ? void 0
                      : n.sections) && void 0 !== i
                  ? i
                  : {},
              );
            return {
              isGuildApp: o.some((e) => {
                var n;
                return (
                  (null === (n = e.descriptor.application) || void 0 === n
                    ? void 0
                    : n.id) === x
                );
              }),
              isUserApp: c.some((e) => {
                var n;
                return (
                  (null === (n = e.descriptor.application) || void 0 === n
                    ? void 0
                    : n.id) === x
                );
              }),
            };
          }, [A, j, x]);
        o.useEffect(() => {
          t(360606);
        }, []);
        let O = o.useCallback(() => {
            if ((null == C ? void 0 : C.id) != null)
              d.Z.open(C.id, _.pNK.INTEGRATIONS),
                r.Z.setSection(_.b4C.APPLICATION, x),
                null == h || h();
          }, [x, null == C ? void 0 : C.id, h]),
          S = o.useCallback(() => {
            l.Z.open(_.oAB.AUTHORIZED_APPS);
            let e = "";
            null != m ? (e = m.name) : null != b && (e = b.username),
              "" !== e && s.J.setState({ searchQuery: e }),
              null == h || h();
          }, [m, h, b]);
        if (g === _.IlC.POPOUT) return null;
        let k = [];
        return (
          Z &&
            T &&
            k.push(
              (0, i.jsx)(
                a.MenuItem,
                {
                  id: "manage-server-integration",
                  label: v.intl.string(v.t.IuSJT0),
                  action: O,
                },
                "manage-server-integration",
              ),
            ),
          P &&
            k.push(
              (0, i.jsx)(
                a.MenuItem,
                {
                  id: "manage-authorized-app",
                  label: v.intl.string(v.t.V8ruv7),
                  action: S,
                },
                "manage-authorized-app",
              ),
            ),
          k
        );
      }
    },
    463096: function (e, n, t) {
      e.exports = {
        spacing: "spacing_ddcc45",
        spacingTop: "spacingTop_ddcc45",
        message: "message_ddcc45",
      };
    },
    986371: function (e, n, t) {
      e.exports = {
        actionContainer: "actionContainer_cec7a5",
        actionIconContainer: "actionIconContainer_cec7a5",
        actionIcon: "actionIcon_cec7a5",
        actionTextContainer: "actionTextContainer_cec7a5",
        actionTextHeader: "actionTextHeader_cec7a5",
        actionTextHelper: "actionTextHelper_cec7a5",
      };
    },
    953568: function (e, n, t) {
      e.exports = {
        wrapper: "wrapper_a24e84",
        button: "button_a24e84",
        focused: "focused_a24e84",
        icon: "icon_a24e84",
      };
    },
    500054: function (e, n, t) {
      e.exports = { interactionInfoMenuItem: "interactionInfoMenuItem_df26f0" };
    },
    694638: function (e, n, t) {
      e.exports = {
        modal: "modal_b551cf",
        heading: "heading_b551cf",
        divider: "divider_b551cf",
        body: "body_b551cf",
        header: "header_b551cf",
        select: "select_b551cf",
        footer: "footer_b551cf",
        anomaly: "anomaly_b551cf",
        error: "error_b551cf",
        spinner: "spinner_b551cf",
        buttonCopy: "buttonCopy_b551cf",
        tooltip: "tooltip_b551cf",
      };
    },
    918491: function (e, n, t) {
      e.exports = {
        select: "select_c44f3d",
        innerSelect: "innerSelect_c44f3d",
        emojiWrapper: "emojiWrapper_c44f3d",
        emoji: "emoji_c44f3d",
        chevron: "chevron_c44f3d",
      };
    },
    148562: function (e, n, t) {
      e.exports = { list: "list_fd4745" };
    },
  },
]);
//# sourceMappingURL=0ec920f7d2721741b8fb.js.map
