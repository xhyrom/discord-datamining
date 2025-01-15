"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["54597"],
  {
    276022: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return m;
        },
      }),
        t(653041);
      var i = t(200651),
        o = t(192379),
        c = t(442837),
        a = t(481060),
        l = t(139387),
        r = t(230711),
        u = t(213459),
        s = t(434404),
        d = t(795594),
        p = t(430824),
        f = t(496675),
        _ = t(981631),
        b = t(388032);
      function m(e) {
        var n;
        let {
            user: m,
            application: v,
            guildId: I,
            context: C,
            onItemClick: g,
          } = e,
          h =
            null !== (n = null == v ? void 0 : v.id) && void 0 !== n
              ? n
              : null == m
                ? void 0
                : m.id,
          j = p.Z.getGuild(I),
          x = (0, c.e7)([f.Z], () =>
            null != j ? f.Z.can(_.Plq.MANAGE_GUILD, j) : null,
          ),
          T = (0, u.LD)(I, !0),
          A = (0, u.PL)(!0, !0),
          { isUserApp: S, isGuildApp: E } = o.useMemo(() => {
            var e, n, t, i;
            if (null == h) return { isGuildApp: !1, isUserApp: !1 };
            let o = Object.values(
                null !==
                  (t =
                    null === (e = T.result) || void 0 === e
                      ? void 0
                      : e.sections) && void 0 !== t
                  ? t
                  : {},
              ),
              c = Object.values(
                null !==
                  (i =
                    null === (n = A.result) || void 0 === n
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
                    : n.id) === h
                );
              }),
              isUserApp: c.some((e) => {
                var n;
                return (
                  (null === (n = e.descriptor.application) || void 0 === n
                    ? void 0
                    : n.id) === h
                );
              }),
            };
          }, [T, A, h]);
        o.useEffect(() => {
          t(360606);
        }, []);
        let P = o.useCallback(() => {
            if ((null == j ? void 0 : j.id) != null)
              s.Z.open(j.id, _.pNK.INTEGRATIONS),
                l.Z.setSection(_.b4C.APPLICATION, h),
                null == g || g();
          }, [h, null == j ? void 0 : j.id, g]),
          Z = o.useCallback(() => {
            r.Z.open(_.oAB.AUTHORIZED_APPS);
            let e = "";
            null != v ? (e = v.name) : null != m && (e = m.username),
              "" !== e && d.J.setState({ searchQuery: e }),
              null == g || g();
          }, [v, g, m]);
        if (C === _.IlC.POPOUT) return null;
        let O = [];
        return (
          E &&
            x &&
            O.push(
              (0, i.jsx)(
                a.MenuItem,
                {
                  id: "manage-server-integration",
                  label: b.intl.string(b.t.IuSJT0),
                  action: P,
                },
                "manage-server-integration",
              ),
            ),
          S &&
            O.push(
              (0, i.jsx)(
                a.MenuItem,
                {
                  id: "manage-authorized-app",
                  label: b.intl.string(b.t.V8ruv7),
                  action: Z,
                },
                "manage-authorized-app",
              ),
            ),
          O
        );
      }
    },
    1136: function (e, n, t) {
      e.exports = {
        spacing: "spacing_ddcc45",
        spacingTop: "spacingTop_ddcc45",
        message: "message_ddcc45",
      };
    },
    863553: function (e, n, t) {
      e.exports = {
        actionContainer: "actionContainer_cec7a5",
        actionIconContainer: "actionIconContainer_cec7a5",
        actionIcon: "actionIcon_cec7a5",
        actionTextContainer: "actionTextContainer_cec7a5",
        actionTextHeader: "actionTextHeader_cec7a5",
        actionTextHelper: "actionTextHelper_cec7a5",
      };
    },
    908162: function (e, n, t) {
      e.exports = {
        wrapper: "wrapper_a24e84",
        button: "button_a24e84",
        focused: "focused_a24e84",
        icon: "icon_a24e84",
      };
    },
    619858: function (e, n, t) {
      e.exports = { interactionInfoMenuItem: "interactionInfoMenuItem_df26f0" };
    },
    855797: function (e, n, t) {
      e.exports = {
        modal: "modal_b551cf",
        heading: "heading_b551cf",
        divider: "divider_b551cf",
        body: "body_b551cf",
        header: "header_b551cf",
        selectContainer: "selectContainer_b551cf",
        emojiSelect: "emojiSelect_b551cf",
        innerEmojiSelect: "innerEmojiSelect_b551cf",
        emojiContent: "emojiContent_b551cf",
        selectedEmoji: "selectedEmoji_b551cf",
        emojiIcon: "emojiIcon_b551cf",
        chevron: "chevron_b551cf",
        footer: "footer_b551cf",
        anomaly: "anomaly_b551cf",
        error: "error_b551cf",
        spinner: "spinner_b551cf",
        buttonCopy: "buttonCopy_b551cf",
        tooltip: "tooltip_b551cf",
      };
    },
    927516: function (e, n, t) {
      e.exports = { list: "list_fd4745" };
    },
  },
]);
//# sourceMappingURL=ed5e6a0615ecbdb219e8.js.map
